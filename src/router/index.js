import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'

// 个人介绍
import ShowIntroduce from '@/views/introduce/ShowIntroduce'
import ModifyIntroduce from '@/views/introduce/ModifyIntroduce'

// 留言管理
import ManageMes from '@/views/message/ManageMes'
import ModifyMes from '@/views/message/ModifyMes'

// 笔记管理
import ManageNote from '@/views/note/ManageNote'
import ModifyNote from '@/views/note/ModifyNote'
import AddNote from '@/views/note/AddNote'
import DeleteNote from '@/views/note/DeleteNote'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/showintroduce' },
      { path: '/welcome', component: Welcome },
      { path: '/managemes', component: ManageMes },
      { path: '/modifymes', component: ModifyMes },
      { path: '/managenote', component: ManageNote },
      { path: '/modifynote', component: ModifyNote },
      { path: '/addnote', component: AddNote },
      { path: '/deletenote', component: DeleteNote },
      { path: '/showintroduce', component: ShowIntroduce },
      { path: '/modifyintr', component: ModifyIntroduce },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
