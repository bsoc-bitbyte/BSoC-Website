import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage";
import Auth from "@/views/Auth";
import { projectAuth } from "@/firebase/config";
import Dashboard from "@/views/Dashboard";
import SubmitPR from "@/views/SubmitPR";
import Home from "@/views/Home";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import Projects from "@/views/Projects"

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ path: "/auth" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ path: "/dashboard" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: requireAuth,
  },
  {
    path: "/submit",
    name: "Submit",
    component: SubmitPR,
    beforeEnter: requireAuth,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: Signup,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/projects",
    name: "Project",
    component: Projects,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
