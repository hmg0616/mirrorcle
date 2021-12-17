<template lang="html">
    <div id="beautyApp_Main">
      <div id="productComment"> "Your PersonnelColor is {{getPersonnelColorInfo}}" </div>
      <div id="productComment2"> *추천 제품*</div>
      <img id="product1" src="/src/assets/autumn_product1.png" alt="BusImage2" height="700" width="500">
      <img id="product2" src="/src/assets/autumn_product2.png" alt="BusImage2" height="700" width="500">
      <button id="buyButton"> 구매하기 </button>
      <button id="buyButton2"> 구매하기 </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getPersonnelColorInfo',
    ])
  },
}
</script>

<style lang="css">
  #beautyApp_Main {
    border-color: black;
    border-style: double;
    height:1220px;
  }
  #productComment {
    color: white;
    text-align: center;
    font-size: 55px;
    position: absolute;
    top: 500px;
    left: 50px;
  }
  #productComment2 {
    color: white;
    text-align: center;
    font-size: 60px;
    position: absolute;
    top: 620px;
    left: 380px;
  }
  #product1{
    position: absolute;
    top:750px;
    left:30px;
  }
  #product2{
    position: absolute;
    top:750px;
    left:550px;
  }
  #buyButton {
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
    top: 1490px;
    left: 190px;
  }
  #buyButton2 {
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
    top: 1490px;
    left: 710px;
  }
</style>
