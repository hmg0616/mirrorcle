<template lang="html">
  <div id="mirrorMusicPlayer">
    <div id="selectedMusicName">
      <marquee>{{getSelectedAudioInfo[0]}}</marquee>
    </div>
    <audio controls autoplay id="musicPlayer">
      <source v-bind:src="getSelectedAudioInfo[1]" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
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
    this.$nextTick(function() {
      this.autoPlayNextMusic();       // audio end event 등록, dom에 접근해야하므로 dom생성이후에 실행되는 nextTick내부에 선언.
    });
  },
  computed: {
    ...mapGetters([
      'getSelectedAudioInfo',
      'getAudioIndex',
      'getAudioInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'setSelectedAudioInfo',
      'setAudioIndex'
    ]),
    autoPlayNextMusic(){ // 실행중인 뮤직 끝나면 다음 뮤직 자동실행, audio end event 등록
      var audio = document.getElementById("musicPlayer");
      audio.addEventListener("ended", this.setNextMusicIndex); // audio end 시 setNextMusicIndex 함수 실행시킴.
    },
    setNextMusicIndex(){
      if(this.getAudioIndex == this.getAudioInfo.files.length-1){ // 마지막 음악이면 처음 음악으로.
        this.setAudioIndex(0);
      } else {
        this.setAudioIndex(this.getAudioIndex+1); // 다음 음악으로.
        console.log(this.getAudioIndex);
      }
      this.setSelectedAudioInfo(this.getAudioIndex); // 새로운 음악 재생시킴.
    }
  }
}
</script>

<style lang="css">
  #mirrorMusicPlayer{
    width: 380px;
    position: absolute;
    top: 320px;
    left: 20px;
  }
  #selectedMusicName{
    color: white;
    font-size: 40px;
  }
  #musicPlayer{
    width:380px;
  }
</style>
