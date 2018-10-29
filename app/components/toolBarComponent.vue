<template>
    <GridLayout width="100%" rows="40" columns="auto, *" 
        paddingLeft="5" paddingRight="5" paddingTop="5"
        class="bg-color-primary">
        
        <Label col="0"
            :text="$icons.menu" 
            @tap="$refs.drawer.nativeView.showDrawer()"
            class="mdi menu"
            backgroundColor="yellow"
            color="blue"/>
                    
        <GridLayout columns="200,*" col="1">
            <Label :text="title" col="0"
                textAlignment="center"
                class="action-bar-title"/>
            
            <StackLayout col="1"
                orientation="horizontal">
            </StackLayout>

        </GridLayout>

    </GridLayout>
</template>

<script>


export default {
    
  props: [
      "title"
  ],

  data() {
    return {
      
    };
  }
};
</script>

<style scoped>



</style>
