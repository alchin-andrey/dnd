<template>
  <main v-if="blank_print" id="print_spell">
    <div class="flex_col gap-52 int-500-22">
      <section class="flex_col gap-8">
        <div class="int-700-22 print-grey">{{ t_Type }} /</div>
        <div class="int-700-22">
          {{ em_Before
          }}<emoji
            v-if="em_Upd"
            :data="emojiIndex"
            :emoji="em_Upd"
            :set="set_emoji"
            :size="24"
          />{{ em_After }} {{ name_Extra_MOD }}
        </div>
        <div class="text_print" v-html="t_Text"></div>
      </section>

      <section class="flex_col gap-10">
        <AppPrintSpellMain title="parts" :text="t_Parts_Value" emoji />
        <AppPrintSpellMain title="cast_time" :text="t_Cast_Value" />
        <AppPrintSpellMain title="time" :text="t_Time_Value" />
        <AppPrintSpellMain title="aim_target" :text="t_Target_Value" />
        <AppPrintSpellMain v-if="t_Save_Print" title="saving" :text="t_Save_Print" />
      </section>

      <section class="flex_col gap-8"
          v-if="
            Spell_Index.aim_need ||
            Spell_Index.impact_type ||
            Value_Ran ||
            Spell_Index.aim_aoe
          "
        >
          <magic-attribute
            v-if="Spell_Index.impact_type"
            :title="Spell_Index.impact_type"
            :addition="Spell_Index.impact_damage_type"
            :str="Value_Str"
            :numb="Value_Num"
            :dice="Value_Dic"
            :pls="Value_Pls"
            :feet="Spell_Index.impact_size_foo?.includes('Feet')"
            main
            blank_print
          />
          <magic-attribute
            v-if="Spell_Index.second_impact_type"
            :title="Spell_Index.second_impact_type"
            :addition="Spell_Index.second_impact_damage_type"
            :numb="Spell_Index.second_impact_size_num"
            :dice="Spell_Index.second_impact_size_dic"
            :feet="Spell_Index.impact_size_foo?.includes('Feet')"
            main
            blank_print
          />
          <magic-attribute
            v-if="Spell_Index.aim_aoe"
            title="aim_aoe"
            :prefix="Spell_Index.aim_aoe"
            :numb="by_Mana('aim_aoe_size')"
            blank_print
          />
          <magic-attribute
            v-if="Spell_Index.aim_need"
            title="aim_bonus"
            :numb="Mastery"
            plus
            blank_print
          />
          <magic-attribute v-if="Value_Ran" title="aim_range" :numb="Value_Ran" blank_print/>
        </section>

        <div class="flex_qr_wrapp">
          <section class="flex_mana jbm-500-22" v-if="spell_Slot_Type_MOD || shown_Manna">
            
            <div 
            class="manna_bubble_print" 
            :class="{manna_bubble_print_zero: t_Slot_Type == '0'}"  
            v-if="spell_Slot_Type_MOD"
            >
            {{ t_Slot_Type }}
            </div>
            
            <div class="flex_row gap-8" v-if="shown_Manna">
              <div 
              class="manna_bubble_print" 
              :class="{manna_bubble_print_zero: Index == 0 }" 
              >
              {{ print_Manna }}
              </div>

              <div class="manna_bubble_print jbm-500-40" v-if="print_Plus">
                <div class="print_icon">
                    <svg
                      class="print-svg"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      v-html="ui_icon.plus"
                    />
                </div>
              </div>
            </div>
          </section>
          <qrcode-vue :value="print_Spell_Link_Qr" :size="size" level="L" />
        </div>
    </div>
  </main>


  

    <main v-else-if="qr_form" id="qr_spell" class="flex_col gap-26">
      <my-wrapper>
          <div class="title_spell gray_2">{{ t_Type }} /</div>
          <div class="title_spell">
            {{ em_Before
            }}<emoji
              v-if="em_Upd"
              :data="emojiIndex"
              :emoji="em_Upd"
              :set="set_emoji"
              :size="emoji_size"
            />{{ em_After }} {{ name_Extra_MOD }}
          </div>
        </my-wrapper>
        <section class="jbm-300" v-if="spell_Slot_Type_MOD || shown_Manna">
          <section
            class="manna_bubble manna_bubble_active manna_bubble_str"
            v-if="spell_Slot_Type_MOD"
          >
            {{ t_Slot_Type }}
          </section>
          <section class="manna_flex" v-if="shown_Manna">
            <div
              class="manna_bubble manna_bubble_choice"
              v-for="n in Manna_Length"
              :key="n"
              @click="choiceManna(n)"
              :class="{
                manna_bubble_passive: n - 1 < Index,
                manna_bubble_active: n - 1 === Mana_Numb,
                manna_bubble_hover: !(n - 1 < Index) && !(n - 1 === Mana_Numb),
              }"
            >
              {{ n - 1 }}
            </div>
          </section>
        </section>
    
        <div class="text_spell" v-html="t_Text"></div>
    
        <my-wrapper gap_6>
          <my-spell-main title="parts" :text="t_Parts_Value" emoji />
          <my-spell-main title="cast_time" :text="t_Cast_Value" />
          <my-spell-main title="time" :text="t_Time_Value" />
          <my-spell-main title="aim_target" :text="t_Target_Value" :save="t_Save" />
        </my-wrapper>
        <my-wrapper
          v-if="
            Spell_Index.aim_need ||
            Spell_Index.impact_type ||
            Value_Ran ||
            Spell_Index.aim_aoe
          "
        >
          <magic-attribute
            v-if="Spell_Index.impact_type"
            :title="Spell_Index.impact_type"
            :addition="Spell_Index.impact_damage_type"
            :str="Value_Str"
            :numb="Value_Num"
            :dice="Value_Dic"
            :pls="Value_Pls"
            :feet="Spell_Index.impact_size_foo?.includes('Feet')"
            main
          />
          <magic-attribute
            v-if="Spell_Index.second_impact_type"
            :title="Spell_Index.second_impact_type"
            :addition="Spell_Index.second_impact_damage_type"
            :numb="Spell_Index.second_impact_size_num"
            :dice="Spell_Index.second_impact_size_dic"
            :feet="Spell_Index.impact_size_foo?.includes('Feet')"
            main
          />
          <magic-attribute
            v-if="Spell_Index.aim_aoe"
            title="aim_aoe"
            :prefix="Spell_Index.aim_aoe"
            :numb="by_Mana('aim_aoe_size')"
          />
          <magic-attribute
            v-if="Spell_Index.aim_need"
            title="aim_bonus"
            :numb="Mastery"
            plus
          />
          <magic-attribute v-if="Value_Ran" title="aim_range" :numb="Value_Ran" />
        </my-wrapper>
        <div class="hr"></div>
        <div class="text_spell gray_4" v-html="t_Expanded"></div>
        <div
          class="text_spell rare-text"
          v-if="mod_Expanded_Extra"
          v-html="mod_Expanded_Extra"
        ></div>
  </main>



  <main v-else id="site_spell">
      <AppTooltip
        class="relative marg_slow"
        text="hint_over_limit"
        :shown="overflow_Save && !param"
        warn
        :style="{ margin: getMarg }"
      >
        <div
          :class="{
            'lvl-dot': shown_Level_Dot(spell_obj),
            'lvl-dot-param': param,
          }"
          class="flex_spell"
          @mouseover="hoverIn_Full()"
          @mouseleave="hoverOut()"
          @click="showDialog_Full()"
        >
          <div ref="stripe" class="side_stripe"></div>
          <div class="int-400 flex_col" :class="{ passive: passive }">
            <section class="flex_title">
              <div class="title_spell h_18" :class="{ 'rare-text': overflow_Save }">
                {{ em_Before
                }}<emoji
                  v-if="em_Upd"
                  :data="emojiIndex"
                  :emoji="em_Upd"
                  :set="set_emoji"
                  :size="emoji_size"
                />{{ em_After }} {{ name_Extra_MOD }}
              </div>
              <svg
                class="icon_svg"
                :class="{
                  passive: full_select,
                }"
                @click.stop
                @mouseover="hoverIn_Select()"
                @mouseleave="hoverOut()"
                @click="btnClick()"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                v-html="ui_icon[icon_Svg]"
              />
            </section>
            <!-- <transition name="scroll-packs"> -->
            <section
              class="flex_col gap-12"
              :class="{
                'marg-top-4': !this.only_title,
                null_height: this.only_title,
                full_height: this.only_title && this.isShown,
              }"
            >
              <div class="text_spell" v-html="t_Text"></div>
              <magic-attribute
                v-if="Spell_Index.impact_type"
                :title="Spell_Index.impact_type"
                :addition="Spell_Index.impact_damage_type"
                :str="Value_Str"
                :numb="Value_Num"
                :dice="Value_Dic"
                :pls="Value_Pls"
                :feet="Spell_Index.impact_size_foo?.includes('Feet')"
                main
                not_dot
              />
              <magic-attribute
                v-if="Spell_Index.second_impact_type"
                :title="Spell_Index.second_impact_type"
                :addition="Spell_Index.second_impact_damage_type"
                :numb="Spell_Index.second_impact_size_num"
                :dice="Spell_Index.second_impact_size_dic"
                :feet="Spell_Index.impact_size_foo?.includes('Feet')"
                main
                not_dot
              />
            </section>
            <!-- </transition> -->
          </div>
        </div>
      </AppTooltip>
      <my-dialog-spell v-model:show="dialogVisible" v-model:mana="mana_numb">
        <my-wrapper>
          <div class="title_spell gray_2">{{ t_Type }} /</div>
          <div class="title_spell">
            {{ em_Before
            }}<emoji
              v-if="em_Upd"
              :data="emojiIndex"
              :emoji="em_Upd"
              :set="set_emoji"
              :size="emoji_size"
            />{{ em_After }} {{ name_Extra_MOD }}
          </div>
        </my-wrapper>
        <section class="jbm-300" v-if="spell_Slot_Type_MOD || shown_Manna">
          <section
            class="manna_bubble manna_bubble_active manna_bubble_str"
            v-if="spell_Slot_Type_MOD"
          >
            {{ t_Slot_Type }}
          </section>
          <section class="manna_flex" v-if="shown_Manna">
            <div
              class="manna_bubble manna_bubble_choice"
              v-for="n in Manna_Length"
              :key="n"
              @click="choiceManna(n)"
              :class="{
                manna_bubble_passive: n - 1 < Index,
                manna_bubble_active: n - 1 === mana_numb,
                manna_bubble_hover: !(n - 1 < Index) && !(n - 1 === mana_numb),
              }"
            >
              {{ n - 1 }}
            </div>
          </section>
        </section>
    
        <div class="text_spell" v-html="t_Text"></div>
    
        <my-wrapper gap_6>
          <my-spell-main title="parts" :text="t_Parts_Value" emoji />
          <my-spell-main title="cast_time" :text="t_Cast_Value" />
          <my-spell-main title="time" :text="t_Time_Value" />
          <my-spell-main title="aim_target" :text="t_Target_Value" :save="t_Save" />
        </my-wrapper>
        <my-wrapper
          v-if="
            Spell_Index.aim_need ||
            Spell_Index.impact_type ||
            Value_Ran ||
            Spell_Index.aim_aoe
          "
        >
          <magic-attribute
            v-if="Spell_Index.impact_type"
            :title="Spell_Index.impact_type"
            :addition="Spell_Index.impact_damage_type"
            :str="Value_Str"
            :numb="Value_Num"
            :dice="Value_Dic"
            :pls="Value_Pls"
            :feet="Spell_Index.impact_size_foo?.includes('Feet')"
            main
          />
          <magic-attribute
            v-if="Spell_Index.second_impact_type"
            :title="Spell_Index.second_impact_type"
            :addition="Spell_Index.second_impact_damage_type"
            :numb="Spell_Index.second_impact_size_num"
            :dice="Spell_Index.second_impact_size_dic"
            :feet="Spell_Index.impact_size_foo?.includes('Feet')"
            main
          />
          <magic-attribute
            v-if="Spell_Index.aim_aoe"
            title="aim_aoe"
            :prefix="Spell_Index.aim_aoe"
            :numb="by_Mana('aim_aoe_size')"
          />
          <magic-attribute
            v-if="Spell_Index.aim_need"
            title="aim_bonus"
            :numb="Mastery"
            plus
          />
          <magic-attribute v-if="Value_Ran" title="aim_range" :numb="Value_Ran" />
        </my-wrapper>
        <div class="hr"></div>
        <div class="text_spell gray_4" v-html="t_Expanded"></div>
        <div
          class="text_spell rare-text"
          v-if="mod_Expanded_Extra"
          v-html="mod_Expanded_Extra"
        ></div>
      </my-dialog-spell>
  </main>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppSpells",
  components: {
      QrcodeVue,
    },
	emits: ["updateSpell"],
	data() {
		return {
			ui_icon: ui_icon,
			dialogVisible: false,
			numb_type: 0,
			mana_numb: null,
			emoji_size: 16,
			isShown: false,
      size: 120,
		};
	},
	props: {
		spell_obj: {
			type: Object,
			default: null,
		},
		select: {
			type: Boolean,
			default: false,
		},
		passive: {
			type: Boolean,
			default: false,
		},
		param: {
			type: Boolean,
			default: false,
		},
		only_title: {
			type: Boolean,
			default: false,
		},
		plus: {
			type: Boolean,
			default: false,
		},
		delete: {
			type: Boolean,
			default: false,
		},
		full_select: {
			type: Boolean,
			default: false,
		},
    active_card: {
			type: Boolean,
			default: false,
		},
    select_list: {
			type: Array,
			default: [],
		},
    blank_print: {
			type: Boolean,
			default: false,
		},
    qr_form: {
			type: Boolean,
			default: false,
		},
	},

  created() {
		this.getCreated();
	},

  // destroyed() {
	// 	this.getDestroyed();
	// },

	computed: {
		...mapState(useMYStore, [
      "MY", 
      "Mastery", 
      "shown_Level_Dot",
      "MY_Class"
    ]),
    ...mapState(useStatsStore, ["stats_link"]),
		// GETTERS
		...mapState(useStatsStore, ["stats_Mod", "stats_Numb", "stats_Base_Obj", "stats_Full_Name"]),
		...mapState(useSkillsStore, ["skills"]),
		...mapState(useOverflowStore, ["overflow_Spell"]),
		...mapState(useSpellsStore, ["spells_Saving_Numb"]),

    print_Spell_Link_Qr() {
      const site = 'dndme.club/#';
      const chapter = '/s/'
      const spell_link = this.Spell_Index.link;
      const full_link = site + chapter + spell_link;

      const lang = `ln=${this.MY.select_lang}`;
      const lvl = `l=${this.MY.level}`;
      const base_link = new URLSearchParams(this.stats_Base_Obj).toString()
      const spell_attribute = `sa=${this.spell_Attribute_MOD.slice(0, 2)}`;

      const spell_mod_id = this.spell_Mod?.id;
      const mod = this.spell_Mod ? `&m=${spell_mod_id}` : '';
      const link = `${full_link}?${lang}&${lvl}&${spell_attribute}&${base_link}` + mod;
      return link;
    },

		shown_Spell_Text() {
			return this.only_title ? this.isShown : true;
		},

		getMarg() {
			return this.isShown ? `${10}px ${0}` : `0 0`;
		},

		icon_Svg() {
			let str;
			if (this.plus) {
				str = "plus";
			} else if (this.delete) {
				str = "delete";
			} else if (this.only_title && this.isShown) {
				str = "arrow_top_small";
			} else if (this.only_title && !this.isShown) {
				str = "arrow_down_small";
			} else {
				str = "arrow_right_small";
			}
			return str;
		},

		spell() {
			return this.spell_obj.spell;
		},

		spell_Mod() {
			return this.spell_obj?.mod;
		},

		spell_Link() {
			return this.spell_obj?.param;
		},

		name_Extra_MOD() {
			const name_extr = this.spell_Mod?.name_extra;
			return name_extr ? this.t(name_extr) : null;
		},

		spell_Slot_Type_MOD() {
			const mod_slot_type = this.spell_Mod?.slot_type;
			const spell_slot_type = this.Spell_Index.slot_type;
			return mod_slot_type ?? spell_slot_type;
		},

		spell_Attribute_MOD() {
			const link_attribute = this.stats_Full_Name(this.spell_Link?.sa);
			const mod_attribute = this.spell_Mod?.spell_attribute;
			const class_attribute = this.MY_Class.spell_attribute;
			return link_attribute ?? mod_attribute ?? class_attribute;
		},

		mod_Expanded_Extra() {
			const expanded_extra = this.spell_Mod?.expanded_extra;
			return expanded_extra ? this.t(expanded_extra) : null;
		},

		cast_time_MOD() {
			const mod_cast_time = this.spell_Mod?.cast_time;
			const spell_cast_time = this.Spell_Index.cast_time;
			return mod_cast_time ?? spell_cast_time;
		},

		mod_Cast_Dration_Units_Plus() {
			const cast_duration_units_plus = this.spell_Mod?.cast_duration_units_plus;
			return cast_duration_units_plus ? this.t(cast_duration_units_plus) : null;
		},

		Index() {
			return this.spell.findIndex((el) => el.name);
		},

		overflow_Save() {
			if (this.param) {
				return false;
			} else {
				return this.overflow_Spell(this.spell_obj, this.active_card, this.select_list);
			}
		},

		Spell_Index() {
			return this.spell[this.Index];
		},

		Mana_Numb() {
			if (this.mana_numb) {
				return this.mana_numb;
			} else {
				return this.Index;
			}
		},

		Manna_Index() {
			return this.spell[this.Mana_Numb];
		},

		Manna_Length() {
			return this.spell.length;
		},

		shown_Manna() {
			const manna_0 = this.Manna_Length == 1;
			const ability = this.Spell_Index.type == "ability";
			const slot_type = this.spell_Slot_Type_MOD;
			return (!manna_0 || !ability) && !slot_type;
		},

    print_Manna() {
      const i = this.Index;
      return i == 0 ? i : `${i}× ${this.t("mana")}`;
    },

    print_Plus() {
      const i = this.Index;
      const max = this.Manna_Length - 1;
      return max > i;
    },

		em_Upd() {
			return this.updEmoji(this.t_Title);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Title);
		},

		em_After() {
			return this.afterEmoji(this.t_Title);
		},

		t_Title() {
			return this.t(this.Spell_Index.name);
		},

		t_Type() {
			let string = this.t(this.Spell_Index.type);
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Slot_Type() {
			return this.t(this.spell_Slot_Type_MOD);
		},

		t_Text() {
			let foo = this.Value_Det;
			return foo ? this.t(foo) : this.t(this.Spell_Index.details);
		},

		t_Cast_Value() {
			let string = null;

			const cast_time = this.t(this.cast_time_MOD);
			const numb = this.Spell_Index.cast_duration;
			const numb_units = this.t(this.Spell_Index.cast_duration_units);
			const mod_cast_duration = this.mod_Cast_Dration_Units_Plus;
			if (
				this.cast_time_MOD === "ritual" ||
				this.cast_time_MOD === "ritual_plus10min"
			) {
				if (mod_cast_duration) {
					string = `${cast_time} ${numb} ${numb_units} ${mod_cast_duration}`;
				} else {
					string = `${cast_time} ${numb} ${numb_units}`;
				}
			} else if (!cast_time) {
				string = `${numb} ${numb_units}`;
			} else {
				string = cast_time;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Target_Value() {
			let value_1 = this.t(this.Spell_Index.aim_target);
			let value_2 = this.t(this.Spell_Index.aim_type);
			let string = null;
			if (value_2) {
				string = `${value_1} ${value_2}`;
			} else {
				string = value_1;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Parts_Value() {
			let parts = this.Spell_Index.parts;
			let arr = [];
			for (let i in parts) {
				arr.push(this.t(parts[i]));
			}
			return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
		},

		t_Time_Value() {
      const foo_time = this.Value_Sti;
			let spell_time = foo_time ?? this.Spell_Index.spell_time;

			let value_1 = null;
			if (spell_time === "concentration") {
				value_1 = `${this.t(spell_time)} ${this.t("up_to")}`;
			} else {
				value_1 = this.t(spell_time);
			}

			const foo_dur = this.Value_Dur;
			let value_2 = foo_dur ?? this.by_Mana("spell_duration");

			const foo_sdu = this.Value_Sdu;
      let value_3 = foo_sdu ? this.t(foo_sdu) : this.t(this.Spell_Index.spell_duration_units);
      
			let string = null;
			if (!value_1) {
				string = `${value_2} ${value_3}`;
			} else if (value_2) {
				string = `${value_1} ${value_2} ${value_3}`;
			} else {
				string = value_1;
			}

			return string.charAt(0).toUpperCase() + string.slice(1);
		},

    Saving_Numb() {
      const attribute = this.spell_Attribute_MOD;
      return this.spells_Saving_Numb(attribute);
    },

		t_Save() {
			if (this.Spell_Index.saving_attribute) {
				let test = `${this.T("saving")} ${this.T(
					this.Spell_Index.saving_attribute
				)} ${this.Saving_Numb}`;
				let success = `${this.t("if_succeed")} ${
					this.Spell_Index.impact_size_saved
				}`;
				if (this.Spell_Index.impact_size_saved) {
					return `${test} — ${success}`;
				} else {
					return test;
				}
			} else {
				return null;
			}
		},

		t_Save_Print() {
			if (this.Spell_Index.saving_attribute) {
				let test = `${this.T(this.Spell_Index.saving_attribute)} ${this.Saving_Numb}`;
				let success = `${this.t("if_succeed")} ${
					this.Spell_Index.impact_size_saved
				}`;
				if (this.Spell_Index.impact_size_saved) {
					return `${test}, ${success}`;
				} else {
					return test;
				}
			} else {
				return null;
			}
		},

		t_Expanded() {
			return this.t(this.Spell_Index.expanded);
		},

		by_Mana: (state) => (str) => {
			let val = state.Manna_Index[str];
			if (val) {
				return val;
			} else {
				let main_num = state.Index;
				let num = state.Mana_Numb;
				let res = null;
				for (let i = num; i > main_num - 1; i--) {
					if (state.spell[i].hasOwnProperty(str)) {
						res = state.spell[i][str];
						break;
					}
				}
				return res;
			}
		},

		// -----------------------------------
		//ANCHOR - STR
		Str_X_Level_5_11_17() {
			let str = this.Spell_Index.impact_size_str;
			const lvl_arr = [5, 11, 17];
			const kof_arr = [1, 2, 3];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return str + kof;
		},

		Str_X_Plus_1() {
			let str = this.Spell_Index.impact_size_str;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return str + (mana - mana_min);
		},

		Str_X_Plus_2() {
			let str = this.Spell_Index.impact_size_str;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return str + (mana - mana_min) * 2;
		},

		Str_Plus_40() {
			let str = this.Spell_Index.impact_size_str;
			let mana = this.Mana_Numb;
			return str * mana;
		},

		//ANCHOR - NUM

		Num_Plus_Level_2() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.MY.level;
			return num + Math.floor((lvl - 1) / 2);
		},

		Num_LevelX() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.MY.level;
			return num * lvl;
		},

		Num_Level_9_16() {
			let num = this.Spell_Index.impact_size_num;
			const lvl_arr = [9, 16];
			const kof_arr = [1, 2];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return num + kof;
		},

		Num_Level_5_11_17() {
			let num = this.Spell_Index.impact_size_num;
			const lvl_arr = [5, 11, 17];
			const kof_arr = [1, 2, 3];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return num + kof;
		},

		Num_Level_6_11_16() {
			let num = this.Spell_Index.impact_size_num;
			const lvl_arr = [6, 11, 16];
			const kof_arr = [1, 2, 3];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return num + kof;
		},

		Num_Plus_05() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + Math.floor((mana - mana_min) / 2);
		},

		Num_Plus_05_x2() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + Math.floor((mana - mana_min) / 2)*2;
		},

		Num_Plus_1() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min);
		},

		Num_Plus_2() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min) * 2;
		},

		Num_Plus_5() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min) * 5;
		},

		Num_Plus_10() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min) * 10;
		},

		Num_7_30_365_5280() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb - this.Index;
			if (mana == 0) return num;
			if (mana == 1) return 7;
			if (mana == 2) return 30;
			if (mana == 3) return 365;
			if (mana == 4) return 5280;
		},

		Num_Mastery_05() {
			return Math.floor(this.Mastery / 2);
		},

		Num_Mastery() {
			return this.Mastery;
		},

		Num_2xLvl_plus_INT() {
			let lvl = this.MY.level;
			let mod = this.stats_Mod("intelligence");
			return lvl * 2 + mod;
		},

		Num_Lvl14_Plus_1() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.MY.level;
			return lvl >= 14 ? num + 1 : num;
		},

		Num_Lvl_Plus_CHA() {
			let lvl = this.MY.level;
			let mod = this.stats_Mod("intelligence");
			return lvl + mod;
		},

		Num_MOD() {
			let num = this.Spell_Index.impact_size_num;
			let mod = this.stats_Mod(this.spell_Attribute_MOD);
			let res = num + mod;
			return res < 0 ? 0 : res;
		},

		Num_STR() {
			return this.stats_Mod("strength");
		},

		Num_CON() {
			return this.stats_Mod("constitution");
		},

		Num_INT() {
			return this.stats_Mod("intelligence");
		},

		Num_WIS() {
			return this.stats_Mod("wisdom");
		},

		Num_CHA() {
			return this.stats_Mod("charisma");
		},

		Num_CHA_Min0_Plus1() {
			let mod = this.stats_Mod("charisma");
			return mod >= 0 ? mod + 1 : 0 + 1;
		},

		Num_CHA_Min1() {
			let mod = this.stats_Mod("charisma");
			return mod >= 1 ? mod : 1;
		},

		Num_CHA_Plus_Lvl_Min1() {
			let mod = this.stats_Mod("charisma");
			let lvl = this.MY.level;
			return mod + lvl >= 1 ? mod + lvl : 1;
		},

		//ANCHOR - PLS
		Pls_MOD() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod(this.spell_Attribute_MOD);
			let res = pls + mod;
			return res < 0 ? 0 : res;
		},

		Pls_Plus_5() {
			let pls = this.Spell_Index.impact_size_pls;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			let res = pls + (mana - mana_min) * 5;
			return res;
		},

		Pls_STR() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("strength");
			let res = pls + mod;
			return res;
		},

		Pls_DEX() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("dexterity");
			let res = pls + mod;
			return res;
		},

		Pls_CON() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("constitution");
			let res = pls + mod;
			return res;
		},

		Pls_CHA() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("charisma");
			let res = pls + mod;
			return res <= 0 ? 1 : res;
		},

		Pls_WIS_Min1() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("wisdom");
			let res = pls + mod;
			return res <= 0 ? 1 : res;
		},

		Pls_DEX_Plus_Lvl() {
			let mod = this.stats_Mod("dexterity");
			let lvl = this.MY.level;
			return mod + lvl;
		},

		Pls_Lvl() {
			let lvl = this.MY.level;
			return lvl;
		},

		Pls_Mastery() {
			return this.Mastery;
		},

		//ANCHOR - Det
		Det_2_4_8_Lvl() {
			const lvl_arr = [2, 4, 8];
			return this.kof_Foo(lvl_arr);
		},

		Det_2_4_8_9_10_12_15_18_Lvl() {
			const lvl_arr = [2, 4, 8, 9, 10, 12, 15, 18];
			return this.kof_Foo(lvl_arr);
		},

		Det_5_8_11_14_17_Lvl() {
			const lvl_arr = [5, 8, 11, 14, 17];
			return this.kof_Foo(lvl_arr);
		},

		Det_5_9_13_17_Lvl() {
			const lvl_arr = [5, 9, 13, 17];
			return this.kof_Foo(lvl_arr);
		},

		Det_5_7_Mana() {
			let mana = this.Mana_Numb;
			if (mana == 5) return 5;
			if (mana == 6) return 5;
			if (mana == 7) return 7;
		},

		Det_7_11_15_Lvl() {
			const lvl_arr = [7, 11, 15];
			return this.kof_Foo(lvl_arr);
		},

		Det_11_20_Lvl() {
			const lvl_arr = [11, 20];
			return this.kof_Foo(lvl_arr);
		},

		Det_6_Lvl() {
			return this.MY.level >= 6 ? 6 : null;
		},

		Det_13_Lvl() {
			return this.MY.level >= 13 ? 13 : null;
		},

		Det_14_Lvl() {
			return this.MY.level >= 14 ? 14 : null;
		},

		Det_17_Lvl() {
			return this.MY.level >= 17 ? 17 : null;
		},

		Det_18_Lvl() {
			return this.MY.level >= 18 ? 18 : null;
		},

		Det_20_Lvl() {
			return this.MY.level == 20 ? 20 : null;
		},

		//ANCHOR - Dur

		Dur_Plus_1() {
			let num = this.Spell_Index.spell_duration;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min);
		},

		Dur_05_Lvl() {
			return Math.floor(this.MY.level / 2);
		},

		Dur_Lvl() {
			return this.MY.level;
		},

		Dur_Wisdom_Total() {
			return this.stats_Numb("wisdom");
		},

		Dur_10_60_480() {
			let num = this.Spell_Index.spell_duration;
			let mana = this.Mana_Numb - this.Index;
			if (mana == 0) return num;
			if (mana == 1) return 10;
			if (mana == 2) return 60;
			if (mana == 3) return 480;
		},

		Dur_10_8_8_24_Nul() {
			// let num = this.Spell_Index.spell_duration;
			let mana = this.Mana_Numb - this.Index;
			if (mana == 0) return 1;
			if (mana == 1) return 10;
			if (mana == 2) return 8;
			if (mana == 3) return 8;
			if (mana == 4) return 24;
			if (mana >= 5) return null;
		},

		Dur_6Nul() {
			// let num = this.Spell_Index.spell_duration;
			let mana = this.Mana_Numb;
			if (mana < 6) return 10;
			if (mana >= 6) return null;
		},

		//ANCHOR - Sti
		Sti_Con_Nul_Nul_Til() {
			// let num = this.Spell_Index.spell_time;
			let mana = this.Mana_Numb - this.Index;
			if (mana == 0) return "concentration";
			if (mana == 1) return "concentration";
			if (mana == 2) return null;
			if (mana == 3) return null;
			if (mana == 4) return null;
			if (mana >= 5) return "till_dissipate";
		},

		Sti_6Til() {
			// let num = this.Spell_Index.spell_time;
			let mana = this.Mana_Numb;
			if (mana < 6) return "concentration";
			if (mana >= 6) return "till_dissipate";
		},

		//ANCHOR - Sdu
		Sdu_Min_Hour_Hour_Nul() {
			// let num = this.Spell_Index.spell_duration_units;
			let mana = this.Mana_Numb - this.Index;
			if (mana == 0) return "min";
			if (mana == 1) return "min";
			if (mana == 2) return "hour";
			if (mana == 3) return "hour";
			if (mana == 4) return "hour";
			if (mana >= 5) return null;
		},

		Sdu_6Nul() {
			// let num = this.Spell_Index.spell_duration_units;
			let mana = this.Mana_Numb;
			if (mana < 6) return "min";
			if (mana >= 6) return null;
		},

		//ANCHOR - Dic
		Dic_14_56_118_1710_Lvl() {
			const lvl_arr = [1, 5, 11, 17];
			const kof_arr = [4, 6, 8, 10];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_14_66_148_Lvl() {
			const lvl_arr = [1, 6, 14];
			const kof_arr = [4, 6, 8];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_16_98_1310_1712_Lvl() {
			const lvl_arr = [1, 9, 13, 17];
			const kof_arr = [6, 8, 10, 12];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_16_58_1010_1512_Lvl() {
			const lvl_arr = [1, 5, 10, 15];
			const kof_arr = [6, 8, 10, 12];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		//ANCHOR - Ran
		Ran_18_30f() {
			return this.MY.level >= 18 ? 30 : 10;
		},

		Ran_6_30f() {
			return this.MY.level >= 6 ? 30 : null;
		},

		//ANCHOR - FOO
		Value_Foo: (state) => (Val) => {
			let low_val = Val.toLowerCase();
			let num = state.Spell_Index[`impact_size_${low_val}`];
			let foo = state.Spell_Index.impact_size_foo;
			if (foo) {
				let str = foo.split("__");
				for (let i in str) {
					str[i].substr(0, 3) === Val ? (num = state[str[i]]) : null;
				}
			}
			return num;
		},

		Value_Foo_Сlean: (state) => (Val) => {
			let num = null;
			let foo = state.Spell_Index.impact_size_foo;
			if (foo) {
				let str = foo.split("__");
				for (let i in str) {
					str[i].substr(0, 3) === Val ? (num = state[str[i]]) : null;
				}
			}
			return num;
		},

		kof_Foo: (state) => (lvl_arr, kof_arr) => {
			!kof_arr ? (kof_arr = lvl_arr) : null;
			let lvl = state.MY.level;
			let kof = null;
			for (let i = 0; i < lvl_arr.length; i++) {
				if (lvl < lvl_arr[i]) {
					break;
				}
				kof = kof_arr[i];
			}
			return kof;
		},

		Value_Str() {
			return this.Value_Foo("Str");
		},

		Value_Num() {
			return this.Value_Foo("Num");
		},

		Value_Dic() {
			let dice = this.Spell_Index.impact_size_dic;
			let foo = this.Value_Foo_Сlean("Dic");
			return dice + foo;
		},

		Value_Pls() {
			return this.Value_Foo("Pls");
		},

		Value_Det() {
			let details = this.Spell_Index.details;
			let foo = this.Value_Foo("Det");
			return foo ? `${details}_${foo}` : foo;
		},

		Value_Sti() {
			return this.Value_Foo("Sti");
		},

		Value_Dur() {
			return this.Value_Foo("Dur");
		},

		Value_Sdu() {
			return this.Value_Foo("Sdu");
		},

		Value_Ran() {
			const foo_range = this.Value_Foo("Ran");
			const spell_range = this.Spell_Index.aim_range;
			return foo_range ? foo_range : spell_range;
		},

		// ------ FOO -----------
	},
	watch: {
		dialogVisible(val) {
			if (val === false) {
				this.$refs.stripe.classList.remove("active");
			}
		},
	},
	methods: {

    getCreated() {
      const query = this.spell_Link;
      if(query) {
        this.MY.level = query?.l ?? this.MY.level;
        this.MY.select_lang = query?.ln ?? this.MY.select_lang;

        this.stats_link.strength = query?.st;
        this.stats_link.dexterity = query?.de;
        this.stats_link.constitution = query?.co;
        this.stats_link.intelligence = query?.in;
        this.stats_link.wisdom = query?.wi;
        this.stats_link.charisma = query?.ch;
      }
    },

    // getDestroyed() {
    //   this.stats_link = {}
    // },

		toggle() {
			this.isShown = !this.isShown;
		},

		btnClick() {
			if (this.plus || this.delete) {
				this.$emit("updateSpell");
			} else if (this.only_title) {
				this.toggle();
			} else {
				this.showDialog_Select();
			}
		},

		hoverIn_Select() {
			if (this.select) {
				this.$refs.stripe.classList.add("active");
			}
		},
		hoverOut() {
			if (!this.dialogVisible) {
				this.$refs.stripe.classList.remove("active");
			}
		},
		hoverIn_Full() {
			if (!this.select) {
				this.$refs.stripe.classList.add("active");
			}
		},
		showDialog_Full() {
			if (!this.select) {
				this.dialogVisible = true;
				this.mana_numb = this.Index;
			}
		},

		showDialog_Select() {
			this.dialogVisible = true;
			this.mana_numb = this.Index;
		},

		choiceManna(numb) {
			return numb - 1 < this.Index ? null : (this.mana_numb = numb - 1);
		},
    
		choiceManna(numb) {
			return numb - 1 < this.Index ? null : (this.mana_numb = numb - 1);
		},
	},
};
</script>

<style scoped>
.flex_spell {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	cursor: pointer;
	color: #ffffff;
	position: relative;
	/* cursor: url('@/assets/img/icon/cursor_magic.png'), pointer; */
}

.flex_col {
	width: 100%;
	display: flex;
	flex-direction: column;
	/* gap: 4px; */
}
.gap-12 {
	gap: 12px;
}

.flex_title {
	height: 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}

.side_stripe {
	min-width: 4px;
	min-height: 100%;
	background: rgba(255, 255, 255, 0.2);
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.active {
	background: #ffffff;
}

.active--overflow {
	background: #ffc93d;
}

.manna_flex {
	display: flex;
	gap: 3px;
}

.manna_bubble {
	padding: 5px 12px;
  width: 31px;
	height: 28px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.manna_bubble_str {
  width: 100%;
  max-width: max-content;
}

.manna_bubble_choice {
	background: rgba(255, 255, 255, 0.06);
	color: #ffffff;
}

.manna_bubble_hover:hover {
	background: rgba(255, 255, 255, 0.1);
}

.manna_bubble_active {
	background: #00e0ff;
	color: #0e1518;
}

.manna_bubble_passive {
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.06);
	color: rgba(255, 255, 255, 0.2);
	cursor: auto;
}

.h_18 {
	height: 18px;
}

.title_spell {
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	display: flex;
	align-items: center;
	white-space: pre;
}

.title_spell:first-letter {
	text-transform: uppercase;
}

.gray_2 {
	color: rgba(255, 255, 255, 0.2);
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.text_spell {
	width: 340px;
	text-align: start;
}

.hr {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	vertical-align: text-top;
}

.passive {
	opacity: 0.2;
}

.lvl-dot::before {
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	left: -11px;
	overflow-y: visible;
	top: 6px;
	background: #0047ff;
	border-radius: 50%;
}

.lvl-dot-param::before {
	left: -15px;
}

.icon_svg {
	fill: white;
	width: 18px;
	height: 18px;
}

.icon-overflow {
	fill: #ffc93d;
}

.rare-text {
	color: #ffc93d;
	opacity: 1;
}

.marg-top-4 {
	margin-top: 4px;
}

.null_height {
	max-height: 0;
	opacity: 0;
	transition: all 0.5s ease-out;
	overflow: hidden;
}

.full_height {
	max-height: 300px;
	margin-top: 4px;
	opacity: 1;
	transition: all 0.5s ease-in;
}

.marg_slow {
	transition-property: all;
	transition-duration: 0.3s;
	transition-delay: 0.2s;
	transition-timing-function: ease-out;
}

.scroll-packs-enter-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-leave-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-enter-from,
.scroll-packs-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}

.gap-8 {
  gap: 8px;
}
.gap-10 {
  gap: 10px;
}
.gap-26 {
  gap: 26px;
}
.gap-52 {
  gap: 52px;
}

.manna_bubble_print {
  width: max-content;
  padding: 4px 18px;
  border: 6px solid #000000;
  border-radius: 200px;
}

.manna_bubble_print_zero {
  padding: 8px 22px;
  border: 2px solid #000000;
}

/* .text_print {
  color: #000000 !important;
} */

.flex_row {
  display: flex;
}

.fs-40 {
  font-size: 40px;
}

/* .spell_qr {
  display: flex;
  justify-content: flex-end;
} */

.flex_qr_wrapp {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.flex_mana {
  flex: 1 1 auto;
  justify-self: flex-start;
}

.print_icon {
  width: 36px;
	height: 36px;
}

.print-svg {
  width: 36px;
	height: 36px;
	fill: black;
}
</style>
