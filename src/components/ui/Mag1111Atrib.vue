<template>
    <div class="column jbm-300">
        <div class="column_value" :class="{ passive: numb === 0 }">
            <div class="wrapp_atrib">{{ t_Title }} <emoji v-if="upd_Emoji" :data="emojiIndex" :emoji="upd_Emoji" set="apple" :size="14"></emoji>
      {{ cut_Emoji_2 }}</div>

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

// export function wrapEmoji(text: string): string {
//   return text.replace(unicodeEmojiRegex, function(match, offset) {
//     const before = text.substring(0, offset)
//     if (endsWith(before, 'alt="') || endsWith(before, 'data-text="')) {
//       // Emoji inside the replaced <img>
//       return match
//     }
//     // Find emoji object by native emoji.
//     let emoji = emojiIndex.nativeEmoji(match)
//     if (!emoji) {
//       // Can't find unicode emoji in our index
//       return match
//     }
//     // See `emojiToHtml` function above.
//     return emojiToHtml(emoji)
//   })
// }

export default {
    name: "MagicAttribute",
    components: {
        Emoji,
        dataEmo,
    },
    data() {
        return {
            emojiIndex: emojiIndex,
            emoji2: dataEmo,
            unicodeEmojiRegex: unicodeEmojiRegex,
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
        // type: {
        // 	type: String,
        // 	default: null,
        // },
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
        // cube_zero: {
        // 	type: Boolean,
        // 	default: false,
        // },
    },

    computed: {
        t_Title() {
            console.log(this.wrapEmoji);
            if (this.numb === 0) {
                return `/ ${this.t(this.title)}`;
            } else {
                return this.t(this.title);
            }
        },

        t_Addition() {
            return this.t(this.addition);
        },

        // t_Type() {
        // 	return this.t(this.type);
        // },

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

        get_Emoji() {
            let str = this.t_Addition;
            let reg = /:(\w+):/g;
            if (this.t_Addition) {
                let emoji = str.match(reg);
                return emoji ? emoji[0] : null;
            } else {
                null;
            }
        },

        get_Emoji_2() {
            let str = this.t_Addition;
            let reg = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
            if (this.t_Addition) {
                let emoji = str.match(reg);
                console.log(emoji ? emoji[0] : null);
                console.log(this.emoji2);
                return emoji ? emoji[0] : null;
            } else {
                null;
            }
        },

        cut_Emoji_2() {
            let str = this.t_Addition;
            let reg = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
            if (this.t_Addition) {
                let cut = str.replace(reg, "");
                return cut;
            } else {
                null;
            }
        },

        cut_Emoji() {
            let str = this.t_Addition;
            let reg = /:(\w+):/g;
            if (this.t_Addition) {
                let cut = str.replace(reg, "");
                return cut;
            } else {
                null;
            }
        },

        upd_Emoji() {
            // let str = this.t_Addition;
            // let emoji = str.match(unicodeEmojiRegex, function (match, offset) {

            // })
            let text = this.t_Addition;
            for (const match of text.matchAll(unicodeEmojiRegex)) {
                const emoji = match[0];
                return emoji;
            }
        },

        wrapEmoji() {
            let text = this.t_Addition;
            let ty = null;
            // let emoji77 = this.emojiToHtml(ty);
            if (text) {
                return text.replace(
                    unicodeEmojiRegex,
                    function (match, offset) {
                        // const before = text.substring(0, offset);
                        let emoji = emojiIndex.nativeEmoji(match);
                        // console.log(`:${emoji.short_names[0]}:`);
                        // console.log(match);
                        if (!emoji) {
                            return match;
                        }

                        let style = `background-position: ${emoji.getPosition()}`
 
                        return `<img data-text="${emoji.native}" alt="${
    emoji.colons
  }" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class='emoji-text' style="${style}">`;
                        // return `<emoji :data="emojiIndex" emoji=":${emoji.short_names[0]}:" set="apple" size="${14}"></emoji>`
                        // See `emojiToHtml` function above.
                        // return this.emojiToHtml(emoji)
                        
                    }
                );
            } else {
                null;
            }
        },
    },

    methods: {
        emojiToHtml(emoji) {
          console.log('Емодзи', emoji);
  // The src="data:image..." is needed to prevent border around img tags.
  return `<img data-text="${emoji.native}" alt="${
    emoji.colons
  }" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class='emoji-text'>`
}

        //     emojiFallback(emoji) {
        // 	return `:${emoji.short_names[0]}:`
        // }

        //     cutEmoji(str) {
        //       let reg = /\p{Extended_Pictographic}/u;
        //   let reg2 = /\p{Emoji}/u;
        //   let reg3 = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        //   let reg1 = /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g;
        //   let reg = XRegExp('[\u1F601-\u1F64F]', 'g');
        //   let reg = /\p{Extended_Pictographic}/u;
        //   let emoji = str.match(reg);
        //   let span = `<emoji :data="emojiIndex" emoji="${emoji}" set="twitter" :size="12" />`;
        //   let span = document.createElement('span');
        //   span.className = `${emoji}`;
        //   span.innerHTML = `<emoji :data="emojiIndex" emoji="${emoji}" set="twitter" :size="12" />`;
        //   let re = /:(\w+):/g;
        //   let emojxi_fix = str.replace(re, '')
        //   console.log(str)
        //   console.log(emoji)
        //   console.log(str.match(reg))
        //   return emojxi_fix
        // },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapp_atrib {
    display: flex;
    /* align-items: center; */
    justify-content: center;
}

.emoji-mart-emoji {
    padding: 2px 6px 0 6px;
    line-height: 0;
}

.column {
    width: 100%;
    display: flex;
    min-height: 18px;
    justify-content: space-between;
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

.numb {
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*flex: 1 1 auto;*/
    /*text-align: end;*/
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
