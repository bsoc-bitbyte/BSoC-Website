<template>
	<Nav></Nav>
	<div class="home-container">
		<!--  About Section-->
		<div class="about-section" id="about">
			<div id="particles-js"></div>
			<div class="about">
				<h1 class="about-heading">About</h1>
				<div class="about-content">
					<p>
						Welcome to Bitbyte Summer of Code! An exciting opportunity for
						passionate developers.
					</p>
					<p>
						This event is aimed at matching you with open source, free software,
						and technology-related projects to write code and learn. The
						projects provide mentors who act as guides through the entire
						process, from learning about the community to contributing code.
					</p>
					<p>
						The goals of our Event are to:
						<br />
						- Inspire you to begin participating in open source development.
						<br />
						-Identifying open-source projects and bring in new developers.
						<br />
						-Provide you the opportunity to do work and give you industry
						experience.
						<br />
						-Give you more exposure to real-world software development
					</p>
				</div>
			</div>
		</div>

		<!--  Prize Section-->

		<div class="prize-section" id="prize">
			<div class="prize">
				<h1 class="prize-heading">What's in it for you?</h1>
				<div class="prizes">
					<div class="list">
						<p>
							&bull; <span class="bolder">TOP CONTRIBUTORS</span> Can get a
							chance to interview for the BitByte Dev Wing.
						</p>
						<p>
							&bull;
							<span class="bolder">EVERY CONTRIBUTOR</span> who has got at least
							3 easy-level and 1 medium-level PR merged to projects will get
							exclusive stickers and swags.
						</p>
						<p style="margin: 0 0 10px">
							<span class="bolder">NOT ENOUGH?</span>
						</p>
						<p style="margin: 0">
							&bull; Top participants will get
							<span class="bolder">Exclusive swags and merchandise</span>
							for their exceptional performance in the event.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!--  FAQ Section-->

		<div class="faq" id="faq">
			<p class="faq_head">FAQS</p>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Why should I participate?
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body" style="color: #fffaff">
							<strong>Ans. </strong>Participating in such events provides an
							amazing learning experience, helps in improving your development
							skills, getting involved in big organizations and helping to build
							networks. This is a great place to get you jump-started and up to
							speed with various industry-demanded technologies and getting
							involved with some great Open Source communities.
						</div>
					</div>
				</div>
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a; outline: none"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Why is Open Source important?
						</button>
					</h2>
					<div
						id="collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body" style="color: #fffaff">
							<strong>Ans. </strong> Open source provides you first-hand
							experience with working on big and real-world projects, on which
							many top companies depend, which will give a huge boost in your
							development career. Not only this, but you also get to work with
							and learn from some of the most talented developers around the
							world.
						</div>
					</div>
				</div>
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header" id="headingThree">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Are there any placement opportunities available?
						</button>
					</h2>
					<div
						id="collapseThree"
						class="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body" style="color: #fffaff">
							<strong>Ans. </strong>Contributing to some real world project will
							have a huge impact on your CV and you will gain some experience
							about how to work in a large organisation with hundreds of
							contributors. Though direct placement opportunities are rare,
							there are chances to get full time opportunities in the
							organisation you’re contributing for a long time. Mentors often
							recommend contributors to some startup companies or you might get
							to know people who work in FAANG companies which can help you
							later on when you apply to those companies with referral.
						</div>
					</div>
				</div>
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header" id="headingFour">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
							aria-expanded="false"
							aria-controls="collapseFour"
						>
							Can we work in groups to participate in this event?
						</button>
					</h2>
					<div
						id="collapseFour"
						class="accordion-collapse collapse"
						aria-labelledby="headingFour"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body" style="color: #fffaff">
							<strong>Ans. </strong>No, team participation is not allowed in
							this event. Everyone must participate individually. But you can
							collaborate with each other if contributing to the same
							organization.
						</div>
					</div>
				</div>
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header" id="headingFive">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
							aria-expanded="false"
							aria-controls="collapseFour"
						>
							How do I submit my pull requests on Event Website?
						</button>
					</h2>
					<div
						id="collapseFive"
						class="accordion-collapse collapse"
						aria-labelledby="headingFive"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body" style="color: #fffaff">
							<strong>Ans. </strong>Head over to the Submit PR tab on your
							dashboard and fill the form accordingly.
						</div>
					</div>
				</div>
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header" id="headingSix">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
							aria-expanded="false"
							aria-controls="collapseSix"
						>
							I am stuck. How do I get help?
						</button>
					</h2>
					<div
						id="collapseSix"
						class="accordion-collapse collapse"
						aria-labelledby="headingSix"
						data-bs-parent="#accordionExample"
						style="color: #fffaff"
					>
						<div class="accordion-body">
							<strong>Ans. </strong>Join our discord server (<a
								href="https://discord.gg/C72FYTYYcZ"
								style="color: #3770ff"
								>click here to join</a
							>) and the mentors would be glad to help you there.
						</div>
					</div>
				</div>
				<div class="accordion-item" style="background-color: #19192a">
					<h2 class="accordion-header" id="headingSeven">
						<button
							class="accordion-button collapsed"
							type="button"
							style="color: #fffaff; background-color: #19192a"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSeven"
							aria-expanded="false"
							aria-controls="collapseSix"
						>
							Do I need to pay to enter this event?
						</button>
					</h2>
					<div
						id="collapseSeven"
						class="accordion-collapse collapse"
						aria-labelledby="headingSeven"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body" style="color: #fffaff">
							<strong>Ans. </strong> No purchase/payment is necessary to
							participate or win in this event. It is free of cost.
						</div>
					</div>
				</div>
			</div>

			<!-- Countdown Timer Section -->

			<div class="countdown-timer">
				<p class="countdown-title">BSoC Ends in:</p>
				<div class="timer" v-if="!hasEnded">
					<span>
						<span>{{ days }}</span> Days
					</span>
					<span>
						<span>{{ hours }}</span> Hours
					</span>
					<span>
						<span>{{ minutes }}</span> Minutes
					</span>
					<span>
						<span>{{ seconds }}</span> Seconds
					</span>
				</div>
				<p class="final-text" v-else>BSoC'24 has ended</p>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Nav from '@/components/Nav'
