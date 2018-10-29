<template>
    <Page
        actionBarHidden="true">
        <ScrollView>
            <GridLayout
                backgroundImage="url('~/assets/images/login-register.jpg')"
                columns="*"
                rows="150,auto,*"
                backgroundSize="cover"
                padding="15">
                <Image
                    row="0"
                    src="~/assets/images/logo_damep.png"
                    width="150"/>
                <StackLayout
                    row="1"
                    verticalAlignment="middle"
                    class="form">
                    <StackLayout class="input-field">
                        <Label text="Username or email" class="label font-weight-bold m-b-5" />
                        <TextField class="input" />
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <StackLayout class="input-field">
                        <Label text="Password" class="label font-weight-bold m-b-5" />
                        <TextField class="input" secure="true"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <Button
                        width="225"
                        borderRadius="35"
                        textTransform="none"
                        class="btn btn-primary btn-rounded mdi" 
                        :text="'Se connecter ' + icons.send"
                        @tap="login"/>
                </StackLayout>
                <Label
                    row="2"
                    fontSize="17.5"
                    color="blue"
                    verticalAlignment="bottom" 
                    horizontalAlignment="center"
                    text="Mot de passe oublié ?" 
                    @tap="forgetPassword"/>
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>

  export default {
    data() {
      return {
          icons: {
              send: "\uf7ec"
          }
      }
    },

    methods: {
        forgetPassword () {
            console.dir("mot de passe oublié !");
        },

        login() {
            this.$navigateTo(this.$pages.home);
        }
    }
  }
</script>

<style scoped>
   
</style>
