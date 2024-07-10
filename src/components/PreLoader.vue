<template>
	<div class="bg">
		<div class="e-loadholder">
			<div class="m-loader">
				<span class="e-text">Loading</span>
			</div>
		</div>
		<div id="particleCanvas-White"></div>
	</div>
</template>

<script>
import 'particles.js'

export default {
	name: 'PreLoader',
	mounted() {
		this.initParticles()
	},
	methods: {
		initParticles() {
			window.particlesJS('particleCanvas-White', {
				particles: {
					number: {
						value: 80,
						density: {
							enable: true,
							value_area: 700,
						},
					},
					color: {
						value: '#ffffff',
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
						color: '#ffffff',
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
}
</script>

<style scoped>
@-webkit-keyframes outerRotate1 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

@-moz-keyframes outerRotate1 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

@-o-keyframes outerRotate1 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

@keyframes outerRotate1 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}

@-webkit-keyframes outerRotate2 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

@-moz-keyframes outerRotate2 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

@-o-keyframes outerRotate2 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

@keyframes outerRotate2 {
	0% {
		transform: translate(-50%, -50%) rotate(0);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

@-webkit-keyframes textColour {
	0% {
		color: #fff;
	}
	100% {
		color: var(--secondary_bg_col);
	}
}

@-moz-keyframes textColour {
	0% {
		color: #fff;
	}
	100% {
		color: var(--secondary_bg_col);
	}
}

@-o-keyframes textColour {
	0% {
		color: #fff;
	}
	100% {
		color: var(--secondary_bg_col);
	}
}

@keyframes textColour {
	0% {
		color: #fff;
	}
	100% {
		color: var(--secondary_bg_col);
	}
}

html {
	font-size: 62.5%;
}

body {
	margin: 0;
	padding: 0;
	font-family: 'Open Sans', sans-serif;
	width: 100vw;
	height: 100vh;
	background: var(--primary_bg_col);
}

.e-loadholder {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	width: 240px;
	height: 240px;
	border: 5px solid var(--secondary_bg_col);
	border-radius: 120px;
	box-sizing: border-box;
}

.e-loadholder:after {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	content: ' ';
	display: block;
	background: var(--primary_bg_col);
	transform-origin: center;
	z-index: 0;
}

.e-loadholder:after {
	width: 100px;
	height: 200%;
	-webkit-animation: outerRotate2 30s infinite linear;
	-moz-animation: outerRotate2 30s infinite linear;
	-o-animation: outerRotate2 30s infinite linear;
	animation: outerRotate2 30s infinite linear;
}

.e-loadholder .m-loader {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	width: 200px;
	height: 200px;
	color: #888;
	text-align: center;
	border: 5px solid var(--secondary_bg_col);
	border-radius: 100px;
	box-sizing: border-box;
	z-index: 20;
	text-transform: uppercase;
}

.e-loadholder .m-loader:after {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	content: ' ';
	display: block;
	background: var(--primary_bg_col);
	transform-origin: center;
	z-index: -1;
}

.e-loadholder .m-loader:after {
	width: 100px;
	height: 106%;
	-webkit-animation: outerRotate1 15s infinite linear;
	-moz-animation: outerRotate1 15s infinite linear;
	-o-animation: outerRotate1 15s infinite linear;
	animation: outerRotate1 15s infinite linear;
}

.e-loadholder .m-loader .e-text {
	font-size: 1.4rem;
	line-height: 130px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	-webkit-animation: textColour 1s alternate linear infinite;
	-moz-animation: textColour 1s alternate linear infinite;
	-o-animation: textColour 1s alternate linear infinite;
	animation: textColour 1s alternate linear infinite;
	display: block;
	width: 140px;
	height: 140px;
	text-align: center;
	border: 5px solid var(--secondary_bg_col);
	border-radius: 70px;
	box-sizing: border-box;
	z-index: 20;
}

.e-loadholder .m-loader .e-text:before,
.e-loadholder .m-loader .e-text:after {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	content: ' ';
	display: block;
	background: var(--primary_bg_col);
	transform-origin: center;
	z-index: -1;
}

.e-loadholder .m-loader .e-text:before {
	width: 110%;
	height: 40px;
	-webkit-animation: outerRotate2 3.5s infinite linear;
	-moz-animation: outerRotate2 3.5s infinite linear;
	-o-animation: outerRotate2 3.5s infinite linear;
	animation: outerRotate2 3.5s infinite linear;
}

.e-loadholder .m-loader .e-text:after {
	width: 40px;
	height: 110%;
	-webkit-animation: outerRotate1 8s infinite linear;
	-moz-animation: outerRotate1 8s infinite linear;
	-o-animation: outerRotate1 8s infinite linear;
	animation: outerRotate1 8s infinite linear;
}

#particleCanvas-White {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-51%, -50%);
	-moz-transform: translate(-51%, -50%);
	-ms-transform: translate(-51%, -50%);
	-o-transform: translate(-51%, -50%);
	transform: translate(-51%, -50%);
	width: 100%;
	height: 100%;
}

.bg {
	background: var(--primary_bg_col);
	height: 100vh;
	width: 100vw;
}
</style>
