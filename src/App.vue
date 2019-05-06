<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import index from './pages/index'
export default {
  name: 'App',
  components:{
    index
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
body,html{
    width: 100%;
    height: auto;
    color: #333;
    background: url(./assets/img/true.png) no-repeat;
    background-size: 100% 100%;
}
</style>
