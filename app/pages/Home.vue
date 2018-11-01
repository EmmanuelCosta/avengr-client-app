<template>
    <page-component title="Mon profile"
        backgroundImage="url('~/assets/images/login-register.jpg')"
        columns="*"
        rows="150,auto,*"
        backgroundSize="cover">

        <!--StackLayout>
            <image width="120" height="120"
                class="image-profile"
                marginTop="10"
                src="~/assets/images/dame_prevoyance_icon2.png"
                horizontalAlignment="center"/>
                            
                <Button
                    class="mdi image-icon" 
                    :text="$icons.camera.image"
                    width="50"
                    height="50"
                    fontSize="40" 
                    marginTop="65"
                    marginLeft="-25"
                    padding="0"
                    color="#34bfc5"
                    backgroundColor="rgba(20, 75, 77,0.25)"
                    borderRadius="50"/>
        
                <Button
                    class="mdi"
                    :text="$icons.account.edit"
                    width="60"
                    height="60"
                    fontSize="40"
                    marginLeft="20"
                    :color="editable ? '#c6ff00':'#f44336'"
                    verticalAlignment="middle"
                    horizontalAlignment="right"
                    @tap="edit"/>

                <Button
                    class="mdi"
                    :text="$icons.content.save"
                    width="60"
                    height="60"
                    fontSize="40"
                    marginLeft="20"
                    color="#34bfc5"
                    verticalAlignment="middle"
                    horizontalAlignment="right"
                    @tap="save"/>

        </StackLayout-->
            
        <ScrollView>

            <stack-layout >

                <stack-layout class="form">

                    <StackLayout class="input-field">
                        <Label text="Civilité" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.civilite"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Nom" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                        <TextField class="input" :editable="editable" v-model="user.firstName"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Prénom" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                        <TextField class="input" :editable="editable" v-model="user.lastName"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Nom de naissance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.birthName"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Date de naissance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.birthDate"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Commune de naissance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextView class="input" :editable="editable" v-model="user.birthCommune"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Département de naissance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.birthDpt"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Pays d'origine" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.nativeCountryName"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Adresse" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.address"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Code postal" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.postalCode"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Ville" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.city"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Téléphone" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.phone"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Email" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.email"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                </stack-layout>
            </stack-layout>

        </ScrollView>
        
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
        user: { },
        editable: false
    };
  },

  mounted() {
      const token = localStorage.getItem("token");
      
      mobileService.getEnsure(token).then((resp) => {
            this.user = resp.content.toJSON();
            localStorage.setItem("user", JSON.stringify(resp.content.toJSON()));
            if(this.user.sex === "HOMME") {
                this.user.civilite = "Monsieur";
            }

            if(this.user.sex === "FEMME") {
                this.user.civilite = "Madame";
            }
            
      }, (error) => {

      });

  },

  methods: {
      edit() {
          this.editable = this.editable ? false : true;
          console.dir("editable => " + this.editable);
      },

      save() {
          alert("Data is update ! \n" + JSON.stringify(this.user) );
      }
  }
};
</script>

<style scoped>
.image-profile {
    /*border-radius: 50;*/
}
.image-icon:highlighted {
    color: #171049;
}

</style>
