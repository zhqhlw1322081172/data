<template>
    <div id="chart_2" class="chart t_btn9" style="width: 100%; height: 280px; -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1557018788669"><div style="position: relative; overflow: hidden; width: 316px; height: 280px; padding: 0px; margin: 0px; border-width: 0px; cursor: pointer;"><canvas data-zr-dom-id="zr_0" width="316" height="280" style="position: absolute; left: 0px; top: 0px; width: 316px; height: 280px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div></div>
</template>

<script>

import echarts from "echarts";
import '../../node_modules/echarts/map/js/hunan.js'
// import { Script } from 'vm';
export default {
    name:'chart_2',
    mounted(){
        var myChart = this.$echarts.init(document.getElementById('chart_2'))

        myChart.setOption({
            visualMap: {
                           show: false,
                           min: 0,
                           max: 100,
                           left: 'left',
                           top: 'bottom',
                           text: ['高', '低'], // 文本，默认为数值文本
                           calculable: true,
                           inRange: {
                               color: ['yellow', 'lightskyblue', 'orangered']
                           }
                       },
                       series: [{
                           type: 'map',
                           mapType: 'hunan',
                           roam: true,
                           label: {
                               normal: {
                                   show: true
                               },
                               emphasis: {
                                   textStyle: {
                                       color: '#fff'
                                   }
                               }
                           },
                           itemStyle: {
                               normal: {
                                   borderColor: '#389BB7',
                                   areaColor: '#fff',
                               },
                               emphasis: {
                                   areaColor: '#389BB7',
                                   borderWidth: 0
                               }
                           },
                           animation: false,
                           data: [{
                               name: '长沙市',
                               value:  100
                           }, {
                               name: '株洲市',
                               value: 96
                           }, {
                               name: '湘潭市',
                               value: 98
                           }, {
                               name: '衡阳市',
                               value: 80
                           }, {
                               name: '邵阳市',
                               value: 88
                           }, {
                               name: '岳阳市',
                               value: 79
                           }, {
                               name: '常德市',
                               value: 77,
                           }, {
                               name: '张家界市',
                               value: 33
                           }, {
                               name: '益阳市',
                               value: 69,
                           }, {
                               name: '郴州市',
                               value: 66
                           }, {
                               name: '永州市',
                               value: 22
                           },{
                                name: '娄底市',
                                value: 51
                           },{
                                name: '湘西土家族苗族自治州',
                                value: 44
                           },{
                                name: '怀化市',
                                value: 9
                           }]
                       }]
        })
    }
}

</script>

<style scoped>

</style>
