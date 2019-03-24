import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import Index from '@/page/index'
import goodList from '@/page/goodList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defautPage',
      component: defaultPage,
      redirect:"/index",
      children:[{
        path:'s/:name',
        name:'goods',
        component:goodList
      },{
        path:'/index',
        name:'index',
        component:Index
      }]
    }
  ]
})
