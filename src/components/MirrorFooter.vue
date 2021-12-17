<template lang="html">
  <div id="mirrorFooter">
    <ul>
      <router-link to="/MusicApp_Main">
        <li id="music"> &#xe80a </li>
      </router-link>
      <router-link to="/YoutubeApp_Main">
        <li id="youtube"> &#xf16a </li>
      </router-link>
      <router-link to="/BeautyApp_Main">
        <li id="beauty"> &#xe809 </li>
      </router-link>
      <router-link to="/EmotionApp_Main">
        <li id="emotion"> &#xe80c </li>
      </router-link>
      <router-link to="/MapApp_Main">
        <li id="map"> &#xe80b </li>
      </router-link>
    </ul>
    <br><br><br><br>
    <div id="menu1">
        Music
    </div>
    <div id="menu2">
      Youtube
    </div>
    <div id="menu3">
      Beauty
    </div>
    <div id="menu4">
      Emotion
    </div>
    <div id="menu5">
      Map
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  #mirrorFooter {
    height:210px;
    border-color: black;
    border-style: double;
  }
  #music,#youtube,#beauty,#emotion,#map{
    list-style: none;
    font-family: "fontello";
    color: white;
    font-size: 130px
  }
  #music{
    position: absolute;
    top: 1680px;
    left: 50px;
  }
  #youtube{
    position: absolute;
    top: 1680px;
    left: 260px;
  }
  #beauty{
    position: absolute;
    top: 1680px;
    left:480px;
  }
  #emotion{
    position: absolute;
    top: 1680px;
    right: 260px;
  }
  #map{
    position: absolute;
    top: 1680px;
    right: 50px;
  }
  #menu1,#menu2,#menu3,#menu4,#menu5{
    color: white;
    font-size: 40px;
    font-weight: bold;
  }
  #menu1{
    position: absolute;
    top: 1820px;
    left: 50px;
  }
  #menu2{
    position: absolute;
    top: 1820px;
    left: 250px;
  }
  #menu3{
    position: absolute;
    top: 1820px;
    left: 480px;
  }
  #menu4{
    position: absolute;
    top: 1820px;
    right: 250px;
  }
  #menu5{
    position: absolute;
    top: 1820px;
    right: 80px;
  }
</style>
