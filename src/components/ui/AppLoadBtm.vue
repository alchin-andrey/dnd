<template>
	<div class="main_btm flex-row-sb-c" :class="{ active_btm: stop_Loading }">
		<div>{{ t_Text }}</div>
		<div class="main_icon">
			<svg v-if="stop_Loading"
				class="main_svg"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				v-html="ui_icon.download"
			></svg>
		</div>
    <div class="load_btm">
    <div class="load-progress" :style="{ width: load_Progress,}"/>
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
			default: "Load ...",
		},
		progress: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		t_Text() {
      if(this.progress == 0) {
        return this.T(this.text);
      } else {
        return this.T('load_progress');
      }
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
			if (this.download) return "download";
			if (this.arrow) return "arrow_right_small";
			if (this.plus) return "plus";
		},

    load_Progress() {
      return this.progress + '%'
    },

    stop_Loading() {
      return this.progress == 0;
    }
	},
};
</script>

<style scoped>
.main_btm {
	padding: 16px;
	background: #0e1518;
	backdrop-filter: blur(60px);
	-webkit-backdrop-filter: blur(60px);
	border-radius: 12px;
	position: relative;
}

.pd-16 {
	padding: 16px;
}

.load_btm {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
  overflow: hidden;
	/* background: red; */
	border-radius: 12px;
}

.active_btm {
  background: #0047ff;
	cursor: pointer;
}

.active_btm:hover {
	background: #1355ff;
}

.load-progress {
  height: 100%;
  background: #0047ff;
  transition-property: all;
  transition-duration: 1s;
}

.main_icon {
	width: 18px;
	height: 18px;
	fill: white;
	position: absolute;
	right: 16px;
	top: 50%;
	/* bottom: 50%; */
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

.main_svg {
	width: 18px;
	height: 18px;
	fill: white;
}
</style>
