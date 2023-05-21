<!--  -->
<template>
  <div class="wrap">
    <div class="title">
      <span style="font-size: 16px; font-weight: bold">New Record</span>
      <a href="" style="font-size: 12px">查看更多</a>
    </div>
    <va-tabs v-model="value" class="options">
      <template #tabs>
        <va-tab v-for="tab in tabOption" :key="tab">
          {{ tab }}
        </va-tab>
      </template>
    </va-tabs>
    <va-data-table :fields="recordDataTitle" :items="recordItem" virtual-scroller style="height: 300px; width: 90%" />
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        value: 0,
        tabOption: ['图片', '文字', '视频'],
        recordDataTitle: [
          {
            name: 'rank',
            title: '排名',
          },
          {
            name: 'title',
            title: '标题',
          },
          {
            name: 'clickNum',
            title: '点击量',
          },
          {
            name: 'riseNum',
            title: '日涨量',
          },
        ],
        recordItem: [
          {
            rank: 1,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 2,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 3,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 4,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 5,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 6,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 7,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
          {
            rank: 8,
            title: '经济日报：财政政策要精准...',
            clickNum: '346.5W+',
            riseNum: '35%',
          },
        ],
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeUnmount() {}, //生命周期 - 销毁之前
    unmounted() {}, //生命周期 - 销毁完成
    activated() {},
    //方法集合
    methods: {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang="scss" scoped>
  //@import url(); 引入公共css类
  .wrap {
    position: relative;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .options {
      width: 150px;
      font-size: 12px;
      background-color: #f4f5fa;
    }
  }
</style>
