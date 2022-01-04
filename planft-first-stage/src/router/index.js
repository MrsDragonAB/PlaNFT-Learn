import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import From from '../views/element/From.vue'
import Send from '../views/interactive/SendRequest.vue'
import Table from '../views/element/Table.vue'
import Shopping from '../views/shopping/index.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
      path: '/from',
      name: 'From',
      component: From,
    },
    {
      path: '/send',
      name: 'Send',
      component: Send,
    },
    {
      path: '/table',
      name: 'Table',
      component: Table,
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping,
    },
  ],
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router