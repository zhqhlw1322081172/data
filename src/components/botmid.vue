<template>
    <div class="bottom_center fl">
            <div class="bottom_2 fl">
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
                    <img src="../assets/img/t_7.png" alt="">
                    湖南省交通
                </div>
                <div class="main_table t_btn8">
                    <table>
                        <thead>
                        <tr>
                            <th>运营数(辆)</th>
                            <th>线路总长度(公里)</th>
                            <th>客运总量(万人次)</th> 
                            <th>日期</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>21059</td>
                            <td>26497</td>
                            <td>184448</td>
                            <td>2018年</td>
                        </tr>
                        <tr>
                            <td>18777</td>
                            <td>21140</td>
                            <td>188808</td>
                            <td>2017年</td>
                        </tr>
                        <tr>
                            <td>15757</td>
                            <td>20225</td>
                            <td>201143</td>
                            <td>2016年</td>
                        </tr>
                        <tr>
                            <td>17458</td>
                            <td>19567</td>
                            <td>202446</td>
                            <td>2015年</td>
                        </tr>
                        <tr>
                            <td>11323</td>
                            <td>14562</td>
                            <td>279854</td>
                            <td>2014年</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bottom_3 fl">
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
                    <img src="../assets/img/t_7.png" alt="">
                   湖南省业务量
                </div>
                <div class="main_table t_btn2">
                    <table>
                        <thead>
                        <tr>
                            <th>省内(万件)</th>
                            <th>省外(万件)</th>
                            <th>国际(万件)</th>
                            <th>总业务量(万件)</th>
                            <th>日期</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>21352.36</td>
                            <td>68575.6</td>
                            <td>464.43</td>
                            <td>90392.39</td>
                            <td>2018年</td>
                        </tr>
                        <tr>
                            <td>17522.41</td>
                            <td>37111.03</td>
                            <td>278.5</td>
                            <td>54911.94</td>
                            <td>2017年</td>
                        </tr>
                        <tr>
                            <td>7014.14</td>
                            <td>26841.29</td>
                            <td>163.72</td>
                            <td>34019.15</td>
                            <td>2016年</td>
                        </tr>
                        <tr>
                            <td>2553.55</td>
                            <td>18072.54</td>
                            <td>129.65</td>
                            <td>20755.74</td>
                            <td>2015年</td>
                        </tr>
                        <tr>
                            <td>1427.04</td>
                            <td>10859.54</td>
                            <td>182.54</td>
                            <td>12469.11</td>
                            <td>2014年</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:"botmid"
}
</script>

<style scoped>
.bottom_center{
    width: 52%;
    height: 280px;
}
.bottom_2 {
    width: calc(50% - 35px);
    height: 280px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    margin-left: 25px;
    box-shadow: 0 0 10px #2C58A6;
}
.bottom_3 {
    width: calc(50% - 35px);
    height: 280px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    margin-left: 25px;
    box-shadow: 0 0 10px #2C58A6;
}
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
    margin-top:25px;
}
td {
    color: #fff;
    font-size: 10px;
    text-align: center;
}
th {
    font-size: 12px;
    font-weight: 600;
    color: #61d2f7;
    text-align: center;
}
tr{
    height: 42px;
}
.main_table tbody tr:nth-child(1),.main_table tbody tr:nth-child(3),.main_table tbody tr:nth-child(5) {
    background-color: #072951;
    box-shadow: -10px 0px 15px #2C58A6 inset, /*左边阴影*/
    10px 0px 15px #2C58A6 inset;
}
</style>


