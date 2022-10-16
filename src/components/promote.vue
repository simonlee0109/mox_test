<template>
    <div style="height:2000px">
      <test></test>
    </div>
  </template>
  
  <script>
  import test from './test/test.vue'
  export default {
    components: {
    test
  }
  }
  </script>
  
  <style>
    .header-logo{
      height:35px;
      width:121px;
    }
  
    .header-button{
      background-color: black;
      border-radius: 30px;
      color: white;
      height:56px;
      width:96px;
      text-align: center;
      line-height: 56px;
    }
  
    .header{
      transform: translateX(-50%);
    }
  
    .header-button:hover{
      box-shadow: 0 0 30px #00faff;
      transition: all 0.2s linear;
    }
  </style>