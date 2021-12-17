<template lang="html">
  <div id="bodyAndroidPushData">
    <div id="androidPushDataList">
      <img src="/src/assets/alarm.png" id="alarmImage" alt="alarmImage" height="60" width="60">
      <div id="alarmName">
        SmartPhone Alarm
      </div>
      <ul>
        <li v-if="getAndroidPushData[0] !=null">
          <img :src="getAndroidPushData[0].package" id="androidPushImage0" alt="androidPushImage0" height="60" width="60">
          <div id="androidPushText0"><marquee width="380">{{getAndroidPushData[0].title}}:{{getAndroidPushData[0].text}}</marquee></div>
        </li>
        <li v-if="getAndroidPushData[1] !=null">
          <img :src="getAndroidPushData[1].package" id="androidPushImage1" alt="androidPushImage1" height="60" width="60">
          <div id="androidPushText1"><marquee width="380">{{getAndroidPushData[1].title}}:{{getAndroidPushData[1].text}}</marquee></div>
        </li>
        <li v-if="getAndroidPushData[2] !=null">
          <img :src="getAndroidPushData[2].package" id="androidPushImage2" alt="androidPushImage2" height="60" width="60">
          <div id="androidPushText2"><marquee width="380">{{getAndroidPushData[2].title}}:{{getAndroidPushData[2].text}}</marquee></div>
        </li>
        <li v-if="getAndroidPushData[3] !=null">
          <img :src="getAndroidPushData[3].package" id="androidPushImage3" alt="androidPushImage3" height="60" width="60">
          <div id="androidPushText3"><marquee width="380">{{getAndroidPushData[3].title}}:{{getAndroidPushData[3].text}}</marquee></div>
        </li>
        <li v-if="getAndroidPushData[4] !=null">
          <img :src="getAndroidPushData[4].package" id="androidPushImage4" alt="androidPushImage4" height="60" width="60">
          <div id="androidPushText4"><marquee width="380">{{getAndroidPushData[4].title}}:{{getAndroidPushData[4].text}}</marquee></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
import io from 'socket.io-client'

export default {
  data(){
    return {
      // user: '',
      // message: '',
      // messages: [],
      //androidPushData: [],
      socket : io('13.125.7.141:3001')
    }
  },
  created() {
    //this.setAndroidPushData();
  },
  computed: {
    ...mapGetters([
      'getAndroidPushData'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      //'setAndroidPushData'
    ]),
    ...mapMutations([
      'androidPushDataPop',
      'androidPushDataUnshift'
    ]),
    /*sendMessage(e){ // 서버쪽 소켓으로 메시지 전송
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE',{
        user: this.user,
        message: this.message
      });
      this.message = ''
    }*/
  },
  mounted(){
    this.socket.on('ANDROIDPUSHDATA', (data) => { // 서버쪽에서 소켓으로 메시지 받음
      var response = JSON.parse(data); // package, title, text

      if(response.package == "com.samsung.android.messaging"){  // package이름을 이미지 소스로 변환 후 저장
        response.package = "/src/assets/message.png";
        response.title = response.title;
        response.text = response.text;
      } else if(response.package == "com.instagram.android") {
        response.package = "/src/assets/instagram.png";
        var temp = response.text.split(':');
        response.title = temp[1];
        response.text = temp[2];
      } else if(response.package == "com.kakao.talk") {
        response.package = "/src/assets/kakao.png";
        response.title = response.title;
        response.text = response.text;
      } else if(response.package == "com.samsung.android.email.provider") {
        response.package = "/src/assets/gmail.png";
        response.title = response.title;
        response.text = response.text;
      }

      if(this.getAndroidPushData.length == 5){ // 5개 까지만 출력
         this.androidPushDataPop();// 배열 마지막에 삭제
         //console.log("pop");
      }
      this.androidPushDataUnshift(response); // 배열 앞에 저장
      //console.log("push");

      //console.log(response);
      //console.log(this.androidPushData[0].package);
    });
  }

}
</script>

<style lang="css">
  #bodyAndroidPushData {
    color: white;
    font-size: 40px;
  }
  #alarmImage {
    position:absolute;
    top: 490px;
    right: 400px;
  }
  #alarmName {
    color: white;
    font-size: 43px;
    position:absolute;
    top: 486px;
    right: 30px;
  }
  #androidPushImage0 {
    position:absolute;
    padding-bottom: 20px;
    top: 560px;
    right: 400px;
  }
  #androidPushText0 {
    position:absolute;
    top: 560px;
    right: 25px;
  }
  #androidPushImage1 {
    position:absolute;
    padding-bottom: 20px;
    top: 620px;
    right: 400px;
  }
  #androidPushText1 {
    position:absolute;
    top: 620px;
    right: 25px;
  }
  #androidPushImage2 {
    position:absolute;
    padding-bottom: 20px;
    top: 680px;
    right: 400px;
  }
  #androidPushText2 {
    position:absolute;
    top: 680px;
    right: 25px;
  }
  #androidPushImage3 {
    position:absolute;
    padding-bottom: 20px;
    top: 740px;
    right: 400px;
  }
  #androidPushText3 {
    position:absolute;
    top: 740px;
    right: 25px;
  }
  #androidPushImage4 {
    position:absolute;
    padding-bottom: 20px;
    top: 800px;
    right: 400px;
  }
  #androidPushText4 {
    position:absolute;
    top: 800px;
    right: 25px;
  }
</style>
