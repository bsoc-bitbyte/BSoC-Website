<template>
	<div id="ody" :style="{ backgroundColor: bodyBackgroundColor }">
		<nav class="navbar navbar-expand-lg text-white">
			<div class="container-fluid nav-container" style="display: flex">
				<div class="logo" style="margin-left: 10px; margin-top: 10px">
					<router-link
						to="/"
						class="text-white"
						style="margin-right: 0%"
						href="#"
					>
						<img src="../assets/logo.png" alt="logo" />
						<h2 style="margin-top: 2.5px; margin-left: 10px">BSOC</h2>
					</router-link>
				</div>

				<div id="nav">
					<section class="mb-3" id="hambur">
						<div id="tension">
							<div class="hamburger-menu">
								<input id="menu__toggle" type="checkbox" />
								<label class="menu__btn" for="menu__toggle">
									<span></span>
								</label>

								<ul class="menu__box">
									<router-link
										v-if="isloggedIn"
										class="menu__item"
										to="/dashboard"
									>
										Dashboard
									</router-link>

									<router-link class="menu__item" to="/home">
										Home
									</router-link>

									<router-link
										class="menu__item"
										to="/myPR"
										v-if="isloggedIn && !userPR"
										v-on:click="handleMyPR()"
									>
										My PR's
									</router-link>

									<router-link
										class="menu__item"
										to="/submit"
										v-if="isloggedIn"
									>
										SubmitPR
									</router-link>

									<router-link class="menu__item" to="/projects">
										Projects
									</router-link>

									<span
										v-if="!isloggedIn"
										class="navbar-nav auth menu__item"
										@click="handleGithubAuth"
										style="cursor: pointer; margin-left: 1.3em"
									>
										<img
											src="../assets/githublogo.svg"
											alt="github logo"
										/>Login
									</span>

									<div
										class="navbar-nav auth menu__item"
										style="cursor: pointer; margin-left: 2em"
										v-on:click="handleLogout()"
										v-if="isloggedIn && !userPR"
									>
										LogOut
									</div>
								</ul>
							</div>
						</div>
					</section>

					<div class="navbar-collapse collapse" id="Yahoo">
						<div
							class="navbarhh"
							style="
								float: left !important;
								margin-left: 0px;
								display: flex;
								margin-right: 40px;
							"
						>
							<div class="d-flex align-item-center" v-if="isloggedIn">
								<router-link
									class="nav-link px-2 text-white"
									to="/dashboard"
									style="
										text-decoration: none;
										float: left;
										color: inherit;
										margin-left: 0px;
										margin-top: 23px;
									"
									v-if="isHome"
								>
									Dashboard
								</router-link>

								<router-link
									class="nav-link px-4 text-white"
									to="/home"
									style="
										text-decoration: none;
										margin-top: 22px;
										color: inherit;
									"
									v-if="!isHome"
								>
									Home
								</router-link>

								<router-link
									class="nav-link px-4 text-white"
									to="/dashboard"
									style="text-decoration: none; color: inherit"
								>
									<button
										class="nav-button"
										style="float: left; margin-top: 23px; margin-left: 0px"
										v-on:click="handleMyPR()"
										v-if="isloggedIn && userPR"
									>
										Dashboard
									</button>
								</router-link>

								<router-link
									class="nav-link px-4 text-white"
									to="/myPR"
									style="text-decoration: none; color: inherit"
									v-if="isloggedIn && !userPR"
								>
									<button
										class="nav-button"
										style="margin-top: 23px"
										v-on:click="handleMyPR()"
										v-if="isloggedIn && !userPR"
									>
										My PR's
									</button>
								</router-link>

								<router-link
									class="nav-link mt-4 px-4 text-white"
									to="/submit"
									style="
										text-decoration: none;
										margin-top: 22px;
										color: inherit;
									"
									v-if="isloggedIn"
									>SubmitPR</router-link
								>
							</div>
							<div v-else class="hii" style="float: left">
								<button
									class="nav-button hii mt-1"
									style="
										display: flex;
										float: left;
										padding-left: -100%;
										margin-top: 23px !important;
									"
									v-on:click="handleLogin()"
								>
									Dashboard
								</button>
							</div>
							<router-link
								class="nav-link mz-0 mx-0 my-0 mt-4 px-4 text-white"
								to="/projects"
							>
								Projects
							</router-link>
						</div>
					</div>
				</div>
				<div v-if="!isloggedIn" class="navbar-nav auth">
					<span
						class="hambur2"
						@click="handleGithubAuth"
						style="cursor: pointer; margin-right: 0px; margin-top: 14px"
					>
						<img src="../assets/githublogo.svg" alt="github logo" />
					</span>
				</div>
				<div v-if="isloggedIn" class="navbar-nav auth">
					<button
						class="nav-button hambur2"
						style="margin-right: 80px; margin-top: 22px"
						v-on:click="handleLogout()"
						v-if="isloggedIn && !userPR"
					>
						LogOut
					</button>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
import useLogout from '@/composables/useLogout'
import addUsers from '@/composables/addUsers'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { projectAuth } from '../firebase/config'
import useSignInGithub from '../composables/useSignInGithub'
import { errorToast } from '../composables/useToast'

