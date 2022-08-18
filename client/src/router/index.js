import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/homePage'
import Medicine from '@/components/medicineList'
import Login from '@/components/login'
import Signup from '@/components/signup'
import medCart from '@/components/medCart'
import checkOutPage from '@/components/checkOutPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/medicine',
      name: 'Medicine',
      component: Medicine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: Signup
    },
    {
      path: '/medCart',
      name: 'medCart',
      component: medCart
    },
    {
      path: '/checkOutPage',
      name: 'checkOutPage',
      component: checkOutPage
    }
  ]
})
