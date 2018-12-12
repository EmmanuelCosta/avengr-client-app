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
import * as DialogsModule from "ui/dialogs";
import * as ApplicationModule from "application";
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
                        const binaryFile = response.content.toFile().readSync(err => { console.log("Error:" + err); });
                        const fileDownload = FileModule.fromPath(response.content.toFile().path);
                        
                        const file = FileModule.fromPath(PathModule.join(this.$store.getDirectoryRoot().path, item.name + ".pdf"));
                        
                        file.writeSync(fileDownload.readSync(), (error) => {
                            console.log("Error 1");
                            console.dir(error)
                        });

                        this.loading = false;
                        
                        //Open file

                        try {
                            var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
                            intent.setAction(android.content.Intent.ACTION_VIEW);
                            const filePDF = new java.io.File(file.path);
                            intent.setDataAndType(android.net.Uri.fromFile(filePDF), "application/pdf");
                            ApplicationModule.android.currentContext.startActivity(intent);
                            
                        } catch (error) {
                            console.log(error.toString());
                            console.log("Missing PDF application");
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
                this.$store.setDocuments(this.documents);
                this.loading = false;
            }, (error)=>{

            });
      
  },
};
</script>

<style scoped>

</style>
