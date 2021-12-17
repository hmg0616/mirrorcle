<template lang="html">
  <div id="headerLogin">
    <i class="fas fa-sign-in-alt" v-on:click="setLoginToken" v-if="getLoginToken===null"> login</i>
    <i class="fas fa-sign-out-alt" v-on:click="setLogOutToken" v-else> logout</i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getLoginToken'
    ])
  },
  methods: {
    ...mapMutations([
      'setLoginToken',
      'setLogOutToken'
    ]),

  }
}
</script>

<style lang="css">
  .fa-sign-in-alt{
    color: white;
    font-size: 40px;
    position: absolute;
    right: 30px;
    top: 25px;
  }
  .fa-sign-out-alt{
    color: white;
    font-size: 40px;
    position: absolute;
    right: 30px;
    top: 25px;
  }

</style>
