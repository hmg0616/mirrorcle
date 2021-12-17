<template lang="html">
  <div id="youtubeApp_Main">
<!--    <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"/> -->
    <div id="youtube_Icon">&#xf16a</div>
    <input id="youtube_Search" type="text" placeholder="검색"> </input>
    <button id="youtube_Search_Button" v-on:click="searchYoutube">검색</button>

    <router-link to="/Youtube_Play" v-on:click.native="youtubeSelect(0)">
      <img id="youtube_Search_Thumbnail_0" :src="getYoutubeInfo[0].thumbnail" alt="youtubeImage0">
      <div id="youtube_Search_Title_0" v-html="'<marquee width=480>'+getYoutubeInfo[0].title+'</marquee>'"> </div>
    </router-link>
    <router-link to="/Youtube_Play" v-on:click.native="youtubeSelect(1)">
      <img id="youtube_Search_Thumbnail_1" :src="getYoutubeInfo[1].thumbnail" alt="youtubeImage1">
      <div id="youtube_Search_Title_1" v-html="'<marquee width=480>'+getYoutubeInfo[1].title+'</marquee>'"> </div>
    </router-link>
    <router-link to="/Youtube_Play" v-on:click.native="youtubeSelect(2)">
      <img id="youtube_Search_Thumbnail_2" :src="getYoutubeInfo[2].thumbnail" alt="youtubeImage2">
      <div id="youtube_Search_Title_2" v-html="'<marquee width=480>'+getYoutubeInfo[2].title+'</marquee>'"> </div>
    </router-link>
    <router-link to="/Youtube_Play" v-on:click.native="youtubeSelect(3)">
      <img id="youtube_Search_Thumbnail_3" :src="getYoutubeInfo[3].thumbnail" alt="youtubeImage3">
      <div id="youtube_Search_Title_3" v-html="'<marquee width=480>'+getYoutubeInfo[3].title+'</marquee>'"> </div>
    </router-link>
    <router-link to="/Youtube_Play" v-on:click.native="youtubeSelect(4)">
      <img id="youtube_Search_Thumbnail_4" :src="getYoutubeInfo[4].thumbnail" alt="youtubeImage4">
      <div id="youtube_Search_Title_4" v-html="'<marquee width=480>'+getYoutubeInfo[4].title+'</marquee>'"> </div>
    </router-link>
    <router-link to="/Youtube_Play" v-on:click.native="youtubeSelect(5)">
      <img id="youtube_Search_Thumbnail_5" :src="getYoutubeInfo[5].thumbnail" alt="youtubeImage5">
      <div id="youtube_Search_Title_5" v-html="'<marquee width=480>'+getYoutubeInfo[5].title+'</marquee>'"> </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      //refresh: false

    }
  },
  created() {
    //var text = 'smartmirror';
    //this.setYoutubeInfo(text);
  },
  computed: {
    ...mapGetters([
      'getYoutubeInfo'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setYoutubeInfo'
    ]),
    ...mapMutations([
      'setSelectedYoutubeId'
    ]),
    youtubeSelect(index){   // 동영상 선택시 id값 저장
      this.setSelectedYoutubeId(this.getYoutubeInfo[index].id);
    },
    searchYoutube(){
      var text = document.getElementById('youtube_Search').value;
      document.getElementById('youtube_Search').value = text; // 값 유지
      this.setYoutubeInfo(text);
    }
  }
}

</script>

<style lang="css">
  #youtubeApp_Main {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #youtube_Icon{
    font-family: "fontello";
    color: red;
    font-size: 90px;
    position: absolute;
    top:490px;
    left:40px;
  }
  #youtube_Search {
    border: none;
    padding: 0px;
    margin: 0px;
    height: 60px;
    width: 730px;
    font-size: 40px;
    position:absolute;
    top:505px;
    left:160px;
  }
  #youtube_Search_Button{
    height: 60px;
    width: 130px;
    font-size: 40px;
    position:absolute;
    top:505px;
    right:30px;
  }
  #youtube_Search_Thumbnail_0{
    width: 480px;
    height: 280px;
    position:absolute;
    left:40px;
    top: 600px;
  }
  #youtube_Search_Title_0{
    color: white;
    font-size: 50px;
    position:absolute;
    left:40px;
    top:880px;
  }
  #youtube_Search_Thumbnail_1{
    width: 480px;
    height: 280px;
    position:absolute;
    right:40px;
    top: 600px;
  }
  #youtube_Search_Title_1{
    color: white;
    font-size: 50px;
    position:absolute;
    right:40px;
    top:880px;
  }
  #youtube_Search_Thumbnail_2{
    width: 480px;
    height: 280px;
    position:absolute;
    left:40px;
    top: 960px;
  }
  #youtube_Search_Title_2{
    color: white;
    font-size: 50px;
    position:absolute;
    left:40px;
    top:1240px;
  }
  #youtube_Search_Thumbnail_3{
    width: 480px;
    height: 280px;
    position:absolute;
    right:40px;
    top: 960px;
  }
  #youtube_Search_Title_3{
    color: white;
    font-size: 50px;
    position:absolute;
    right:40px;
    top:1240px;
  }
  #youtube_Search_Thumbnail_4{
    width: 480px;
    height: 280px;
    position:absolute;
    left:40px;
    top: 1320px;
  }
  #youtube_Search_Title_4{
    color: white;
    font-size: 50px;
    position:absolute;
    left:40px;
    top:1600px;
  }
  #youtube_Search_Thumbnail_5{
    width: 480px;
    height: 280px;
    position:absolute;
    right:40px;
    top: 1320px;
  }
  #youtube_Search_Title_5{
    color: white;
    font-size: 50px;
    position:absolute;
    right:40px;
    top:1600px;
  }

</style>
