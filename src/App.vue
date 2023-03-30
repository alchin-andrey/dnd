<template>
  <router-view></router-view>
</template>

<script>
// import Main from '@/views/Main.vue';
// import SpellForm from '@/components/SpellForm.vue';
export default {
	name: "App",
	// components: {
	// 	Main,
	// 	SpellForm,
	// },
};
</script>

<style>
body {
	background-color: #0e1518;
}

a {
	color: #fff;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	display: flex;
  /* justify-content: center; */
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
	color: #ffffff;
}

.title-donat {
	margin-bottom: 21px;
}

.title-donat::first-letter {
	text-transform: uppercase;
}

.relative {
	position: relative;
}

.delimiter {
	height: 1px;
	/* margin: 40px 0 0 0; */
	background: rgba(255, 255, 255, 0.2);
}

.grid-col {
	display: grid;
}

.gap-10 {
	gap: 10px;
}

.stripe {
	width: 2px;
	background-color: rgba(255, 255, 255, 0.1);
}

.sidebar_left {
	padding-top: 32px;
	width: 320px;
	background-color: #0e1518;
	display: flex;
	flex-direction: column;
}

.main_menu_wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.main_chapter {
	padding: 0 32px 0 32px;
	display: flex;
	flex-direction: column;
	gap: 22px;
}

.main_chapter_menu {
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.btm-fade-enter-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-leave-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-enter-from,
.btm-fade-leave-to {
	transform: translateX(-300px);
	opacity: 0;
}

/* ---------------------characters----------------------*/

.represent {
	padding: 32px;
	flex: 1 1 auto;
	display: flex;
	background-color: #0e1518;
	z-index: 2;
	overflow: hidden;
}

.character {
	width: 100%;
	height: 100%;
	position: relative;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.character > img {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.character > svg {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-property: all, fill;
  transition-duration: 0.8s, 0.1s;
  transition-timing-function: ease-in-out;
}

.active_eyes {
	align-self: flex-start;
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.active_skin {
	align-self: flex-start;
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

/* ---------------------sidebar_right----------------------*/

.sidebar_wrap {
	height: 100%;
	display: flex;
	width: 0;
	transition: all 0.4s ease-in-out;
	position: relative;
}

.sidebar_wrap_open {
	width: 426px;
	transition: all 0.4s ease-in-out;
}

.sidebar_right {
	min-width: 426px;
	max-width: 426px;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #0e1518;
	z-index: 2;
	transition: all 0.4s ease-in-out;
}

.sidebar_right::-webkit-scrollbar {
	width: 0;
}

.sidebar_right_close {
	margin-right: -426px;
	opacity: 0;
	transition: all 0.4s ease-in-out;
}

.story {
	max-width: 362px;
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}

.story h3 {
  font-family: 'Inter-700';
  font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-top: 26px;
	margin-bottom: 5px;
}

.story-print h3 {
  font-family: 'Inter-600';
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.02em;
	margin-top: 26px;
	margin-bottom: 10px;
}

.fade-body-enter-active,
.fade-body-leave-active {
	transition: opacity 0.3s ease-in-out;
}

.fade-body-enter-from,
.fade-body-leave-to {
	opacity: 0;
}

.slide-fade-enter-active {
	transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}

.plug-wrap {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: #0e1518;
	position: fixed;
	z-index: 10;
	color: #ffffff;
	padding: 20px;
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	gap: 26px;
}

.plug-dialog {
	/* margin: 0 auto; */
	width: 320px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 12px;
	padding: 28px;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	gap: 72px;
	z-index: 1000;
}

.emog .emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 4px;
}














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


/* ---------------------sidebar_right----------------------*/
</style>
