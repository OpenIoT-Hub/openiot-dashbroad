<!--  -->
<template>
  <div style="display: flex; flex-direction: row">
    <div class="left">
      <div class="warning">
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
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
          <div style="font-size: 16px; font-weight: bold">基本功能</div>
          <a href="" style="font-size: 12px">查看更多</a>
        </div>
        <div class="list">
          <div class="item" v-for="item in functionItem" :key="item.id">
            <div
              style="height: 6vh; width: 6vh;  background-color: #f4f5fa; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
              <va-icon :name="item.icon" style="font-size: 25px; "></va-icon>
            </div>
            <div>{{ item.name }}</div>
          </div>
        </div>
        <va-divider style="position: relative; margin-top: 10px; margin-bottom: 20px;"></va-divider>
        <div style="font-size: 16px; font-weight: bold">线上热门内容</div>
        <div class="onlineList">
          <div class="onlineItem" v-for=" item in onlineItem" :key="item.id">
            <div
              style="height: 6vh; width: 6vh;  background-color: #f4f5fa; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
              <va-icon :name="item.icon" style="font-size: 25px; "></va-icon>
            </div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="image">
      </div>
      <div class="notice">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
          <div style="font-size: 16px; font-weight: bold">公告</div>
          <a href="" style="font-size: 12px">查看更多</a>
        </div>
        <div class="noticeList">
          <div class="noticeItem" v-for="item in noticeList" :key="item.id">
            <div class="type" :style="{'background':item.color,'color':item.textColor}">{{ item.type }}</div>
            <div class="content" style="">{{ item.content }}</div>
          </div>

        </div>
      </div>
      <div class="help">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
          <div style="font-size: 16px; font-weight: bold">帮助文档</div>
          <a href="" style="font-size: 12px">查看更多</a>
        </div>
        <div class="helpLink">
          <a href="">产品概括</a>
          <a href="">使用指南</a>
          <a href="">接入流程</a>
          <a href="">接口文档</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import WorkSpaceWarning from './workSpaceWarning.vue'
import Record from './record.vue'
import WarningPie from './warningPie.vue'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { WorkSpaceWarning, Record, WarningPie },
  data() {
    //这里存放数据
    return {
      functionItem: [
        {
          id: 1,
          name: '内容管理',
          icon: 'entypo-doc-text',
          url: '',
        },
        {
          id: 2,
          name: '内容统计',
          icon: 'fa-solid fa-bar-chart',
          url: '',
        },
        {
          id: 3,
          name: '高级管理',
          icon: 'entypo-tools',
          url: '',
        },
        {
          id: 4,
          name: '线上推广',
          icon: 'entypo-mobile',
          url: '',
        },
        {
          id: 5,
          name: '内容投放',
          icon: 'entypo-share',
          url: '',
        },
      ],
      onlineItem: [
        {
          id: 1,
          name: '数据统计',
          icon: 'fa-solid fa-list-ul',
          url: '',
        },
        {
          id: 1,
          name: '内容管理',
          icon: 'entypo-doc-text',
          url: '',
        },
        {
          id: 1,
          name: '高级管理',
          icon: 'entypo-tools',
          url: '',
        }
      ],
      noticeList: [
        {
          id: 1,
          type: "活动",
          color: "#FFF7E8",
          textColor:"#FF8E21",
          content: "内容最新优惠活动"
        },
        {
          id: 2,
          type: "消息",
          color: "#E8FFFB",
          textColor:"#44D440",
          content: "内容最新优惠活动"
        },
        {
          id: 3,
          type: "通知",
          color: "#E8F3FF",
          textColor:"#5373FF",
          content: "内容最新优惠活动"
        },
        {
          id: 3,
          type: "通知",
          color: "#E8F3FF",
          textColor:"#5373FF",
          content: "内容最新优惠活动"
        },
        {
          id: 3,
          type: "通知",
          color: "#E8F3FF",
          textColor:"#5373FF",
          content: "内容最新优惠活动"
        }
      ]
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.left {
  position: relative;
  width: 62vw;
  height: 100vh;

  .warning {
    position: relative;
  }

  .bottom {
    position: relative;
    width: 61vw;

    display: flex;
    flex-direction: row;

    .record {
      position: relative;
      margin-top: 20px;
    }

    .warningPie {
      position: relative;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
}

.right {
  position: relative;
  margin-left: 20px;
  width: 25vw;
  height: 100vh;

  .function {
    position: relative;
    height: 44vh;
    padding: 20px;
    padding-bottom: 10px;
    background-color: white;
    overflow: auto;

    .list {
      position: relative;
      height: 20vh;
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .item {
        width: 33%;
        height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    }

    .onlineList {
      position: relative;
      height: 10vh;
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: row;

      .onlineItem {
        width: 33%;
        height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    }
  }

  .image {
    position: relative;
    margin-top: 20px;
    height: 19vh;
    background-image: url(../../static/image3.jpg),;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .notice {
    position: relative;
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    height: 23vh;

    .noticeList {
      position: relative;
      margin-top: 10px;
      height: 17vh;
      display: flex;
      flex-direction: column;
      .noticeItem{
        position: relative;
        height: 6vh;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .type{
          width: 15%;
          height:3vh;
          margin-right:15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .help {
    position: relative;
    padding: 20px;
    margin-top: 20px;
    background-color: white;
    height: 15vh;

    .helpLink {
      position: relative;
      height: 10vh;
      width: 100%;
      margin-top: 20px;
      display: flex;

      flex-wrap: wrap;

      a {
        text-align: center;
        width: 50%;
        height: 5vh;
        font-size: 16px;
        color: #86909C;
      }
    }
  }
}</style>
