<template>
  <div id="app">
    <router-view></router-view>
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
import FooterMenu from "./components/footerMenu/FooterMenu.vue"
import store from './store/store.js';

export default {
  name:'App',
  components: {
    FooterMenu
  },
  data() {
    return {
    }
  },
  mounted(){
  },
  store
};
</script>

<style>
body,#app {
  background-color: #f2f2f2;
}

#app{
  height: 13.34rem;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 1rem;
}
</style>
