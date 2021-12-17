<template lang="html">
  <div id="mirrorNeck">
    <MirrorTime></MirrorTime>
    <MirrorMusicPlayer></MirrorMusicPlayer>
    <MirrorWeather></MirrorWeather>
  </div>
</template>

<script>
import MirrorTime from './MirrorTime.vue'
import MirrorWeather from './MirrorWeather.vue'
import MirrorMusicPlayer from './MirrorMusicPlayer.vue'

export default {
  components: {
    'MirrorTime': MirrorTime,
    'MirrorWeather': MirrorWeather,
    'MirrorMusicPlayer': MirrorMusicPlayer
  }
}
</script>

<style lang="css">
  #mirrorNeck {
    height:380px;
    border-color: black;
    border-style: double;
  }
</style>
