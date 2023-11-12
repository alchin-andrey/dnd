<template>
	<div class="br-12 blur-60 hov cur-p pos-rel card-size" :class="style_Cerd">
		<a :target="target_Link" :href="link_Go">
			<div class="pd-16" :style="style_Height_Obj">
				<div class="jbm-300 mr-b-182" v-if="!short">{{ serial_Number }}</div>
				
				<section>
					<div class="int-700-20"> {{ t_Title }} </div>
					<div class="int-400 mr-t-4 w-320" v-html="t_Html" />
				</section>
			</div>
			<div class="back-pos" v-html="svg_Back" v-if="!short"/>
			<AppSvg
				class="svg-18 svg-main-f icon-pos"
				:name="icon_Name"
			/>
		</a>
	</div>
</template>

<script>
import big_svg from "@/assets/catalog/icon/big_svg";
export default {
	name: "WelcomPage__CardToPlay",
	data() {
		return {
			big_svg: big_svg,
		};
	},
	props: {
		masters: {
      type: Boolean,
      default: false,
    },
		short: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		serial_Number() {
			return this.masters ? '02' : '01';
		},

		t_Title() {
			if(this.masters) return this.T('select_master');
			else return  this.T('create_character');
		},

		t_Html() {
			if(this.masters) return this.t('select_master_details');
			else return  this.t('create_character_details');
		},

		icon_Name() {
			return this.masters ? 'arrow_down_small' : 'plus';
		},

		target_Link() {
			return this.masters ? '_self' : '_blank';
		},

		link_Go() {
			return this.masters ? '#welcom-part51' : null;
		},

		svg_Back() {
			if(this.masters) return this.big_svg.master;
			else return  this.big_svg.new_user_char;
		},

		style_Cerd() {
			if(this.masters) return 'btm-grey';
			else return  'btm-blue';
		},

		style_Height_Obj() {
			if(this.short) return 'h-349';
			else return  'btm-blue';

			if (this.short) return {'height': '349px'};
			else return {'height': '100%'};
		}
	},
};
</script>

<style scoped>

.card-size {
	width: 100%;
	max-width: 394px;
	/* width: 444px; */
}

.icon-pos {
	position: absolute;
	right: 12px;
	bottom: 12px;
}

.back-pos {
	height: 316px;
	position: absolute;
	bottom: 0;
	right: 50%;
	-webkit-transform: translate(50%, 0%);
	-ms-transform: translate(50%, 0%);
	transform: translate(50%, 0%);
	z-index: -1;
}

.h-349 {
	height: 349px;
}
</style>