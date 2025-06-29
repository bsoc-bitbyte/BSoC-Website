import { projectAuth } from '@/firebase/config'
import { createRouter, createWebHistory } from 'vue-router'
import { errorToast } from '@/composables/useToast'

import AuthLayout from '@/layouts/AuthLayout.vue'
import GeneralLayout from '@/layouts/GeneralLayout.vue'
import LandingLayout from '@/layouts/LandingLayout.vue'

import Scoreboard from '@/views/Scoreboard'
import Home from '@/views/Home'
import LandingPage from '@/views/LandingPage'
import MyPR from '@/views/MyPR'
import Projects from '@/views/Projects'
import SubmitPR from '@/views/SubmitPR'
import User from '@/views/User'

const requireAuth = (to, from, next) => {
	let user = projectAuth.currentUser
	if (!user) {
		errorToast('Authentication Required', 'Please log in to access this page.')
		next(false)
	} else {
		next()
	}
}

const requireNoAuth = (to, from, next) => {
	let user = projectAuth.currentUser
	if (user) {
		next({ path: '/scoreboard' })
	} else {
		next()
	}
}

const routes = [
	{
		path: '/',
		component: LandingLayout,
		children: [
			{
				path: '',
				name: 'LandingPage',
				component: LandingPage,
			},
		],
	},
	{
		path: '/',
		component: GeneralLayout,
		children: [
			{
				path: 'scoreboard',
				name: 'Scoreboard',
				component: Scoreboard,
				beforeEnter: requireAuth,
			},

			{
				path: 'myPR',
				name: 'MyPR',
				component: MyPR,
				beforeEnter: requireAuth,
			},
			{
				path: 'user/:uid',
				name: 'User',
				component: User,
				props: true,
				beforeEnter: requireAuth,
			},
			{
				path: 'projects',
				name: 'Projects',
				component: Projects,
			},
			{
				path: 'submit',
				name: 'SubmitPR',
				component: SubmitPR,
				beforeEnter: requireAuth,
			},
			{
				path: 'home',
				name: 'Home',
				component: Home,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
