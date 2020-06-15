import Vue from 'vue'
import Router from 'vue-router'

/* Viewers */
import Home from '@/views/home'
import Post from '@/views/post/list'
import PostAdd from '@/views/post/add'


Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post',
      component: Post
    },
    {
      path: '/post/add',
      component: PostAdd
    }
  ]
})

