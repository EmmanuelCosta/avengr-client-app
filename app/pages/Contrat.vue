<template>
    <page-component title="Détails contrat"
        backgroundImage="url('~/assets/images/login-register.jpg')"
        columns="*"
        rows="150,auto,*"
        backgroundSize="cover">
        
        <StackLayout >
            <ScrollView>
                

                    <stack-layout class="form">
                        <StackLayout class="input-field">
                            <Label text="Numéro du contrat" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                            <TextField class="input" :editable="editable" v-model="contrat.code"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Solution" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                            <TextField class="input" :editable="editable" v-model="contrat.commercialTechnicalName"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Date de suscription" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" v-model="contrat.registrationDate"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Assistance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextView class="input" :editable="editable" :text="contrat.hasAssistance ? 'Oui':'Non'"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field" v-if="!isUnique">
                            <Label text="Fractionnement" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" :text="contrat.splittingName"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field" v-if="!isUnique">
                            <Label text="Durée de payement" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" :text="contrat.paymentDuration"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Capital" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" v-model="contrat.initialCapital"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Accompte" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" :text="contrat.deposit"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Est un avenant ?" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" :text="contrat.isEndorsement ? 'Oui': 'Non'"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field" v-if="!isUnique">
                            <Label text="Jour de retrait" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" :text="'Le ' + contrat.paymentDay + ' du mois'"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                    </stack-layout>
                

            </ScrollView>
        </StackLayout>
    </page-component>
</template>

<script>
//import DrawerComponent from "./../components/DrawerComponent";
import PageComponent from "./../components/PageComponent";
import ContratService from "./../shared/services/contrat.js";

const contratService = new ContratService();

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        isUnique: false,
        editable: false,
        contrat: {}
    };
  },

  mounted() {
      const token = localStorage.getItem("token");
      contratService.get(token).then((resp) => {
        this.contrat = resp.content.toJSON();
        if(this.contrat.premiumType === "PRIME UNIQUE") {
            this.isUnique = true;
        }
      }, (error) => {

      });
  },

  methods: {
     
  }
};
</script>

<style scoped>

</style>
