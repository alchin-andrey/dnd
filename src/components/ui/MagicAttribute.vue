<template>
    <div class="column jbm-300">
        <div class="column_value" :class="{ passive: numb === 0 }">
            <div class="wrapp_atrib">
                {{ t_Title }}
                <emoji
                    v-if="upd_Emoji"
                    :data="emojiIndex"
                    :emoji="upd_Emoji"
                    :set="set_emoji"
                    :size="15"
                />{{ cut_Emoji }}
            </div>
            <div v-if="dice" class="numb small">{{ numb }}d{{ dice }}</div>
            <div v-else class="numb" :class="{ passive: numb === 0 }">
                {{ Prefix }} {{ Plus }}{{ numb }} {{ Suffix }}
            </div>
        </div>
        <div class="visual">
            <div class="cube" v-for="n in get_Cube" :key="n"></div>
            <div class="cube_zero" v-for="n in get_CubeZero" :key="n"></div>
        </div>
    </div>
</template>

<script>
import emojiRegex from "emoji-regex";

import dataEmo from "emoji-mart-vue-fast/data/all.json";
import { Emoji, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";

let emojiIndex = new EmojiIndex(dataEmo);
const unicodeEmojiRegex = emojiRegex();

export default {
    name: "MagicAttribute",
    components: {
        Emoji,
    },
    data() {
        return {
            emojiIndex: emojiIndex,
            unicodeEmojiRegex: unicodeEmojiRegex,
            set_emoji: "google", // apple  twitter  google  facebook
        };
    },
    props: {
        title: {
            type: String,
            default: null,
        },
        addition: {
            type: String,
            default: null,
        },
        numb: {
            type: Number,
            default: null,
        },
        dice: {
            type: Number,
            default: null,
        },
        icon: {
            type: String,
            default: null,
        },
        plus: {
            type: Boolean,
            default: false,
        },
        prefix: {
            type: String,
            default: null,
        },
        feet: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        t_Title() {
            // console.log(this.wrapEmoji);
            if (this.numb === 0) {
                return `/ ${this.t(this.title)}`;
            } else {
                return this.t(this.title);
            }
        },

        t_Addition() {
            return this.t(this.addition);
        },

        Prefix() {
            return this.prefix ? this.t(this.prefix) : "";
        },

        Plus() {
            return this.plus ? "+" : "";
        },

        Suffix() {
            return this.feet ? this.t("feet") : "";
        },

        get_Cube() {
            if (this.feet) {
                return Math.ceil(this.numb / 5);
            } else {
                return this.numb;
            }
        },

        get_CubeZero() {
            if (this.dice) {
                return this.dice * this.numb - this.numb;
            }
        },

        cut_Emoji() {
            let str = this.t_Addition;
            let reg = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
            if (this.t_Addition) {
                let cut_str = str.replace(reg, "");
                return cut_str;
            } else {
                null;
            }
        },

        upd_Emoji() {
            let text = this.t_Addition;
            if (text) {
                for (const match of text.matchAll(unicodeEmojiRegex)) {
                    const emoji = match[0];
                    return emoji;
                }
            }
        },

        wrapEmoji() {
            let text = this.t_Addition;
            if (text) {
                return text.replace(
                    unicodeEmojiRegex,
                    function (match, offset) {
                        let emoji = emojiIndex.nativeEmoji(match);
                        if (!emoji) {
                            return match;
                        }

                        return emoji.native;
                        // return `:${emoji.short_names[0]}:`;
                    }
                );
            } else {
                null;
            }
        },
    },

    methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapp_atrib {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    align-items: center;
    white-space: pre;
}

.emoji-mart-emoji {
    padding: 0;
    line-height: 0;
}

.column {
    width: 100%;
    display: flex;
    min-height: 18px;
    justify-content: space-between;
    align-items: flex-start;
}

.column_value {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    /*width: 100%;*/
}

.small {
    text-transform: lowercase;
}

.active {
    color: #ffffff;
}

.passive {
    color: rgba(255, 255, 255, 0.2);
}

.visual {
    width: 98px;
    display: flex;
    align-items: center;
    margin-left: 12px;
    flex-wrap: wrap;
    padding: 5px 0 5px 0;
    gap: 2px;
}

.cube {
    width: 8px;
    height: 8px;
    background: #ffffff;
    box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
    border-radius: 2px;
}

.cube_zero {
    width: 8px;
    height: 8px;
    border-radius: 2px;
    border: 1px solid #ffffff;
}
</style>
