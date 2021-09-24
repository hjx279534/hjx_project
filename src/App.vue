<template>
  <div id="app">          
      <router-view></router-view>      
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
html,body{
  height: 100%;  
}
*{
  margin:0;
  padding: 0;
}
#app {
  background-color: rgb(206, 228, 173);
  height: 100%;  
}
a{
  text-decoration: none;
}
a:link {
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: rgb(104, 201, 91);
  cursor: pointer;
}
a:active {
  color: black;
}
.el-carousel__indicators{
  margin: 74px !important;  
}
</style>
