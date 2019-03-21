import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defautPage',
      component: defaultPage
    }
  ]
})
