<!--  -->
<template>
  <div class='wrap'>
    <div class="title">
      <span style="font-size: 16px; font-weight: bold;">New Record</span>
      <a href="" style="font-size: 12px;">查看更多</a>
    </div>
    <va-tabs class="options" v-model="tabValue">
      <va-tab v-for="item in tabOption" :key="item.id">
        {{ item }}
      </va-tab>
    </va-tabs>
    <va-list style="margin-top: 20px;">
      <div style="display: flex; flex-direction: row; ">
        <va-list-label style="font-size: 16px; font-weight: bold; color: black; margin-right: 30px;">排名</va-list-label>
        <va-list-label style="font-size: 16px; font-weight: bold; color: black; margin-right: 90px;">内容标题</va-list-label>
        <va-list-label style="font-size: 16px; font-weight: bold; color: black; margin-right: 30px;">点击量</va-list-label>
        <va-list-label style="font-size: 16px; font-weight: bold; color: black;">日涨量</va-list-label>
      </div>
      <va-item v-for="item in recordItem" :key="item.id">
        <va-item-label>
          {{ item.id }}
        </va-item-label>
        <va-item-section>
          {{ item.content }}
        </va-item-section>
      </va-item>
    </va-list>
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
      tabOption: ["图片","文字","视频"],
      recordItem:[
        {
          id:1,
          content:"1111111111111",
          clickNum:5689,
          riseNum:66
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrap {
  position: relative;
  height: 388px;
  width: 462px;
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
    background-color: #F4F5FA;
  }
}
</style>