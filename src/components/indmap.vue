<template>
    <div class="main_center fl">
            <div class="center_text">
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
                    <img src="../assets/img/t_3.png" alt="">
                    中国地图
                </div>
                <chart_map/>
                <!-- <div id="chart_map" style="width: 100%; height: 610px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1557018788672"><div style="position: relative; overflow: hidden; width: 638px; height: 610px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"></div></div> -->
            </div>
        </div>
</template>

<script>

import chart_map from "./chart_map"
export default {
    name:'indmap',
    components:{
        chart_map
    }
}
</script>

<style scoped>
.main_center{
    width: 52%;
    height: 621px;
}
.center_text{
    width: calc(100% - 50px);
    height: 610px;
    margin-left: 25px;
    margin-right: 25px;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    box-shadow: 0px 0px 6px #2C58A6;
    position: relative;
}
</style>


