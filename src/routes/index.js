import Vue from 'vue'
import Router from 'vue-router'

/* Viewers */
import Home from '@/views/home'
import News from '@/views/news/list'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/news',
      component: News
    }
  ]
})

