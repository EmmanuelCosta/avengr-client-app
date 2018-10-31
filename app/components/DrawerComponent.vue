<template>
    <StackLayout ~drawerContent backgroundColor="#ffffff">
        <StackLayout height="160" class="drawer-header">
            <image width="90" height="90"
                class="image-profile"
                src="~/assets/images/dame_prevoyance_icon2.png"
                horizontalAlignment="left"/>
            <GridLayout columns="*" rows="30,30"
                class="drawer-header-info">
                <Label text="Bonjour" row="0" fontSize="22"/>
                <Label :text="user.username" row="1" />
            </GridLayout>
        </StackLayout>

        <StackLayout class="hr"/>
        
        <ScrollView>
            <StackLayout class="mdi">
                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    :class="{item:true}"
                    @tap="$navigateTo($pages.home)">
                    <Label class="drawer-item-icon" col="0" :text="$icons.face.profile"/>
                    <Label class="drawer-item" col="1" text="Mon Profile"/>
                </GridLayout>

                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="$navigateTo($pages.contrat)">
                    <Label class="drawer-item-icon" col="0" :text="$icons.briefcase.default"/>
                    <Label class="drawer-item" col="1" text="Mon Contrat"/>
                </GridLayout>
                
                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="$navigateTo($pages.documents)">
                    <Label class="drawer-item-icon" col="0" :text="$icons.folder.account"/>
                    <Label class="drawer-item" col="1" text="Mes Documents"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="$navigateTo($pages.about)">
                    <Label class="drawer-item-icon" col="0" :text="$icons.information.default"/>
                    <Label class="drawer-item" col="1" text="À propos"/>
                </GridLayout>

            </StackLayout>
        </ScrollView>
        
    </StackLayout>   
</template>


<script>
const localStorage = require( "nativescript-localstorage" );

export default {
  props: [],

  data() {
    return {
        user: {},
        is_profile: true,
        is_about: false
    };
  },

  mounted() {
      this.user = JSON.parse(localStorage.getItem("user"));
      console.dir(this.user);
  },

  methods: {
      goTo: function(src, component) {
          
          if(src === "home")  {
              this.is_profile = false;
              this.$navigateTo(component);
          }

          if(src === "about")  {
              this.is_about = false;
              this.$navigateTo(component);
          }
      }
  }
};
</script>

<style scoped>
.drawer-header {
  padding: 10 0 0 10;
  background-color: #e5e5e5;
  color: #171049;
  background-image: url("~/assets/images/drawer-header.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.drawer-header-info{
  font-size: 15;
  font-weight: bold;
  padding: 0;
}

.image-profile {
    border-radius: 50;
}

.item {
    padding: 25;
    color: #b2b2b2;
}

.item:highlighted {
    background-color: #33cccc;
    color:#fff;
}

.item-active {
    background-color: #33cccc;
    color:#fff;
}

.drawer-item-icon {
  font-size: 27.5;
}

.drawer-item {
  font-size: 17.5;
  padding-top: 2.5;
}

</style>
