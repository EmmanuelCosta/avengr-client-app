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
                        <Label text="Nom" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                        <TextField class="input" :editable="editable" v-model="user.firstName"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Prénom" class="label font-weight-bold" fontSize="15" color="#34bfc5"/>
                        <TextField class="input" :editable="editable" v-model="user.secondName"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Date de naissance" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.dateBirth"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Adresse" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextView class="input" :editable="editable" v-model="user.adress"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Pays" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
                        <TextField class="input" :editable="editable" v-model="user.country"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout class="input-field">
                        <Label text="Mail" class="label font-weight-bold" fontSize="15" color="#34bfc5" />
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

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
        user: {
            firstName: "IYONGO",
            secondName: "Fabrice",
            dateBirth: "25 Mars 1900",
            adress: "Kinshasa / Mont-ngafula, boma 45",
            country: "L'Enfer Démocratique Du Congo",
            email: "iyongofabrice@gmail.com"
        },
        editable: false
    };
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
