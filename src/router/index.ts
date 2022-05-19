import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:to=>{
        return {path:'/oneframeName'}
      }
    },
    {
      path: '/:frameName',
      name: 'Home2',
      component: Home
    },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router