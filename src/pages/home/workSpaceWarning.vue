<!--  -->
<template>
  <div class="wrap">
    <div class="head">
      <va-icon name="fontelico-emo-thumbsup" style="color: yellow"></va-icon>&ensp;
      <span style="font-size: 20px; font-weight: bold">欢迎回来&ensp;,&ensp;{{ username }}</span>
    </div>
    <va-divider style="position: relative; margin-bottom: 20px"></va-divider>
    <div class="statistic">
      <div class="item" v-for="item in statistic" :key="item.id">
        <div
          style="
            height: 60px;
            width: 60px;
            border-radius: 60px;
            background-color: #f4f5fa;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <va-icon :name="item.icon" :color="item.iconColor" style="font-size: 30px"></va-icon>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin-left: 20px;
          "
        >
          <span>{{ item.title }}</span>
          <span style="font-size: 22px; font-weight: bold">{{ item.num }}</span>
        </div>
      </div>
    </div>
    <va-divider style="position: relative; margin-bottom: 20px"></va-divider>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import { icon } from 'leaflet'
  import VaChart from '../../components/va-charts/VaChart.vue'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        username: 'ruarua',
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Sales',
              data: [100, 200, 150, 300, 250, 400, 350],
            },
          ],
        },
        statistic: [
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
        ],
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang="scss" scoped>
  //@import url(); 引入公共css类
  .wrap {
    position: relative;
    height: 550px;
    // width: 1020px;
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;

    .head {
      position: relative;
      margin-bottom: 20px;
    }

    .statistic {
      position: relative;
      width: 100%;
      height: 80px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .item {
        height: 65px;
        width: 200px;

        display: flex;
        flex-direction: row;
      }
    }
  }
</style>
