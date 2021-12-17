<template lang="html">
  <div id="youtube_Play">
    <div id="youtube_Player_Wrapper">
      <iframe id="youtube_player" type="text/html" width="100%" height="100%" :src="youtubeURI" frameborder="0"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      youtubeURI: ''
    }
  },
  created() {
    this.youtubeURI= 'http://www.youtube.com/embed/'+this.getSelectedYoutubeId+'?enablejsapi=1&autoplay=1&origin=http://example.com&rel=0&controls=2';
  },
  computed: {
    ...mapGetters([
      'getSelectedYoutubeId'
    ])
  },
  methods: {
  }
}
</script>

<style lang="css">
  #youtube_Play {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #youtube_Player_Wrapper{
    width: 1000px;
    height: 700px;
    padding: 30px;
  }
  #youtube_player{
  }
</style>
