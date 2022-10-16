import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import promote from "@/components/promote";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'HelloWorld',  //元件呈現的名稱
      path: '/', //對應的路徑
      component: HelloWorld  //對應的元件
    },
    {
        name: 'promote',  //元件呈現的名稱
        path: '/promote', //對應的路徑
        component: promote  //對應的元件
      }
  ]
})
