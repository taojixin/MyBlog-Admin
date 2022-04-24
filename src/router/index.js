import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'

import ManageMes from '@/views/message/ManageMes'
import ModifyMes from '@/views/message/ModifyMes'
import ManageNote from '@/views/note/ManageNote'
import ModifyNote from '@/views/note/ModifyNote'
import AddNote from '@/views/note/AddNote'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/welcome' },
      { path: '/welcome', component: Welcome },
      { path: '/managemes', component: ManageMes },
      { path: '/modifymes', component: ModifyMes },
      { path: '/managenote', component: ManageNote },
      { path: '/modifynote', component: ModifyNote },
      { path: '/addnote', component: AddNote },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
