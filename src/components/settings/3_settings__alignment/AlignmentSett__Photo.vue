<template>
	<AppCardWrapp :active_card="!site_settings.photo_user" @click="getPhotoStatus(false)">
		<div class="int-700">{{ T('standard') }}</div>
	</AppCardWrapp>
	<AppCardWrapp gap="26" :active_card="site_settings.photo_user"
		:passive="!active_Custom_Photo || site_settings.photo_user" @click="getPhotoStatus(active_Custom_Photo)">
		<main class="flex-col gap-8">
			
			<section :class="['input-box', stule_Hov]" :style="stule_Img_Obj">
				<label for="">
					<input type="file" id="myFile" size="50" accept="image/*" @change="onChange($event)">
					<!-- <AppSvg class="svg-54 svg-main-f" name="upload"/> -->
				</label>
				<div v-if="MY.custom_photo" class="plag-photo-load"></div>
				<template v-if="size_Cover && MY.custom_photo">
					<AppRangPhoto :class="[style_Rang_Photo]" v-if="pos_Rang_Photo"
						v-model.number="site_settings.photo_sett.position" :orientation="pos_Rang_Photo" :pad="padding_Rang_Photo"
						@click.stop />
				</template>
			</section>
			
			<section class="grit-btm" v-if="MY.custom_photo">
				<AppBtmIcon icon="photo_fill" @click="getPosition(true)" :active_btm="site_settings.photo_sett.size_cover"
					@click.stop />
				<AppBtmIcon icon="photo_fit" @click="getPosition(false)" :active_btm="!site_settings.photo_sett.size_cover"
					@click.stop />
				<AppBtmIcon icon="delete" @click="delPhoto()" @click.stop />
			</section>

			<label v-if="!MY.custom_photo" class="photo-url" for="url">
				<input ref="url_photo" type="url" name="url" id="url" class="int-700" :placeholder="T('enter_url')" pattern="https://.*" size="30"
				required @change="onChangeUrl($event)">
			</label>
			
		</main>

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

	// mounted() {
	// 	document.addEventListener("paste", this.PastePhoto);
	// },

	// beforeUnmount() {
	// 	document.removeEventListener("paste", this.PastePhoto);
	// },

	computed: {
		...mapState(useMYStore, ["MY", "MY_Race", "MY_Class"]),
		...mapState(usePagesStore, ["site_settings", "alignment_page"]),
		...mapState(useAlignmentStore, ["photo_Link_Hero", "photo_Link_Pinterest"]),

		stule_Img_Obj() {
			if (this.active_Custom_Photo) {
				const pos = this.site_settings.photo_sett.position + '%';
				let size = 'cover';
				if (!this.site_settings.photo_sett.size_cover) {
					size = 'contain';
				}
				const pos_num = this.size_Cover ? pos : '50%';
				return {
					'background-image': `url(${this.MY.custom_photo})`,
					'background-size': size,
					'background-position': `${pos_num} ${pos_num}`,
				}
			}
			return { 'background-image': this.upload };
		},

		stule_Hov() {
			if (!this.MY.custom_photo) return 'hov cur-p'
		},

		active_Curd() {
			return Boolean(this.MY.custom_photo) && this.site_settings.photo_user
		},

		active_Custom_Photo() {
			return Boolean(this.MY.custom_photo)
		},

		size_Cover() {
			return this.site_settings.photo_sett.size_cover
		},

		ratio_Rang_Photo() {
			const maim_rang = this.alignment_page.ratio_photo;
			const photo_rang = this.site_settings.photo_sett.ratio;
			return maim_rang - photo_rang;
		},

		pos_Rang_Photo() {
			if (this.ratio_Rang_Photo < 0) return 'horizontal';
			if (this.ratio_Rang_Photo > 0) return 'vertical';
		},

		padding_Rang_Photo() {
			if (this.ratio_Rang_Photo < 0) return 10;
			if (this.ratio_Rang_Photo > 0) return 8;
		},

		style_Rang_Photo() {
			if (this.ratio_Rang_Photo < 0) return 'rang-rl';
			if (this.ratio_Rang_Photo > 0) return 'rang-tb';
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
				reader.readAsDataURL(event.target.files[0]);
				reader.addEventListener("load", (el) => {
					if (el.target.result) {
						const image = new Image();
						image.src = el.target.result;
						image.addEventListener("load", (e) => {
							this.site_settings.photo_sett.ratio = e.target.width / e.target.height;
						});
						this.MY.custom_photo = el.target.result;
						this.site_settings.photo_user = true;
					}
				});
			}
		},

		PastePhoto(e) {
			const el = this.$refs.url_photo.value
			console.log('el:', el)
			const image = new Image();
			image.src = event.target.value;
			image.addEventListener("paste", (e) => {
				console.log('e:', e)
				this.site_settings.photo_sett.ratio = e.target.width / e.target.height;
				this.MY.custom_photo = event.target.value;
				this.site_settings.photo_user = true;
			});
		},

		onChangeUrl(event) {
			const el = this.$refs.url_photo.value
			// console.log('el:', el)
			// console.log('event:', event.target.value)
			const image = new Image();
			image.src = event.target.value;
			image.addEventListener("load", (e) => {
				this.site_settings.photo_sett.ratio = e.target.width / e.target.height;
				this.MY.custom_photo = event.target.value;
				this.site_settings.photo_user = true;
			});
		},

		getPosition(bool) {
			this.site_settings.photo_sett.size_cover = bool;
		},

		showEdit() {
			if (this.size_Cover) {
				this.edit_visible = !this.edit_visible;
			}
		},

		delPhoto() {
			this.site_settings.photo_sett.size_cover = true;
			this.site_settings.photo_sett.position = 50;

			this.MY.custom_photo = null;
			this.site_settings.photo_user = false;
			this.edit_visible = false;
			document.getElementById('myFile').value = '';
		},
	},
};
</script>

<style scoped>
.grit-btm {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 48px;
	gap: 8px;
}

.input-box {
	position: relative;
	width: 100%;
	height: 480px;
	background-color: rgba(255, 255, 255, 0.06);
	background-repeat: no-repeat;
	background-position: 50%, 50%;
	border-radius: 6px;
	overflow: hidden;
}

.plag-photo-load {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10;
}

.rang-rl {
	position: absolute;
	bottom: 8px;
	left: 8px;
	right: 8px;
	z-index: 100;
}

.rang-tb {
	position: absolute;
	top: 8px;
	bottom: 8px;
	right: 8px;
	z-index: 100;
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
	overflow: hidden;
	transition-property: background-image, background-color;
	transition-duration: .5s;
}

.hov label:hover {
	background-color: rgba(255, 255, 255, 0.06);
}

/* .hov-img label:hover{
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E");
	background-color: rgba(0, 0, 0, 0.65);
	background-repeat: no-repeat;
	background-position: 50%, 50%;
  } */

input[type=url] {
	width: 100%;
	height: 48px;
	background-color: rgba(255, 255, 255, 0.06);
	border-radius: 8px;
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	padding: 16px;
	color: #ffffff;
}

.photo-url:hover {
	background-color: rgba(255, 255, 255, 0.06);
	transition-duration: .5s;
	border-radius: 8px;
	/* overflow: hidden; */
}
</style>
