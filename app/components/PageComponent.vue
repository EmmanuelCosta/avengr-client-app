<template>
    <Page
        actionBarHidden="true">

        <RadSideDrawer ref="drawer" showOverNavigation="true">
            
            <drawer-component />

            <StackLayout ~mainContent>
                <GridLayout width="100%" rows="40" columns="auto, *" 
                    paddingLeft="5" paddingRight="5" paddingTop="5"
                    class="bg-color-primary">
                    
                    <Label col="0"
                        :text="$icons.menu"
                        @tap="$refs.drawer.nativeView.showDrawer()"
                        class="mdi menu"/>

                    <GridLayout columns="200,*" col="1">
                        <Label :text="title" col="0"
                            textAlignment="center"
                            class="action-bar-title"/>
                        
                        <StackLayout col="1"
                            orientation="horizontal"
                            color="#ffffff"
                            verticalAlignment="middle"
                            horizontalAlignment="right"
                            marginBottom="15">
                            
                            <Label 
                                class="mdi icon"
                                :text="$icons.logout.default"
                                @tap="logout()"/>

                        </StackLayout>

                    </GridLayout>
                </GridLayout>
                
                <slot></slot>

            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
var application = require("application");
import DrawerComponent from "./DrawerComponent";
const localStorage = require( "nativescript-localstorage" );

export default {
    
  components: {
    DrawerComponent: DrawerComponent,
  },

  props: [
      "title"
  ],

  data() {
    return {
      
    };
  },

  methods: {
      logout: function() {
          console.dir("logout !");
          localStorage.clear();
          this.$navigateTo(this.$pages.login,{
              transition: {
                  name: "fade",
                  duration: 1250,
                  curve: "easeIn"
              },
              clearHistory: true,
              propos: {}
          });
      }
  }
};
</script>

<style scoped>
.icon {
    font-size: 25;
    text-align: right;
    font-weight: bold;
}

.icon:highlighted {
    color: #c6ff00
}
</style>
