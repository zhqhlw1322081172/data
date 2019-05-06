<template>
    <div class="main_left fl">
            <router-link to='/detail'>
                <div class="left_1 t_btn6" style="cursor: pointer;">
                    <!--左上边框-->
                    <div class="t_line_box">
                        <i class="t_l_line"></i> 
                        <i class="l_t_line"></i> 
                    </div> 
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i> 
                        <i class="r_t_line"></i> 
                    </div> 
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i> 
                        <i class="b_l_line"></i> 
                    </div> 
                        <!--右下边框-->
                    <div class="t_line_box">
                        <i class="r_b_line"></i> 
                        <i class="b_r_line"></i> 
                    </div> 
                    <div class="main_title">
                        <img src="../assets/img/t_1.png" alt="">
                    湖南省货运收入
                    </div>
                    <chart_1/>
                </div>
            </router-link>
            <router-link to='/detail'>
                <div class="left_2" style="cursor: pointer;">
                    <!--左上边框-->
                    <div class="t_line_box">
                        <i class="t_l_line"></i> 
                        <i class="l_t_line"></i> 
                    </div> 
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i> 
                        <i class="r_t_line"></i> 
                    </div> 
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i> 
                        <i class="b_l_line"></i> 
                    </div> 
                        <!--右下边框-->
                        <div class="t_line_box">
                        <i class="r_b_line"></i> 
                        <i class="b_r_line"></i> 
                    </div> 
                    <div class="main_title">
                        <img src="../assets/img/t_2.png" alt="">
                        湖南省地图
                    </div>
                    <chart_2/>
                </div>
            </router-link>
        </div>
</template>

<script>

import echarts from "echarts";
import '../../node_modules/echarts/map/js/hunan.js'
import chart_1 from "./chart_1";
import chart_2 from "./chart_2";
export default {
    name:'earn',
    components:{
        chart_1,chart_2
    }
}
   

</script>

<style scoped>


.left_1{
    margin-bottom: 50px;
}

.main_left a>div {
    width: 100%;
    height: 280px;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    position: relative;
    box-shadow: 0 0 10px #2C58A6;
}
.t_line_box {
    position: absolute;
    width: 100%;
    height: 100%;
}
.fl {
    float: left;
}
.main_left{
   width: 24%;
   position: relative;
}


.main_title{
    width: 180px;
    height: 35px;
    line-height: 33px;
    background-color: #2C58A6;
    border-radius: 18px;
    position: absolute;
    top: -17px;
    left: 50%;
    margin-left: -90px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    box-sizing: border-box;
    padding-left: 45px;
    z-index: 1000;
}
/* 左上边框 */
/* .t_line_box i {
    background-color: #4788fb;
    box-shadow: 0px 0px 10px #4788fb;
    position: absolute;
}
.t_l_line {
    height: 5px;
    width: 26px;
    left: -3px;
    top: -3px;
}
.l_t_line {
    width: 5px;
    height: 24px;
    left: -3px;
    top: -3px;
} */
/* 右上 */
/* .t_r_line {
    height: 5px;
    width: 26px;
    right: -3px;
    top: -3px;
}
.r_t_line {
    width: 5px;
    height: 24px;
    right: -3px;
    top: -3px;
}  */
/* 左下 */
/* .l_b_line {
    width: 5px;
    height: 24px;
    left: -3px;
    bottom: -3px;
}
.b_l_line {
    height: 5px;
    width: 26px;
    left: -3px;
    bottom: -3px;
}  */
/* 右下 */
/* .r_b_line {
    width: 5px;
    height: 24px;
    right: -3px;
    bottom: -3px;
}
.b_r_line {
    height: 5px;
    width: 26px;
    right: -3px;
    bottom: -3px;
} */
</style>

