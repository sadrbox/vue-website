import Vue from 'vue'
import VueRouter from 'vue-router'

/* Viewers */
import Home from './views/home/index.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: "/home",
      components: Home
    }
  ]
})

