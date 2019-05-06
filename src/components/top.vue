<template>
    <div class="pic">
        <div class="wz">
            可视化Echarts大数据服务平台
        </div>
        <!-- <div class="box">
            <router-link to='/' class="back" v-show='go'>返回</router-link>
        </div> -->
        
    </div>
</template>

<script>
export default {
    name:"top",
    data(){
        return{
            go:false
        }
    }
}
</script>

<style scoped>
.pic{
    width: 100%;
    min-width: 1366px;
    height: 80px;
    background: url(../assets/img/title.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.wz{
    text-align: center;
    line-height: 80px;
    font-size: 2.3em;
    color: white;
}
.box{
    width: 90px;
    text-align: center; 
     line-height: 80px;
     position: absolute;
     top:25px;
     right:40px;
}
a{
    display: block;
    width: 80px;
    height: 37px;
    background-color: #2C58A6;
    border-color: #0263ff; 
    line-height: 37px;
    font-weight: 600;
    color: #fff;
    font-size: 13px;
    text-decoration: none;
    border-radius: 5px;
}
</style>


