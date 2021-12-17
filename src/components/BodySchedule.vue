<template lang="html">
  <div id="bodySchedule">
    <img src="/src/assets/calendar.png" id="calendarImage" alt="calendarImage" height="60" width="60">
    <div id="calendarName">Your Schedule</div>
    <div id="calendarList">
      <div id="calendarList0" v-if="getCalendarInfo[0] !=null">
        {{getCalendarInfo[0].date.substr(5,5)}} : {{getCalendarInfo[0].summary}}
      </div>
      <div id="calendarList1" v-if="getCalendarInfo[1] !=null">
        {{getCalendarInfo[1].date.substr(5,5)}} : {{getCalendarInfo[1].summary}}
      </div>
      <div id="calendarList2" v-if="getCalendarInfo[2] !=null">
        {{getCalendarInfo[2].date.substr(5,5)}} : {{getCalendarInfo[2].summary}}
      </div>
      <div id="calendarList3" v-if="getCalendarInfo[3] !=null">
        {{getCalendarInfo[3].date.substr(5,5)}} : {{getCalendarInfo[3].summary}}
      </div>
      <div id="calendarList4" v-if="getCalendarInfo[4] !=null">
        {{getCalendarInfo[4].date.substr(5,5)}} : {{getCalendarInfo[4].summary}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },
  created() {
    this.setCalendarInfo();
  },
  computed: {
    ...mapGetters([
      'getCalendarInfo'
    ])
  },
  methods: {
    ...mapActions([           // mapActions 이용하여 간편하게 Actions 함수 가져올수 있음
      'setCalendarInfo'
    ])
  }
}
</script>

<style lang="css">
  #bodySchedule {
    float: left;
  }
  #calendarImage{
    position:absolute;
    top: 490px;
    left: 25px;
  }
  #calendarName{
    color: white;
    font-size: 45px;
    position:absolute;
    top: 490px;
    left: 100px;
  }
  #calendarList0{
    color: white;
    font-size: 40px;
    position:absolute;
    top: 560px;
    left: 25px;
  }
  #calendarList1{
    color: white;
    font-size: 40px;
    position:absolute;
    top: 620px;
    left: 25px;
  }
  #calendarList2{
    color: white;
    font-size: 40px;
    position:absolute;
    top: 680px;
    left: 25px;
  }
  #calendarList3{
    color: white;
    font-size: 40px;
    position:absolute;
    top: 740px;
    left: 25px;
  }
  #calendarList4{
    color: white;
    font-size: 40px;
    position:absolute;
    top: 800px;
    left: 25px;
  }
</style>
