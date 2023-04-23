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

/* ---------------------sidebar_right----------------------*/
</style>
