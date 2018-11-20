<template>
    <page-component 
        title="Mon Contrat"
        backgroundImage="url('~/assets/images/login-register.jpg')">
        
        <scroll-view>

            <stack-layout
                marginTop="15"
                height="100%"
                width="100%"
                padding="5">
                
                <CardView
                    class="cardStyle"
                    margin="5"
                    elevation="10"
                    radius="10"
                    padding="10"
                    verticalAlignment="middle">

                    <stack-layout margin="10">
                        <Label textWrap="true" textAlignment="center">
                            <FormattedString>
                                <Span text="J'ai souscrit mon contrat Obsèques auprès de "/>
                                <Span :text="contrat.socialName" class="info" fontDecoration=""/>
                                <Span text=" situé dans la ville de  "/>
                                <Span :text="contrat.city" class="info"/>
                                <Span text=" sur "/>
                                <Span :text="contrat.address" class="info"/>
                            </FormattedString>
                        </Label>

                        <Label textWrap="true" marginTop="30" textAlignment="center">
                            <FormattedString>
                                <Span text="Le numéro de l'assistance à composer en cas de décès à plus de 50Km : "/>
                                <Span text=" + 00 33 (1) 42 99 82 78 " class="info"/>
                                <Span text=" avec le numéro de la convention assistance :  "/>
                                <Span text='"C55U"' class="info"/>
                            </FormattedString>
                        </Label>

                        <label textWrap="true" marginTop="45" textAlignment="center"
                            text='ATTENTION : "Demander un numéro de prise en charge avant toute interventions"'/>
                    </stack-layout>
                    
                </CardView>
                
            </stack-layout>

        </scroll-view>

    </page-component>
</template>

<script>

import PageComponent from "./../components/PageComponent";
import ContratService from "./../shared/services/contrat.js";
const JWT = require("./../shared/jwt.js");

const contratService = new ContratService();

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        loading: false,
        contrat: {},
    };
  },

  mounted() {
      const token = localStorage.getItem("token");
      contratService.get_contact(token).then((resp) => {
        this.contrat = resp.content.toJSON();
        console.dir(this.contrat);
        this.$store.setMessageToShare(`
            J'ai souscrit mon contrat Obsèques auprès de` + this.contrat.socialName + `
            situé dans la ville de  ` + this.contrat.city + ` sur ` + this.contrat.address + `\n
            Le numéro de l'assistance à composer en cas de décès à plus de 50Km :  + 00 33 (1) 42 99 82 78 
            avec le numéro de la convention assistance :  "C55U"\n
            ATTENTION : "Demander un numéro de prise en charge avant toute interventions"
        `);
        this.loading = false;
      }, (error) => {
          console.dir(error);
      });
  },
};
</script>

<style scoped>
label {
    font-size: 20;
}

.info {
    color: #34bfc5;
    font-weight: bold;
    font-style: italic;
}


</style>
