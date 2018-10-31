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
                            orientation="horizontal">
                        </StackLayout>
                    </GridLayout>
                </GridLayout>
                
                <slot>
                    
                </slot>

            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
import DrawerComponent from "./DrawerComponent";

export default {
    
  components: {
    DrawerComponent: DrawerComponent,
  },

  props: [
      "title",
      "userName",
      "userEmail"
  ],

  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>



</style>
