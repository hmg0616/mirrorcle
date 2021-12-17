<template lang="html">
  <div id="beautyApp_Main">
    <img src="http://192.168.0.21:8888/?action=stream" id="raspicamera2" width="800" height="600" crossOrigin="Anonymous"> <!-- 8888 포트 : mjpg 스트리밍 -->
    <div id="captureComment2"> <주의> <br> 얼굴이 화면에 나오지 않거나 <br>정면을 향하지 않을 경우 측정이 실패할 수 있습니다. </div>
    <button id="captureButton2" v-on:click="measureBeautyStart"> 퍼스널 컬러 </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  created() {
    /*this.$nextTick(function() {
    });*/
  },
  computed: {
    ...mapGetters([
      //'getSelectedAudioInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'measureBeautyStart'
    ]),
    /*measureEmotionStart(){
      var audio = document.getElementById("musicPlayer");

    }*/

  }
}
</script>

<style lang="css">
  #beautyApp_Main {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #raspicamera2{
    position: absolute;
    top: 650px;
    left: 140px;
  }
  #captureComment2{
    color: white;
    text-align: center;
    font-size: 37px;
    position: absolute;
    top: 1300px;
    left: 120px;
  }
  #captureButton2{
    background-color: black; /* Green */
    border: white;
    border-style: solid;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    font-size: 40px;
    top: 1500px;
    left: 410px;
  }
</style>
