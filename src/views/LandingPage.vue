<template>
	<div class="fixed-top">
		<div class="home container">
			<img src="../assets/Logo.svg" alt="BSoC Logo" id="bsoc-logo" />
			<p id="heading">BitByte Summer Of Code</p>
			<p id="subH">Event to begin your Open Source Journey</p>
			<p id="text">Presented by</p>
			<p id="text">The Programming Club, IIITDMJ</p>
			<div class="buttonContainer">
				<router-link to="/home" style="text-decoration: none; color: inherit">
					<button class="button hvr-grow">
						<img
							class="explore-svg"
							src="../assets/explore.png"
							alt="Explore More"
						/>
						<p>Explore</p>
					</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style>
canvas {
	display: block;
	width: 100%;
	height: 100%;
}
.fixed-top {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80%;
	width: 100%;
	color: var(--font_col);
}

#bsoc-logo {
	filter: drop-shadow(4px 4px 8px var(--secondary_bg_col));
}
#heading {
	margin: 0;
	font-family: var(--primary-font), serif;
	font-size: 6vw;
	line-height: 14vh;
	color: var(--font_col);
	background: none;
	text-align: center;
}

#subH {
	font-family: 'system-ui', sans-serif;
	font-size: 4.2vh;
	line-height: 5.2vh;
	color: var(--font_col);
	font-weight: initial;
	text-align: center;
	margin: 2vh 0;
}

#text {
	font-family: 'Poppins', sans-serif;
	font-size: 2.3vh;
	font-weight: 200;
	line-height: 2.4vh;
	color: var(--font_col);
	text-align: center;
	margin: 1.2vh 0 0 0;
}

.button {
	background-color: var(--secondary_bg_col);
	padding: 7px 2em;
	margin-top: 4vh;
	color: var(--font_col);
	font-size: 1.5em;
	font-weight: 500;
	display: flex;
	font-family: System-ui, sans-serif;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 0;
	border-radius: 36px;
	outline: transparent;
}
.buttonContainer button p {
	margin-bottom: 0;
}

.hvr-grow {
	backface-visibility: hidden;
	-moz-osx-font-smoothing: grayscale;
	transition-duration: 0.3s;
	transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
	transform: scale(1.1);
}

.button img {
	margin-right: 1vw;
}

.buttonContainer {
	display: inline-flex;
	gap: 60px;
	text-align: left;
}
.explore-svg {
	height: 35px;
	width: 35px;
}

@media (max-width: 900px) {
	.container {
		padding: 0;
		margin: 0;
	}

	#bsoc-logo {
		width: 24vw;
		height: auto;
	}

	#heading {
		font-size: 3rem;
		line-height: initial;
		margin: 4vh 0;
	}

	#subH {
		font-size: 1.5rem;
		line-height: 3vh;
		margin: 2vh 0;
	}

	#text {
		text-align: center;
	}

	.button {
		padding: 8px 1.5em;
	}

	.buttonContainer button p {
		margin: auto;
		font-size: 0.9rem;
	}
}

