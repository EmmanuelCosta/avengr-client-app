<template>
    <page-component title="À Propos"
      backgroundImage="url('~/assets/images/login-register.jpg')"
      columns="*"
      rows="150,auto,*"
      backgroundSize="cover">
        <Label
              fontSize="20"
              textWrap="true"
              color="#34bfc5"
              text="Dame Prévoyance à votre service !" 
              textAlignment="center"
              verticalAlignment="center"/>
    </page-component>
</template>

<script>

import PageComponent from "./../components/PageComponent";

export default {
    
  components: {
    PageComponent: PageComponent,
  },

  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>



</style>
