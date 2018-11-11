<template>
    <page-component title="Mes Documents">
        <StackLayout >

            <ActivityIndicator
                class="color-primary"
                :busy="loading"
                v-if="loadin"
                width="100"
                height="100"
                verticalAlignment="middle"/>

            <stack-layout
                padding="10"
                 >
                <label 
                    text="Veillez clicquer sur le document à visualiser"
                    color="#34bfc5"
                    textWrap="true"
                    fontSize="20"
                    textAlignment="center"/>
            </stack-layout>
            
            <stack-layout>
                <scroll-view>
                    <stack-layout
                        marginLeft="15"
                        marginRight="15"
                        v-if="! loading">>
                        
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

        </StackLayout>
    </page-component>
</template>

<script>
//import DrawerComponent from "./../components/DrawerComponent";
import PageComponent from "./../components/PageComponent";
import DocumentService from "./../shared/services/document.js";

const documentService = new DocumentService();

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        loading: false,
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
         console.log("tap")
         console.dir(item)
         alert("Download " + JSON.stringify(item));
         var params = {
             
         };
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
