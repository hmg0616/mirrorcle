<template lang="html">
  <div id="beautyApp_Result">
    <img id="raspicameraCapture2" width="640" height="480" crossOrigin="Anonymous"> <!-- 8888 포트 : mjpg 스트리밍 -->
    <img id="raspicameraResult" width="640" height="480" crossOrigin="Anonymous" style="display:none;">
    <canvas id="canvas2" width="640" height="480" crossOrigin="Anonymous" style="display:none;"></canvas> <!--style="display:none;"-->
    <div id="personnelColorResult" v-if="getPersonnelColorInfo!=null && getPersonnelColorInfo!=''">
      <div id="personnelComment">Your PersonnelColor <br><br> is</div>
      <div id="personnelComment2"> {{getPersonnelColorInfo}} </div> <!-- spring warm, summer cool, autumn warm, winter cool -->
      <div v-if="getPersonnelColorInfo=='spring warm'">
        <div id="personnelComment3"> 어울리는 색상 <br> <div id="color1">분홍색,</div> <div id="color2">코랄색,</div> <div id="color3">파스텔톤,</div> <div id="color4">골드</div></div>
        <div id="personnelComment4"> 안어울리는 색상 <br> 블랙, 화이트, 보라색, 은색</div>
      </div>
      <div v-if="getPersonnelColorInfo=='summer cool'">
        <div id="personnelComment5"> 어울리는 색상 <br> <div id="color5">차가운 파스텔톤,</div> <div id="color6">하늘색,</div> <div id="color7">라벤더,</div> <div id="color8">아이보리</div></div>
        <div id="personnelComment6"> 안어울리는 색상 <br> 블랙, 화이트, 원색, 오렌지, 골드</div>
      </div>
      <div v-if="getPersonnelColorInfo=='autumn warm'">
        <div id="personnelComment7"> 어울리는 색상 <br> <div id="color9">쨍한오렌지색,</div> <div id="color10">카키색,</div> <div id="color11">겨자색,</div> <div id="color12">다크브라운</div></div>
        <div id="personnelComment8"> 안어울리는 색상 <br> 연분홍색, 하늘색, 파란색</div>
      </div>
      <div v-if="getPersonnelColorInfo=='winter cool'">
        <div id="personnelComment9"> 어울리는 색상 <br> <div id="color13">블랙,</div> <div id="color14">화이트,</div> <div id="color15">채도높은파란색,</div> <div id="color16">핏빛레드</div></div>
        <div id="personnelComment10"> 안어울리는 색상 <br> 갈색, 오렌지색, 코랄색</div>
      </div>
    </div>
    <div id="personnelColorFail" v-if="getPersonnelColorInfo==''">
      퍼스널컬러 진단 실패! <br>
      얼굴을 가까이 대주세요!
    </div>
    <div id="personnelColorProcess" v-if="getPersonnelColorInfo==null">
      퍼스널컬러 진단 중! <br>
      5초이상 지연 시에는 <br>
      다시 측정 해주세요
    </div>
    <button id="recaptureButton2" v-on:click="measurePersonnelColorRestart"> 다시측정하기 </button>
    <router-link to="/BeautyApp_Product">
      <div id="recommendButton"> 제품추천받기 </div>
    </router-link>
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
    this.clearPersonnelColorInfo();
    this.$nextTick(function() {
      var raspicameraCapture2 =  document.getElementById('raspicameraCapture2');
      raspicameraCapture2.src = 'http://192.168.0.21:8888/?action=snapshot'+'?time='+new Date().getTime(); // 이미지 캡쳐
      this.awsUploadBeautyImage();
    });
  },
  computed: {
    ...mapGetters([
      'getPersonnelColorInfo',
    ])
  },
  methods: {
    ...mapMutations([
      'awsUploadBeautyImage',
      'measurePersonnelColorRestart',
      'clearPersonnelColorInfo',
    ]),

  }
}
</script>

<style lang="css">
  #beautyApp_Result {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #raspicameraCapture2 {
    position: absolute;
    top: 500px;
    left: 30px;
  }
  #raspicameraResult{
    position: absolute;
    top: 500px;
    left: 30px;
  }
  #recaptureButton2 {
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
    top: 890px;
    left: 750px;
  }
  #recommendButton {
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
    top: 1500px;
    left: 750px;
  }
  #personnelComment{
    color: white;
    text-align: center;
    font-size: 40px;
    position: absolute;
    top: 520px;
    left: 685px;
  }
  #personnelComment2{
    color: white;
    text-align: center;
    font-size: 60px;
    position: absolute;
    top: 730px;
    left: 690px;
  }
  #personnelComment3{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1050px;
    left: 50px;
  }
  #personnelComment4{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1300px;
    left: 50px;
  }
  #personnelComment5{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1050px;
    left: 50px;
  }
  #personnelComment6{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1300px;
    left: 50px;
  }
  #personnelComment7{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1050px;
    left: 50px;
  }
  #personnelComment8{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1300px;
    left: 50px;
  }
  #personnelComment9{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1050px;
    left: 50px;
  }
  #personnelComment10{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1300px;
    left: 50px;
  }
  #color1{
    color: rgb(227,160,180);
    float: left;
  }
  #color2{
    color: rgb(231,187,144);
    float: left;
  }
  #color3{
    color: rgb(165,207,191);
    float: left;
  }
  #color4{
    color: rgb(219,214,122);
    float: left;
  }
  #color5{
    color: rgb(215,193,200);
    float: left;
  }
  #color6{
    color: rgb(153,217,234);
    float: left;
  }
  #color7{
    color: rgb(242,224,245);
    float: left;
  }
  #color8{
    color: rgb(212,214,192);
    float: left;
  }
  #color9{
    color: rgb(232,152,65);
    float: left;
  }
  #color10{
    color: rgb(123,149,122);
    float: left;
  }
  #color11{
    color: rgb(213,207,101);
    float: left;
  }
  #color12{
    color: rgb(197,189,169);
    float: left;
  }
  #color13{
    float: left;
  }
  #color14{
    float: left;
  }
  #color15{
    color: rgb(200,191,231);
    float: left;
  }
  #color16{
    color: rgb(226,101,125);
    float: left;
  }
  #personnelColorFail{
    color: white;
    text-align: center;
    font-size: 60px;
    position: absolute;
    top: 1240px;
    left: 210px;
  }
  #personnelColorProcess{
    color: white;
    font-size: 50px;
    position: absolute;
    top: 1220px;
    left: 320px;
  }

</style>