@media (max-width: 500px) {
	#bsoc-logo {
		width: 172px;
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

<script>
// Three JS Template
//----------------------------------------------------------------- BASIC parameters
// import {
//   WebGLRenderer,
//   PerspectiveCamera,
//   Scene,
//   Fog,
//   Mesh,
//   MeshLambertMaterial,
//   MeshStandardMaterial,
//   CircleGeometry,
//   DoubleSide,
//   SmoothShading,
//   PCFSoftShadowMap,
//   Object3D,
//   AmbientLight,
//   SpotLight,
//   PointLight,

//   MeshPhongMaterial,
//   PlaneGeometry,
//   Color,
//   Raycaster,
//   Vector2,
//   SpotLightHelper,
//   GridHelper,
//   MeshToonMaterial,
//   BoxGeometry,
//   Power1,

// } from 'three';

// import { TweenMax } from "gsap/all";

export default {
	data: function () {
		return {
			stopAnimation: false,
		}
	},

	mounted() {
		// Three JS Template

		//----------------------------------------------------------------- BASIC parameters
		var renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setPixelRatio(window.devicePixelRatio * 0.8)
		if (window.innerWidth > 800) {
			renderer.shadowMap.enabled = true
			renderer.shadowMap.type = THREE.PCFSoftShadowMap
			renderer.shadowMap.needsUpdate = true
			//renderer.toneMapping = THREE.ReinhardToneMapping;
			//console.log(window.innerWidth);
		}
		//---
		const getRenderDomByID = renderer.domElement
		getRenderDomByID.setAttribute('id', 'three-js')
		document.body.appendChild(renderer.domElement)
		// console.log(renderer.domElement);

		window.addEventListener('resize', onWindowResize, false)
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(window.innerWidth, window.innerHeight)
		}

		var camera = new THREE.PerspectiveCamera(
			20,
			window.innerWidth / window.innerHeight,
			1,
			50
		)

		camera.position.set(0, 2, 14)

		var scene = new THREE.Scene()
		var city = new THREE.Object3D()
		var smoke = new THREE.Object3D()
		var town = new THREE.Object3D()

		var createCarPos = true
		var uSpeed = 0.001

		//------------------ ----------------------------------------------- FOG background

		var setcolor = 0x6a0785

		scene.background = new THREE.Color(setcolor)
		scene.fog = new THREE.Fog(setcolor, 30, 50)
		scene.fog = new THREE.FogExp2(setcolor, 0.05)

		//----------------------------------------------------------------- RANDOM Function
		function mathRandom(num = 8) {
			var numValue = -Math.random() * num + Math.random() * num
			return numValue
		}
		//----------------------------------------------------------------- CHANGE bluilding colors
		var setTintNum = true
		function setTintColor() {
			if (setTintNum) {
				setTintNum = false
				var setColor = 0x000000
			} else {
				setTintNum = true
				var setColor = 0x000000
			}
			// setColor = 0x001;
			return setColor
		}

		//----------------------------------------------------------------- CREATE City

		function init() {
			var segments = 2
			for (var i = 1; i < 100; i++) {
				var geometry = new THREE.CubeGeometry(
					1,
					0,
					0,
					segments,
					segments,
					segments
				)
				var material = new THREE.MeshStandardMaterial({
					color: setTintColor(),
					wireframe: false,
					//opacity:0.9,
					//transparent:true,
					roughness: 0.6,
					metalness: 0.5,
					shading: THREE.SmoothShading,
					//shading:THREE.FlatShading,
					side: THREE.DoubleSide,
				})
				var wmaterial = new THREE.MeshLambertMaterial({
					color: 0x0000ff,
					wireframe: true,
					transparent: true,
					opacity: 0.03,
					side: THREE.DoubleSide /*,
      shading:THREE.FlatShading*/,
				})

				var cube = new THREE.Mesh(geometry, material)
				var wire = new THREE.Mesh(geometry, wmaterial)
				var floor = new THREE.Mesh(geometry, material)
				var wfloor = new THREE.Mesh(geometry, wmaterial)

				cube.add(wfloor)
				cube.castShadow = true
				cube.receiveShadow = true
				cube.rotationValue = 0.1 + Math.abs(mathRandom(8))

				//floor.scale.x = floor.scale.z = 1+mathRandom(0.33);
				floor.scale.y = 0.05 //+mathRandom(0.5);
				cube.scale.y = 0.1 + Math.abs(mathRandom(8))

				var cubeWidth = 0.9
				cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth)
				//cube.position.y = cube.scale.y / 2;
				cube.position.x = Math.round(mathRandom())
				cube.position.z = Math.round(mathRandom())

				floor.position.set(
					cube.position.x,
					0 /*floor.scale.y / 2*/,
					cube.position.z
				)

				town.add(floor)
				town.add(cube)
			}
			//----------------------------------------------------------------- Particular
			var gmaterial = new THREE.MeshToonMaterial({
				color: 0x0a7185,
				side: THREE.DoubleSide,
			})
			var gparticular = new THREE.CircleGeometry(0.01, 3)
			var aparticular = 5

			for (var h = 1; h < 300; h++) {
				var particular = new THREE.Mesh(gparticular, gmaterial)
				particular.position.set(
					mathRandom(aparticular),
					mathRandom(aparticular),
					mathRandom(aparticular)
				)
				particular.rotation.set(mathRandom(), mathRandom(), mathRandom())
				smoke.add(particular)
			}

			var pmaterial = new THREE.MeshPhongMaterial({
				color: 0x000000,
				side: THREE.DoubleSide,
				roughness: 10,
				metalness: 0.6,
				opacity: 0.9,
				transparent: true,
			})
			var pgeometry = new THREE.PlaneGeometry(60, 60)
			var pelement = new THREE.Mesh(pgeometry, pmaterial)
			pelement.rotation.x = (-90 * Math.PI) / 180
			pelement.position.y = -0.001
			pelement.receiveShadow = true

			city.add(pelement)
		}

		//----------------------------------------------------------------- MOUSE function
		var mouse = new THREE.Vector2(),
			INTERSECTED

		function onMouseMove(event) {
			event.preventDefault()
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
		}
		function onDocumentTouchStart(event) {
			if (event.touches.length == 1) {
				event.preventDefault()
				mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
				mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
			}
		}
		function onDocumentTouchMove(event) {
			if (event.touches.length == 1) {
				event.preventDefault()
				mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
				mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
			}
		}
		window.addEventListener('mousemove', onMouseMove, false)
		window.addEventListener('touchstart', onDocumentTouchStart, false)
		window.addEventListener('touchmove', onDocumentTouchMove, false)

		//----------------------------------------------------------------- Lights
		var ambientLight = new THREE.AmbientLight(0xfffaff, 4)
		var lightFront = new THREE.SpotLight(0xfffaff, 20, 10)
		var lightBack = new THREE.PointLight(0xfffaff, 0.5)

		lightFront.rotation.x = (45 * Math.PI) / 180
		lightFront.rotation.z = (-45 * Math.PI) / 180
		lightFront.position.set(5, 5, 5)
		lightFront.castShadow = true
		lightFront.shadow.mapSize.width = 6000
		lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width
		lightFront.penumbra = 0.1
		lightBack.position.set(0, 6, 0)

		smoke.position.y = 2

		scene.add(ambientLight)
		city.add(lightFront)
		scene.add(lightBack)
		scene.add(city)
		city.add(smoke)
		city.add(town)

		//----------------------------------------------------------------- GRID Helper
		var gridHelper = new THREE.GridHelper(60, 120, 0x0000ff, 0x000000)
		city.add(gridHelper)

		var createCars = function (cScale = 2, cPos = 20, cColor = 0x0a7185) {
			var cMat = new THREE.MeshToonMaterial({
				color: cColor,
				side: THREE.DoubleSide,
			})
			var cGeo = new THREE.CubeGeometry(1, cScale / 40, cScale / 40)
			var cElem = new THREE.Mesh(cGeo, cMat)
			var cAmp = 3
			if (createCarPos) {
				createCarPos = false
				cElem.position.x = -cPos
				cElem.position.z = mathRandom(cAmp)

				TweenMax.to(cElem.position, 3, {
					x: cPos,
					repeat: -1,
					yoyo: true,
					delay: mathRandom(3),
				})
			} else {
				createCarPos = true
				cElem.position.x = mathRandom(cAmp)
				cElem.position.z = -cPos
				cElem.rotation.y = (90 * Math.PI) / 180

				TweenMax.to(cElem.position, 5, {
					z: cPos,
					repeat: -1,
					yoyo: true,
					delay: mathRandom(3),
					ease: Power1.easeInOut,
				})
			}
			cElem.receiveShadow = true
			cElem.castShadow = true
			cElem.position.y = Math.abs(mathRandom(5))
			city.add(cElem)
		}
		var generateLines = function () {
			for (var i = 0; i < 50; i++) {
				createCars(0.1, 20)
			}
		}
		var cameraSet = function () {
			createCars(0.1, 20, 0xfffaff)
			//TweenMax.to(camera.position, 1, {y:1+Math.random()*4, ease:Expo.easeInOut})
		}
		//----------------------------------------------------------------- ANIMATE
		var vm = this
		var animate = function () {
			if (vm.stopAnimation) {
				return
			}
			requestAnimationFrame(animate)

			city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed
			city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed
			if (city.rotation.x < -0.05) city.rotation.x = -0.05
			else if (city.rotation.x > 1) city.rotation.x = 1

			smoke.rotation.y += 0.01
			smoke.rotation.x += 0.01

			camera.lookAt(city.position)
			renderer.render(scene, camera)
		}

		//----------------------------------------------------------------- START functions
		generateLines()
		init()
		animate()
	},
	beforeUnmount() {
		document.body.removeChild(document.getElementById('three-js'))
		// console.log(this.stopAnimation);
		this.stopAnimation = true
		// console.log(this.stopAnimation);
	},
}
</script>
