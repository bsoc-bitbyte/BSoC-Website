<template>
	<header :class="{ 'scrolled-nav': scrollNav }">
		<nav>
			<div class="branding" v-show="!mobile">
				<router-link to="/">
					<img src="../assets/BsoC logo.svg" alt="img" />
				</router-link>

				<b><router-link to="/" class="text">BSOC</router-link></b>
			</div>

			<div class="brand" v-show="mobile">
				<router-link to="/">
					<img src="../assets/BsoC logo.svg" alt="img" />
				</router-link>

				<b><router-link to="/" class="txt">BSOC</router-link></b>
			</div>

			<!-- Navbar -->
			<div class="nav-div">
				<ul v-show="!mobile" class="navigations">
					<li>
						<router-link
							class="link"
							to="/home"
							@click.native="setActiveMenuItemAndCloseNav('home')"
						>
							Home
						</router-link>
					</li>

					<li>
						<router-link
							class="link"
							to="/dashboard"
							@click.native="setActiveMenuItemAndCloseNav('dashboard')"
						>
							Dashboard
						</router-link>
					</li>

					<li>
						<router-link
							class="link"
							to="/projects"
							@click.native="setActiveMenuItemAndCloseNav('projects')"
						>
							Projects
						</router-link>
					</li>

					<template v-if="isLoggedIn">
						<li>
							<router-link
								class="link"
								to="/submit"
								@click.native="setActiveMenuItemAndCloseNav('submit')"
							>
								Submit PR
							</router-link>
						</li>

						<li>
							<router-link
								class="link"
								to="/myPR"
								@click.native="setActiveMenuItemAndCloseNav('myPR')"
							>
								My PR
							</router-link>
						</li>

						<div class="animation start-home"></div>
					</template>
					<div class="animation1 start-home1" v-if="!isLoggedIn"></div>
					<div class="line"></div>
				</ul>
			</div>

			<div class="auth-div">
				<ul v-show="!mobile" class="authnavigations">
					<template v-if="!isLoggedIn">
						<li>
							<div class="auth2" @click="login">Login</div>
						</li>

						<li>
							<div class="auth2" @click="signup">Sign Up</div>
						</li>
					</template>

					<template v-else>
						<li @click="logout" class="auth">Log Out</li>
					</template>
				</ul>
			</div>
			<Login
				v-if="showLogin && !isLoggedIn"
				:toggle="toggleLogin"
				@loginSuccess="handleLoginSuccess"
			/>
			<Signup
				v-if="showSignup && !isLoggedIn"
				:toggle="toggleSignup"
				@signupSuccess="handleSignupSuccess"
			/>

			<!-- Hamburger -->

			<div class="icon" @click="toggleMobileNav">
				<i
					v-show="mobile && !mobileNav"
					class="fas fa-bars"
					:class="{ 'icon-active': mobileNav }"
					style="
						font-size: 1.5rem;
						position: fixed;
						top: 20px;
						right: 25px;
						cursor: pointer;
						z-index: 100;
					"
				></i>
			</div>

			<div class="icon" @click="toggleMobileNav">
				<i
					v-show="mobile && mobileNav"
					class="fas fa-times"
					:class="{ 'icon-active': mobileNav }"
					style="
						font-size: 1.5rem;
						position: fixed;
						top: 20px;
						right: 25px;
						cursor: pointer;
						z-index: 100;
					"
				></i>
			</div>

			<transition name="mobile-nav">
				<div v-show="mobileNav" class="dropdown-nav">
					<ul class="hamnav">
						<li class="link1">
							<router-link
								class="link2"
								:class="{ active: activeMenuItem === 'home' }"
								to="/home"
								@click.native="setActiveMenuItemAndCloseNav('home')"
							>
								Home
							</router-link>
						</li>

						<li class="link1">
							<router-link
								class="link2"
								:class="{ active: activeMenuItem === 'dashboard' }"
								to="/dashboard"
								@click.native="setActiveMenuItemAndCloseNav('dashboard')"
							>
								Dashboard
							</router-link>
						</li>

						<li class="link1">
							<router-link
								class="link2"
								:class="{ active: activeMenuItem === 'projects' }"
								to="/projects"
								@click.native="setActiveMenuItemAndCloseNav('projects')"
							>
								Projects
							</router-link>
						</li>

						<template v-if="isLoggedIn">
							<li class="link1">
								<router-link
									class="link2"
									:class="{ active: activeMenuItem === 'myPR' }"
									to="/mypr"
									@click.native="setActiveMenuItemAndCloseNav('myPR')"
								>
									My PR
								</router-link>
							</li>

							<li class="link1">
								<router-link
									class="link2"
									:class="{ active: activeMenuItem === 'submit' }"
									to="/submit"
									@click.native="setActiveMenuItemAndCloseNav('submit')"
								>
									Submit PR
								</router-link>
							</li>

							<li @click="logout" class="link1">Logout</li>
						</template>

						<template v-else>
							<li class="link1">
								<router-link
									class="link2"
									:class="{ active: activeMenuItem === 'signup' }"
									@click="signup"
								>
									Sign Up
								</router-link>
							</li>
							<li class="link1">
								<div
									:class="{ active: activeMenuItem === 'auth' }"
									@click="login"
								>
									Login
								</div>
							</li>
						</template>
					</ul>
				</div>
			</transition>
		</nav>
	</header>
