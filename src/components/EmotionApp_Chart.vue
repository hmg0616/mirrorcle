<template lang="html">
  <div id="emotionApp_Chart">
    <img id="raspicameraCapture" width="640" height="480" crossOrigin="Anonymous"> <!-- 8888 포트 : mjpg 스트리밍 -->
    <canvas id="canvas" width="640" height="480" crossOrigin="Anonymous" style="display:none;"></canvas> <!--style="display:none;"-->
    <div id="emotionResult" v-if="getcurrentAgeRange!=null">
      나이 : {{getcurrentAgeRange.Low}} ~ {{getcurrentAgeRange.High}} 세 <br>
      성별 : {{getcurrentGender}} <br><br>
      감정 : <br>
             {{getcurrentEmotions[0].Type}} / {{getcurrentEmotions[0].Confidence.toFixed(1)}}% <br>
             {{getcurrentEmotions[1].Type}} / {{getcurrentEmotions[1].Confidence.toFixed(1)}}% <br>
             {{getcurrentEmotions[2].Type}} / {{getcurrentEmotions[2].Confidence.toFixed(1)}}%

    </div>
    <div id="emotionFail" v-if="getcurrentAgeRange==null">
      감정분석 중! <br>
      5초이상 지연 시에는 <br>
      다시 측정 해주세요
    </div>
    <button id="recaptureButton" v-on:click="measureEmotionRestart"> 다시측정하기 </button>
    <div id="piechart"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
var async = require('async');
google.charts.load('current', {'packages':['corechart']}); // 구글 chart
export default {
  data() {
    return {

    }
  },
  created() {
    this.clearCurrentEmotion();
    this.$nextTick(function() {
      var raspicameraCapture =  document.getElementById('raspicameraCapture');
      raspicameraCapture.src = 'http://192.168.0.21:8888/?action=snapshot'+'?time='+new Date().getTime(); // 이미지 캡쳐

      this.awsRekognitionEmotionAnalysis(); // 감정 분석 실행
      setTimeout(()=>{
        this.drawChart();
      }, 5000);
    });
  },
  computed: {
    ...mapGetters([
      'getcurrentAgeRange', // aws rekognition 감정분석 결과
      'getcurrentEmotions',
      'getcurrentGender',
      'getcurrentSmile',
      'getcurrentBrightness',
      'getChartEmotions'            // 차트에 들어갈 값
    ])
  },
  methods: {
    ...mapMutations([
      'awsRekognitionEmotionAnalysis',
      'clearCurrentEmotion',
      'measureEmotionRestart'
    ]),
    drawChart(){
      // type : HAPPY | SAD | ANGRY | CONFUSED | DISGUSTED | SURPRISED | CALM | UNKNOWN
      var data = google.visualization.arrayToDataTable(this.getChartEmotions);

       var options = {
         title: 'Your Total Emotions Graph',
         width: 1000,
         height: 500,
         chartArea:{left:150,top:50,width:'100%',height:'85%'},
         fontSize: 25
       };

       var chart = new google.visualization.PieChart(document.getElementById('piechart'));

       chart.draw(data, options);

    }

  }
}
</script>

<style lang="css">
  #emotionApp_Chart {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #raspicameraCapture {
    position: absolute;
    top: 550px;
    left: 40px;
  }
  #emotionResult{
    color: white;
    font-size: 35px;
    position: absolute;
    top: 550px;
    left: 720px;
  }
  #emotionFail{
    color: white;
    font-size: 36px;
    text-align: center;
    position: absolute;
    top: 660px;
    left: 710px;
  }
  #recaptureButton{
    background-color: black; /* Green */
    border: white;
    border-style: solid;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    font-size: 30px;
    top: 930px;
    left: 755px;
  }
  #piechart{
    position: absolute;
    top: 1100px;
    left: 40px;
  }
</style>
