import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Weektask from '../views/Weektask.vue'
import Student from '../views/Student.vue'
import Students from '../views/Students.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/weektask/:id',
    name: 'weektask',
    component: Weektask
  },
  {
    path: '/student',
    name: 'students',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Student.vue')
    component: Students
  },
  {
    path: '/student/:id',
    name: 'student',
    component: Student
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router