<template lang="html">
  <div id="mapApp_Main">
    <router-link to="/MapApp_Bus">
      <img id="BusImage" src="/src/assets/bus.png" alt="BusImage" height="200" width="200">
    </router-link>
    <div id="BusText">Bus</div>
    <router-link to="/MapApp_Subway">
      <img id="SubwayImage" src="/src/assets/subway.png" alt="subwayImage" height="200" width="200">
    </router-link>
    <div id="SubwayText">Subway</div>
    <!--<router-link to="/MapApp_FindPath">
      <img id="RoadImage" src="/src/assets/road.png" alt="roadImage" height="200" width="200">
    </router-link>
    <div id="RoadText">Find_Path</div>-->
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
  #mapApp_Main {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #BusImage{
    position:absolute;
    left: 700px;
    top: 950px;
  }
  #SubwayImage{
    position:absolute;
    left: 240px;
    top: 950px;
  }
  #RoadImage{
    position:absolute;
    right: 200px;
    top: 1100px;
  }
  #BusText{
    font-size: 80px;
    color: white;
    position:absolute;
    left: 735px;
    top: 1170px;
  }
  #SubwayText{
    font-size: 80px;
    color: white;
    position:absolute;
    left: 200px;
    top: 1170px;
  }
  #RoadText{
    font-size: 80px;
    color: white;
    position:absolute;
    right: 130px;
    top: 1300px;
  }

</style>
