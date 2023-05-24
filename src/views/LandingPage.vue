<template>
  <div class="fixed-top">
    <div class="container home">
    
      <p id="heading">BitByte Summer Of Code</p>
      <p id="subH">A Month Long Open Source Challenge</p>
      <p id="text">Presented by The Programming Club, IIITDMJ</p>
      <div class="buttonContainer">
        <router-link to="/home" style="text-decoration: none; color: inherit;">
          <button class="button hvr-grow">
            <img class="explore-svg" src="../assets/explore.png" alt="Explore More" />
             Explore
          </button>
        </router-link>
        <a href="#" style="text-decoration: none">
          <button class="button hvr-grow">
            <img src="../assets/discord.svg" alt="discord" />
            <p>Discord_</p>
            <span></span>
          </button>
        </a>
      </div>
      <!-- <p id="start">The event ends in</p> -->
      <!-- <div class="timer">
        <span><span> {{ days }} </span> Days</span><span>
          <span> {{ hours }} </span> Hours</span><span>
          <span> {{ mins }} </span> Minutes</span><span>
          <span> {{ secs }} </span> Seconds</span>
      </div> -->
    </div>
  </div>
</template>

    
<style>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: #FFFAFF;
}

#heading {
  margin: 0;
  font-family: "Stargaze", serif;
  font-size: 9vh;
  line-height: 14vh;
  color: #FFFAFF;
  background: none;
  text-align: left;
}

#subH {
  font-family: "Stargaze", sans-serif;
  font-size: 4.2vh;
  line-height: 5.2vh;
  color: #FFFAFF;
  font-weight: initial;
  text-align: left;
  margin: 2vh 0 0 0;
}

#text {
  font-family: "Poppins", sans-serif;
  font-size: 2.3vh;
  line-height: 3.3vh;
  color: #FFFAFF;
  text-align: left;
  margin: 1.2vh 0 0 0;
}

