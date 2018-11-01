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
                        <TextField v-model="login" class="input" />
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <StackLayout class="input-field">
                        <Label text="Password" class="label font-weight-bold m-b-5" />
                        <TextField v-model="password" class="input" secure="true"/>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <Button
                        width="225"
                        borderRadius="35"
                        textTransform="none"
                        class="btn btn-primary btn-rounded mdi" 
                        :text="'Se connecter ' + icons.send"
                        @tap="connect"/>
                </StackLayout>
                <!--Label
                    row="2"
                    fontSize="17.5"
                    color="blue"
                    verticalAlignment="bottom" 
                    horizontalAlignment="center"
                    text="Mot de passe oublié ?" 
                    @tap="forgetPassword"/-->
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
import AuthService from "./../shared/services/auth.js";

const JWT = require("./../shared/jwt.js");
const localStorage = require( "nativescript-localstorage" );

const auth = new AuthService();

const TOKEN = "Bearer ";

export default {
  data() {
    return {
        loader: false,
        login: "",      
        password: "",
        icons: {
            send: "\uf7ec"
        }
    };
  },

  methods: {
    forgetPassword() {
      console.dir("mot de passe oublié !");
    },

    connect() {
        console.log("Connect");
        auth.login(this.login, this.password).then((resp) => {
            console.log("login");
            if(resp.statusCode === 200) {
                console.log("login success");
                var enc_token = resp.headers.Authorization.replace(TOKEN, "");
                var dec_token = JWT.decode(enc_token);
                localStorage.setItem("token", enc_token);
                var payload = JSON.parse(dec_token.payload);
                localStorage.setItem("user", JSON.stringify({
                    username: payload.userName,
                    email: payload.email
                }));
                this.$navigateTo(this.$pages.home);
            } else {
                console.log("login error");
                console.log("Bad Request !");
            }

            
        }, (error) => {
            console.log("Error")
            console.dir(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
