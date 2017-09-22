import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import overview from '@/page/overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: overview,
    },
     {
      path: '/overview',
      name: 'overview',
      component: overview,
    }
  ]
})
