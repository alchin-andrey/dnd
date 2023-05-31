<template>
	<AppCardWrapp :active_card="!site_settings.photo_user" @click="getPhotoStatus(false)">
		<div class="int-700">{{ T('standard') }}</div>
	</AppCardWrapp>
	<AppCardWrapp 
	gap="26" 
	:active_card="site_settings.photo_user" 
	:passive="!active_Custom_Photo || site_settings.photo_user"
	@click="getPhotoStatus(active_Custom_Photo)"
	>
		<section :class="['input-box', stule_Hov]" :style="stule_Img_Obj" @click.stop>
			<label for="">
				<input type="file" id="myFile" size="50" accept="image/*" @change="onChange($event)">
			</label>
			<template v-if="edit_visible">
				<AppRangPhoto class="rang-rl" v-model.number="site_settings.photo_sett.pos_rl"/>
				<AppRangPhoto class="rang-tb" v-model.number="site_settings.photo_sett.pos_tb" orientation="vertical"/>
			</template>
		</section>

		<section class="flex-row gap-8" v-if="MY.custom_photo">
			<AppBtmIcon class="size-btm" :icon="size_Icon" @click="getPosition()"/>
			<AppBtmIcon class="size-btm" icon="edit" :passive="!size_Cover" @click="showEdit()"/>
			<AppBtmIcon class="size-btm" icon="delete" @click="delPhoto()"/>
		</section>
		<!-- <input class="int-400" type="url" name="url" id="url" placeholder="Введіть URL" pattern="https://.*" size="30" required @change="onChangeUrl($event)"> -->

		<section>
			<div class="int-700 pos-rel">{{ T('your_image') }}</div>
			<div class="int-400 white-04 mr-t-4">{{ T('your_image_details') }}</div>
		</section>

		<section class="int-400 flex-row gap-32">
			<a @click.stop target="_blank" :href="photo_Link_Hero">{{ T('edit_photo') }}</a>
			<a @click.stop target="_blank" :href="photo_Link_Pinterest">{{ T('choose_photo') }}</a>
		</section>

		<my-dialog-spell v-model:show="dialogVisible">
			<div class="input-box" :style="stule_Img_Obj"></div>
		</my-dialog-spell>
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
			dialogVisible: false,
			edit_visible: false,
			upload: `url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E")`,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Race", "MY_Class"]),
		...mapState(usePagesStore, ["site_settings"]),
		...mapState(useAlignmentStore, ["photo_Link_Hero", "photo_Link_Pinterest"]),

		stule_Img_Obj() {
			if (this.active_Custom_Photo) {
				const rl = this.site_settings.photo_sett.pos_rl + '%';
				const tb = this.site_settings.photo_sett.pos_tb + '%';
				const size = this.site_settings.photo_sett.size;
				const rl_num = this.size_Cover ? rl : '50%';
				const tb_num = this.size_Cover ? tb : '50%';
				return {
					'background-image': `url(${this.MY.custom_photo})`,
					'background-size': size,
					// 'background-size': '135%',
					'background-position': `${rl_num} ${tb_num}`,
				}
			}
				return {'background-image': this.upload};
		},

		stule_Hov() {
			if (this.edit_visible) return null;
			if (this.active_Custom_Photo) return 'hov-img';
			else return 'hov'
		},

		active_Curd() {
			return Boolean(this.MY.custom_photo) && this.site_settings.photo_user
		},

		active_Custom_Photo() {
			return Boolean(this.MY.custom_photo)
		},

		size_Cover() {
			return this.site_settings.photo_sett.size == 'cover'
		},

		size_Icon() {
			if(this.size_Cover) return 'arrow_slider_rl';
			else return 'arrow_slider_tb';
		},
	},

	methods: {

		getPhotoStatus(bool) {
			this.site_settings.photo_user = bool;
		},

		onChange(event) {
			const inc = event.target.files[0].type.includes("image")
			if (inc) {
				let reader = new FileReader();
				reader.addEventListener("load", (el) => {
					if (el.target.result) {
						this.MY.custom_photo = el.target.result;
						this.site_settings.photo_user = true;
					}
				});
				reader.readAsDataURL(event.target.files[0]);
			}
		},

		// onChangeUrl(event) {
		// 	this.MY.custom_photo = event.target.value
		// },

		getPosition() {
			if(this.size_Cover) {
				this.site_settings.photo_sett.size = 'contain'
				this.edit_visible = false;
			} else {
				this.site_settings.photo_sett.size = 'cover'
			}
		},

		showEdit() {
			if(this.size_Cover) {
				this.edit_visible = !this.edit_visible;
			}
    },

		delPhoto() {
			this.site_settings.photo_sett.size = 'cover';
			this.site_settings.photo_sett.pos_rl = 50;
			this.site_settings.photo_sett.pos_tb = 50;
			this.MY.custom_photo = null;
			this.site_settings.photo_user = false;
			this.edit_visible = false;
			document.getElementById('myFile').value = '';
		},
	},
};
</script>

<style scoped>

.size-btm {
	width: 100%;
	height: 47px;
}
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

.rang-rl {
	position: absolute;
	bottom: 10px;
	left: 50px;
	right: 50px;
}

.rang-tb {
	position: absolute;
	top: 50px;
	bottom: 50px;
	right: 10px;
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

.input-box label:hover{
	/* background-color: rgba(255, 255, 255, 0.06); */
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

	/* .svg-pos {
	position: absolute;
	top: 50%;
	right: 0;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
} */

/* input[type=url] {
	width: 100%;
	background-color: rgba(255, 255, 255, 0.06);
	border-radius: 4px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	padding: 4px;
} */
</style>
