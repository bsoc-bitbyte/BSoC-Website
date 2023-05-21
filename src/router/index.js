import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/LandingPage.vue";
import Auth from "@/views/Auth";
import {projectAuth} from "@/firebase/config";
import Dashboard from "@/views/Dashboard";
import SubmitPR from "@/views/SubmitPR";


const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(!user) {
    next({path: "/auth"})
  }
  else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(user) {
    next({path: "/dashboard"})
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    beforeEnter: requireNoAuth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/submit',
    name: 'Submit',
    component: SubmitPR,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
