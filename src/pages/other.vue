<template>
    <div>
        <top></top>
        <div class="box">
            <router-link to='/' class="back" v-show='go'>返回</router-link>
        </div>
        <div class="content">
            <div class="data_mine">
                <othmid/>
            </div>
        </div>
    </div>
</template>

<script>
import top from "../components/top"
import othmid from "../components/othmid"
export default {
    name:'detail',

    data(){
        return{
            go:true
        }
    },
    components:{
        top,othmid
    }

}
</script>

<style scoped>

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

.data_mine{
  display: flex;
  height:800px;
}
</style>




