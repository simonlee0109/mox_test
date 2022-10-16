<template>
  <div id="app">
    <div class="flex mt-[40px] fixed top-0 right-[0%] w-[100%] max-w-[1900px]">
        <div class="flex mr-[40%]">
          <div class="">
            <img src="@/assets/Logo.svg" class="header-logo">
          </div>
          <div class="">
            <img src="@/assets/SC_Logo.svg" class="header-logo">
          </div>
        </div>

        <div class="flex">
          <div class="mr-[20px] leading-[56px]">Features</div>
          <div class="mr-[20px] leading-[56px]" @click="go">Promotions</div>
          <div class="mr-[20px] leading-[56px]">About us</div>
          <div class="mr-[20px] leading-[56px]">FAQ</div>
          <div class="mr-[20px] header-button">Get Mox</div>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
import router from '@/router';
export default {
  name: 'App',
  methods:{
    go(){
      router.push('/promote')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
