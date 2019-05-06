<template>
    <div>
        <top/>
        <tit/>
        <div class="content">
            <div class="data_mine">
                <earn/>
                <indmap/>
                <way/>
            </div>
        </div>
        <bottom/>
    </div>
</template>

<script>
import top from "../components/top"
import tit from "../components/tit"
import earn from "../components/earn"
import indmap from "../components/indmap"
import way from "../components/way"
import bottom from "../components/bottom"
export default {
    name:'index',
    data(){
        return{

        }
    },
    components:{
        top,tit,earn,indmap,way,bottom
    }
}
</script>
<style>
f1{
    float: left;
}

.content{
    min-width: 1366px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
}
.data_mine{
    width: calc(100% - 40px);
    margin-bottom: 40px;
    height: 615px;
    margin-left: 20px;
}

.t_line_box {
    position: absolute;
    width: 100%;
    height: 100%;
}
.fl {
    float: left;
}
.main_title img{
     position: absolute;
    top: 8px;
    left: 20px;
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

