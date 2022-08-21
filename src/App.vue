<template>
  <div id="app">
   <nav-bar></nav-bar>
   <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Nav/NavBar.vue"


export default {
  name: 'App',
  components: {
   NavBar,
  }
}
</script>

<style>
 
</style>
