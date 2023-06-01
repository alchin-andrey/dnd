<template>
	<AppCardWrapp :active_card="!site_settings.photo_user" @click="getPhotoStatus(false)">
		<div class="int-700">{{ T('standard') }}</div>
	</AppCardWrapp>
	<AppCardWrapp gap="26" :active_card="site_settings.photo_user"
		:passive="!active_Custom_Photo || site_settings.photo_user" @click="getPhotoStatus(active_Custom_Photo)" no_blur>
		<main class="flex-col gap-8">

			<section
			ref="myFileBox"
			class="input-box" 
			:class="{
				'hov cur-p': !MY.custom_photo,
				'animation--active': errors.file_photo,
			}" 
			:style="stule_Img_Obj"
			>
				<label for="">
					<input type="file" ref="myFile" id="myFile" size="50" accept="image/*" @change="onChange($event)">
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
			<AppTooltip
				v-if="!MY.custom_photo" 
				class="pos-rel"
				text="url_photo_error"
				:shown="errors.url_photo"
				error
			>
				<label 
				class="photo-url flex-row" 
				for="url"
				>
					<input 
						ref="urlPhoto" 
						type="url"
						name="url"
						class="int-700"
						:class="{'error-text': errors.url_photo}"
						:placeholder="T('enter_url')"
						pattern="https://.*" 
						size="30"
						@paste="onPasteUrl($event)"
						@change="onChangeUrl($event)"
						@input="onInputUrl($event)"
					>
				</label>
			</AppTooltip>
		</main>

		<section>
			<div class="int-700 pos-rel">{{ T('your_image') }}</div>
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
			errors: {
				file_photo: false,
				url_photo: false,
				url_value_photo: false,
			},

			file_erorr_photo: false,
			url_erorr_photo: false,
			url_value_erorr_photo: false,

			upload: `url("data:image/svg+xml,%3Csvg width='36' height='54' viewBox='0 0 36 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26.3251L2.30369 28.6283L16.1903 14.4785V53.9664H19.4809V14.4127L33.6307 28.6283L36 26.2591L17.8356 8.09465L0 26.3251Z' fill='white'/%3E%3Cpath d='M1.11882 0H34.8151V3.29065H1.11882V0Z' fill='white'/%3E%3C/svg%3E")`,
		};
	},

	mounted() {
		document.addEventListener("paste", this.PastePhoto);
		document.addEventListener("drop", this.dropPhoto);
		document.addEventListener("dragover", this.dragoverPhoto);
	},

	beforeUnmount() {
		document.removeEventListener("paste", this.PastePhoto);
		document.removeEventListener("drop", this.dropPhoto);
		document.removeEventListener("dragover", this.dragoverPhoto);
	},

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

		readPhotoFile(file) {
				// let blob = file;
				// let link = URL.createObjectURL(blob);
			let reader = new FileReader();
				reader.readAsDataURL(file);
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
		},

		readLinkPhoto(link) {
			const path = 'https://'
			link = link.substr(0, 4) == 'http' ? link : path + link;
			const image = new Image();
			image.src = link;
			image.addEventListener("load", (e) => {
				this.site_settings.photo_sett.ratio = e.target.width / e.target.height;
				this.MY.custom_photo = link;
				this.site_settings.photo_user = true;
			});
		},

		// readImg(val, type) {
		// 	let src = val;
		// 	const path = 'https://'
		// 	src = val.substr(0, 4) == 'http' ? val : path + val;
		// 	this.$refs.urlPhoto.value = val;
		// 	const img = new Image();
		// 	img.onerror = () => { 
		// 		if (type == 'url') this.errors.url_photo = true;
		// 		if (type == 'value') this.errors.url_value_photo = true;
		// 		if (this.$refs.urlPhoto) {
		// 			this.$refs.urlPhoto.value = val;
		// 			this.errors.url_value_photo = true;
		// 		}
		// 	}
		// 	img.onload = () => {
		// 		this.site_settings.photo_sett.ratio = img.width / img.height;
		// 		this.MY.custom_photo = src;
		// 		this.site_settings.photo_user = true;
		// 	}
		// 	img.src = src;
		// },

		readImg(link) {
			let src = link;
			const path = 'https://'
			src = link.substr(0, 4) == 'http' ? link : path + link;
			if (this.$refs.urlPhoto) {
				this.$refs.urlPhoto.value = src;
			};
			const img = new Image();
			img.onerror = () => {
				console.log('onerror:')
				this.fileError();
				this.errors.url_photo = true;
			};
			img.onload = () => {
				this.site_settings.photo_sett.ratio = img.width / img.height;
				this.MY.custom_photo = src;
				this.site_settings.photo_user = true;
			}
			img.src = src;
		},

		fileError() {
			console.log('this.errors.file_photo:', this.errors.file_photo)
			this.errors.file_photo = false;
			// this.$refs.myFileBox.classList.remove("animation--active");
				setTimeout(() => {
				this.errors.file_photo = true;
				// this.$refs.myFileBox.classList.add("animation--active");
				if(!this.MY.custom_photo) {
					this.$refs.myFile.value = '';
				}
			}, 0);
		},

		onChange(event) {
			const image_file = event.target.files[0].type.includes("image")
			if (image_file) {
				this.readPhotoFile(event.target.files[0])
			} else {
				this.fileError();
			}
		},

		onPasteUrl(event) {
			setTimeout(() => {
				const link = event.target.value;
				this.readImg(link);
			}, 0);
		},

		onChangeUrl(event) {
			const link = event.target.value;
			if(link) {
				this.readImg(link);
			}
		},

		onInputUrl(event) {
			const link = event.target.value;
			if(link == '') this.errors.url_photo = false;
		},

		PastePhoto(event) {
			const item = Array.from(event.clipboardData.items).find(x => /^image\//.test(x.type));
			if (item) {
				this.readPhotoFile(item.getAsFile())
			} else {
				const link = event.clipboardData.getData('Text');
				if(link) {
					this.readImg(link);
				} else {
					this.fileError();
				}
			}
		},

		dropPhoto(event) {
			const item = Array.from(event.dataTransfer.items).find(x => /^image\//.test(x.type));
			if (item) {
				this.readPhotoFile(item.getAsFile())
			} else {
				const link = event.dataTransfer.getData('Text');
				if(link) {
					this.readImg(link);
				} else {
					this.fileError();
				}
			} 
			event.preventDefault();
		},

		dragoverPhoto(event) {
			event.preventDefault();
		},

		getPosition(bool) {
			this.site_settings.photo_sett.size_cover = bool;
		},

		delPhoto() {
			this.site_settings.photo_sett.size_cover = true;
			this.site_settings.photo_sett.position = 50;

			this.errors.file_photo = false;
			this.errors.url_photo = false;

			this.MY.custom_photo = null;
			this.site_settings.photo_user = false;
			this.$refs.myFile.value = '';
			// document.getElementById('myFile').value = '';
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
	padding: 16px;
	color: #ffffff;
}

input[type=text] {
	width: 100%;
	height: 48px;
	background-color: rgba(255, 255, 255, 0.06);
	border-radius: 8px;
	padding: 16px;
	color: #ffffff;
}

.photo-url:hover {
	background-color: rgba(255, 255, 255, 0.06);
	transition-duration: .5s;
	border-radius: 8px;
	height: 100%;
}


.animation--active  {
  animation-name: active-back;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(.04,.85,.35,.51);
  animation-delay: 0.2s;
}

@keyframes active-back{
	0%{ background-color: rgba(255, 255, 255, 0.06); }
	20%{ background-color: #FF0000; }
	40%{ background-color: #FF0000; }
	100%{ background-color: rgba(255, 255, 255, 0.06); }
}
</style>
