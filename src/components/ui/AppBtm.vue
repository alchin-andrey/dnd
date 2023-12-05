<template>
	<div 
	class="flex-col-sb"
	:class="{
		'btm-grey br-12 blur-60 pd-16 pos-rel': !link,
		'hov cur-p': !passive
		}">
		<div class="jbm-300 mr-b-25" v-if="pos">{{ t_Pos }}</div>
		<div>
			<div :class="{'jbm-300': jbm, 'int-700': !jbm,}">
				{{ em_Before }}
				<emoji
				v-if="em_Upd"
				:data="emojiIndex"
				:emoji="em_Upd"
				:set="set_emoji"
				:size="14"
				/>{{ em_After }}
			</div>
			<div v-if="text" 
			class="text-size int-400 mr-t-4"
			:class="{'white-04': pos == '03'}"
			v-html="t_Text"/>
		</div>
		<AppSvg 
			class="svg-18 svg-main-f"
			:class="style_PosSvg"
			:name="icon"
		/>
	</div>
</template>

<script>
export default {
	name: "AppBtm",
	props: {
		pos: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: "arrow_right_small", // return, plus, donate;
		},
		passive: {
      type: Boolean,
      default: false,
    },
		jbm: {
      type: Boolean,
      default: false,
    },
		link: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		t_Pos() {
			return this.t(this.pos);
		},
		
		t_Text() {
			return this.t(this.text);
		},

		T_Btm_Name() {
			return this.t(this.name);
		},

		em_Upd() {
			return this.updEmoji(this.T_Btm_Name);
		},

		em_Before() {
			return this.beforeEmoji(this.T_Btm_Name);
		},

		em_After() {
			return this.afterEmoji(this.T_Btm_Name);
		},

		style_PosSvg() {
			if(this.text) return 'full_pos';
      return 'simple_pos';
		}
	},
};
</script>

<style scoped>
.icon-pos {
	position: absolute;
	right: 12px;
	top: 50%;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

.full_pos{
	position: absolute;
	right: 16px;
	bottom: 15px;
}

.simple_pos{
	position: absolute;
	right: 16px;
	top: 50%;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 2px;
}

.text-size {
	padding-right: 38px;
}

@media (max-width: 1279px) {
	.text-size {
		padding-right: 68px;
	}
}
</style>
