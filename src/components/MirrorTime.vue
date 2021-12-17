<template lang="html">
  <div id="mirrorTime">
    <div class="time">{{ time }}</div>
    <div class="seconds">{{ seconds }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      seconds: '',
      date: ''
    }
  },
  methods: {
    updateTime() {
      var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      var cd = new Date();
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2);// + ':' + this.zeroPadding(cd.getSeconds(), 2);
      this.seconds = this.zeroPadding(cd.getSeconds(), 2);
      this.date = /*this.zeroPadding(cd.getFullYear(), 4) + '-' +*/ '2018. '+ this.zeroPadding(cd.getMonth()+1, 2) + '. ' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      var zero = '';
      for(let i = 0; i < digit; i++) {
          zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  },
  created() {
    var timerID = setInterval(this.updateTime, 1000);    // 1초마다 반복
    this.updateTime();
  }
}
</script>

<style lang="css">
  .time {
    width: 180px;
    margin: 0;
    padding: 0;
    font-size: 100px;
    letter-spacing: 0.05em;
    position: absolute;
    top:80px;
    left: 20px;
  }
  .seconds {
    width: 220px;
    letter-spacing: 0.05em;
    font-size: 40px;
    font-weight: 500;
    position: absolute;
    top:90px;
    left: 330px;
  }
  .date {
    margin: 0;
    padding: 0;
    font-size: 40px;
    letter-spacing: 0.05em;
    font-weight: 500;
    position: absolute;
    top:205px;
    left: 30px;
  }
  #mirrorTime {
    float:left;
    color: white;
    text-align: left;
    width: 35%;
  }
</style>
