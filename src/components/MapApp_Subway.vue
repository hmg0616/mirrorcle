<template lang="html">
  <div id="mapApp_Subway">
    <img id="SubwayImage2" src="/src/assets/subway.png" alt="subwayImage" height="80" width="80">
    <input id="SubwaySID_Search" type="text" placeholder="출발역 입력"> </input>
    <button id="SubwaySID_Search_Button" v-on:click="searchStartSubway">검색</button>
    <input id="SubwayEID_Search" type="text" placeholder="도착역 입력"> </input>
    <button id="SubwayEID_Search_Button" v-on:click="searchEndSubway">검색</button>
    <div v-if="getSubwayStationInfo != null">
      <ul id="SubwayStationInfoListBox" style="overflow:scroll; height:600px; padding:0px;">
        <li v-for="(SubwayStationItem, index) in getSubwayStationInfo" id="SubwayStationInfoList">
          <div v-on:click="selectSubwayStation(index)"> {{ SubwayStationItem.stationName }} {{ SubwayStationItem.laneName }} </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
export default {
// 지하철 줄발지,목적지 역 설정 후 걸리는 시간, 환승역 등.
// (지하철 역 검색시 도착 정보)
  data(){
    return {

    }
  },
  created() {
    this.clearSubwayStationInfo();
    this.clearSubwayPathInfo();
    this.clearSID();
    this.clearEID();
    this.setSorE('S');

/*    this.$nextTick(function() {

    });*/
  },
  computed: {
    ...mapGetters([
      'getSubwayStationInfo',
      'getSorE',
      'getSID',
      'getEID'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setSubwayStationInfo',
      'setSubwayPathInfo'
    ]),
    ...mapMutations([
      //'clearBusStopInfo'
      'clearSubwayStationInfo',
      'clearSubwayPathInfo',
      'setSorE',
      'setSID',
      'setEID',
      'clearSID',
      'clearEID'
    ]),
    searchStartSubway(){
      this.setSorE('S');
      var text = document.getElementById('SubwaySID_Search').value;
      document.getElementById('SubwaySID_Search').value = text; // 값 유지
      if(text != ""){
        this.setSubwayStationInfo(text);
      }
    },
    searchEndSubway(){
      this.setSorE('E');
      var text = document.getElementById('SubwayEID_Search').value;
      document.getElementById('SubwayEID_Search').value = text; // 값 유지
      if(text != ""){
        this.setSubwayStationInfo(text);
      }
    },
    selectSubwayStation(index){
      if(this.getSorE == 'S'){ // 출발역 선택 완료
        // v 자 이미지 추가
        document.getElementById('SubwaySID_Search').value = this.getSubwayStationInfo[index].stationName + " " + this.getSubwayStationInfo[index].laneName;
        this.setSID(this.getSubwayStationInfo[index].stationID);
      } else if (this.getSorE == 'E'){ // 도착역 선택 완료
        // v 자 이미지 추가
        document.getElementById('SubwayEID_Search').value = this.getSubwayStationInfo[index].stationName + " " + this.getSubwayStationInfo[index].laneName;
        this.setEID(this.getSubwayStationInfo[index].stationID);
      }

      if(this.getSID != null && this.getEID != null){ // 출발역 도착역 모두 입력완료
        var payload = new Object();
        payload.SID = this.getSID;
        payload.EID = this.getEID;
        this.setSubwayPathInfo(payload);
        this.$router.push('/MapApp_SubwayPath');
      }
    }
  }
}
</script>

<style lang="css">
  #mapApp_Subway{
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #SubwayImage2{
    position: absolute;
    top:535px;
    left: 35px;

  }
  #SubwaySID_Search{
    border: none;
    padding: 0px;
    margin: 0px;
    height: 60px;
    width: 750px;
    font-size: 40px;
    position:absolute;
    top:505px;
    left:140px;
  }
  #SubwaySID_Search_Button{
    height: 60px;
    width: 130px;
    font-size: 40px;
    position:absolute;
    top:505px;
    right:30px;
  }
  #SubwayEID_Search{
    border: none;
    padding: 0px;
    margin: 0px;
    height: 60px;
    width: 750px;
    font-size: 40px;
    position:absolute;
    top:595px;
    left:140px;
  }
  #SubwayEID_Search_Button{
    height: 60px;
    width: 130px;
    font-size: 40px;
    position:absolute;
    top:595px;
    right:30px;
  }
  #SubwayStationInfoListBox{
    position:absolute;
    top:700px;
  }
  #SubwayStationInfoList{
    border-top: 2px solid #444444;
    border-bottom: 2px solid #444444;
    border-collapse: collapse;
    color: white;
    font-size: 50px;
    text-align: center;
    width : 1000px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: 35px;
  }
  ::-webkit-scrollbar {
    display:none;
  }
</style>