import { projectAuth } from '@/firebase/config'

export default {
	name: 'Home',
	components: { Nav },
	mounted() {
		this.initParticles()
	},
	methods: {
		initParticles() {
			window.particlesJS('particles-js', {
				particles: {
					number: {
						value: 80,
						density: {
							enable: true,
							value_area: 700,
						},
					},
					color: {
						value: '#fffaff',
					},
					shape: {
						type: 'circle',
						stroke: {
							width: 0,
							color: '#000000',
						},
						polygon: {
							nb_sides: 5,
						},
					},
					opacity: {
						value: 0.5,
						random: false,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: '#fffaff',
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 6,
						direction: 'none',
						random: false,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: {
							enable: true,
							mode: 'grab',
						},
						onclick: {
							enable: true,
							mode: 'push',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 140,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 8,
							speed: 3,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			})
		},
	},

	setup() {
		const days = ref(0)
		const hours = ref(0)
		const minutes = ref(0)
		const seconds = ref(0)
		const hasEnded = ref(false)
		const countDownDate = new Date('July 31, 2024 00:00:00').getTime()

		const updateCountdown = () => {
			const now = new Date().getTime()
			const distance = countDownDate - now

			if (distance < 0) {
				hasEnded.value = true
				return
			}

			days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
			hours.value = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
		}

		onMounted(() => {
			updateCountdown()
			setInterval(updateCountdown, 1000)
		})

		const user = projectAuth.currentUser

		return { days, hours, minutes, seconds, hasEnded, user }
	},
}
</script>

<style>
/* .home-container{
    filter:blur(2px);
} */
.about-section {
	width: 100vw;
	background-color: #19192a;
}

.about {
	overflow-x: hidden;
	color: #fff;
	height: 100vh;
	width: 72%;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: auto auto 0;
}

.about-heading {
	font-family: Stargaze, sans-serif;
	margin: 0;
	padding: 5vh 0;
	font-style: normal;
	font-weight: normal;
	font-size: 5.5vw;
	line-height: 10.6vh;
	align-items: center;
	text-align: center;
}

.about-content {
	font-family: Poppins, sans-serif;
	line-height: 4vh;
	font-size: 1.2vw;
}

.about-content p {
	padding: 10px 0;
}

.highlight {
	padding: 0 3px;
	position: relative;
}

#start {
	font-family: 'Poppins', sans-serif;
	font-size: 2vh;
	color: #fffaff;
	margin: 5vh 0 0 0;
}

.prize-section {
	width: 100vw;
	height: 100vh;
	background-color: #19192a;
	display: flex;
	justify-content: center;
	align-items: center;
}

.prize {
	display: flex;
	flex-direction: column;
	height: 90vh;
	width: 80vw;
	justify-content: space-evenly;
}

.prize-heading {
	padding: 0;
	margin: 0;
	font-size: 5.6vw;
	letter-spacing: 2px;
	line-height: 7.36vw;
	font-family: Stargaze, sans-serif;
	color: #fffaff;
}

.list {
	width: 70%;
	margin: auto;
	text-align: left;
	color: #fffaff;
}

.list p {
	line-height: 2.6vw;
	font-size: 1.8vw;
	font-family: Poppins, sans-serif;
}

.bolder {
	font-family: Stargaze, sans-serif;
}

.faq {
	min-height: 100vh;
	width: 100%;
	background: #19192a;
	padding-bottom: 10vh;
}

.faq_head {
	font-family: Stargaze, serif;
	font-size: 6vw;
	margin: 0;
	text-align: center;
	padding-top: 7vh;
	color: #fffaff;
}

.accordion {
	width: 55vw;
	margin: 12vh auto 0;
	color: #fffaff;
	font-family: 'Poppins', sans-serif;
}

.accordion-header {
	border-bottom: 0.3vh solid #fffaff;
}

.accordion-item {
	border: none;
}

.accordion-button {
	font-family: 'Poppins', sans-serif;
	color: #fffaff;
	font-size: 1.5vw;
}

.accordion-button:focus {
	box-shadow: none;
	border-color: rgba(0, 0, 0, 0.125);
}

.accordion-body {
	text-align: left;
}
.countdown-timer {
	text-align: center;
	margin-top: 100px;
	color: #fffaff;
	font-family: 'Stargaze', monospace;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.countdown-title {
	font-size: 8vw;
}
.timer {
	width: 45vw;
	display: flex;
	justify-content: space-between;
}
.timer span {
	font-size: 2vh;
	color: #fffaff;
}
.timer span span {
	font-family: monospace, Stargaze;
	color: #fffaff;
	font-size: 8vh;
}
.final-text {
	font-size: 8vw;
}

@media (min-width: 600px) {
	.countdown-title {
		font-size: 6vw;
	}

	.timer span {
		font-size: 2vw;
	}

	.final-text {
		font-size: 6vw;
	}
}

@media (min-width: 1024px) {
	.countdown-title {
		font-size: 3vw;
	}

	.timer span {
		font-size: 2vw;
	}

	.final-text {
		font-size: 3vw;
	}
}
@media (max-width: 900px) {
	.container {
		margin-left: 0;
		padding: 8rem 2rem 0 2rem;
		text-align: center;
	}

	.home {
		height: initial;
	}

	#heading {
		text-align: center;
		font-size: 4rem;
		line-height: initial;
	}

	#subH {
		text-align: center;
	}

	#text {
		text-align: center;
	}

	.buttonContainer {
		margin: auto;
	}

	.buttonContainer button {
		text-align: center;
	}

	.buttonContainer button p {
		margin: auto;
		font-size: 0.8rem;
	}

	.timer {
		width: initial;
	}

	.timer span span {
		font-size: 3rem;
	}
	.countdown-title {
		font-size: 6vw;
	}

	.timer span {
		font-size: 4vw;
	}

	.final-text {
		font-size: 5vw;
	}
	.about {
		height: initial;
	}

	.about-heading {
		margin: initial;
		margin-top: 3rem;
		font-size: 3rem;
	}

	.about-content p {
		font-size: 1rem;
	}

	.prize-section {
		height: initial;
		padding: 4rem 1rem;
	}

	.prize-heading {
		margin: initial;
		font-size: 3rem;
		line-height: initial;
	}

	.prizes .list {
		width: initial;
		margin-top: 3rem;
		text-align: center;
	}

	.list p {
		font-size: 1rem;
		line-height: initial;
		margin-top: 30px;
	}

	.faq_head {
		font-size: 3rem;
	}

	.accordion {
		width: 80%;
		margin: 2rem auto;
	}

	.accordion button {
		font-size: 1rem;
	}
}

.accordion-button::after {
	background-image: url('../assets/arrow-204-32.png');
}

.accordion-button:not(.collapsed)::after {
	background-image: url('../assets/arrow-204-32.png');
}

#particles-js {
	position: absolute;
	width: 100vw;
	height: 100vh;
}
</style>
