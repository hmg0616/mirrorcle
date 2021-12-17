<template lang="html">
  <div id="bodyMain">
    <BodySchedule></BodySchedule>
    <BodyAndroidPushData></BodyAndroidPushData>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BodySchedule from './BodySchedule.vue'
import BodyAndroidPushData from './BodyAndroidPushData.vue'

export default {
  components: {
    'BodySchedule': BodySchedule,
    'BodyAndroidPushData': BodyAndroidPushData
  },
  data(){
    return {

    }
  },
  created() {

  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음

    ]),

  },
  mounted(){

  }

}
</script>

<style lang="css">
  #bodyMain {
    border-color: black;
    border-style: double;
    height:1220px;
  }
</style>
