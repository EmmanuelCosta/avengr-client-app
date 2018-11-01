<template>
    <page-component title="Mon contrat"
        backgroundImage="url('~/assets/images/login-register.jpg')"
         columns="*"
        rows="150,auto,*"
        backgroundSize="cover">
        
        <StackLayout >
            <ScrollView>
                

                    <stack-layout class="form">
                        <StackLayout class="input-field">
                            <Label text="Numéro du contrat" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                            <TextField class="input" :editable="editable" text="500"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Produit" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                            <TextField class="input" :editable="editable" text="Oyo nde"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Date de suscription" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" text="23 octobre 2018 "/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Assistance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextView class="input" :editable="editable" text=" ? "/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Fractionnement" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" text="3"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Capital" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" text="300$"/>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout class="input-field">
                            <Label text="Accompte" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                            <TextField class="input" :editable="editable" text="100$"/>
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
import MobileService from "./../shared/services/mobile.js";

const mobileService = new MobileService();

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        editable: false
    };
  },

  mounted() {
      const token = localStorage.getItem("token");
      mobileService.getContrat(token).then((resp) => {
            console.dir(resp.content.toJSON());
      }, (error) => {

      });
  },

  methods: {
     
  }
};
</script>

<style scoped>

</style>
