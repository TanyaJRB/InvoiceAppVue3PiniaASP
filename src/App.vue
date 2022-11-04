<template>
  <img alt="Vue logo" src="./assets/invoiceSVGlogo.png" class="w-20 place-items-center">
  <!-- <div id="nav">
      <router-link :to="{ name: 'HomePage' }">Hello World</router-link> |
      <router-link :to="{ name: 'UserForm' }">Create New User</router-link>
  </div> -->
  <router-view />
  <!-- <user-form></user-form>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// import UserForm from './components/UserForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    // UserForm
  }
});
</script>

<style>
#app {
  font-family: Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
