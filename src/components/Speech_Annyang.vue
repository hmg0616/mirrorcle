<template lang="html">
  <div id="speech_Annyang">
    <img src="/src/assets/microphone.png" id="microphoneImage" alt="microphoneImage" height="45" width="45" v-if="data!=''">
    <div id="speechText">{{data}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      data: '',
    }
  },
  created() {
    this.speechStart(); // 안양 음성인식 등록
  },
  computed: {
    ...mapGetters([
      'getWeatherInfo',
      'getYoutubeInfo',
      'getSubwayStationInfo',
      'getSorE',
      'getSID',
      'getEID'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setYoutubeInfo',
      'setBusStopInfo',
      'setSubwayStationInfo',
      'setSubwayPathInfo'
    ]),
    ...mapMutations([
      'setSelectedYoutubeId',
      'clearSelectedBusStopInfo',
      'setSorE',
      'setSID',
      'setEID'
    ]),
    zeroPadding(num, digit) {
      var zero = '';
      for(let i = 0; i < digit; i++) {
          zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    speechStart(){
      if(annyang){
        responsiveVoice.setDefaultVoice("Korean Female"); // 음성출력용
        annyang.setLanguage('ko'); // 한국어로 변경, 음성 인식 용
/*        var commands = {
          'hello': function() {
            alert('Hello world!');
          }
        };*/

// ------------------------------------------------음성명령시 실행될 함수선언----------------------------------------------------------------
        var mirrorcleHello = function(){
          responsiveVoice.speak('미러클이에요 반가워요');
          //console.log('미러클이에요 반가워요');
        }
        var tellMirrorcle = function(){
          responsiveVoice.speak('네 말씀하세요');
          //console.log('네 말씀하세요');
        }
        var whatTimeIsIt = ()=>{
          var cd = new Date();
          var time = '현재 시간은 ' + this.zeroPadding(cd.getHours(), 2) + '시 ' + this.zeroPadding(cd.getMinutes(), 2) + '분 입니다';
          responsiveVoice.speak(time);
          //console.log(time);
        }
        var whatDayIsIt = ()=>{
          var week = ['일', '월', '화', '수', '목', '금', '토'];
          var cd = new Date();
          var date = '오늘은 '+ this.zeroPadding(cd.getMonth()+1, 2) + '월 ' + this.zeroPadding(cd.getDate(), 2) + '일 ' + week[cd.getDay()] + '요일 입니다';
          responsiveVoice.speak(date);
          //console.log(date);
        }
        var whatTemperatureIsIt = ()=>{
          var temperature = '오늘 온도는 '+ this.getWeatherInfo[0].temperature.toFixed(0) +'도 입니다';
          responsiveVoice.speak(temperature);
          //console.log(temperature);
        }/*
        var setAlarm = (num)=>{
          var str = num + '분 후로 알람을 설정하였습니다'
          responsiveVoice.speak(num+'');
          setTimeout(()=>{
            this.data='';
          }, 4000);
          var
          //console.log(temperature);
        }
*/

        var goToMainApp = ()=>{
          this.$router.push('/');
        }
        var goToMusicApp = ()=>{
          this.$router.push('/MusicApp_Main');
        }
        var goToYoutubeApp = ()=>{
          this.$router.push('/YoutubeApp_Main');
        }
        var goToBeautyApp = ()=>{
          this.$router.push('/BeautyApp_Main');
        }
        var goToEmotionApp = ()=>{
          this.$router.push('/EmotionApp_Main');
        }
        var goToMapApp = ()=>{
          this.$router.push('/MapApp_Main');
        }

        var playMusic = ()=>{
          var audio = document.getElementById("musicPlayer");
          audio.play();
        }
        var stopMusic = ()=>{
          var audio = document.getElementById("musicPlayer");
          audio.pause();
        }

        var searchYoutube = (text)=>{ // 유튜브앱에서만 가능
          document.getElementById('youtube_Search').value = text; // 값 유지
          this.setYoutubeInfo(text);

        }
        var selectYoutube0 = ()=>{
          this.setSelectedYoutubeId(this.getYoutubeInfo[0].id);
          this.$router.push('/Youtube_Play');
        }
        var selectYoutube1 = ()=>{
          this.setSelectedYoutubeId(this.getYoutubeInfo[1].id);
          this.$router.push('/Youtube_Play');
        }
        var selectYoutube2 = ()=>{
          this.setSelectedYoutubeId(this.getYoutubeInfo[2].id);
          this.$router.push('/Youtube_Play');
        }
        var selectYoutube3 = ()=>{
          this.setSelectedYoutubeId(this.getYoutubeInfo[3].id);
          this.$router.push('/Youtube_Play');
        }
        var selectYoutube4 = ()=>{
          this.setSelectedYoutubeId(this.getYoutubeInfo[4].id);
          this.$router.push('/Youtube_Play');
        }
        var selectYoutube5 = ()=>{
          this.setSelectedYoutubeId(this.getYoutubeInfo[5].id);
          this.$router.push('/Youtube_Play');
        }

        var goToMapAppBus = ()=>{
          this.$router.push('/MapApp_Bus');
        }
        var goToMapAppSubway = ()=>{
          this.$router.push('/MapApp_Subway');
        }
        var goToMapAppFindPath = ()=>{
          this.$router.push('/MapApp_FindPath');
        }
        var searchBus= (text)=>{
          this.clearSelectedBusStopInfo();    // 정류장 이미 선택해서 보던 창에서 새롭게 정류장 검색 할 경우 기존의 선택되어있던 정류장 정보 제거
          document.getElementById('BusStop_Search').value = text;
          if(text != ""){
            this.setBusStopInfo(text);
            // 정류소 클릭 하는 명령은 아직 못함
          }
        }
        var searchSubwaySID= (text)=>{
          this.setSorE('S');
          document.getElementById('SubwaySID_Search').value = text; // 값 유지
          if(text != ""){
            this.setSubwayStationInfo(text);
          }
        }
        var searchSubwayEID= (text)=>{
          this.setSorE('E');
          document.getElementById('SubwayEID_Search').value = text; // 값 유지
          if(text != ""){
            this.setSubwayStationInfo(text);
          }
        }
        var selectSubway= (text)=>{
          var index;
          if(text=='첫'){
            index=0;
          }else if (text=='두') {
            index=1;
          }else if (text=='세') {
            index=2;
          }else if (text=='네') {
            index=3;
          }else if (text=='다섯') {
            index=4;
          }
          //index 처리
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

        var personnelColorStart = ()=>{
          this.$router.push('/BeautyApp_Result');
        }
        var personnelColorRestart = ()=>{
          this.$router.push('/BeautyApp_Main');
        }

        var emotionAnalysisStart = ()=>{
          this.$router.push('/EmotionApp_Chart');
        }

        var emotionAnalysisRestart = ()=>{
          this.$router.push('/EmotionApp_Main');
        }

// -----------------------------------음성인식 명령 : 실행되는 함수------------------------------------------
        var commands = {
          'hi': mirrorcleHello,
          '안녕': mirrorcleHello,
          'hello': mirrorcleHello,
          '안녕하세요': mirrorcleHello,
          'nice to meet you': mirrorcleHello,
          '반가(워)': mirrorcleHello,
          'mirrorcle': tellMirrorcle,
          '미러클': tellMirrorcle,
          'what time (is it today)': whatTimeIsIt,
          '현재 시간 (알려줘)': whatTimeIsIt,
          '지금 (몇)시(야)': whatTimeIsIt,
          'what day (is it today)': whatDayIsIt,
          '오늘 (몇)일(이야)': whatDayIsIt,
          '오늘 (며)칠(이야)': whatDayIsIt,
          '오늘 날짜 (알려줘)': whatDayIsIt,
          'what temperature (is it today)': whatTemperatureIsIt,
          '오늘 온도 (알려줘)':  whatTemperatureIsIt,
          '오늘 (몇)도(야)':  whatTemperatureIsIt,
          'home': goToMainApp,
          '홈': goToMainApp,
          'main': goToMainApp,
          '메인': goToMainApp,
          'music': goToMusicApp,
          '뮤직': goToMusicApp,
          '음악': goToMusicApp,
          'youtube': goToYoutubeApp,
          '유튜브': goToYoutubeApp,
          'beauty': goToBeautyApp,
          '뷰티': goToBeautyApp,
          'emotion': goToEmotionApp,
          '감정': goToEmotionApp,
          'map': goToMapApp,
          '맵': goToMapApp,
          '지도': goToMapApp,
          'play music': playMusic,
          '음악 재생': playMusic,
          'stop Music': stopMusic,
          '음악 정지': stopMusic,
          'youtube search :text':searchYoutube,
          '유튜브 :text 검색(해 줘)':searchYoutube,
          'youtube first (video)':selectYoutube0,
          '유튜브 첫번째 (선택)':selectYoutube0,
          'youtube second (video)':selectYoutube1,
          '유튜브 두번째 (선택)':selectYoutube1,
          'youtube third (video)':selectYoutube2,
          '유튜브 세번째 (선택)':selectYoutube2,
          'youtube fourth (video)':selectYoutube3,
          '유튜브 네번째 (선택)':selectYoutube3,
          'youtube fifth (video)':selectYoutube4,
          '유튜브 다섯번째 (선택)':selectYoutube4,
          'youtube sixth (video)':selectYoutube5,
          '유튜브 여섯번째 (선택)':selectYoutube5,
          'bus': goToMapAppBus,
          '버스': goToMapAppBus,
          'subway': goToMapAppSubway,
          '지하철': goToMapAppSubway,
          'findPath': goToMapAppFindPath,
          '길찾기': goToMapAppFindPath,
          'bus(stop) search :text': searchBus,
          '버스 (정류장) :text 검색(해 줘)': searchBus,
          '지하철 출발(역) :text 검색(해 줘)': searchSubwaySID,
          '지하철 도착(역) :text 검색(해 줘)': searchSubwayEID,
          '지하철 :text번째 (선택)': selectSubway,
          '(퍼스널) 컬러 측정(하기)': personnelColorStart,
          '(퍼스널) 컬러 다시 측정(하기)': personnelColorRestart,
          '감정 분석(하기)': emotionAnalysisStart,
          '감정 (분석) 다시 측정(하기)': emotionAnalysisRestart,
        };
// -----------------------------------선언한 명렁어들 등록------------------------------------------

        // Add our commands to annyang
        annyang.addCommands(commands);

        annyang.addCallback("result", (data)=>{   // 말한 내용 상단 바에 표시, 4초후 제거, data에 말한 음성이 기록된다
            this.data = data[0];
            setTimeout(()=>{
              this.data='';
            }, 4000);
            //console.log(data);
        });

        // Start listening.
        annyang.start(); // 안양 실행

/* 커맨드 예시
        var commands = {
          // annyang will capture anything after a splat (*) and pass it to the function.
          // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
          'show me *tag': showFlickr,

          // A named variable is a one word variable, that can fit anywhere in your command.
          // e.g. saying "calculate October stats" will call calculateStats('October');
          'calculate :month stats': calculateStats,

          // By defining a part of the following command as optional, annyang will respond to both:
          // "say hello to my little friend" as well as "say hello friend"
          'say hello (to my little) friend': greeting
        };

        var showFlickr = function(tag) {
          var url = 'http://api.flickr.com/services/rest/?tags='+tag;
          $.getJSON(url);
        }

        var calculateStats = function(month) {
          $('#stats').text('Statistics for '+month);
        }

        var greeting = function() {
          $('#greeting').text('Hello!');
        }


*/

      }
    }
  }
}
</script>

<style lang="css">
  #speech_Annyang{
  }
  #microphoneImage{
    position: absolute;
    top:22px;
    left:90px;
  }
  #speechText{
    color: white;
    font-size: 45px;
    position: absolute;
    top:14px;
    left:150px;
  }
</style>
