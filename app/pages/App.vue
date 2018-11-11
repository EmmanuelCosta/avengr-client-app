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

                <ActivityIndicator
                    col="0"
                    row="0" rowSpan="3"
                    class="color-primary"
                    :busy="loading"
                    width="100"
                    height="100"
                    verticalAlignment="middle"/>
                <Image
                    v-if="!loading"
                    row="0"
                    src="~/assets/images/logo.png"
                    width="150"/>
                <StackLayout
                    v-if="!loading"
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
const connectivityModule = require("tns-core-modules/connectivity");
const dialogsModule = require("tns-core-modules/ui/dialogs");

const auth = new AuthService();

const TOKEN = "Bearer ";

export default {
  data() {
    return {
        loading: false,
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
        
        const connectionType = connectivityModule.getConnectionType();
        switch(connectionType) {
            case connectivityModule.connectionType.none:
                // Denotes no Internet connection.
                console.dir('no-internet');

                dialogsModule.action({
                    title: "Attention !",
                    okButtonText: "ok",
                    cancelable: true,
                    message: "Vous devez être connecté à internet"
                });
                break;
            case connectivityModule.connectionType.wifi:
                // Denotes a WiFi connection.
                this.postLogin();
                break;
            case connectivityModule.connectionType.mobile:
                // Denotes a mobile connection, i.e. cellular network or WAN.
                this.postLogin();
                break;
            default:
                break;
        }
    },

    postLogin() {
        console.log("Connect");
        this.loading = true;
        auth.login(this.login, this.password).then((resp) => {
            console.log("login");
            this.loading = true;
            if(resp.statusCode === 200) {
                console.log("login success");
                var enc_token = resp.headers.Authorization.replace(TOKEN, "");
                var dec_token = JWT.decode(enc_token);
                localStorage.setItem("token", enc_token);
                var payload = JSON.parse(dec_token.payload);
                console.dir(payload);
                localStorage.setItem("user", JSON.stringify({
                    username: payload.userName,
                    email: payload.email
                }));
                
                this.$store.setUser({
                    username: payload.userName,
                    email: payload.email
                });

                this.loading = false;
                this.$navigateTo(this.$pages.contratObseque, {});
            } else {
                console.log("login error");
                console.log("Bad Request !");
                dialogsModule.action({
                    title: "Attention !",
                    okButtonText: "ok",
                    cancelable: true,
                    message: "Login ou mot de passe incorrect"
                });
                this.loading = false;

            }

            
        }, (error) => {
            console.log("Error")
            console.dir(error);
            console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
