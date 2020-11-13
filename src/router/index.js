import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CopClass from '@/components/EnterPage'
import CRUBClass from '@/components/CRUBDemo'
import VIfClass from '@/components/VIfDemo'
import getFileClass from '@/components/getFile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
          path: '/enter/',
          name: 'CopName',
          component: CopClass
      },
      {
          path: '/crubdemo/',
          name: 'CRUBName',
          component: CRUBClass
      },
      {
          path: '/vifdemo/',
          name: 'VIfName',
          component: VIfClass
      },
      {
          path: '/getFile',
          name: 'getFileName',
          component: getFileClass
      }
  ]
})
