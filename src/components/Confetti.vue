<template>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
</template>

<script>
export default {
	name: "Confetti",
};
</script>

<style>
.confetti {
  width: 15px;
  height: 15px;
  background-color: rgb(255, 215, 0);
  position: absolute;
  left: 50%;
  animation: confetti 5s ease-in-out -2s infinite;
  transform-origin: left top;
}

.confetti:nth-child(1) {
  background-color: rgb(255, 215, 0);
  left: 10%;
  animation-delay: 0;
  z-index: 500;
}

.confetti:nth-child(2) {
  background-color: rgb(0, 87, 184);
  left: 20%;
  animation-delay: -5s;
}

.confetti:nth-child(3) {
  background-color: rgb(255, 215, 0);
  left: 30%;
  animation-delay: -3s;
  z-index: 500;
}

.confetti:nth-child(4) {
  background-color: rgb(0, 87, 184);
  left: 40%;
  animation-delay: -2.5s;
}

.confetti:nth-child(5) {
  background-color: rgb(255, 215, 0);
  left: 50%;
  animation-delay: -4s;
  z-index: 500;
}

.confetti:nth-child(6) {
  background-color: rgb(0, 87, 184);
  left: 60%;
  animation-delay: -6s;
  z-index: 500;
}

.confetti:nth-child(7) {
  background-color: rgb(255, 215, 0);
  left: 70%;
  animation-delay: -1.5s;
}

.confetti:nth-child(8) {
  background-color: rgb(0, 87, 184);
  left: 80%;
  animation-delay: -2s;
  z-index: 500;
}

.confetti:nth-child(9) {
  background-color: rgb(255, 215, 0);
  left: 90%;
  animation-delay: -3.5s;
}

.confetti:nth-child(10) {
  background-color: rgb(0, 87, 184);
  left: 100%;
  animation-delay: -2.5s;
  z-index: 500;
}

.confetti:nth-child(11) {
  background-color: rgb(255, 215, 0);
  left: 72%;
  animation-delay: -5.5s;
}

.confetti:nth-child(12) {
  background-color: rgb(0, 87, 184);
  left: 34%;
  animation-delay: -2.8s;
  z-index: 500;
}

.confetti:nth-child(13) {
  background-color: rgb(255, 215, 0);
  left: 100%;
  animation-delay: -7.5s;
}

.confetti:nth-child(14) {
  background-color: rgb(0, 87, 184);
  left: 16%;
  animation-delay: -8.5s;
  z-index: 500;
}

@keyframes confetti {
  0% {
    transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
  }
  25% {
    transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
  }
  50% {
    transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
  }
  75% {
    transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
  }
  100% {
    transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
  }
}

</style>
