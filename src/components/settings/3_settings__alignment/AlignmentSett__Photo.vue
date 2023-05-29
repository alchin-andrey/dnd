<template>
	<!-- <AppCardWrapp :active_card="!alignment_page.user_image" @click="getPhotoStatus(false)"> -->
	<AppCardWrapp :active_card="!alignment_page.user_image" @click="getPhotoStatus(false)">
		<div class="int-700">{{ T('standard') }}</div>
	</AppCardWrapp>
	<!-- <AppCardWrapp gap="26" :active_card="alignment_page.user_image" @click="getPhotoStatus(true)" passive> -->
	<AppCardWrapp 
	gap="26" 
	:active_card="alignment_page.user_image" 
	:passive="!active_Custom_Photo"
	@click="getPhotoStatus(active_Custom_Photo)"
	>
		<section :class="['input-box', stule_Hov]" :style="stule_Img_Obj" @click.stop>
			<label for="">
				<input type="file" id="myFile" size="50" accept="image/*" @change="onChange($event)">
			</label>
		</section>
		<!-- <input class="int-400" type="url" name="url" id="url" placeholder="Введіть URL" pattern="https://.*" size="30" required @change="onChangeUrl($event)"> -->

		<section>
			<div class="int-700 pos-rel">{{ T('your_image') }}
				<AppSvg v-if="MY.custom_photo" class="svg-18 svg-pos cur-p" name="delete" @click="delPhoto()"/>
			</div>
			<div class="int-400 white-04 mr-t-4">{{ T('your_image_details') }}</div>
		</section>

		<section class="int-400 flex-row gap-32">
			<a @click.stop target="_blank" :href="photo_Link_Hero">{{ T('edit_photo') }}</a>
			<a @click.stop target="_blank" :href="photo_Link_Pinterest">{{ T('choose_photo') }}</a>
		</section>

	</AppCardWrapp>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "AlignmentSett__Photo",
	data() {
		return {
			upload: `url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E")`,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Race", "MY_Class"]),
		...mapState(usePagesStore, ["alignment_page"]),
		...mapState(useAlignmentStore, ["photo_Link_Hero", "photo_Link_Pinterest"]),

		stule_Img_Obj() {
			if (this.active_Custom_Photo) return {
				'background-image': `url(${this.MY.custom_photo})`,
				'background-size': 'contain',
			}
			else return {'background-image': this.upload};
		},

		stule_Hov() {
			if (this.active_Custom_Photo) return 'hov-img';
			else return 'hov'
		},

		active_Curd() {
			return Boolean(this.MY.custom_photo) && this.alignment_page.user_image
		},

		active_Custom_Photo() {
			return Boolean(this.MY.custom_photo)
		}
	},

	methods: {
		getPhotoStatus(bool) {
			this.alignment_page.user_image = bool;
		},

		onChange(event) {
			const inc = event.target.files[0].type.includes("image")
			if (inc) {
				let reader = new FileReader();
				reader.addEventListener("load", (el) => {
					if (el.target.result) {
						this.MY.custom_photo = el.target.result;
						this.alignment_page.user_image = true;
					}
				});
				reader.readAsDataURL(event.target.files[0]);
			}
		},

		// onChangeUrl(event) {
		// 	this.MY.custom_photo = event.target.value
		// },

		delPhoto() {
			this.MY.custom_photo = null;
			this.alignment_page.user_image = false;
			document.getElementById('myFile').value = '';
		}
	},
};
</script>

<style scoped>
.input-box {
	position: relative;
	width: 100%;
	height: 480px;
	background-color: rgba(255, 255, 255, 0.06);
	background-repeat: no-repeat;
	background-position: 50%, 50%;
	border-radius: 6px;
	cursor: pointer;
}

.input-box input {
	width: 100%;
	height: 100%;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	cursor: pointer;
}

.input-box label {
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
	border-radius: 6px;


	/* position: fixed;
	top: 0;
  bottom: 0;
  right: 0;
  left: 0; */
}
.hov label:hover{
	background-color: rgba(255, 255, 255, 0.06);
  }

.hov-img label:hover{
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E");
	background-color: rgba(0, 0, 0, 0.65);
	background-repeat: no-repeat;
	background-position: 50%, 50%;
  }

	.svg-pos {
	position: absolute;
	top: 50%;
	right: 0;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

/* input[type=url] {
	width: 100%;
	background-color: rgba(255, 255, 255, 0.06);
	border-radius: 4px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	padding: 4px;
} */
</style>
