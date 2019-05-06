<template>
    <div class="bottom_4 fr">
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
               湖南省汽车
            </div>
            <div class="main_table t_btn3">
                <table>
                    <thead>
                    <tr>
                        <th>载客汽车(万辆)</th>
                        <th>载货汽车(万辆)</th>
                        <th>汽车拥有量(万辆)</th>
                        <th>日期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2.53</td>
                        <td>142.65</td>
                        <td>145.18</td>
                        <td>2018年</td>
                    </tr>
                    <tr>
                        <td>2.52</td>
                        <td>139.95</td>
                        <td>142.47</td>
                        <td>2017年</td>
                    </tr>
                    <tr>
                        <td>2.65</td>
                        <td>137.96</td>
                        <td>140.61</td>
                        <td>2016年</td>
                    </tr>
                    <tr>
                        <td>2.97</td>
                        <td>131.48</td>
                        <td>134.45</td>
                        <td>2015年</td>
                    </tr>
                    <tr>
                        <td>3.23</td>
                        <td>99.99</td>
                        <td>103.22</td>
                        <td>2014年</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
export default {
    name:'botlast'
}
</script>

<style scoped>
.bottom_4{
        width: 24%;
    height: 280px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #2C58A6;
    box-shadow: 0 0 10px #2C58A6;
}
.fr{
    float: right;
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


