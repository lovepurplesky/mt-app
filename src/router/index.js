import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import Index from '@/page/index'
import goodList from '@/page/goodList'
import changeCity from '@/page/changeCity'
Vue.use(Router)

export default new Router({
  mode:'history',
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
      },{
        path:"/changeCity",
        name:'changeCity',
        component:changeCity
      }]
    }
  ]
})
