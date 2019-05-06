<template>
    <div class="main_left fl">
        <div class="left_1">
            <ul class="t_btn" >
                <li v-for="(item,index) in items" :key='index'>
                    <button class="t_btn0" @click="show">{{item}}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'detleft',
    data(){
        return{
            items:[
                '中国地图',
                '中国铁路',
                'GPS',
                '湖南省',
                '湖南飞机场',
                '湖南铁路',
                '湖南公路',
                '交通就业量',
                '湖南货运量',
                '各市货运量',
                '货物周转量',
                '运输线长度',
                '湖南业务量',
                '营运汽车',
                '公共交通'
            ]
        }
    },
    methods:{
        show(){

        }
    }
}
</script>

<style scoped>

.left_1{
    width: 100%;
    height:780px;
}
.main_left{
    width: 24%;
    height:780px;
}
ul{
    margin-top: 20px; 
    margin-bottom: 10px;
    box-sizing: border-box;
}
ul,li{
    list-style: none;
}
 li {
    display: inline-block;
    margin: 0 0px 20px 20px;
}
button{
    width: 80px;
    height: 39px;
    color: white;
    font-weight: 600;

    padding: 10px 5px;
    border-style: solid;
    border-width: 0;
    cursor: pointer;
    font-family: inherit;
    line-height: normal;
    margin: 0 0 0.5em 0;
    position: relative;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: .8em;
    background-color: #2C58A6;
    border-color: #0263ff;
    box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.2) inset !important;
    margin-right: 0.5em;
    border-radius: 4px;
}
</style>


