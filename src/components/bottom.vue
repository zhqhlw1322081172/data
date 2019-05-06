<template>
    <div class="bottom">
        <botplan/>
        <botmid/>
        <botlast/>
    </div>
</template>

<script>
import botplan from './botplan'
import botmid from './botmid'
import botlast from './botlast'
export default {
    name:'bottom',
    components:{
        botplan,botmid,botlast
    }
}
</script>

<style>
.bottom{
    width: calc(100% - 40px);
    height: 280px;
    margin-left: 20px;
}
.fl{
    float: left;
}
</style>


