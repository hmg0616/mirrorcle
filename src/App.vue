<template lang="html">
  <div id="app">
    <Speech_Annyang></speech_Annyang>
    <MirrorHeader></MirrorHeader>
    <MirrorNeck></MirrorNeck>
    <!-- <div id="test">&#xe806</div> -->
    <router-view name="bodyView"></router-view>
    <MirrorFooter></MirrorFooter>

  </div>
</template>

<script>
import MirrorHeader from './components/MirrorHeader.vue'
// import MirroBody from './components/MirrorBody.vue'
import MirrorNeck from './components/MirrorNeck.vue'
import MirrorFooter from './components/MirrorFooter.vue'
import Speech_Annyang from './components/Speech_Annyang.vue'

import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  components: {
    'MirrorHeader': MirrorHeader,
    'MirrorNeck': MirrorNeck,
    'MirrorFooter': MirrorFooter,
    'Speech_Annyang': Speech_Annyang
  },
  created() {
    var text = 'smartmirror';  // 유튜브 초기 화면 smartmirror 검색정보로 미리 설정
    this.setYoutubeInfo(text);
    this.setAudioInfo();
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setYoutubeInfo',
      'setAudioInfo'
    ]),
    ...mapMutations([

    ])
  }
}
</script>

<style lang="css">
  #app {
    background-color: black;
    font-family: 'Jua', sans-serif;
  }
  #test{
    font-family: "fontello";
    color: white;
    font-size: 2.2rem;
    padding-right: 1rem;
    position: absolute;
    top:40px;
    left: 10px;
  }
</style>
