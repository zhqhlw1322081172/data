<template>
   <div class="main_right fr">
       <router-link to='/other'>
            <div class="right_1">
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
                    <img src="../assets/img/t_4.png" alt="">
                    湖南省货物周转量
                </div>
                <chart_3/>
            </div>
        </router-link>
        <router-link to='/other'>
            <div class="right_2">
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
                    <img src="../assets/img/t_5.png" alt="">
                    湖南省高速公路
                </div>
                <chart_4/>
            </div>
        </router-link>
        </div>
</template>

<script>
import chart_3 from "./chart_3"
import chart_4 from "./chart_4"
export default {
    name:'way',
    components:{
       chart_3,chart_4
   }
}
</script>

<style scoped>
.right_1{
    margin-bottom: 50px;
}
.fr{
    float: right;
}
.main_right a>div {
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

.main_right{
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

</style>


