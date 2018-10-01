import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import User from '@/pages/User/User'
import My from '@/pages/My/My'
import Index from '@/pages/Index/Index'
import Edit from '@/pages/Edit/Edit'
import Detail from '@/pages/Detail/Detail'
import Create from '@/pages/Create/Create'
import Register from '@/pages/Register/Register'
import store from '@/store/index.js'
window.store = store;

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/create',
      name:'create',
      component: Create,
      meta: {requiresAuth: true}
    },
    {
      path:'/user/:userId',
      name:'user',
      component: User
    },
    {
      path:'/my',
      name:'my',
      component: My,
      meta: {requiresAuth: true}
    },
    {
      path:'/index',
      name:'index',
      component: Index
    },
    {
      path:'/edit/:blogId',
      name:'edit',
      component: Edit,
      meta: {requiresAuth: true}
    },
    {
      path:'/detail/:blogId',
      name:'detail',
      component: Detail
    },
    {
      path:'/register',
      name:'register',
      component: Register
    },
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if(!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }else {
        next();
      }
    })
  }else{
    next();
  }
})

export default router;