</template>

<script>
import { projectAuth } from '../firebase/config'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import { successToast, errorToast } from '../composables/useToast'
import SubmitPR from './../views/SubmitPR.vue'

export default {
	name: 'Nav',
	components: {
		Login,
		Signup,
		SubmitPR,
	},
	data() {
		return {
			scrollNav: false,
			mobile: false,
			mobileNav: false,
			windowWidth: null,
			isLoggedIn: false,
			showLogin: false,
			showSignup: false,
			activeMenuItem: '',
		}
	},
	created() {
		window.addEventListener('resize', this.checkScreen)
		this.checkScreen()
		this.checkUserLoggedIn()
	},
	mounted() {
		window.addEventListener('scroll', this.updateScroll)
	},
	methods: {
		toggleMobileNav() {
			this.mobileNav = !this.mobileNav
		},
		closeMobileNav() {
			this.mobileNav = false
		},
		toggleLogin() {
			this.showLogin = !this.showLogin
			this.$store.state.login = !this.$store.state.login
		},
		toggleSignup() {
			this.showSignup = !this.showSignup
		},
		checkScreen() {
			this.windowWidth = window.innerWidth
			if (this.windowWidth <= 850) {
				this.mobile = true
			} else {
				this.mobile = false
				this.mobileNav = false
			}
		},
		updateScroll() {
			const scrollPosition = window.scrollY
			this.scrollNav = scrollPosition > 50
		},
		async checkUserLoggedIn() {
			projectAuth.onAuthStateChanged((user) => {
				this.isLoggedIn = !!user
			})
		},
		async logout() {
			try {
				await projectAuth.signOut()
				this.isLoggedIn = false
				successToast('Success', 'Logout successful')
			} catch (error) {
				errorToast('Error', 'Logout failed')
				console.error('Logout error:', error.message)
			}
		},

		async login() {
			try {
				this.toggleLogin()
			} catch (error) {
				errorToast('Error', 'Login failed')
				console.error('Logout error:', error.message)
			}
		},
		async signup() {
			try {
				this.toggleSignup()
			} catch (error) {
				errorToast('Error', 'Login failed')
				console.error('Logout error:', error.message)
			}
		},
		setActiveMenuItemAndCloseNav(item) {
			const data = document.querySelector('.animation')
			this.activeMenuItem = item

			const screenWidth = window.innerWidth

			if (screenWidth <= 992) {
				switch (item) {
					case 'home':
						data.style.left = '26.2%'
						data.style.width = '7%'
						break
					case 'dashboard':
						data.style.left = '34.5%'
						data.style.width = '10%'
						break
					case 'projects':
						data.style.left = '46.4%'
						data.style.width = '7%'
						break
					case 'submit':
						data.style.left = '55.8%'
						data.style.width = '9%'
						break
					case 'myPR':
						data.style.left = '66%'
						data.style.width = '7%'
						break
					default:
						this.activeMenuItem = ''
						break
				}
			} else if (screenWidth > 992 && screenWidth <= 1256) {
				switch (item) {
					case 'home':
						data.style.left = '24.4%'
						data.style.width = '8%'
						break
					case 'dashboard':
						data.style.left = '34%'
						data.style.width = '10%'
						break
					case 'projects':
						data.style.left = '46.2%'
						data.style.width = '7%'
						break
					case 'submit':
						data.style.left = '56.2%'
						data.style.width = '9%'
						break
					case 'myPR':
						data.style.left = '67.4%'
						data.style.width = '7%'
						break
					default:
						break
				}
			} else {
				switch (item) {
					case 'home':
						data.style.left = '24.9%'
						data.style.width = '7%'
						break

					case 'dashboard':
						data.style.left = '34%'
						data.style.width = '10%'
						break

					case 'projects':
						data.style.left = '46.1%'
						data.style.width = '7%'
						break

					case 'submit':
						data.style.left = '56.2%'
						data.style.width = '9%'
						break

					case 'myPR':
						data.style.left = '67.4%'
						data.style.width = '7%'
						break

					default:
						break
				}
			}

			this.mobileNav = false
		},
	},
}
</script>

