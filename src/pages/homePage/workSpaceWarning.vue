<!--  -->
<template>
  <div class="wrap">
    <va-card-title>
      <va-icon name=""></va-icon>
      <h1 style="font-size: 20px"></h1>
    </va-card-title>
    <va-icon name=""></va-icon>
    <va-card-content>
      <va-chart type="line"> </va-chart>
    </va-card-content>
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
        username: 'ruarua',
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mounted() {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    beforeCreate() {}, //生命周期 - 创建之前
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    beforeMount() {}, //生命周期 - 挂载之前
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    beforeUpdate() {}, //生命周期 - 更新之前
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    updated() {}, //生命周期 - 更新之后
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    beforeUnmount() {}, //生命周期 - 销毁之前
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unmounted() {}, //生命周期 - 销毁完成
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    activated() {},
    //方法集合
    methods: {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang="scss" scoped>
  //@import url(); 引入公共css类
  .wrap {
    height: 550px;
    width: 990px;
    background-color: white;
  }
</style>
