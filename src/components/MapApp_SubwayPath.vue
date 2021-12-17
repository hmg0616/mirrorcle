<template lang="html">
  <div id="mapApp_SubwayPath">
    <div id="SubwayPathTime"> {{ this.getSubwayPathInfo.globalTravelTime }}분 소요</div>
    <div id="SubwayPathDetails"> {{ this.getSubwayPathInfo.globalStationCount }} 정거장 / {{ this.getSubwayPathInfo.fare }}원</div>
    <div id="SubwayPathInfoListBox">
      <ul>
        <li v-for="(SubwayPathItem,index) in this.getSubwayPathInfo.driveInfoSet.driveInfo" id="SubwayPathInfoList">
          <img id="SubwayImage3" src="/src/assets/subway.png" alt="subwayImage" height="65" width="65">
          <div id="SubwayPathStationName"> {{ SubwayPathItem.laneName }} {{ SubwayPathItem.startName }}역 </div>
          <div v-if="index==0"> 승차 </div>
          <div v-if="index!=0"> 환승 </div>
        </li>
      </ul>
      <div id="SubwayPathEnd">
        <img id="SubwayImage3" src="/src/assets/subway.png" alt="subwayImage" height="65" width="65">
        <div> {{ this.getSubwayPathInfo.globalEndName }}역 하차 </div>
      </div>
    </div>
    <div id="SubwayPathInfoListBox2" style="overflow:scroll; height:1150px; padding:0px;">
      <div id="SubwayPathTravelTime1"> 0분 </div>
      <ul>
        <li v-for="(SubwayPathItem,index) in this.getSubwayPathInfo.stationSet.stations" id="SubwayPathInfoList">
          <img id="SubwayImage3" src="/src/assets/subway.png" alt="subwayImage" height="65" width="65">
          <div> {{ SubwayPathItem.startName }}역 </div>
          <div id="SubwayPathTravelTime2"> {{ SubwayPathItem.travelTime }}분 </div>
        </li>
      </ul>
      <div id="SubwayPathEnd">
        <img id="SubwayImage3" src="/src/assets/subway.png" alt="subwayImage" height="65" width="65">
        <div> {{ this.getSubwayPathInfo.globalEndName }}역 </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data(){
    return {

    }
  },
  created() {

  },
  computed: {
    ...mapGetters([
      'getSubwayPathInfo'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      //'setSubwayStationInfo'
    ]),
    ...mapMutations([
      //'clearBusStopInfo'
    ]),

    //selectSubwayStation(index){

    //}
  }
}
</script>

<style lang="css">
  #mapApp_SubwayPath{
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #SubwayPathTime{
    color: white;
    font-size: 80px;
    font-weight: bold;
    position:absolute;
    left:50px;
    top: 500px;
  }
  #SubwayPathDetails{
    color: white;
    font-size: 45px;
    position:absolute;
    left:50px;
    top: 630px;
  }
  #SubwayImage3{
    float: left;
    padding-right: 15px;
  }
  #SubwayPathStationName{
    float:left;
    padding-right: 7px;
  }
  #SubwayPathInfoListBox{
    color: white;
    font-size: 40px;
    position:absolute;
    top:730px;
  }
  #SubwayPathInfoList{
    width : 500px;
    padding-bottom: 25px;
  }
  #SubwayPathEnd{
    padding-left: 40px;
  }
  #SubwayPathInfoListBox2{
    color: white;
    font-size: 35px;
    position:absolute;
    top:500px;
    left:540px;
  }
  #SubwayPathTravelTime1{
    position:absolute;
    left:120px;
    top: 45px;
  }
  #SubwayPathTravelTime2{
    padding-top: 0px;
    position:relative;
    top:115px;
  }
</style>
