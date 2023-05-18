<!--  -->
<template>
  <div style="display: flex; flex-direction: row;">
    <div class="left">
      <div class='warning'>
        <WorkSpaceWarning></WorkSpaceWarning>
      </div>
      <div class="bottom">
        <div class="record">
          <Record></Record>
        </div>
        <div class="warningPie">
          <WarningPie></WarningPie>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="function">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
          <div style="font-size: 16px; font-weight: bold;">common function</div>
          <a href="" style="font-size: 12px;">adjust</a>
        </div>
      </div>
      <div class="image">
      </div>
      <div class="notice">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
          <div style="font-size: 16px; font-weight: bold;">公告</div>
          <a href="" style="font-size: 12px;">查看更多</a>
        </div>
      </div>
      <div class="help">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
          <div style="font-size: 16px; font-weight: bold;">帮助文档</div>
          <a href="" style="font-size: 12px;">查看更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import WorkSpaceWarning from "./workSpaceWarning.vue";
import Record from "./record.vue";
import WarningPie from "./warningPie.vue"


export default {
  //import引入的组件需要注入到对象中才能使用
  components: { WorkSpaceWarning, Record, WarningPie },
  data() {
    //这里存放数据
    return {
      functionItem:[
        {
          id:1,
          name:'内容管理',
          icon:'',
          url:''
        },
        {
          id:2,
          name:'内容统计',
          icon:'',
          url:''
        },
        {
          id:3,
          name:'高级管理',
          icon:'',
          url:''
        },
        {
          id:4,
          name:'线上推广',
          icon:'',
          url:''
        },
        {
          id:5,
          name:'内容投放',
          icon:'',
          url:''
        },
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
.left {
  position: relative;
  width: 75%;
  height: 100%;

  .warning {
    position: relative;
    height: 57%;
    width: 100%;
  }

  .bottom {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: row;

    .record {
      position: relative;
      width: 50%;
      margin-top: 20px;
    }

    .warningPie {
      position: relative;
      width: 50%;
      margin-top: 20px;
      margin-left: 20px;
    }
  }



}

.right {
  position: relative;
  margin-left: 20px;
  width: 25%;
  .function{
    position: relative;
    height: 35%;
    padding: 10px;
    background-color: white;
  }
  .image{
    position: relative;
    margin-top: 20px;
    height: 19%;
    background-color: white;
  }
  .notice{
    position: relative;
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    height: 25%;
  }
  .help{
    position: relative;
    padding: 20px;
    margin-top: 20px;
    background-color: white;
    height: 15%;
  }
}
</style>