<template>
	<div class="br-12 pd-16 pos-rel" :class="massage_Back">
		<section class="flex-row-c gap-10 mr-b-10" v-if="name">
		<img class="message-ava" :src="message_Ava" :alt="name">
			<div class="int-400 white-04">
				<div>{{ massage_Name }}</div>
				<div>{{ massage_Nickname }}</div>
			</div>
		</section>

		<section>
			<div v-if="dice" class="flex-row gap-10">
				<img class="message-dice" :src="message_DiceImg" :alt="name">
				<div class="w-100 mr-t-32">
					<div class="int-700-20 flex-row-sb mr-r-16">
						<div>+ {{ dice[1] }}</div>
						<div class="flex-row gap-4">
							<div>= <span :class="dice[3]">{{ dice[2] }}</span></div>
							<emoji
								v-if="dice[4]"
								:data="emojiIndex"
								:emoji="dice[4]"
								:set="set_emoji"
								:size="20"
							/>
						</div>
					</div>
					<div class="int-400-13 white-04" >{{ massage_Text }}</div>
				</div>
			</div>
			
			<div v-else class="int-400-13" 
				:class="massage_Text_Color"
			>{{ massage_Text }}</div>
		</section>
		<div :class="massage_Grad" />
	</div>
</template>

<script>
export default {
	name: "WelcomPage__CardMessage",
	props: {
		name: {
			type: String,
			default: null,
		},
		text_numb: {
			type: Number,
			default: 0,
		},
		dice: {
			type: Array,
			default: null,
		},
	},

	computed: {
		message_Ava() {
			return require(`@/assets/img/message/ava_${this.name}.png`);
		},

		message_DiceImg() {
			if(this.dice) return require(`@/assets/img/message/dice_${this.dice[0]}.png`);
		},

		massage_Name() {
			const name = this.name == 'goblin' ? 'master' : this.name;
			return this.t(`lobby_game_message_name_${name}`);
		},

		massage_Nickname() {
			return this.t(`lobby_game_message_nickname_${this.name}`);
		},

		massage_Text() {
			return this.t(`lobby_game_message_${this.text_numb}`);
		},

		massage_Text_Color() {
			if(this.text_numb == 0 || this.text_numb == 15) return 'white-02';
			if(!this.name && this.text_numb !== 0) return 'white-04';
		},

		massage_Grad() {
			if(this.text_numb == 0) return 'grad-top';
			if(this.text_numb == 15) return 'grad-bott';
		},

		massage_Back() {
			if(this.text_numb == 0) return 'back-top';
			if(this.text_numb == 15) return 'back-bott blur-1';
			else return 'btm-grey blur-60'
		}

	}
};
</script>

<style scoped>

.message-ava {
	width: 36px;
	height: 36px;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 2px;
}

.grad-top {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 200px;
	z-index: 10;
	border-radius: 12px 12px 0 0;
	background: linear-gradient(transparent 0%, rgba(14, 21, 24, 0.6) 25%, transparent 100%);
}

.grad-bott {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	height: 200px;
	z-index: 10;
	border-radius: 0 0 12px 12px;
	background: linear-gradient(180deg, transparent 0%, rgba(14, 21, 24, 0.6) 75%, transparent 100% );
}

.back-top {
	background: linear-gradient(transparent 0%, transparent 30%, rgba(255, 255, 255, 0.03) 100% );
}

.back-bott {
	background: linear-gradient(rgba(255, 255, 255, 0.03) 0%, transparent 80%, transparent 100%);
}

</style>