<template lang="html">
  <div id="mapApp_Bus">
    <img id="BusImage2" src="/src/assets/bus.png" alt="BusImage2" height="70" width="70">
    <input id="BusStop_Search" type="text" placeholder="버스정류소 입력"> </input>
    <button id="BusStop_Search_Button" v-on:click="searchBusStop">검색</button>
    <div id="naverMap" style="width:990px;height:450px;"></div>
    <div v-if="getBusStopInfo != null">
      <ul id="BusStopInfoListBox" style="overflow:scroll; height:600px; padding:0px;">
        <li v-for="(BusStopItem, index) in getBusStopInfo" id="BusStopInfoList">
          <div v-on:click="selectBusStop(index)"> {{ BusStopItem.stationName }} </div>
        </li>
      </ul>
    </div>
    <div v-if="getSelectedBusStopInfo != null">
      <div>
        <div id="selectedBusStopStationName"> {{ this.selectedBusStopStationName }} </div>
        <div id="selectedBusStopArsID"> {{ this.selectedBusStopArsID }} </div>
        <ul id="selectedBusStopInfoListBox" style="overflow:scroll; height:435px; padding:0px;">
          <li v-for="(selectedBusStopItem, index) in getSelectedBusStopInfo" id="selectedBusStopInfoList">
            <div id="busname"> {{ selectedBusStopItem.busNum }} </div>
            <div> {{ selectedBusStopItem.arrivalInfo1 }} </div>
            <div> {{ selectedBusStopItem.arrivalInfo2 }} </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
export default {
// 버스 번호로 모든정류장에서 위치(보류)
// 버스 정류장검색으로 도착예정버스

  data(){
    return {
      // user: '',
      selectedBusStopStationName : '',
      selectedBusStopGpsX : '',
      selectedBusStopGpsY : '',
      selectedBusStopArsID : '',
      marker: null,
      map: null
    }
  },
  created() {
    //this.setAndroidPushData();
    this.clearBusStopInfo();
    this.clearSelectedBusStopInfo();

    this.$nextTick(function() {
      this.createNaverMap();
    });
  },
  computed: {
    ...mapGetters([
      'getBusStopInfo',
      'getSelectedBusStopInfo'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setBusStopInfo',
      'setSelectedBusStopInfo'
    ]),
    ...mapMutations([
      'clearBusStopInfo',
      'clearSelectedBusStopInfo'
    ]),
    searchBusStop(){
      this.clearSelectedBusStopInfo();    // 정류장 이미 선택해서 보던 창에서 새롭게 정류장 검색 할 경우 기존의 선택되어있던 정류장 정보 제거
      var text = document.getElementById('BusStop_Search').value;
      document.getElementById('BusStop_Search').value = text; // 값 유지
      if(text != ""){
        this.setBusStopInfo(text);
        setTimeout(()=>{
          this.selectBusStop(0);
        }, 1000);
      }
    },
    selectBusStop(index){
      this.selectedBusStopStationName = this.getBusStopInfo[index].stationName;
      this.selectedBusStopGpsX = this.getBusStopInfo[index].gpsx;
      this.selectedBusStopGpsY = this.getBusStopInfo[index].gpsy;
      this.selectedBusStopArsID = this.getBusStopInfo[index].arsID;
      this.setSelectedBusStopInfo(this.selectedBusStopArsID); // 선택한 정류장의 버스도착 정보 요청
      this.setMarker();
      this.setMapPostion();
    },
    createNaverMap(){
      var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),//this.selectedBusStopGpsY, this.selectedBusStopGpsX),
        zoom: 15,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: naver.maps.MapTypeControlStyle.BUTTON,
            position: naver.maps.Position.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.SMALL,
            position: naver.maps.Position.TOP_RIGHT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: naver.maps.Position.RIGHT_CENTER
        },
        mapDataControl: true,
        mapDataControlOptions: {
            position: naver.maps.Position.BOTTOM_LEFT
        }
      };
      var mapDiv = document.getElementById('naverMap');
      this.map = new naver.maps.Map(mapDiv, mapOptions);
      this.marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.3595704, 127.105399),
        map:this.map
      });
    },
    setMarker(){
      var latlng = new naver.maps.LatLng(this.selectedBusStopGpsY,this.selectedBusStopGpsX);
      this.marker.setPosition(latlng);
    },
    setMapPostion(){
      var latlng = new naver.maps.LatLng(this.selectedBusStopGpsY,this.selectedBusStopGpsX);
      this.map.setCenter(latlng);
    }

  }
}
</script>

<style lang="css">
  #mapApp_Bus{
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #BusImage2{
    position: absolute;
    top:500px;
    left: 40px;
  }
  #BusStop_Search{
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
  #BusStop_Search_Button{
    height: 60px;
    width: 130px;
    font-size: 40px;
    position:absolute;
    top:505px;
    right:30px;
  }
  #naverMap{
    position:absolute;
    top: 130px;
    left: 30px;
  }
  #BusStopInfoListBox{
    position:absolute;
    top:1070px;
  }
  #BusStopInfoList{
    border-top: 2px solid #444444;
    border-bottom: 2px solid #444444;
    border-collapse: collapse;
    color: white;
    font-size: 40px;
    text-align: center;
    width : 500px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-left: 35px;
  }
  ::-webkit-scrollbar {
    display:none;
  }
  #selectedBusStopStationName{
    color: white;
    font-size: 50px;
    font-weight: bold;
    position:absolute;
    top: 1080px;
    left: 590px;
  }
  #selectedBusStopArsID{
    color: white;
    font-size: 38px;
    font-weight: bold;
    position:absolute;
    top: 1160px;
    left: 595px;
  }
  #selectedBusStopInfoListBox{
    position:absolute;
    top: 1220px;
    left: 545px;
  }
  #selectedBusStopInfoList{
    border-top: 2px solid #444444;
    border-bottom: 2px solid #444444;
    border-collapse: collapse;
    color: white;
    font-size: 40px;
    width : 430px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 50px;
  }
  #busname{
    color: yellow;
    font-weight: bold;
  }

</style>
