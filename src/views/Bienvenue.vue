<template>
  <div class="page">
    <h1 
  style="
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'MonSuperFont', sans-serif;
    color: #C79D77;
    font-size: 60px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  "
>
  Bienvenue dans mon Portfolio
</h1>
    <div id="petals-container"></div>
    <router-link to="/accueil" class="button-78">Entrez</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'



onMounted(() => {
  var petalPlayers = []
  var petalCount = 40 // Nombre total de pétales
  var petalContainer = document.getElementById("petals-container")

  for (var i = 0; i < petalCount; i++) {
    var petal = document.createElement("div")
    petal.classList.add("petal")
    petalContainer.appendChild(petal)
  }

  function animatePetals() {
    var petals = document.querySelectorAll(".petal")

    if (!petals[0]?.animate) {
      petalContainer.prepend("Uh oh, your browser doesn't support Web Animations API.")
      return false
    }

    for (var i = 0, len = petals.length; i < len; ++i) {
      var petal = petals[i]
      var petalNumber = Math.floor(Math.random() * 7) + 1
      petal.innerHTML = `<div class="rotate"><img src="/images/petale${petalNumber}.png" class="askew"></div>`

      var scale = Math.random() * 1.5 + 0.4

      var player = petal.animate(
        [
          {
            transform: `translate3d(${(i / len) * 100}vw,0,0) scale(${scale})`,
            opacity: scale,
          },
          {
            transform: `translate3d(${(i / len) * 100 + 10}vw,150vh,0) scale(${scale})`,
            opacity: 1,
          },
        ],
        {
          duration: Math.random() * 90000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000),
        }
      )

      petalPlayers.push(player)
    }
  }

  animatePetals()
})
</script>
<style >
html, body {
  margin: 0;
  padding: 0;
  border: none;
  height: 100%;
  width: 100%;
  overflow: hidden; /* évite tout scroll */
  background: transparent;
  box-sizing: border-box;
}
@font-face {
  font-family: 'MonSuperFont';
  src: url('../assets/fonts/GangOfThree-nRL8M.ttf') format('truetype');
}

.page {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: url("/images/wanokuni.jpg") no-repeat center center fixed;
  background-size: cover;
  font-family: Arial, sans-serif;
  color: white;
  position: relative;
  overflow: hidden;
}

.page::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 0;
}

.petal {
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0.8;
  pointer-events: none;
  background-size: cover;
  animation: fall linear infinite, sway ease-in-out infinite;
  z-index: 150;
  color: rgba(0, 0, 0, 0);
}

.petal .rotate {
  animation: driftyRotate 1s infinite both ease-in-out;
  perspective: 1000;
}
.petal .askew {
  background: transparent;
  transform: skewY(10deg);
  display: block;
  width: 2rem;
  height: 2rem;
  animation: drifty 1s infinite alternate both ease-in-out;
  perspective: 1000;
  border: none;
  outline: none;
}

.petal:nth-of-type(7n) .askew { animation-delay: -.6s; animation-duration: 2.25s; }
.petal:nth-of-type(7n + 1) .askew { animation-delay: -.879s; animation-duration: 3.5s; }
.petal:nth-of-type(7n + 2) .askew { animation-delay: -.11s; animation-duration: 1.95s; }
.petal:nth-of-type(7n + 3) .askew { animation-delay: -.246s; animation-duration: .85s; }
.petal:nth-of-type(7n + 4) .askew { animation-delay: -.43s; animation-duration: 2.5s; }
.petal:nth-of-type(7n + 5) .askew { animation-delay: -.56s; animation-duration: 1.75s; }
.petal:nth-of-type(7n + 6) .askew { animation-delay: -.76s; animation-duration: 1.5s; }

.petal:nth-of-type(9n) .rotate { animation-duration: 2s; }
.petal:nth-of-type(9n + 1) .rotate { animation-duration: 2.3s; }
.petal:nth-of-type(9n + 2) .rotate { animation-duration: 1.1s; }
.petal:nth-of-type(9n + 3) .rotate { animation-duration: .75s; }
.petal:nth-of-type(9n + 4) .rotate { animation-duration: 4.3s; }
.petal:nth-of-type(9n + 5) .rotate { animation-duration: 3.05s; }
.petal:nth-of-type(9n + 6) .rotate { animation-duration: 2.76s; }
.petal:nth-of-type(9n + 7) .rotate { animation-duration: 7.6s; }
.petal:nth-of-type(9n + 8) .rotate { animation-duration: 1.78s; }

@keyframes drifty {
  0% { transform: skewY(10deg) translate3d(-250%, 0, 0); }
  100% { transform: skewY(-12deg) translate3d(250%, 0, 0); }
}

@keyframes driftyRotate {
  0% { transform: rotateX(0); }
  100% { transform: rotateX(359deg); }
}

h1 {
  font-family: 'MonSuperFont', sans-serif;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #C79D77;
  font-size: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  max-width: 90vw;
  text-align: center;
}

.button-78 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-family: 'MonSuperFont', sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #DBDFE0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;
  text-decoration: none;
}

.button-78:before,
.button-78:after {
  border-radius: 80px;
}

.button-78:before {
  background-color: rgb(133, 41, 53);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-78:after {
  background-image: linear-gradient(92.83deg, #C79D77 0, #8A6145 100%);
  bottom: 3px;
  content: "";
  display: block;
  left: 3px;
  overflow: hidden;
  position: absolute;
  right: 3px;
  top: 3px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-78:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
}

.button-78:active:not(:disabled) {
  color: #ccc;
}

.button-78:active:not(:disabled):after {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #C79D77 0, #8A6145 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-78:disabled {
  cursor: default;
  opacity: .24;
}
</style>
