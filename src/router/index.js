import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import detail from '@/pages/detail'
import other from '@/pages/other'
import chart_00 from '@/components/chart_00'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/chart_00',
      name: 'chart_00',
      component: chart_00
    }
  ]
})
