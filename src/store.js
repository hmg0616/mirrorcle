import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex);

export const store = new Vuex.Store({
  // counter 라는 state 속성을 추가
  state:{
    // counter: 0
    weatherInfo: [],                           // 날씨 검색 내역
    weatherImage: [],                          // 일주일간 날씨 이미지. fontello 이미지 값

    loginToken: null,                          // 토큰값, 이름

    youtubeInfo: [],                           // 유튜브 검색 내역.  title, id, thumbnail
    selectedYoutubeId: 'smartmirror',           // 선택된 유튜브 ID 정보

    audioInfo: [],                              // aws S3 버킷에 있는 음악 리스트 가져옴, bucket, domain, files[index].filename정보.
    selectedAudioInfo: ["Please Select Music",""], // 선택된 음악 이름, url 정보
    audioIndex: 0,                                  // 플레이중인 음악 index 정보, 현재 음악종료후 다음 음악 실행하기 위해서 사용
                                                    //(musicplayer vue의 autoPlayNextMusic() 함수 참조!)

    calendarInfo: [],                                // 구글 캘린더 정보, date, summary 정보
    androidPushData: [],

    busStopInfo: null,                                // 버스정류소 검색 결과
    selectedBusStopInfo: null,                         // 선택한 정류소의 버스 도착 예상시간 정보

    subwayStationInfo: null,
    subwayPathInfo: null,
    SorE: 'S',
    SID: null,
    EID: null,

    currentAgeRange: null,
    currentEmotions: null,                 // HAPPY | SAD | ANGRY | CONFUSED | DISGUSTED | SURPRISED | CALM | UNKNOWN
    currentGender: null,
    currentSmile: null,
    currentBrightness: null,

    chartEmotions: [
                      ['Emotions', 'percents per Emotion'],
                      ['HAPPY',   0],
                      ['SAD',     0],
                      ['ANGRY',   0],
                      ['CALM',    0],
                      ['ETC',     0]
                  ],

    personnelColorInfo: null,

  },
  getters: {                                // 여러 컴포넌트에서 반복 사용하는 연산 vuex에서 관리, computed에 등록.
    /*doubleCounter: function(state){
      return state.counter * 2;
    },*/
    getWeatherInfo: function(state){
      return state.weatherInfo;
    },
    getWeatherImage: function(state){
      return state.weatherImage;
    },
    getLoginToken: function(state){
      return state.loginToken;
    },
    getYoutubeInfo: function(state){
      return state.youtubeInfo;
    },
    getSelectedYoutubeId: function(state){
      return state.selectedYoutubeId;
    },
    getAudioInfo: function(state){
      return state.audioInfo;
    },
    getSelectedAudioInfo: function(state){
      return state.selectedAudioInfo;
    },
    getAudioIndex: function(state){
      return state.audioIndex;
    },
    getCalendarInfo: function(state){
      return state.calendarInfo;
    },
    getAndroidPushData: function(state){
      return state.androidPushData;
    },
    getBusStopInfo: function(state){
      return state.busStopInfo;
    },
    getSelectedBusStopInfo: function(state){
      return state.selectedBusStopInfo;
    },
    getSubwayStationInfo: function(state){
      return state.subwayStationInfo;
    },
    getSubwayPathInfo: function(state){
      return state.subwayPathInfo;
    },
    getSorE: function(state){
      return state.SorE;
    },
    getSID: function(state){
      return state.SID;
    },
    getEID: function(state){
      return state.EID;
    },
    getcurrentAgeRange: function(state){
      return state.currentAgeRange;
    },
    getcurrentEmotions: function(state){
      return state.currentEmotions;
    },
    getcurrentGender: function(state){
      return state.currentGender;
    },
    getcurrentSmile: function(state){
      return state.currentSmile;
    },
    getcurrentBrightness: function(state){
      return state.currentBrightness;
    },
    getChartEmotions: function(state){
      return state.chartEmotions;
    },
    getPersonnelColorInfo: function(state){
      return state.personnelColorInfo;
    },

  },
  mutations: {                              // state 관리, setters라고 보면됨!  순차적인 로직들. (비순차적인 로직은 actions 이용한다.)
    /*addCounter: function(state, payload){
      return state.counter++;
      // state.counter = payload.value;     // 값 받아 올 경우 payload 이용
    },*/

    setWeatherInfo: function(state, payload) { // apigateway 호출 (weather-info api), then 내부에 ()=> 이런식으로 함수선언해야 오류안뜸! (오류 : this의 범위가 function 내부로 돼버림..)
      axios.get('https://execute-api.us-east-1.amazonaws.com/dev/weather-info')
        .then(function(response) {
          state.weatherInfo = response.data;
          store.dispatch('setWeatherImage'); // 날씨 fontello icon값 설정.
        }).catch(function(error) {
          console.log(error);
        });
    },

    setWeatherImage: function(state, payload) {  // icon : clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
      var iconText = {
        "clear-day": "&#xe801",
        "clear-night": "&#xe802",
        "rain": "&#xe806",
        "sleet": "&#xe807",
        "snow": "&#xe807",
        "wind": "&#xe808",
        "fog": "&#xe803",
        "cloudy": "&#xe800",
        "partly-cloudy-day": "&#xe804",
        "partly-cloudy-night": "&#xe805"
      }
      for(var i = 0; i < 7; i++){
        state.weatherImage.push(iconText[state.weatherInfo[i].icon]);
      }
    },

    setLoginToken: function(state, payload) {
      state.loginToken = ["uid","hmg"];
    },

    setLogOutToken: function(state, payload) {
      state.loginToken = null;
    },

    setYoutubeInfo: function(state, payload) {    // 유튜브 검색 내역 가져오기.  title, id, thumbnail 정보.
      var url = 'https://execute-api.us-east-1.amazonaws.com/dev/youtube-info?query='+payload; // payload에는 검색한 내용 들어감. //
      axios.get(url)
        .then(function(response) {
          state.youtubeInfo = response.data.body;
        }).catch(function(error) {
          console.log(error);
        });
    },

    setSelectedYoutubeId: function(state, payload){
      state.selectedYoutubeId = payload; // 클릭한 영상 ID 저장
    },

    setAudioInfo: function(state, payload) {    // S3 오디오 목록 가져오기.  bucket, domain, files[index].filename정보.
      axios.get('https://execute-api.us-east-1.amazonaws.com/dev/audio-info')
        .then(function(response) {
          state.audioInfo = response.data;
          //console.log(response.data);
        }).catch(function(error) {
          console.log(error);
        });
    },

    setSelectedAudioInfo: function(state, payload){ // 선택한 음악 이름 및 url 저장 & 오디오 플레이어 동기화
      state.audioIndex = payload;
      var url = state.audioInfo.domain + "/" + state.audioInfo.bucket + "/" + state.audioInfo.files[state.audioIndex].filename;
      state.selectedAudioInfo = [state.audioInfo.files[state.audioIndex].filename, url];

      var audio = document.getElementById("musicPlayer");
      audio.load();
      audio.play();
    },

    setAudioIndex: function(state, payload) { // 플레이중인 음악 index
      state.audioIndex = payload;
    },

    setCalendarInfo: function(state, payload){  // google 캘린더 정보, date, summary 정보
      axios.get('https://execute-api.us-east-1.amazonaws.com/dev/calendar-info')
        .then(function(response) {
          state.calendarInfo = response.data;
          //console.log(response.data);
        }).catch(function(error) {
          console.log(error);
        });
    },

/*

    setAndroidPushData: function(state, payload){ // socket으로 변경함.
      axios.get('http://localhost:3000/api/androidPushData', {
        headers: {'Access-Control-Allow-Origin': '*'},
      })
        .then(function(response) {
          console.log(response.data);
        }).catch(function(error) {
          console.log(error);
        });
    }
*/

    androidPushDataPop: function(state, payload) {
      state.androidPushData.pop();
    },

    androidPushDataUnshift: function(state, payload) {
      state.androidPushData.unshift(payload);
    },

    setBusStopInfo: function(state, payload) {
      var url = 'http://ip-address/api/busStopSearch?stationClass=1&stationName='+payload; //stationClass=1 뺴도될듯
      axios.get(url)
        .then(function(response) {
          //console.log(response.data);
          state.busStopInfo = response.data;
          //console.log(state.busStopInfo);
        }).catch(function(error) {
          console.log(error);
        });
    },

    clearBusStopInfo: function(state, payload) {
      state.busStopInfo = null;
    },

    setSelectedBusStopInfo: function(state, payload) {
      var temp = payload.split('-');
      var arsId = temp[0] + temp[1];
      var url = 'https://execute-api.us-east-1.amazonaws.com/dev/selectedbusstop-info?arsId='+encodeURI(arsId);
      axios.get(url)
        .then(function(response) {
          state.selectedBusStopInfo = response.data.body;
          //console.log(response.data.body);
        }).catch(function(error) {
          console.log(error);
        });
      /*
      var url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey=' + encodeURI(serviceKey) + '&arsId=' + encodeURI(arsId);
      axios.get(url)
        .then(function(response) {
          console.log(response);
          state.selectedBusStopInfo = response.data;
          //console.log(state.busStopInfo);
        }).catch(function(error) {
          console.log(error);
        });
        */
    },

    clearSelectedBusStopInfo: function(state, payload) {
      state.selectedBusStopInfo = null;
    },

    setSubwayStationInfo: function(state, payload){
      var url = 'http://ip-address/api/subwayStationSearch?&stationName='+payload;
      axios.get(url)
        .then(function(response) {
          //console.log(response.data);
          state.subwayStationInfo = response.data;
          //console.log(state.busStopInfo);
        }).catch(function(error) {
          console.log(error);
        });
    },

    setSubwayPathInfo: function(state, payload){
      var url = 'http://ip-address/api/subwayPathSearch?SID='+payload.SID+'&EID='+payload.EID; //encodeURI ???
      axios.get(url)
        .then(function(response) {
          //console.log(response.data);
          state.subwayPathInfo = response.data;
        }).catch(function(error) {
          console.log(error);
        });
    },

    clearSubwayStationInfo: function(state, payload) {
      state.subwayStationInfo = null;
    },

    clearSubwayPathInfo: function(state, payload) {
      state.subwayPathInfo = null;
    },

    setSorE: function(state, payload) { // 플레이중인 음악 index
      state.SorE = payload;
    },

    setSID: function(state, payload) { // 플레이중인 음악 index
      state.SID = payload;
    },

    setEID: function(state, payload) { // 플레이중인 음악 index
      state.EID = payload;
    },

    clearSID: function(state, payload) {
      state.SID = null;
    },

    clearEID: function(state, payload) {
      state.EID = null;
    },

    measureEmotionStart: function(state, payload) { // 감정 분석 화면으로 전환
      router.push('/EmotionApp_Chart');
    },

    awsRekognitionEmotionAnalysis: function(state, payload) { // aws rekognition 감정 분석
      AWS.config.update({region:'us-east-1',accessKeyId:'',secretAccessKey:''});
      const rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
      const s3bucket = new AWS.S3({params: {Bucket: 'mirrorcle-emotion'}});

      var raspicameraCapture = document.getElementById("raspicameraCapture");

      raspicameraCapture.onload = function () {  // 이미지가 로드 되면 실행
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        const vm = this;
        this.result2 = false;
        this.loader2 = true;
        context.drawImage(raspicameraCapture, 0, 0, 640, 480);
        const img = canvas.toDataURL('image/jpeg');
        const base64data = new Buffer(img.replace(/^data:image\/\w+;base64,/, ""),'base64');

        s3bucket.createBucket(function () {
          var params = {
            Key: 'img.jpeg',  //name image save to bucket
            Body: base64data,     //file Raw code img
          };
          s3bucket.upload(params, function (err, data) {
            if (err) {
              console.log('ERROR MSG: ', err);
            } else {
              console.log('Successfully uploaded data Bucket');
              rekognition.detectFaces( {
                Image: {
                  S3Object: {
                    Bucket: "mirrorcle-emotion",   //select name Bucket
                    Name:"img.jpeg"  //select name image
                  }
                },
                Attributes: [
                    "ALL"
                ]
              }, function(error, response) {
                if (error){
                  console.log("error"+error, error.stack);
                }else { // rekognition 응답
                  console.log(response);
                  if(response.FaceDetails.length != 0){ // 분석한 얼굴이 있다면
                    const res = response.FaceDetails[0];
                    state.currentAgeRange = res.AgeRange; // Low, High
                    state.currentEmotions = res.Emotions; // [0][1][2] Type, Confidence
                                                          // type : HAPPY | SAD | ANGRY | CONFUSED | DISGUSTED | SURPRISED | CALM | UNKNOWN
                    if(res.Gender.Value == "Male"){
                      state.currentGender = "남성"
                    } else{
                      state.currentGender = "여성"
                    }

                    var emotions = res.Emotions;
                    var i;
                    for(i = 0; i < 3; i++){
                      if(emotions[i].Type == "HAPPY"){
                        //console.log(typeof state.chartEmotions[1][1]);
                        state.chartEmotions[1][1] += parseFloat(emotions[i].Confidence.toFixed(1));
                        //console.log(state.chartEmotions[1][1]);
                      }
                      else if(emotions[i].Type == "SAD"){
                        state.chartEmotions[2][1] += parseFloat(emotions[i].Confidence.toFixed(1));
                      }
                      else if(emotions[i].Type == "ANGRY"){
                        state.chartEmotions[3][1] += parseFloat(emotions[i].Confidence.toFixed(1));
                      }
                      else if(emotions[i].Type == "CALM"){
                        state.chartEmotions[4][1] += parseFloat(emotions[i].Confidence.toFixed(1));
                      }
                      else if(emotions[i].Type == "CONFUSED" || emotions[i].Type == "DISGUSTED" || emotions[i].Type == "SURPRISED" ){
                        state.chartEmotions[5][1] += parseFloat(emotions[i].Confidence.toFixed(1));
                      }
                    }

                    /*
                    if(res.Smile.value == "false"){
                      state.currentSmile = "현재 웃고 있음"
                    } else{
                      state.currentSmile = "현재 웃지 않고 있음"
                    }*/
                    //state.currentBrightness = res.Quality.Brightness.toFixed(1);
                  }

                  /*
                  const res = response.FaceDetails[0];
                  vm.gender = res.Gender.Value;
                  vm.genderConfidence = res.Gender.Confidence.toFixed(1);
                  vm.ageHigh = res.AgeRange.High;
                  vm.ageLow = res.AgeRange.Low;
                  vm.smile = res.Smile.Confidence.toFixed(1);
                  vm.eyesOpen = res.EyesOpen.Confidence.toFixed(1);
                  vm.eyesOpenOff = res.EyesOpen.Value == true ? 'open' : 'off';
                  vm.mouthOpen = res.MouthOpen.Confidence.toFixed(1);
                  vm.mouthOpenOff = res.MouthOpen.Value == true ? 'open' : 'off';
                  vm.mustache = res.Mustache.Confidence.toFixed(1);
                  vm.mustacheFalse = res.Mustache.Value == true ? 'has' : 'does not have';
                  vm.beard = res.Beard.Confidence.toFixed(1);
                  vm.beardFalse = res.Beard.Value  == true ? 'has' : 'does not have';
                  vm.eyeglasses = res.Eyeglasses.Confidence.toFixed(1);
                  vm.eyeglassesFalse = res.Eyeglasses.Value == true ? '' : 'not';
                  vm.confidence2 = res.Confidence.toFixed(1);
                  vm.loader2 = false;
                  vm.result2 = true;
                  console.log("Successfully Rekognition");
  */
                }
              });
            }
          });
        });

      };

    },

    clearCurrentEmotion: function(state, payload) {
      state.currentAgeRange = null;
      state.currentEmotions = null;
      state.currentGender = null;
      state.currentSmile = null;
      state.currentBrightness = null;
    },

    measureEmotionRestart: function(state, payload) {
      router.push('/EmotionApp_Main');
    },

    measureBeautyStart: function(state, payload) { // 퍼스널컬러 분석 화면으로 전환
      router.push('/BeautyApp_Result');

    },

    awsUploadBeautyImage: function(state, payload) {
      AWS.config.update({region:'us-east-1',accessKeyId:'',secretAccessKey:''});
      const s3bucket2 = new AWS.S3({params: {Bucket: 'mirrorcle-pesonnelcolor'}});
      var raspicameraCapture = document.getElementById("raspicameraCapture2");

      raspicameraCapture.onload = function () {  // 이미지가 로드 되면 실행
        const canvas = document.getElementById('canvas2');
        const context = canvas.getContext('2d');
        const vm = this;
        this.result2 = false;
        this.loader2 = true;
        context.drawImage(raspicameraCapture, 0, 0, 640, 480);
        const img = canvas.toDataURL('image/jpeg');
        const base64data = new Buffer(img.replace(/^data:image\/\w+;base64,/, ""),'base64');

        s3bucket2.createBucket(function () {
          var params = {
            Key: 'beautyImg.jpeg',  //name image save to bucket
            ACL: 'public-read',
            Body: base64data,     //file Raw code img
          };
          s3bucket2.upload(params, function (err, data) {
            if (err) {
              console.log('ERROR MSG: ', err);
            } else {
              console.log('Successfully uploaded data Bucket');
              // 업로드 성공
              // 서버에 분석 호출
              var url = 'http://ip-address/api/personnelColor';
              axios.get(url)
                .then(function(response) {
                  console.log(response);//.data);
                  //console.log(typeof response.data);
                  state.personnelColorInfo = response.data;
                  if(response.data!=''){
                    var raspicameraResult = document.getElementById("raspicameraResult");
                    setTimeout(()=>{
                      raspicameraResult.src = 'https://ip-address/mirrorcle-personnelcolor-result/color_detect.jpg'+'?time='+new Date().getTime();
                      raspicameraCapture2.style="display:none;"
                      raspicameraResult.style='';
                    }, 2000);
                  }

                }).catch(function(error) {
                  console.log(error);
                });
            }
          });
        });

      };
    },

    measurePersonnelColorRestart: function(state, payload) {
      router.push('/BeautyApp_Main');
    },

    clearPersonnelColorInfo: function(state,payload){
      state.personnelColorInfo = null;
    }


  },
  actions: {
    /*addCounter: function (context) {        // Actions에서는 서버와의 http통신과 같이 결과를 받아올 타이밍이 예측되지 않은 비동기적 로직을 선언한다.
      //  commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
      return context.commit('addCounter')
    },*/

    setWeatherInfo: function (context) {
      return context.commit('setWeatherInfo');
    },
    setWeatherImage: function (context) {
      return context.commit('setWeatherImage');
    },
    setYoutubeInfo: function (context, text) {
      return context.commit('setYoutubeInfo', text);
    },
    setAudioInfo: function (context) {
      return context.commit('setAudioInfo');
    },
    setCalendarInfo: function (context) {
      return context.commit('setCalendarInfo');
    },
    setBusStopInfo: function (context,text) {
      return context.commit('setBusStopInfo',text);
    },
    setSelectedBusStopInfo: function (context,text) {
      return context.commit('setSelectedBusStopInfo',text);
    },
    setSubwayStationInfo: function (context,text) {
      return context.commit('setSubwayStationInfo',text);
    },
    setSubwayPathInfo: function (context,text) {
      return context.commit('setSubwayPathInfo',text);
    }




    /*,
    setAndroidPushData: function (context, text) {
      return context.commit('setAndroidPushData');
    }*/
  }
});
