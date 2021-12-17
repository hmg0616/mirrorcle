<template lang="html">
  <div id="weekWeather">
    <div id="weekWeatherList">
      <ul>
<!--
        <li v-for="weekWeatherItem in weekWeatherItems">
          <div v-bind:id = "weekWeatherItem.dayId" class="weatherDay"> {{ weekWeatherItem.weekDay }} </div>
        </li>
-->
        <li> <div id="weekWeatherDay1" v-html="getWeatherInfo[1].day"> </div> </li>
        <li> <div id="weekWeatherDay2" v-html="getWeatherInfo[2].day"> </div> </li>
        <li> <div id="weekWeatherDay3" v-html="getWeatherInfo[3].day"> </div> </li>
        <li> <div id="weekWeatherDay4" v-html="getWeatherInfo[4].day"> </div> </li>
        <li> <div id="weekWeatherDay5" v-html="getWeatherInfo[5].day"> </div> </li>
        <li> <div id="weekWeatherDay6" v-html="getWeatherInfo[6].day"> </div> </li>
<!--
        <li v-for="weekWeatherItem in weekWeatherItems">  이게 실행되려면 updated 가 실행되어야하는 데, 변경되는 데이타가 없으므로 updated가 실행이 안된다.
          <div v-bind:id = "weekWeatherItem.iconId" class="weatherIcon" v-html="getWeatherImage[weekWeatherItem.index]"> </div>
        </li>
-->
        <li> <div id="weatherIcon1" v-html="getWeatherImage[1]"> </div> </li>
        <li> <div id="weatherIcon2" v-html="getWeatherImage[2]"> </div> </li>
        <li> <div id="weatherIcon3" v-html="getWeatherImage[3]"> </div> </li>
        <li> <div id="weatherIcon4" v-html="getWeatherImage[4]"> </div> </li>
        <li> <div id="weatherIcon5" v-html="getWeatherImage[5]"> </div> </li>
        <li> <div id="weatherIcon6" v-html="getWeatherImage[6]"> </div> </li>
      </ul>
      <ul>
<!--
        <li v-for="weekWeatherItem in weekWeatherItems">
          <div v-bind:id = "weekWeatherItem.tempId" class="weatherTemp"> {{ weekWeatherItem.weekTemperature+"º" }} </div>
        </li>
-->
        <li id="weekTemperature1"> <div class="celcius" v-html="getWeatherInfo[1].temperature.toFixed(0)"> </div>º</li>
        <li id="weekTemperature2"> <div class="celcius" v-html="getWeatherInfo[2].temperature.toFixed(0)"> </div>º</li>
        <li id="weekTemperature3"> <div class="celcius" v-html="getWeatherInfo[3].temperature.toFixed(0)"> </div>º</li>
        <li id="weekTemperature4"> <div class="celcius" v-html="getWeatherInfo[4].temperature.toFixed(0)"> </div>º</li>
        <li id="weekTemperature5"> <div class="celcius" v-html="getWeatherInfo[5].temperature.toFixed(0)"> </div>º</li>
        <li id="weekTemperature6"> <div class="celcius" v-html="getWeatherInfo[6].temperature.toFixed(0)"> </div>º</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      //weekWeatherItems: [],
      //weekWeatherImages: []
    }
  },
  created() {
    /*this.$nextTick(() => {
      for(var i = 1; i < 7; i++){
        var weatherIcon = document.getElementById("weekWeatherIcon" + i);
        weatherIcon.innerHTML = this.getWeatherImage[i];
      }
    });*/
  },
  updated() {
    //this.setWeekWeatherHTML();
  },
  computed: {
    ...mapGetters([
      'getWeatherInfo',
      'getWeatherImage'
    ])
  },
  methods: {/*
    setWeekWeatherHTML(){
      for(var i = 1; i < 7; i++){
        var weatherObject = new Object();
        weatherObject.dayId = "weekWeatherDay" + i;
        weatherObject.tempId = "weekTemperature" + i;
        //weatherObject.weekWeatherIcon = this.$store.state.weatherImage[i];
        weatherObject.weekDay = this.getWeatherInfo[i].day;
        weatherObject.weekTemperature = this.getWeatherInfo[i].temperature.toFixed(0);
        this.weekWeatherItems.push(weatherObject);
      }
    }*/
  }
}
</script>

<style lang="css">
  ul {
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
  }
  #weekWeatherList{
    font-family: "fontello";
    color:white;
  }
  #weekWeatherDay1{
    position:absolute;
    font-size:35px;
    top: 290px;
    right: 400px;
  }
  #weekWeatherDay2{
    position:absolute;
    font-size:35px;
    top: 290px;
    right: 330px;
  }
  #weekWeatherDay3{
    position:absolute;
    font-size:35px;
    top: 290px;
    right: 260px;
  }
  #weekWeatherDay4{
    position:absolute;
    font-size:35px;
    top: 290px;
    right: 190px;
  }
  #weekWeatherDay5{
    position:absolute;
    font-size:35px;
    top: 290px;
    right: 120px;
  }
  #weekWeatherDay6{
    position:absolute;
    font-size:35px;
    top: 290px;
    right: 50px;
  }
  #weatherIcon1{
    position:absolute;
    font-size: 50px;
    top: 340px;
    right: 390px;
  }
  #weatherIcon2{
    position:absolute;
    font-size: 50px;
    top: 340px;
    right: 320px;
  }
  #weatherIcon3{
    position:absolute;
    font-size: 50px;
    top: 340px;
    right: 250px;
  }
  #weatherIcon4{
    position:absolute;
    font-size: 50px;
    top: 340px;
    right: 180px;
  }
  #weatherIcon5{
    position:absolute;
    font-size: 50px;
    top: 340px;
    right: 110px;
  }
  #weatherIcon6{
    position:absolute;
    font-size: 50px;
    top: 340px;
    right: 40px;
  }
  .celcius{
    float:left;
  }
  #weekTemperature1{
    position:absolute;
    font-size: 40px;
    top: 390px;
    right: 385px;
  }
  #weekTemperature2{
    position:absolute;
    font-size: 40px;
    top: 390px;
    right: 315px;
  }
  #weekTemperature3{
    position:absolute;
    font-size: 40px;
    top: 390px;
    right: 245px;
  }
  #weekTemperature4{
    position:absolute;
    font-size: 40px;
    top: 390px;
    right: 175px;
  }
  #weekTemperature5{
    position:absolute;
    font-size: 40px;
    top: 390px;
    right: 105px;
  }
  #weekTemperature6{
    position:absolute;
    font-size: 40px;
    top: 390px;
    right: 35px;
  }
</style>
