<template lang="html">
  <div id="currentWeather">
    <div id="currentWeatherIcon" v-html="getWeatherImage[0]"> </div>  <!-- getWeatherImage값이 나중에 들어오게되어 updated함수가 실행될수있다. 그래서 아래 값들도 updated 된다 -->
    <div id="currentTemperature"> {{ currentWeatherInfo.temperature.toFixed(0) }} </div>
    <div id="celcius"> º </div>
    <div id="currentTemperatureHigh"> {{ currentWeatherInfo.temperatureHigh.toFixed(0)+"º /" }} </div>
    <div id="currentTemperatureLow"> {{ currentWeatherInfo.temperatureLow.toFixed(0)+"º" }} </div>
    <div id="currentApparentTemperature"> {{ "체감온도 : " + currentWeatherInfo.apparentTemperature.toFixed(0)+"º" }} </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentWeatherInfo: [],
      //weatherIconFontello:
    }
  },
  created() {
    /*this.currentWeatherInfo = this.getWeatherInfo[0];
    //var weatherIcon = new Object();
    //weatherIcon.icon = this.currentWeatherInfo.icon;
    //this.weatherIconFontello = this.getWeatherImage(weatherIcon);
    //this.setWeatherImage();
    this.$nextTick(function() {   // 아직 그리지도 않은 UI를 document.getElementById로 가져오려 하면 오류생기므로 nextTick을 이용하여 감싸준다!
      var weatherIcon = document.getElementById('currentWeatherIcon');
      weatherIcon.innerHTML = this.getWeatherImage[0];
      //location.reload();
      //weatherIcon.alt = this.weatherIconAlt;
    });*/
  },
  updated() {
    this.setCurrentWeatherHTML();

  },
  computed: {
    ...mapGetters([
      'getWeatherInfo',
      'getWeatherImage'
    ])
  },
  methods: {
    ...mapMutations([

    ]),
    setCurrentWeatherHTML() {
      this.currentWeatherInfo = this.getWeatherInfo[0];
      //var weatherIcon = document.getElementById('currentWeatherIcon');
      //weatherIcon.innerHTML = this.getWeatherImage[0];
      //var str = "<div>" + this.getWeatherImage[0] + "</div>";
      //var str = this.getWeatherImage[0];
      //return;
    }
    // setWeatherImage() {  // icon : clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
    //   console.log(this.currentWeatherInfo.icon);
    //   switch(this.currentWeatherInfo.icon) {
    //     case "clear-day":
    //       this.weatherIconFontello = "&#xe801";
    //       break;
    //     case "clear-night":
    //       this.weatherIconFontello = "&#xe802";
    //       break;
    //     case "rain":
    //       this.weatherIconFontello = "&#xe806";
    //       break;
    //     case "sleet":
    //     case "snow":
    //       this.weatherIconFontello = "&#xe807";
    //       break;
    //     case "wind":
    //       this.weatherIconFontello = "&#xe808";
    //       break;
    //     case "fog":
    //       this.weatherIconFontello = "&#xe803";
    //       break;
    //     case "cloudy":
    //       this.weatherIconFontello = "&#xe800";
    //       break;
    //     case "partly-cloudy-day":
    //       this.weatherIconFontello = "&#xe804";
    //       break;
    //     case "partly-cloudy-night":
    //       this.weatherIconFontello = "&#xe805";
    //       break;
    //     default:
    //   }
    // }
  }
}
</script>

<style lang="css">
  #currentWeather{

  }
  #currentWeatherIcon{
    font-family: "fontello";
    color: white;
    font-size: 80px;
    position:absolute;
    top:100px;
    right: 280px;
  }
  #currentTemperature{
    color: white;
    font-size: 110px;
    position:absolute;
    top:60px;
    right: 130px;
  }
  #celcius{
    height: 7.6rem;
    color: white;
    font-size: 50px;
    font-weight: bold;
    position:absolute;
    top:83px;
    right: 90px;
  }
  #currentTemperatureHigh{
    color: white;
    font-size: 40px;
    position:absolute;
    top:213px;
    right: 350px;
  }
  #currentTemperatureLow{
    font-size: 40px;
    color: white;
    position:absolute;
    top:213px;
    right: 275px;
  }
  #currentApparentTemperature{
    font-size: 35px;
    font-weight: bold;
    color: white;
    position:absolute;
    top:220px;
    right: 30px;
  }
</style>
