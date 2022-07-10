import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/homePage'
import Medicine from '@/components/medicineList'

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
    }
  ]
})
