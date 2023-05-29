<template>
	<!-- <AppCardWrapp :active_card="!alignment_page.my_image" @click="getPhotoStatus(false)"> -->
	<AppCardWrapp :active_card="!active_Custom_Photo" passive>
		<div class="int-700">{{ T('standard') }}</div>
	</AppCardWrapp>
	<!-- <AppCardWrapp gap="26" :active_card="alignment_page.my_image" @click="getPhotoStatus(true)" passive> -->
	<AppCardWrapp gap="26" :active_card="active_Custom_Photo" passive>
		
		<section class="input_box" :style="stule_Img_Obj">
			<label for="">
				<input type="file" id="myFile" size="50" accept="image/*" @change="onChange($event)">
			</label>
		</section>

		<section>
			<div class="int-700 pos-rel">{{ T('your_image') }}
				<AppSvg v-if="MY.custom_photo" class="svg-18 svg-pos cur-p" name="delete" @click="delPhoto()"/>
			</div>
			<div class="int-400 white-04 mr-t-4">{{ T('your_image_details') }}</div>
		</section>

		<section class="int-400 flex-row gap-32">
			<a target="_blank" href="https://www.heroforge.com/">{{ T('edit_photo') }}</a>
			<a target="_blank" :href="link_Pinterest">{{ T('choose_photo') }}</a>
		</section>

	</AppCardWrapp>
</template>

<script>
import { mapState } from "pinia";
// import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
export default {
	name: "AlignmentSett__Photo",
	data() {
		return {
			upload: `url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E")`,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Race", "MY_Class"]),
		...mapState(useGenderStore, ["sex_Char_Body"]),
		// ...mapState(usePagesStore, ["alignment_page"]),

		stule_Img_Obj() {
			if (this.MY.custom_photo) return {
				'background-image': `url(${this.MY.custom_photo})`,
				'background-size': 'contain',
			}
			else return {'background-image': this.upload};
		},

		link_Pinterest() {
			const main = 'https://ro.pinterest.com/search/pins/?q=dnd'
			const race_name = this.MY_Race.name;
			const class_name = this.MY_Class.name;
			const sex = this.sex_Char_Body;
			const link = `${main}%20${race_name}%20${sex}%20${class_name}`
			return link;
		},

		active_Custom_Photo() {
			return Boolean(this.MY.custom_photo)
		}
	},

	methods: {
		// getPhotoStatus(bool) {
		// 	this.alignment_page.my_image = bool;
		// },

		onChange(event) {
			const inc = event.target.files[0].type.includes("image")
			// console.log('event.target.files[0]:', event.target.files[0].type)
			if (inc) {
				let reader = new FileReader();
				// let name = event.target.files[0].name;
				reader.addEventListener("load", (el) => {
					if (el.target.result) {
						this.MY.custom_photo = el.target.result
					}
				});
				reader.readAsDataURL(event.target.files[0]);
			}
		},

		delPhoto() {
			this.MY.custom_photo = null;
			document.getElementById('myFile').value = '';
		}
	},
};
</script>

<style scoped>
.input_box {
	position: relative;
	width: 100%;
	height: 480px;
	background-color: rgba(255, 255, 255, 0.06);
	background-repeat: no-repeat;
	background-position: 50%, 50%;
	border-radius: 6px;
	cursor: pointer;
}

.input_box input {
	width: 100%;
	height: 100%;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	cursor: pointer;
}

.input_box label {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	width: 100%;
	height: 100%;
	font-weight: 400;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	overflow: hidden;
	transition-property: background-image, background-color;
	transition-duration: .5s;
}
.input_box label:hover{
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E");
	background-color: rgba(0, 0, 0, 0.65);
	background-repeat: no-repeat;
	background-position: 50%, 50%;
	border-radius: 6px;
  }

	.svg-pos {
	position: absolute;
	top: 50%;
	right: 0;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}
</style>
