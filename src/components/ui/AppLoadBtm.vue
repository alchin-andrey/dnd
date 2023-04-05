<template>
	<div
		class="load_btm flex-col-sb"
    :class=" {active_btm: progress == 100}"
	>
  <div> {{ t_Text }} </div>
  <div class="main_icon">
    <svg
      class="main_svg"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      v-html="ui_icon.arrow_right_small"
    />
  </div>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppLoadBtm",
  data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
    text: {
      type: String,
      default: 'Load ...',
    },
    progress: {
			type: Number,
			default: 100,
		},
	},
	computed: {
    t_Text() {
      return this.T(this.text);
    },
		get_Active() {
			if (this.active_link !== null) {
				return this.active_link === this.select_link;
			} else if (this.active_boll_link) {
				return this.active_boll_link;
			} else {
				return null;
			}
		},
    img_Icon() {
      if(this.download) return "download"
      if(this.arrow) return "arrow_right_small"
      if(this.plus) return "plus"
    }
	},
};
</script>

<style scoped>

.load_btm {
  padding: 16px;
	background: #0E1518;
	backdrop-filter: blur(60px);
	border-radius: 12px;
  cursor: pointer;
}

.active_btm {
	cursor: pointer;
}

.active_btm:hover {
	background: #1355FF;
}



.flex-col-sb {
display: flex;
justify-content: space-between;
}

.active_card {
	cursor: pointer;
}

.active_card:hover {
	background: rgba(255, 255, 255, 0.1);
}
.copy_card {
  fill-opacity: 0.4;
}

.copy_card:hover {
	fill-opacity: 1;
}

.pasive_card {
	padding: 16px;
	background: rgba(255, 255, 255, 0.06);
	backdrop-filter: blur(60px);
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 26px;
}

.blue_card {
	background: #0047FF;
}

.blue_card:hover {
	background: #1355FF;
}

.red_card {
	background: #580000;
  transition-property: all;
  transition-duration: 0.5s;
}
.red_card:hover {
	background: #FF0000;
}

.no_blur {
	backdrop-filter: none;
}

.colors_card {
	height: 100%;
	background: #000000;
}

.basic {
	border: 2px solid rgba(255, 255, 255, 0.2);
	padding: 14px;
}

.selection_card_active {
	border: 2px solid #ffffff;
	padding: 14px;
}

.link {
	padding: 0px;
}

.main_icon {
  width: 18px;
	height: 18px;
	fill: white;
}

.main_svg {
  width: 18px;
	height: 18px;
	fill: white;
}



.copy_icon {
	height: 18px;
	position: absolute;
	right: 16px;
	top: 50%;
	bottom: 50%;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}


</style>
