<template>
    <div class="main_center fl">
        <div class="center_text t_cos0" >
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
                 湖南省货物周转量
            </div>
            <div id="chart_3" style="width: 100%; height: 778px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1557044765753"><div style="position: relative; overflow: hidden; width: 956px; height: 778px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="956" height="778" style="position: absolute; left: 0px; top: 0px; width: 956px; height: 778px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas><canvas data-zr-dom-id="zr_2" width="956" height="778" style="position: absolute; left: 0px; top: 0px; width: 956px; height: 778px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
            
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
import '../../node_modules/echarts/map/js/hunan.js'
export default {
    name:'othmid',
    mounted(){
        var myChart = this.$echarts.init(document.getElementById('chart_3'))
        myChart.clear();
        myChart.setOption({
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['铁路货物','国家铁路货物','地方铁路货物','合资铁路货物','公路货物','水运货物'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012年','2013年','2014年','2015年','2016年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '亿吨公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'铁路货物',
                    type:'line',
                    data:[3961.88, 4233.63, 4183.14, 3633.01, 3704.47]
                },
                {
                    name:'国家铁路货物',
                    type:'line',
                    data:[3374.76, 3364.76, 3274.76, 3371.82, 3259.87]
                },
                {
                    name:'地方铁路货物',
                    type:'line',
                    data:[14.77, 15.17, 13.17, 14.56, 15.84]
                },
                {
                    name:'合资铁路货物',
                    type:'line',
                    data:[686.17,847.26,895.22,865.28,886.72]
                },
                {
                    name:'公路货物',
                    type:'line',
                    data:[6133.47, 6577.89, 7019.56,6821.48,7294.59]
                },
                {
                    name:'水运货物',
                    type:'line',
                    data:[509.60, 862.54, 1481.77,1552.79,1333.62]
                }
            ]
        })
    }

}
</script>

<style scoped>
.main_center{
    width: 75%;
    height: 778px;
    margin: 0 auto;
    /* box-sizing: border-box; */
}

.center_text {
    width: calc(100% - 50px);
    height: 778px;
    margin-left: 25px;
    margin-right: 25px;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    border-radius: 2px;
    position: relative;
    margin-top:20px;
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
    /* padding-left: 45px; */
    padding:0;
    z-index: 1000;
    text-align: center;
}
/* 左上边框 */
.t_line_box i {
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
}
/* 右上 */
.t_r_line {
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
}
/* 左下 */
.l_b_line {
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
}
/* 右下 */
.r_b_line {
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
}
</style>

