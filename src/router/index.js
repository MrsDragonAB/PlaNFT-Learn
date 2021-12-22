import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../components/Main.vue'
import Main1 from '../components/Main1.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      
      children:[
        {
         
          path: '/main1',
          name: 'Main1',
          component: Main1,
        }
      ]
    },
  ]
})
