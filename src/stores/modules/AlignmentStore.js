// import { ref, computed } from "vue";
// import { mapState } from "pinia";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";


import alignment_lists from "@/assets/catalog/base_data/list_alignment.js";
import alignment_sett from "@/assets/catalog/base_data/step3_alignment.js";
import list_links from "@/assets/catalog/base_data/list_links.js";

export const useAlignmentStore = defineStore({
	id: "AlignmentStore",
	state: () => ({
		alignment_lists: alignment_lists,
    alignment_sett: alignment_sett,
    hero_links: list_links,

    // errors: {
    //   file_photo: false,
    //   url_photo: false,
    // },
	}),

	getters: {
    сustomm_Main_Settings_Alignment_Arr() {
      const MYStore = useMYStore();
			return MYStore.settingsMainSelect("alignment", this.alignment_sett.back.settings, "custom");
		},

    alignment_Arr() {
      return this.alignment_lists.alignment;
    },

    MY_Main_Feature() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "main_feature");
      return name?.select_list[0];
    },

    MY_Ideals() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "ideals");
      return name?.select_list[0];
    },

    MY_Commitment() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "commitment");
      return name?.select_list[0];
    },

    MY_Secret() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "secret");
      return name?.select_list[0];
    },

    MY_Weakness() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "weakness");
      return name?.select_list[0];
    },

    photo_Select() {
      const PagesStore = usePagesStore();
			return PagesStore.site_settings.photo_user ? "your_image" : "standard";
		},

    photo_Link_Hero() {
      const MYStore = useMYStore();
      const GenderStore = useGenderStore();
      const race_name = MYStore.MY_Race.name;
			const class_name = MYStore.MY_Class.name;
			const sex = GenderStore.sex_Char_Body;
      const link_main = this.hero_links.none[race_name][sex];
      const link = this.hero_links[class_name]?.[race_name][sex];
			return link ?? link_main;
		},

    photo_Link_Pinterest() {
      const MYStore = useMYStore();
      const GenderStore = useGenderStore();
			const race_name = MYStore.MY_Race.name;
			const class_name = MYStore.MY_Class.name;
			const sex = GenderStore.sex_Char_Body;
			const main = 'https://ro.pinterest.com/search/pins/?q=dnd'
			const link = `${main}%20${race_name}%20${sex}%20${class_name}`
			return link;
		},

	},

	actions: {

    // readImg(link, file) {
		// 	let src = link;
		// 	if(!file) {
		// 		const path = 'https://'
		// 		src = link.substr(0, 4) == 'http' ? link : path + link;
		// 		if (this.$refs.urlPhoto) {
		// 			this.$refs.urlPhoto.value = src;
		// 		}
		// 	};
		// 	const img = new Image();
		// 	img.onerror = () => {
		// 		this.fileError();
		// 		if (!file) {this.errors.url_photo = true;}
		// 	};
		// 	img.onload = () => {
    //     const MYStore = useMYStore();
    //     const PagesStore = usePagesStore();

		// 		PagesStore.site_settings.photo_sett.ratio = img.width / img.height;
		// 		MYStore.MY.custom_photo = src;
		// 		PagesStore.site_settings.photo_user = true;
		// 		this.errors.url_photo = false;
		// 		this.errors.file_photo = false;
		// 	}
		// 	img.src = src;
		// },

		// readPhotoFile(file) {
		// 	this.errors.file_photo = false;
		// 	let reader = new FileReader();
		// 		reader.readAsDataURL(file);
		// 		reader.addEventListener("load", (el) => {
		// 			if (el.target.result) {
		// 				this.readImg(el.target.result, true)
		// 			}
		// 	});
		// },

		// fileError() {
    //   const MYStore = useMYStore();
		// 	this.errors.file_photo = false;
		// 		setTimeout(() => {
		// 		this.errors.file_photo = true;
		// 		if(!MYStore.MY.custom_photo) {
		// 			this.$refs.myFile.value = '';
		// 		}
		// 	}, 4);
		// },

		// onChange(event) {
		// 	const image_file = event.target.files[0].type.includes("image")
		// 	if (image_file) {
		// 		this.readPhotoFile(event.target.files[0], true)
		// 	} else {
		// 		this.fileError();
		// 	}
		// },

		// // onPasteUrl(event) {
		// // 	console.log('onPasteUrl:')
		// // 	setTimeout(() => {
		// // 		const link = event.target.value;
		// // 		this.readImg(link);
		// // 	}, 0);
		// // },

		// onChangeUrl(event) {
		// 	console.log('onChangeUrl:')
		// 	const link = event.target.value;
		// 	if(link) {
		// 		this.readImg(link);
		// 	}
		// },

		// onInputUrl(event) {
		// 	console.log('onInputUrl:')
		// 	const link = event.target.value;
		// 	if(link == '') this.errors.url_photo = false;
		// },

		// sequencingProcess(el) {
		// 	const item = Array.from(el.items).find(x => /^image\//.test(x.type));
		// 	if (item) {
		// 		this.readPhotoFile(item.getAsFile())
		// 	} else {
		// 		const link = el.getData('Text');
		// 		if(link) {
		// 			this.readImg(link);
		// 		} else {
		// 			this.fileError();
		// 		}
		// 	}
		// },

		// pastePhoto(event) {
		// 	console.log('pastePhoto:')
		// 	this.sequencingProcess(event.clipboardData)
		// },

		// dropPhoto(event) {
		// 	this.sequencingProcess(event.dataTransfer);
		// 	event.preventDefault();
		// },

		// dragoverPhoto(event) {
		// 	event.preventDefault();
		// },
  }
});
