<template>
    <page-component title="Mes Documents">
        <GridLayout rows="50,*" columns="*">

            <stack-layout
                padding="10"
                 row="0" col="0">
                <label 
                    text="Veuillez clisquer sur le document à visualiser"
                    color="#34bfc5"
                    textWrap="true"
                    fontSize="20"
                    textAlignment="center"/>
            </stack-layout>

            <ActivityIndicator
                col="0"
                row="0" rowSpan="2"
                class="color-primary"
                :busy="loading"
                width="100"
                height="100"
                verticalAlignment="middle"/>
            
            <stack-layout row="1" col="0" v-if="!loading">
                <scroll-view>
                    <stack-layout padding="5">
                        
                        <CardView 
                            class="cardStyle"
                            margin="5"
                            elevation="10"
                            radius="1"
                            :borderLeftColor="item.color"
                            v-for="(item, index) in documents"
                            @tap="selectItem(item)">

                            <stack-layout
                                borderLeftWidth="10"
                                :borderLeftColor="item.color"
                                minHeight="50">
                                
                                <Label :text="item.name" 
                                    class="font-weight-bold"
                                    fontSize="15" 
                                    color="#37474f"
                                    textWrap="true"
                                    horizontalAlignment="center"
                                    marginTop="15"/>
                            
                            </stack-layout>
                            
                            
                        </CardView>
                    </stack-layout>
                </scroll-view>
            </stack-layout>

        </GridLayout>
    </page-component>
</template>

<script>

import PageComponent from "./../components/PageComponent";
import DocumentService from "./../shared/services/document.js";
import ContratService from "./../shared/services/contrat.js";
import * as DialogsModule from "ui/dialogs"
import { File as FileModule, path as PathModule } from "file-system";


const documentService = new DocumentService();
const contratService = new ContratService();

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        loading: true,
        colors: [
            "#8e24aa", //purple
            "#4caf50", //green
            "#ffff00", //yellow
            "#eeff41", //lime accent-2
            "#ff9800", //orange
        ],

        documents: []
    };
  },

  methods: {
     selectItem(item) {
         console.log("download file !")
         const token = localStorage.getItem("token");
         
        DialogsModule.confirm({
            message: "Voulez vous télécharger ce document \"" + item.name + ".pdf\" ? ",
            title: "Téléchargement des documents",
            cancelable: false,
            okButtonText: "télécharger",
            cancelButtonText: "Annuler"
        }).then((responseDialog) => {
            if(responseDialog) {
                this.loading = true;
                contratService.get(token).then((response) => {
                    var contrat = response.content.toJSON();
                    documentService.downloadFile(token,  contrat.code, item.code).then((response) => {
                        console.dir("HEADERS");
                        console.dir(response.headers);
                        console.dir("BODY or CONTENT");
                        console.dir(response.content);

                        console.dir(response.content.toFile());
                        const content = response.content.toFile().readTextSync();

                        alert(content);

                        console.dir("Save File");
                        const path = PathModule.join(this.$store.getDirectoryRoot().path, item.name + ".pdf");
                        const file = FileModule.fromPath(path);
                        
                        if(FileModule.exists(path)) {
                            file.remove().then(() => {
                                console.dir("Remove File : " + item.name + ".pdf");
                                const file = FileModule.fromPath(path);
                                console.dir("Write File : " + item.name + ".pdf");
                                file.writeTextSync(content, (result) => {
                                    console.dir("Error !");
                                    console.dir(result);
                                });
                                this.loading = false;
                            });
                        } else {
                            console.dir("Write File : " + item.name + ".pdf");
                            file.writeTextSync(content, (result) => {
                                console.dir("Error !");
                                console.dir(result);
                            });
                            this.loading = false;
                        }
                        
                    }, (error) => {
                        this.loading = false;
                        console.dir(error);
                    })
                    
                });
                
            }
            
        });
     },

     getRandomColor() {
         var index = Math.floor(Math.random() * Math.floor(this.colors.length - 1));
         return this.colors[index];
     }
  },

  mounted() {
      const token = localStorage.getItem("token");
      documentService.get(token).then((resp)=>{
          resp.content.toJSON().forEach(element => {
              element.color = this.getRandomColor();
              this.documents.push(element);
          });
          this.loading = false;
      }, (error)=>{

      });
  },
};
</script>

<style scoped>

</style>
