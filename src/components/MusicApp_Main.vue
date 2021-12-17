<template lang="html">
  <div id="musicApp_Main">
    <div>
      <img src="/src/assets/music.png" id="musicLogo" alt="musicLogoImage" height="65" width="65">
      <div id="musicAppName">Mirror Music PlayList</div>
      <div id="musicList0" class="musicList" v-on:click="setSelectedAudioInfo(index)" v-if="getAudioInfo.files[index] !=null">
        <marquee width="90%">{{getAudioInfo.files[index].filename}}</marquee>
      </div>
      <div id="musicList1" class="musicList" v-on:click="setSelectedAudioInfo(index+1)" v-if="getAudioInfo.files[index+1] !=null">
        <marquee width="90%">{{getAudioInfo.files[index+1].filename}}</marquee>
      </div>
      <div id="musicList2" class="musicList" v-on:click="setSelectedAudioInfo(index+2)" v-if="getAudioInfo.files[index+2] !=null">
        <marquee width="90%">{{getAudioInfo.files[index+2].filename}}</marquee>
      </div>
      <div id="musicList3" class="musicList" v-on:click="setSelectedAudioInfo(index+3)" v-if="getAudioInfo.files[index+3] !=null">
        <marquee width="90%">{{getAudioInfo.files[index+3].filename}}</marquee>
      </div>
      <div id="musicList4" class="musicList" v-on:click="setSelectedAudioInfo(index+4)" v-if="getAudioInfo.files[index+4] !=null">
        <marquee width="90%">{{getAudioInfo.files[index+4].filename}}</marquee>
      </div>
      <div id="musicList5" class="musicList" v-on:click="setSelectedAudioInfo(index+5)" v-if="getAudioInfo.files[index+5] !=null">
        <marquee width="90%">{{getAudioInfo.files[index+5].filename}}</marquee>
      </div>
      <div id="musicPrevButton" v-on:click="prevButtonClicked">
        <img src="/src/assets/prevButton.png" id="musicLogo" alt="musicLogoImage" height="65" width="65">
      </div>
      <div id="musicpage">
        {{index/6+1}}
      </div>
      <div id="musicNextButton" v-on:click="nextButtonClicked">
        <img src="/src/assets/nextButton.png" id="musicLogo" alt="musicLogoImage" height="65" width="65">
      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      index: 0
    }
  },
  created() {

  },
  computed: {
    ...mapGetters([
      'getAudioInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'setSelectedAudioInfo'
    ]),
    prevButtonClicked(){
      if(this.index > 5){
          this.index -= 6;
      }
    },
    nextButtonClicked(){
      if(this.getAudioInfo.files.length > this.index + 6){
          this.index += 6;
      }
    }
  }
}
</script>

<style lang="css">
  #musicApp_Main {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #musicLogo {
    margin: 30px;
    float: left;
  }
  #musicAppName{
    color: white;
    font-size: 65px;
    padding-top: 15px;
  }
  .musicList{
    border-top: 2px solid #444444;
    border-bottom: 2px solid #444444;
    border-collapse: collapse;
    color: white;
    font-size: 50px;
    text-align: center;
    width : 1000px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 35px;
    position:absolute;


  }
  #musicList0{
    top:630px;
  }
  #musicList1{
    top:780px;
  }
  #musicList2{
    top:930px;
  }
  #musicList3{
    top:1080px;
  }
  #musicList4{
    top:1230px;
  }
  #musicList5{
    top:1380px;
  }
  #musicPrevButton{
    color:white;
    position:absolute;
    top:1530px;
    left:400px;
  }
  #musicpage{
    color:white;
    font-size: 70px;
    position:absolute;
    top:1545px;
    left:520px;
  }
  #musicNextButton{
    color:white;
    position:absolute;
    top:1530px;
    left:560px;
  }

</style>
