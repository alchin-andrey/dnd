<template>
  <!-- <Teleport to="body"> -->
  <Transition :duration="{ enter: 700, leave: 700 }" name="nested">
    <div v-if="shown" class="dialog" :class="{'dialog--fixed': mob_fixed}" @click.stop>
        <div class="mob-main-header" :class="{'mob-full-header': !not_mob_header}">
          <div class="btm-wrapp">
            <div class="jbm-300">{{ t_Title }}</div>
            <div class="int-400 column-link" :class="{'rare-text': rare || overflow_Item || sett_Counter}"><span>{{ t_Select }}</span></div>
            <section class="flex-row gap-4">
              <div 
              v-if="shown_Second_Btm" 
              class="btm-round" 
              :class="{
                'btm-white hov': overflow_Btm,
                }" 
              @click="showMobParamSpell()">
                <AppSvg class="svg-18 svg-main-f" :name="svg_Name" />
              </div>
              <div class="btm-round" @click="showHome()">
                <AppSvg class="svg-18 svg-main-f" name="close" />
              </div>
            </section>
          </div>
        </div>
      <div class="dialog__wrapp int-400" @click.stop>
          <div
          class="dialog__content"
          :class="{
            'dialog--mob-header-pd': !not_mob_header,
            'dialog--mob-pd': not_mob_pd,
            'dialog--mob-param': mob_param,
            'dialog--mob-fixed': mob_fixed && !mob_param,
            }">
            <slot></slot>
          </div>
        </div>
      </div>
  </Transition>
<!-- </Teleport> -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
  name: "AppMobDialog",
  props: {
    title: {
      type: String,
      default: null,
    },
    select: {
      type: String,
      default: null,
    },
    rare: {
			type: String,
			default: null,
		},
    menu: {
      type: Object,
			default: {},
    },
    shown: {
      type: Boolean,
      default: false,
    },
    not_mob_pd: {
      type: Boolean,
      default: false,
    },
    mob_param: {
      type: Boolean,
      default: false,
    },
    mob_fixed: {
      type: Boolean,
      default: false,
    },
    not_mob_header: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(useMYStore, ["MY"]),
    ...mapState(useOverflowStore, ["overflow_Item_Menu"]),
    ...mapState(usePagesStore, ["setting_open", "mob_param_spell"]),

    shown_Second_Btm() {
      return this.setting_open?.includes("many_spells")
    },

    svg_Name() {
      return this.mob_param_spell ? "plus" : "edit" ;
    },

    t_Title() {
      if(this.title) {
        return this.t(this.title)
      } else {
        return this.t(this.menu.name);
      }
    },

    t_Select() {
      if(this.select) {
        return this.title === "gender" ? this.gender_Name : this.T(this.select);
      } else {
        return this.t_Select_Menu;
      }
    },

    gender_Name() {
			let name = this.T(this.select);
			return this.MY.gender.feel === "cisgender" ? name : `${name} *`;
		},

    overflow_Btm() {
			return !this.mob_param_spell && !this.sett_Counter 
            || this.mob_param_spell && this.sett_Counter;
		},

    overflow_Item() {
			if(this.menu.name == "skills" && this.menu?.filter == 'only_mastery') {
				return false;
			} else {
				return this.overflow_Item_Menu(this.menu);
			}
		},

    sett_Counter() {
      if (this.menu.type == "spells") {
        const numb = this.menu.select_numb - this.menu.select_list.length;
        return numb !== 0;
      }
    },

    t_Select_Menu() {
      if (this.menu.type == "spells") {
        const dub_detect = this.overflow_Item_Menu(this.menu);
        const numb = this.menu.select_numb - this.menu.select_list.length;
        const selected = `${this.T("spell_selected")} ${this.menu.select_numb}`;
        const left = `${this.T("spells_left")} ${numb}`;
        const duplicated = `${this.T("spell_duplicated")}`;
        return numb !== 0 ? left : dub_detect ? duplicated : selected;
      } else if (
				this.menu.type == "feats" &&
				(this.menu.id_btn == "stats_2" || this.menu.id_btn == "stats_1_1")
			) {
				let arr = [];
				this.menu.select_list.forEach((item) => {
					const name = item.stats[0].name;
					const num = item.stats[0].num;
					arr.push(`+${num} ${this.T(name).slice(0, 3)}`);
				});
				return arr.join(", ");
			} else {
				let arr = [];
				this.menu.select_list?.forEach((item) => {
					if (item?.name) {
						arr.push(this.T(item?.name));
					} else if (item?.name_set) {
						arr.push(this.T(item?.name_set));
					}
				});
				return arr.join(", ");
			}
		},
  },
  methods: {
    ...mapActions(usePagesStore, ["showHome", "showMobParamSpell"]),
  },
};
</script>

<style scoped>

.mob-main-header {
	width: 100%;
	z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.mob-full-header {
	height: 88px;
	background: #0E1518;
	box-shadow: 0px 4px 20px #000000;
}

.btm-wrapp {
  padding: 20px 20px 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 434px;
  gap: 16px;
}

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0e1518;
  position: fixed;
  z-index: 500;
}

.dialog--fixed {
  display: flex;
  justify-content: center;
}

.dialog__wrapp {
  z-index: 501;
  cursor: auto;
  height: 100%;
}

.dialog__wrapp::-webkit-scrollbar {
  width: 0;
}

.dialog__content {
  padding-top: 88px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  /* max-width: 394px; */
  max-width: 434px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-right: 20px;
  padding-left: 20px;
}

.dialog__content::-webkit-scrollbar {
  width: 0;
}

.dialog--mob-header-pd { 
  padding-top: 108px;
}

.dialog--mob-pd {
  padding-bottom: 0;
  padding-right: 0;
  padding-left: 0;
}

.dialog--mob-fixed{
  min-width: 434px;
}

.dialog--mob-param {
  max-width: 394px;
  padding-right: 16px;
  padding-left: 16px;
}

.column-link {
  display: flex;
  align-items: center;
	overflow: hidden;
}

.column-link span {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.5s ease-out;
}

.nested-leave-active {
  transition-delay: 0.2s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

.nested-enter-active .dialog__wrapp,
.nested-leave-active .dialog__wrapp {
  transition: all 0.5s ease-out;
}

.nested-enter-active .dialog__wrapp {
  transition-delay: 0.2s;
}

.nested-enter-from .dialog__wrapp,
.nested-leave-to .dialog__wrapp {
  transform: translateY(100px);
  opacity: 0.001;
}
</style>
