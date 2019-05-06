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
                 中国地图
            </div>
            <div id="chart_map" style="width: 100%; height: 778px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1557044765753"><div style="position: relative; overflow: hidden; width: 956px; height: 778px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="956" height="778" style="position: absolute; left: 0px; top: 0px; width: 956px; height: 778px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas><canvas data-zr-dom-id="zr_2" width="956" height="778" style="position: absolute; left: 0px; top: 0px; width: 956px; height: 778px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
            
        </div>
    </div>
</template>

<script>
    
import echarts from "echarts";
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
    name:'detright',
    mounted(){
        var myChart = this.$echarts.init(document.getElementById('chart_map'))

        var mapName = 'china'
        var data = []
        var toolTipData = [];
        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        var geoCoordMap = {
            '福州': [119.4543, 25.9222],
            '长春': [125.8154, 44.2584],
            '重庆': [107.7539, 30.1904],
            '西安': [109.1162, 34.2004],
            '成都': [103.9526, 30.7617],
            '常州': [119.4543, 31.5582],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '海口': [110.3893, 19.8516],
            '长沙': [113.019455,28.200103],
            '上海': [121.40, 31.73],
            '内蒙古': [106.82, 39.67]
        };

        var GZData = [
            [{
                name: '长沙'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '长沙'
            }, {
                name: '长春',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '重庆',
                value: 70
            }],
            [{
                name: '长沙'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '长沙'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '长沙'
            }, {
                name: '常州',
                value: 40
            }],
            [{
                name: '长沙'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '长沙'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '长沙'
            }, {
                name: '海口',
                value: 10
            }],
            [{
                name: '长沙'
            }, {
                name: '上海',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '内蒙古',
                value: 80
            }]
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#c5f80e'];
        var series = [];
        [
            ['石家庄', GZData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
        });

        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        })
    }
}
</script>
}
</script>

<style scoped>
.t_line_box {
    position: absolute;
    width: 100%;
    height: 100%;
}
.main_center{
    width: 75%;
    height: 778px;
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
    padding-left: 45px;
    z-index: 1000;
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


