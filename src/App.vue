<template>
  <div id="app">
    <!-- <Nav/> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// import Nav from './view/components/navbar.vue'
export default {
    components: {
    // Foot,
    // Nav,
    //  Foots
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
 
}
html {
  overflow-x: hidden;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
   background: black;
}
html::-webkit-scrollbar {
  display: none; 
}
</style>