export default {
	name: 'Nav',

	created() {
		this.checkAuth()
		this.isHonePage()
	},

	beforeRouteLeave(to, from, next) {
		this.isHonePage()
		next()
	},
	setup(props, { emit }) {
		const { error, logout } = useLogout()
		let isloggedIn = ref(false)
		let isHome = ref(true)
		const userPR = ref(false)
		const router = useRouter()
		const collapse11 = ref(false)

		const { e, addDoc } = addUsers('Users')

		const { errr, githubLogin } = useSignInGithub()
		const handleGithubAuth = async () => {
			try {
				const user = await githubLogin()

				if (user && !errr.value) {
					const data = {
						uid: user.uid,
						displayName: user.displayName || '',
						email: user.email || '',
						photoURL: user.photoURL || '',
						score: 0,
					}

					await addDoc(data)
					emit('login')
				} else {
					if (errr.value?.code === 'auth/popup-closed-by-user') {
						errorToast('Login was cancelled. Please try again.')
					} else {
						console.log(errr.value)
						errorToast(
							'Github login failed',
							errr.value?.message || 'Unknown error'
						)
					}
				}
			} catch (err) {
				if (err.code === 'auth/popup-closed-by-user') {
					errorToast('Login was cancelled.')
				} else {
					console.log('Github login failed: ', err)
					errorToast('Login failed', err.message || 'something went wrong')
				}
			}
		}

		const checkAuth = () => {
			projectAuth.onAuthStateChanged((user) => {
				if (user) {
					isloggedIn.value = true
				} else {
					isloggedIn.value = false
				}
			})
		}

		const isHonePage = () => {
			if (window.location.pathname === '/home') {
				console.log('home')
				isHome.value = true
			} else {
				isHome.value = false
			}
			if (window.location.pathname === '/myPR') {
				userPR.value = true
			}
		}

		const handleLogout = () => {
			logout()
			if (!error.value) {
				router.push({ name: 'Home' })
			} else {
				console.log(error.value)
			}
		}

		const handleMyPR = () => {
			if (userPR.value) {
				userPR.value = false
			} else {
				userPR.value = true
			}
		}

		return {
			handleMyPR,
			userPR,
			isloggedIn,
			checkAuth,
			isHonePage,
			handleLogout,
			isHome,
			collapse11,
			handleGithubAuth,
		}
	},
}
</script>

<style scoped>
@media (min-width: 991px) {
	#hambur {
		display: none !important;
	}
}

@media (max-width: 991px) {
	.hambur2 {
		display: none !important;
		/* display:none !important; */
	}
}

@media (min-width: 992px) {
	.hii {
		display: contents;
		float: left;
		/* margin-left: 0px !important; */
		margin-left: -25vw !important;
		margin-top: 1px !important;
	}
}

@media (min-width: 1300px) {
	.hii {
		display: contents;
		float: left;
		/* margin-left: 0px !important; */
		margin-left: -33vw !important;
	}
}

@media (min-width: 1800px) {
	.hii {
		display: contents;
		float: left;
		/* margin-left: 0px !important; */
		margin-left: -38vw !important;
	}
}

#menu__toggle {
	opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
	transform: rotate(45deg);
}

#menu__toggle:checked ~ .menu__btn > span::before {
	top: 0;
	transform: rotate(0);
}

#menu__toggle:checked ~ .menu__btn > span::after {
	top: 0;
	transform: rotate(90deg);
}

#menu__toggle:checked ~ .menu__box {
	visibility: visible;
	left: 0;
}

.menu__btn {
	display: flex;
	align-items: center;
	position: fixed;
	top: 30px;
	/* left: 20px; */
	right: 70px;
	margin-left: auto;
	width: 26px;
	height: 26px;
	/* color: white; */

	cursor: pointer;
	z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
	display: block;
	position: absolute;

	width: 100%;
	height: 2px;

	background-color: rgb(245, 235, 235) !important;

	transition-duration: 0.25s;
}

.menu__btn > span::before {
	content: '';
	top: -8px;
}

.menu__btn > span::after {
	content: '';
	top: 8px;
}

.menu__box {
	display: block;
	position: fixed;
	visibility: hidden;
	top: 0;
	left: -100%;

	width: 100vw;
	height: 100vh;

	margin: 0;
	padding: 150px 0px;

	list-style: none;

	background-color: #19192a;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);

	transition-duration: 0.25s;
}

.menu__item {
	display: flex;
	justify-content: center;
	text-align: center;
	display: block;
	padding: 12px 24px;

	color: white;
	background-color: #19192a;

	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: 600;

	text-decoration: none;

	transition-duration: 0.25s;
}

.menu__item:hover {
	background-color: rgb(141, 141, 178);
}

.navbar {
	position: fixed;
	height: 8vh;
	width: 100vw;
	z-index: 10;
	-webkit-backdrop-filter: blur(8px);
	backdrop-filter: blur(8px);
}

.nav-container {
	display: flex;
	align-items: center;
	gap: 2em;
}

.logo {
	margin: -10px 0;
}

.logo a {
	display: flex;
	gap: 0.4em;
	text-decoration: none;
}

.logo h2 {
	top: 0.15em;
	position: relative;
}

.logo img {
	position: relative;
	object-fit: contain;
	height: 3em;
	width: 3em;
}

.auth {
	margin-right: 2em;
}

.nav-button {
	background: none;
	border: none;
	color: white;
	margin-left: 0%;
}
</style>
