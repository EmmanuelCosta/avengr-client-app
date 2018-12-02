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
                    @tap="$navigateTo($pages.contratObseque, {
                        transition: {
                            name: 'slide'
                        }
                    })">
                    <Label class="drawer-item-icon" col="0" :text="$icons.death.start.variant"/>
                    <Label class="drawer-item" col="1" text="Mon Contrat Obseque"/>
                </GridLayout>
                
                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    :class="{item:true}"
                    @tap="$navigateTo($pages.home, {
                        transition: {
                            name: 'slide'
                        }
                    })">
                    <Label class="drawer-item-icon" col="0" :text="$icons.face.profile"/>
                    <Label class="drawer-item" col="1" text="Mon Profil"/>
                </GridLayout>

                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="$navigateTo($pages.contrat, {
                        transition: {
                            name: 'slide'
                        }
                    })">
                    <Label class="drawer-item-icon" col="0" :text="$icons.briefcase.default"/>
                    <Label class="drawer-item" col="1" text="Détail Contrat"/>
                </GridLayout>
                
                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="$navigateTo($pages.documents, {
                        transition: {
                            name: 'slide'
                        }
                    })">
                    <Label class="drawer-item-icon" col="0" :text="$icons.folder.account"/>
                    <Label class="drawer-item" col="1" text="Mes Documents"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="share">
                    <Label class="drawer-item-icon" col="0" :text="$icons.shared.variant"/>
                    <Label class="drawer-item" col="1" text="Partager"/>
                </GridLayout>

                <!--GridLayout rows="35" columns="40, *" 
                    paddingTop="5"
                    paddingBottom="5"
                    class="item"
                    @tap="$navigateTo($pages.about)">
                    <Label class="drawer-item-icon" col="0" :text="$icons.information.default"/>
                    <Label class="drawer-item" col="1" text="À propos"/>
                </GridLayout-->

            </StackLayout>
        </ScrollView>
        
    </StackLayout>   
</template>


<script>
const localStorage = require( "nativescript-localstorage" );

export default {
  props: [
      'drawer'
  ],

  data() {
    return {
        user: {},
        is_profile: true,
        is_about: false
    };
  },

  mounted() {
      this.user = this.$store.getUser();
  },

  methods: {
      share() {
          console.log("share");
          this.drawer.nativeView.closeDrawer();
          this.$socialShare.shareText('Bonjour\n' + this.$store.getMessageToShare());
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
