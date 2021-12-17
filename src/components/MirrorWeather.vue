<template lang="html">
  <div id="mirrorWeather">
    <CurrentWeather></CurrentWeather>
    <WeekWeather></WeekWeather>
  </div>
</template>

<script>
import CurrentWeather from './CurrentWeather'
import WeekWeather from './WeekWeather'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      refresh: false
    }
  },
  created() {
    this.setWeatherInfo();
    //this.$nextTick(() => {

    //});
    //this.setWeatherImage();
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setWeatherInfo'
      //'setWeatherImage'
    ]),
    ...mapMutations([
      //'setWeatherImage'
    ])
  },
  components: {
    'CurrentWeather': CurrentWeather,
    'WeekWeather': WeekWeather
  }


}
</script>

<style lang="css">
  #mirrorWeather{
    float:right;
    width: 50%;
  }
</style>