<style scoped>
header {
	z-index: 99;
	position: fixed;
	width: 100%;
	transition: 0.5s ease all;
	color: white;
}

nav {
	display: flex;
	width: 100%;
	box-sizing: border-box;
	margin-top: 0.6%;

	ul,
	.link {
		font-weight: 500;
		color: white;
		list-style: none;
		align-items: center;
		text-align: center;
		text-decoration: none;
	}

	li {
		margin-top: 3.5%;
		margin-left: 4%;
		width: 60%;
		z-index: 100;
	}

	.link {
		font-size: 130%;
		transition: 0.5s ease all;
		padding-bottom: 0.2%;
		border-bottom: 0.1rem solid transparent;
		cursor: pointer;
		width: 20%;
		text-align: center;

		&:hover {
			color: black;
			z-index: 100;
		}
	}

	.branding {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10%;
		margin-top: 20px;

		img {
			width: 95%;
			transition: 0.5s ease all;
		}

		.text {
			color: white;
			text-decoration: none;
			font-size: 130%;
		}
	}

	.brand {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25%;
		margin-top: 10px;
		text-decoration: none;

		img {
			width: 60px;
			padding-right: 0.5rem;
			transition: 0.5s ease all;
		}

		.txt {
			text-decoration: none;
			color: white;
			transition: color 0.3s ease;

			&:hover {
				z-index: 100;
				color: #0891b3;
			}

			&:active {
				color: #0891b3;
			}
		}
	}

	.nav-div {
		position: relative;
		width: 70%;
		padding-left: 4%;
		justify-content: center;
		align-items: center;
	}

	.navigations {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style-type: none;
	}

	.navigations .animation {
		position: fixed;
		height: 7%;
		top: 3%;
		z-index: 0;
		text-align: center;
		justify-content: center;
		background-color: #0891b3;
		border-radius: 0.5rem;
		transition: all 0.5s ease 0s;
	}
	.line {
		position: fixed;
		width: 200vw;
		height: 3%;
		top: 0;
		background-color: #0891b3;
	}

	.navigations li:nth-child(1) {
		width: 13%;
	}
	.navigations .start-home,
	li:nth-child(1):hover ~ .animation {
		width: 7%;
		left: 24.9%;
	}
	.navigations li:nth-child(2) {
		width: 12%;
	}
	.navigations li:nth-child(2):hover ~ .animation {
		width: 10%;
		left: 34%;
	}
	.navigations li:nth-child(3) {
		width: 13.7%;
	}
	.navigations li:nth-child(3):hover ~ .animation {
		width: 7%;
		left: 46.1%;
	}
	.navigations li:nth-child(4) {
		width: 13%;
	}
	.navigations li:nth-child(4):hover ~ .animation {
		width: 9%;
		left: 56.2%;
	}
	.navigations li:nth-child(5) {
		width: 11%;
	}
	.navigations li:nth-child(5):hover ~ .animation {
		width: 7%;
		left: 67.4%;
	}

	.navigations .animation1 {
		position: fixed;
		height: 7%;
		top: 3%;
		z-index: 0;
		text-align: center;
		justify-content: center;
		background-color: #0891b3;
		border-radius: 0.5rem;
		transition: all 0.5s ease 0s;
	}

	.navigations li:nth-child(1) {
		width: 13%;
	}
	.navigations .start-home1,
	li:nth-child(1):hover ~ .animation1 {
		width: 7%;
		left: 35%;
	}
	.navigations li:nth-child(2) {
		width: 12%;
	}
	.navigations li:nth-child(2):hover ~ .animation1 {
		width: 10%;
		left: 44.1%;
	}
	.navigations li:nth-child(3) {
		width: 13.7%;
	}
	.navigations li:nth-child(3):hover ~ .animation1 {
		width: 7%;
		left: 56.3%;
	}

	.auth-div {
		width: 20%;
		top: 10%;
		padding-right: 60px;
		padding-left: 40px;
	}
	.authnavigations {
		display: flex;
	}

	.icon {
		position: absolute;
		left: 50px;
		display: flex;
		align-items: center;
		height: 100%;
		cursor: pointer;
		font-size: 1.5rem;
		transition: 0.5s ease all;
	}

	.icon-active {
		transform: rotate(180deg);
	}

	.dropdown-nav {
		display: flex;
		flex-direction: column;
		position: fixed;
		width: 100%;
		max-width: 15.62rem;
		height: 100%;
		background-color: #18181b;
		top: 0;
		right: 0;
	}

	.hamnav {
		position: fixed;
		top: 7rem;
	}

	.link2 {
		color: #0891b3;
		text-decoration: none;
	}

	.link1 {
		padding-top: 1rem;
		font-size: 120%;
		padding: auto;
		transition: 0.5s ease all;
		cursor: pointer;
		width: 100%;
		text-decoration: none;
		text-align: left;
		color: #0891b3;

		&:hover {
			color: black;
			z-index: 100;
		}
	}

	.dropdown-nav .link2.active {
		display: block;
		background-color: #0891b3;
		border-radius: 1.25rem;
		text-align: left;
		color: white;
		height: 1.8rem;
		padding: 0rem 2rem;
		transition: background-color 0.7s ease;
	}

	.dropdown-nav .link2.active:hover {
		background-color: #0891b3;
	}

	.mobile-nav-enter-active,
	.mobile-nav-leave-active {
		transition: 1s ease all;
	}

	.mobile-nav-enter-from,
	.mobile-nav-leave-to {
		transform: translateX(15.625rem);
	}

	.mobile-nav-enter-to {
		transform: translateX(0);
	}

	.auth {
		color: #0891b3;
		border: #0891b3 1px solid;
		font-size: 140%;
		border-radius: 6rem;
		cursor: pointer;
		text-align: center;
		width: 70%;
		text-decoration: none;
		margin-top: 20%;
		margin-left: 35%;
		&:hover {
			color: white;
		}
	}

	.auth2 {
		position: fixed;
		color: #0891b3;
		border: #0891b3 1px solid;
		font-size: 110%;
		border-radius: 4rem;
		cursor: pointer;
		text-align: center;
		text-decoration: none;
		top: 5%;
		padding: 3px;

		&:hover {
			color: white;
		}
	}

	.scrolled-nav {
		background-color: black;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.6);

		> nav {
			padding: 8px 5%;

			.branding {
				img {
					width: 40px;
					box-shadow:
						0 4px 6px -1px rgba(0, 0, 0, 0.1),
						0 2px 4px -1px rgba(0, 0, 0, 0.6);
				}
			}
		}
	}

	@media (max-width: 1374px) {
		.navigations .animation {
			position: fixed;
			height: 6%;
			top: 2%;
			z-index: 0;
			background-color: #0891b3;
			border-radius: 0.5rem;
			transition: all 0.5s ease 0s;
		}
	}

	@media (max-width: 1256px) and (min-width: 992px) {
		.auth-div {
			width: 20%;
			top: 10%;
			padding-right: 50px;
			padding-left: 30px;
		}

		.branding {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 10%;
			margin-top: 18px;

			img {
				width: 85%;
				transition: 0.5s ease all;
			}

			.text {
				text-decoration: none;
				color: white;
				font-size: 100%;
			}
		}

		.auth {
			color: #0891b3;
			border: #0891b3 1px solid;
			font-size: 89%;
			border-radius: 6rem;
			cursor: pointer;
			text-align: center;
			text-decoration: none;

			margin-left: 35%;
			margin-top: 29px;
			&:hover {
				color: white;
			}
		}

		li {
			font-size: 70%;
			margin-left: 4%;
			margin-top: 15%;
			width: 80%;
			z-index: 100;
			margin-top: 4%;
		}

		.navigations .animation {
			position: fixed;
			height: 7%;
			top: 2.3%;
			z-index: 0;
			background-color: #0891b3;
			border-radius: 0.5rem;
			transition: all 0.5s ease 0s;
		}
		.navigations li:nth-child(1) {
			width: 12%;
		}
		.navigations .start-home,
		li:nth-child(1):hover ~ .animation {
			width: 8%;
			left: 24.6%;
		}
		.navigations li:nth-child(2) {
			width: 13%;
		}
		.navigations li:nth-child(2):hover ~ .animation {
			width: 10%;
			left: 34.1%;
		}
		.navigations li:nth-child(3) {
			width: 13.7%;
		}
		.navigations li:nth-child(3):hover ~ .animation {
			width: 7%;
			left: 46.2%;
		}
		.navigations li:nth-child(4) {
			width: 13%;
		}
		.navigations li:nth-child(4):hover ~ .animation {
			width: 9%;
			left: 56.2%;
		}
		.navigations li:nth-child(5) {
			width: 11%;
		}
		.navigations li:nth-child(5):hover ~ .animation {
			width: 7%;
			left: 67.4%;
		}

		.navigations .animation1 {
			position: fixed;
			height: 7%;
			top: 2.9%;
			z-index: 0;
			text-align: center;
			justify-content: center;
			background-color: #0891b3;
			border-radius: 0.5rem;
			transition: all 0.5s ease 0s;
		}

		.navigations li:nth-child(1) {
			width: 13%;
		}
		.navigations .start-home1,
		li:nth-child(1):hover ~ .animation1 {
			width: 7%;
			left: 35.3%;
		}
		.navigations li:nth-child(2) {
			width: 12%;
		}
		.navigations li:nth-child(2):hover ~ .animation1 {
			width: 10%;
			left: 44.1%;
		}
		.navigations li:nth-child(3) {
			width: 13.7%;
		}
		.navigations li:nth-child(3):hover ~ .animation1 {
			width: 7%;
			left: 56.5%;
		}
	}

	@media (max-width: 851) {
		.branding {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30%;
			margin-top: 1.4%;

			img {
				width: 50%;
				transition: 0.5s ease all;
			}
		}
	}

	@media (max-width: 992px) and (min-width: 850px) {
		.auth-div {
			width: 20%;
			top: 10%;
			padding-right: 40px;
			padding-left: 20px;
		}

		.branding {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 10%;
			margin-top: 13px;

			img {
				width: 80%;
				transition: 0.5s ease all;
			}
			.text {
				text-decoration: none;
				color: white;
				font-size: 80%;
			}
		}

		.auth {
			color: #0891b3;
			border: #0891b3 1px solid;
			font-size: 70%;
			border-radius: 6rem;
			cursor: pointer;
			text-align: center;
			text-decoration: none;

			margin-top: 31%;
			&:hover {
				color: white;
			}
		}
		.auth2 {
			position: fixed;
			color: #0891b3;
			border: #0891b3 1px solid;
			font-size: 110%;
			border-radius: 4rem;
			cursor: pointer;
			text-align: center;
			text-decoration: none;
			top: 4%;
			padding: 3px;

			&:hover {
				color: white;
			}
		}

		li {
			font-size: 67%;
			margin-left: 3%;
			top: 10%;
			width: 60%;
			z-index: 100;
			margin-top: 5%;
		}

		.navigations .animation {
			position: fixed;
			height: 6%;
			top: 2%;
			z-index: 0;
			background-color: #0891b3;
			border-radius: 0.5rem;
			transition: all 0.5s ease 0s;
		}
		.navigations li:nth-child(1) {
			width: 12%;
		}
		.navigations .start-home,
		li:nth-child(1):hover ~ .animation {
			width: 7%;
			left: 26.9%;
		}
		.navigations li:nth-child(2) {
			width: 13%;
		}
		.navigations li:nth-child(2):hover ~ .animation {
			width: 10%;
			left: 35.3%;
		}
		.navigations li:nth-child(3) {
			width: 13.7%;
		}
		.navigations li:nth-child(3):hover ~ .animation {
			width: 7%;
			left: 46.4%;
		}
		.navigations li:nth-child(4) {
			width: 13%;
		}
		.navigations li:nth-child(4):hover ~ .animation {
			width: 9%;
			left: 55.8%;
		}
		.navigations li:nth-child(5) {
			width: 11%;
		}
		.navigations li:nth-child(5):hover ~ .animation {
			width: 7%;
			left: 66%;
		}

		.navigations .animation1 {
			position: fixed;
			height: 6%;
			top: 2.9%;
			z-index: 0;
			text-align: center;
			justify-content: center;
			background-color: #0891b3;
			border-radius: 0.5rem;
			transition: all 0.5s ease 0s;
		}

		.navigations li:nth-child(1) {
			width: 13%;
		}
		.navigations .start-home1,
		li:nth-child(1):hover ~ .animation1 {
			width: 7%;
			left: 36.3%;
		}
		.navigations li:nth-child(2) {
			width: 12%;
		}
		.navigations li:nth-child(2):hover ~ .animation1 {
			width: 10%;
			left: 44.6%;
		}
		.navigations li:nth-child(3) {
			width: 13.7%;
		}
		.navigations li:nth-child(3):hover ~ .animation1 {
			width: 7%;
			left: 55.8%;
		}
	}
}
</style>
