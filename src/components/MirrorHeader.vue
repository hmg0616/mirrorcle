<template lang="html">
  <div id="mirrorHeader">
<!-- <router-view name="loginView"></router-view> -->
    <router-link to="/">
      <div id="home"> &#xe80d </div>
    </router-link>
    <!--<HeaderLogin> </HeaderLogin>-->
  </div>
</template>

<script>
import HeaderLogin from './HeaderLogin.vue'
export default {
  components: {
    'HeaderLogin': HeaderLogin
  }
}
</script>

<style lang="css">
  #mirrorHeader {
    height:70px;
    border-color: black;
    border-style: double;
  }
  #home{
    font-family: "fontello";
    float: left;
    color: white;
    font-size: 50px;
    position: absolute;
    left:25px;
    top:20px;
  }
</style>
