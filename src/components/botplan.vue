<template>
    <div class="bottom_1 fl t_btn5" style="cursor: pointer;">
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
                <img src="../assets/img/t_6.png" alt="">
                湖南省飞机场
            </div>
            <chart_5/>
        </div>
</template>

<script>

import chart_5 from './chart_5'
export default {
    name:'botplan',
    components:{
        chart_5
    }
}
</script>

<style scoped>
.bottom_1{
    width: 24%;
    height: 280px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    box-shadow: 0 0 10px #2C58A6;
}
</style>
