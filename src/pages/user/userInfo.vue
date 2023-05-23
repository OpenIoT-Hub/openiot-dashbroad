<!--  -->
<template>
    <div class='head'>

    </div>
    <div class="center">
        <div class="duty">
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
                <div style="font-size: 16px; font-weight: bold">职责范围</div>
                <a href="" style="font-size: 12px">查看更多</a>
            </div>
        </div>
        <div class="group">
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
                <div style="font-size: 16px; font-weight: bold">我的组织</div>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="news">
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
                <div style="font-size: 16px; font-weight: bold">最新动态</div>
                <a href="" style="font-size: 12px">查看更多</a>
            </div>
        </div>
        <div class="notice">
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
                <div style="font-size: 16px; font-weight: bold">站内通知</div>
            </div>
        </div>
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
.head {
    position: relative;
    width: 100%;
    height: 20vh;
    background-color: #E8F4FF;
}

.center {
    position: relative;
    margin-top: 2vh;
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: row;

    .duty {
        width: 71%;
        margin-right: 2vh;
        padding: 2vh;
        background-color: white;
    }

    .group {
        width: 28%;
        padding: 2vh;
        background-color: white;
    }
}

.bottom {
    position: relative;
    margin-top: 2vh;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;

    .news {
        width: 71%;
        margin-right: 2vh;
        padding: 2vh;
        background-color: white;
    }

    .notice {
        width: 28%;
        height: 40vh;
        padding: 2vh;
        background-color: white;
    }
}</style>