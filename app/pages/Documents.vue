<template>
    <page-component title="Mes Documents">
        <StackLayout >
            <stack-layout
                padding="10">
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
                        marginRight="15">
                        
                        <CardView 
                            class="cardStyle"
                            margin="5"
                            elevation="10"
                            radius="1"
                            v-for="(item, index) in documents">

                            <stack-layout
                                borderLeftWidth="10"
                                :borderLeftColor="item.color"
                                minHeight="50">
                                
                                <Label :text="item.titre" 
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

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        colors: {
            purple: "#8e24aa",
            yellow: "#ffff00",
            green: "#4caf50"
        },

        documents: [
            {
                titre: "Titre du document",
                color: "#8e24aa"
            },

            {
                titre: "Bulletin de souscription",
                color: "#ffff00"
            },

            {
                titre: "Certification de ressurection",
                color: "#4caf50"
            },

            {
                titre: "Permis de Kuluna",
                color: "#ffff00"
            },

            {
                titre: "Autorisation de suicide",
                color: "#4caf50"
            },

            {
                titre: "Contrat d'escroquerie",
                color: "#8e24aa"
            },

            {
                titre: "Certificat de divorce",
                color: "#ffff00"
            },

            {
                titre: "Attestion de naissance",
                color: "#4caf50"
            },

            {
                titre: "Certificat de mariage",
                color: "#8e24aa"
            }
        ]
    };
  },

  methods: {
     onItemTap(item) {
         console.dir(item)
     }
  }
};
</script>

<style scoped>

</style>
