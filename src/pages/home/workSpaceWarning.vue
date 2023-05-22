<!--  -->
<template>
  <div class="wrap">
    <div class="head">
      <va-icon name="fontelico-emo-thumbsup" style="color: #FFC83D; font-size: 3vh;"></va-icon>&ensp;
      <span style="font-size: 3vh; font-weight: bold">欢迎回来&ensp;,&ensp;{{ username }}</span>
    </div>
    <va-divider style="position: relative; margin-bottom: 10px"></va-divider>
    <div class="statistic">
      <div class="item" v-for="item in statistic" :key="item.id">
        <div style="
            height: 7vh;
            width: 7vh;
            border-radius: 7vh;
            background-color: #f4f5fa;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
          <va-icon :name="item.icon" :color="item.iconColor" style="font-size: 4vh"></va-icon>
        </div>
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin-left: 2vh;
          ">
          <span style="margin-bottom: 5px;">{{ item.title }}</span>
          <span style="font-size: 2vh; font-weight: bold">{{ item.num }}</span>
        </div>
      </div>
    </div>
    <va-divider style="position: relative; margin-bottom: 20px; margin-top: 10px;" ></va-divider>
    <div style="margin-bottom: 20px; margin-top: 20px;">
      <span style="font-weight: bold; font-size: 2vh;">警报变化</span><span style="font-size: 5px;">&ensp;(近7日)</span>
    </div>

    <div class="lineChart">
      <va-chart  :data="lineChartDataGenerated" type="line" />
    </div>



  </div>
</template>

<script setup lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { icon } from 'leaflet'

import { useI18n } from 'vue-i18n'
import { useChartData } from '../../data/charts/composables/useChartData'
import {
  lineChartData,
  doughnutChartData,
  bubbleChartData,
  pieChartData,
  barChartData,
  horizontalBarChartData,
} from '../../data/charts'
import VaChart from '../../components/va-charts/VaChart.vue'

const lineChartDataGenerated = useChartData(lineChartData, 0.7)
const doughnutChartDataGenerated = useChartData(doughnutChartData)
const bubbleChartDataGenerated = useChartData(bubbleChartData, 0.9)
const pieChartDataGenerated = useChartData(pieChartData)
const barChartDataGenerated = useChartData(barChartData)
const horizontalBarChartDataGenerated = useChartData(horizontalBarChartData)

const username = 'ruarua'
const statistic = [
  {
    id: 1,
    title: '今日警报数',
    icon: 'entypo-attention',
    iconColor: '#7797F7',
    num: '373W个',
  },
  {
    id: 1,
    title: '警报解决树',
    icon: 'entypo-pencil',
    iconColor: '#DE79FE',
    num: '373W个',
  },
  {
    id: 1,
    title: '待解决个数',
    icon: 'entypo-chat',
    iconColor: '#FDAC7E',
    num: '373W个',
  },
  {
    id: 1,
    title: '同比变化',
    icon: 'entypo-up',
    iconColor: '#36B2F3',
    num: '373W个',
  },
]

const { t } = useI18n()

</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.wrap {
  position: relative;
  background-color: white;
  padding: 2vh;
  height: 65vh;
  width: 62vw;

  .head {
    position: relative;
    margin-bottom: 2vh;
  }

  .statistic {
    position: relative;
    width: 100%;
    height: 7vh;

    display: flex;
    flex-direction: row;
    align-items: center;

    .item {
      height: 7vh;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
  }
  .lineChart{
    position: relative;
    height: 42vh;
    width: 61vw;
  }
}
</style>