.button, .button::after {

  background:  linear-gradient(45deg , transparent 5% , #e2c836 5%  );
  width: 15vw;
  margin-right: 5vw;
  font-size: 1.5vw;
  padding: 1vh 2.5vw;
  color: #FFFAFF;
  display: flex;
  font-family: "Poppins", sans-serif;
  text-align: center;
  cursor: pointer;
  border: 0;
  box-shadow: 1.6px 0px 0px #FF003C;
  outline: transparent;


}
.buttonContainer button p {
  margin-bottom: 0;
}

.hvr-grow {
  transform: translateZ(0);
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
  padding-top: 10vh;
  display: inline-flex;
  text-align: left;
}
.explore-svg{
  height: 1.5em;
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

}

.accordion-button::after {
  background-image: url("../assets/arrow-204-32.png");
}

.accordion-button:not(.collapsed)::after {
  background-image: url("../assets/arrow-204-32.png");
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
  mounted() {
    // Three JS Template
    const stopAnimation = false;  
    //----------------------------------------------------------------- BASIC parameters
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
      //renderer.toneMapping = THREE.ReinhardToneMapping;
      //console.log(window.innerWidth);
    };
    //---
    const getRenderDomByID = renderer.domElement
    getRenderDomByID.setAttribute('id', 'three-js')
    document.body.appendChild(renderer.domElement);
    console.log(renderer.domElement);


    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500);

    camera.position.set(0, 2, 14);

    var scene = new THREE.Scene();
    var city = new THREE.Object3D();
    var smoke = new THREE.Object3D();
    var town = new THREE.Object3D();

    var createCarPos = true;
    var uSpeed = 0.001;

    //------------------ ----------------------------------------------- FOG background
    

    var setcolor = 0x6a0785
    //var setcolor = 0xF2F111;
    //var setcolor = 0xFF6347;

    scene.background = new THREE.Color(setcolor);
    scene.fog = new THREE.Fog(setcolor, 30, 50);
    scene.fog = new THREE.FogExp2(setcolor, 0.05);
    //----------------------------------------------------------------- RANDOM Function
    function mathRandom(num = 8) {
      var numValue = - Math.random() * num + Math.random() * num;
      return numValue;
    };
    //----------------------------------------------------------------- CHANGE bluilding colors
    var setTintNum = true;
    function setTintColor() {
      if (setTintNum) {
        setTintNum = false;
        var setColor = 0x000000;
      } else {
        setTintNum = true;
        var setColor = 0x000000;
      };
      // setColor = 0x001;
      return setColor;
    };

    //----------------------------------------------------------------- CREATE City

    function init() {
      var segments = 2;
      for (var i = 1; i < 100; i++) {
        var geometry = new THREE.CubeGeometry(1, 0, 0, segments, segments, segments);
        var material = new THREE.MeshStandardMaterial({
          color: setTintColor(),
          wireframe: false,
          //opacity:0.9,
          //transparent:true,
          roughness: 0.6,
          metalness: 0.5,
          shading: THREE.SmoothShading,
          //shading:THREE.FlatShading,
          side: THREE.DoubleSide
        });
        var wmaterial = new THREE.MeshLambertMaterial({
          color: 0x0000FF,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
          side: THREE.DoubleSide/*,
      shading:THREE.FlatShading*/});

        var cube = new THREE.Mesh(geometry, material);
        var wire = new THREE.Mesh(geometry, wmaterial);
        var floor = new THREE.Mesh(geometry, material);
        var wfloor = new THREE.Mesh(geometry, wmaterial);

        cube.add(wfloor);
        cube.castShadow = true;
        cube.receiveShadow = true;
        cube.rotationValue = 0.1 + Math.abs(mathRandom(8));

        //floor.scale.x = floor.scale.z = 1+mathRandom(0.33);
        floor.scale.y = 0.05;//+mathRandom(0.5);
        cube.scale.y = 0.1 + Math.abs(mathRandom(8));
        //TweenMax.to(cube.scale, 1, {y:cube.rotationValue, repeat:-1, yoyo:true, delay:i*0.005, ease:Power1.easeInOut});
        /*cube.setScale = 0.1+Math.abs(mathRandom());
        
        TweenMax.to(cube.scale, 4, {y:cube.setScale, ease:Elastic.easeInOut, delay:0.2*i, yoyo:true, repeat:-1});
        TweenMax.to(cube.position, 4, {y:cube.setScale / 2, ease:Elastic.easeInOut, delay:0.2*i, yoyo:true, repeat:-1});*/

        var cubeWidth = 0.9;
        cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
        //cube.position.y = cube.scale.y / 2;
        cube.position.x = Math.round(mathRandom());
        cube.position.z = Math.round(mathRandom());

        floor.position.set(cube.position.x, 0/*floor.scale.y / 2*/, cube.position.z)

        town.add(floor);
        town.add(cube);
      };
      //----------------------------------------------------------------- Particular

      // var gmaterial = new THREE.MeshToonMaterial({ color: 0x0A7185, side: THREE.DoubleSide });
      // var gparticular = new THREE.CircleGeometry(0.01, 3);
      // var aparticular = 5;

      // for (var h = 1; h < 300; h++) {
      //   var particular = new THREE.Mesh(gparticular, gmaterial);
      //   particular.position.set(mathRandom(aparticular), mathRandom(aparticular), mathRandom(aparticular));
      //   particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
      //   smoke.add(particular);
      // };

      var pmaterial = new THREE.MeshPhongMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        roughness: 10,
        metalness: 0.6,
        opacity: 0.9,
        transparent: true
      });
      var pgeometry = new THREE.PlaneGeometry(60, 60);
      var pelement = new THREE.Mesh(pgeometry, pmaterial);
      pelement.rotation.x = -90 * Math.PI / 180;
      pelement.position.y = -0.001;
      pelement.receiveShadow = true;
      //pelement.material.emissive.setHex(0xFFFAFF + Math.random() * 100000);

      city.add(pelement);
    };

    //----------------------------------------------------------------- MOUSE function
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2(), INTERSECTED;
    var intersected;

    function onMouseMove(event) {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    function onDocumentTouchStart(event) {
      if (event.touches.length == 1) {
        event.preventDefault();
        mouse.x = event.touches[0].pageX - window.innerWidth / 2;
        mouse.y = event.touches[0].pageY - window.innerHeight / 2;
      };
    };
    function onDocumentTouchMove(event) {

      if (event.touches.length == 1) {
        event.preventDefault();
        mouse.x = event.touches[0].pageX - window.innerWidth / 2;
        mouse.y = event.touches[0].pageY - window.innerHeight / 2;
      }
    }
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('touchstart', onDocumentTouchStart, false);
    window.addEventListener('touchmove', onDocumentTouchMove, false);

    //----------------------------------------------------------------- Lights
    var ambientLight = new THREE.AmbientLight(0xFFFAFF, 4);
    var lightFront = new THREE.SpotLight(0xFFFAFF, 20, 10);
    var lightBack = new THREE.PointLight(0xFFFAFF, 0.5);

    var spotLightHelper = new THREE.SpotLightHelper(lightFront);
    //scene.add( spotLightHelper );

    lightFront.rotation.x = 45 * Math.PI / 180;
    lightFront.rotation.z = -45 * Math.PI / 180;
    lightFront.position.set(5, 5, 5);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0, 6, 0);

    smoke.position.y = 2;

    scene.add(ambientLight);
    city.add(lightFront);
    scene.add(lightBack);
    scene.add(city);
    city.add(smoke);
    city.add(town);

    //----------------------------------------------------------------- GRID Helper
    var gridHelper = new THREE.GridHelper(60, 120, 0x0000FF, 0x000000);
    city.add(gridHelper);

    //----------------------------------------------------------------- CAR world
    var generateCar = function () {

    }
    //----------------------------------------------------------------- LINES world

    // var createCars = function (cScale = 2, cPos = 20, cColor = 0x0A7185) {
    //   var cMat = new THREE.MeshToonMaterial({ color: cColor, side: THREE.DoubleSide });
    //   var cGeo = new THREE.CubeGeometry(1, cScale / 40, cScale / 40);
    //   var cElem = new THREE.Mesh(cGeo, cMat);
    //   var cAmp = 3;

    //   if (createCarPos) {
    //     createCarPos = false;
    //     cElem.position.x = -cPos;
    //     cElem.position.z = (mathRandom(cAmp));

    //     TweenMax.to(cElem.position, 3, { x: cPos, repeat: -1, yoyo: true, delay: mathRandom(3) });
    //   } else {
    //     createCarPos = true;
    //     cElem.position.x = (mathRandom(cAmp));
    //     cElem.position.z = -cPos;
    //     cElem.rotation.y = 90 * Math.PI / 180;

    //     TweenMax.to(cElem.position, 5, { z: cPos, repeat: -1, yoyo: true, delay: mathRandom(3), ease: Power1.easeInOut });
    //   };
    //   cElem.receiveShadow = true;
    //   cElem.castShadow = true;
    //   cElem.position.y = Math.abs(mathRandom(5));
    //   city.add(cElem);
    // };

    // var generateLines = function () {
    //   for (var i = 0; i < 60; i++) {
    //     createCars(0.1, 20);
    //   };
    // };

    //----------------------------------------------------------------- CAMERA position

    var cameraSet = function () {
      createCars(0.1, 20, 0xFFFAFF);
      //TweenMax.to(camera.position, 1, {y:1+Math.random()*4, ease:Expo.easeInOut})
    };

    //----------------------------------------------------------------- ANIMATE

    var animate = function () {
      var time = Date.now() * 0.00005;
      requestAnimationFrame(animate);

      city.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * uSpeed;
      city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
      if (city.rotation.x < -0.05) city.rotation.x = -0.05;
      else if (city.rotation.x > 1) city.rotation.x = 1;
      var cityRotation = Math.sin(Date.now() / 5000) * 13;
      //city.rotation.x = cityRotation * Math.PI / 180;

      //console.log(city.rotation.x);
      //camera.position.y -= (-(mouse.y * 20) - camera.rotation.y) * uSpeed;;

      for (let i = 0, l = town.children.length; i < l; i++) {
        var object = town.children[i];
        //object.scale.y = Math.sin(time*50) * object.rotationValue;
        //object.rotation.y = (Math.sin((time/object.rotationValue) * Math.PI / 180) * 180);
        //object.rotation.z = (Math.cos((time/object.rotationValue) * Math.PI / 180) * 180);
      }

      smoke.rotation.y += 0.01;
      smoke.rotation.x += 0.01;

      camera.lookAt(city.position);
      renderer.render(scene, camera);
    }
    if (stopAnimation){
      return
    }

    //----------------------------------------------------------------- START functions
    // generateLines();
    init();
    animate();
    

  },
  beforeUnmount(){
    document.body.removeChild(document.getElementById('three-js'));
    this.stopAnimation = true;
    

  }}
</script>
