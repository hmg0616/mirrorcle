import Vue from 'vue'
import Router from 'vue-router'
import BodyMain from '../components/BodyMain'
import MusicApp_Main from '../components/MusicApp_Main'
import YoutubeApp_Main from '../components/YoutubeApp_Main'
import BeautyApp_Main from '../components/BeautyApp_Main'
import BeautyApp_Result from '../components/BeautyApp_Result'
import BeautyApp_Product from '../components/BeautyApp_Product'
import EmotionApp_Main from '../components/EmotionApp_Main'
import EmotionApp_Chart from '../components/EmotionApp_Chart'
import MapApp_Main from '../components/MapApp_Main'
import Youtube_Play from '../components/Youtube_Play'
import MapApp_Bus from '../components/MapApp_Bus'
import MapApp_Subway from '../components/MapApp_Subway'
import MapApp_SubwayPath from '../components/MapApp_SubwayPath'
import MapApp_FindPath from '../components/MapApp_FindPath'

Vue.use(Router)

export default new Router({
  mode: 'history',   // express서버에 배포하기위해 history선언.(default: hash) history 선언 안하면 url이 hash처리되어서 정상 작동 못함.
  routes: [
    {
      path: '/',
      //path: '/mirrorcle/',
      components: {
        bodyView: BodyMain
        //loginView: HeaderLogin
      }
    },
    {
      path: '/MusicApp_Main',
      components: {
        bodyView: MusicApp_Main
      }
    },
    {
      path: '/YoutubeApp_Main',
      components: {
        bodyView: YoutubeApp_Main
      }
    },
    {
      path: '/BeautyApp_Main',
      components: {
        bodyView: BeautyApp_Main
      }
    },
    {
      path: '/BeautyApp_Result',
      components: {
        bodyView: BeautyApp_Result
      }
    },
    {
      path: '/BeautyApp_Product',
      components: {
        bodyView: BeautyApp_Product
      }
    },
    {
      path: '/EmotionApp_Main',
      components: {
        bodyView: EmotionApp_Main
      }
    },
    {
      path: '/EmotionApp_Chart',
      components: {
        bodyView: EmotionApp_Chart
      }
    },
    {
      path: '/MapApp_Main',
      components: {
        bodyView: MapApp_Main
      }
    },
    {
      path: '/Youtube_Play',
      components: {
        bodyView: Youtube_Play
      }
    },
    {
      path: '/MapApp_Bus',
      components: {
        bodyView: MapApp_Bus
      }
    },
    {
      path: '/MapApp_Subway',
      components: {
        bodyView: MapApp_Subway
      }
    },
    {
      path: '/MapApp_SubwayPath',
      components: {
        bodyView: MapApp_SubwayPath
      }
    },
    {
      path: '/MapApp_FindPath',
      components: {
        bodyView: MapApp_FindPath
      }
    },
  ]
})
