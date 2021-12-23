import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../components/Main.vue'
import Main1 from '../components/Main1.vue'
import Main2 from '../components/Main2.vue'
import Main3 from '../components/Main3.vue'
import Main4 from '../components/Main4.vue'




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
        },
        {
          path: '/main2',
          name: 'Main2',
          component: Main2,
        },
        {
          path: '/main3',
          name: 'Main3',
          component: Main3,
        },
        {
          path: '/main4',
          name: 'Main4',
          component: Main4,
        }
      ]
    },
  ]
})


