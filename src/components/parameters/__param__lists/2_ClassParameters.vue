<template>
	<transition name="mode-fade" mode="out-in">

		<!-- //NOTE - Main -->
    
    <section v-if="shown_Main_Paramm">
      <ClassParam__Stats hr />
      <ClassParam__Skills hr/>
      <ClassParam__SkillsPassive hr/>
			<ClassParam__Qualities hr />
			<ClassParam__Charges hr />
      <ClassParam__Proficiencies hr />
      <ClassParam__Fines hr />
      <ClassParam__Spells hr/>
			<ClassParam__Weapons hr />
			<ClassParam__EquipKit hr />
      <ClassParam__Text />
		</section>

  <!-- //NOTE - Stats -->

		<section v-else>
    <TransitionGroup tag="ul" name="fade" class="container">
      <ClassParam__Stats key="stats" v-if="shown_Feats" hr/>
			<ClassParam__Qualities key="qualities" hr />
      <ClassParam__SkillsAll key="skillsAll" hr/>
      <ClassParam__SkillsPassive key="skillsPassive" all/>
    </TransitionGroup>
		</section>
	</transition>

  <!-- <TransitionGroup name="list" tag="ul" class="container"> -->
  <!-- <TransitionGroup tag="ul" name="fade" class="container"> -->
    <!-- <TransitionGroup
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
  <ClassParam__Stats key="stats" v-if="!shown_Base_Stats" hr :data-index="0"/>
  <ClassParam__Skills key="skills" v-if="shown_Main_Paramm" hr :data-index="1"/>
	
  <ClassParam__Qualities key="qualities" v-if="true" hr :data-index="2"/>
  <ClassParam__SkillsAll key="skillsall" v-if="shown_Stats_Param" :data-index="3"/>
	<ClassParam__Charges key="charges" v-if="shown_Main_Paramm" hr :data-index="4"/>
  <ClassParam__Proficiencies key="proficiencies" v-if="shown_Main_Paramm" hr :data-index="5"/>
  <ClassParam__Fines key="fines" v-if="shown_Main_Paramm" hr :data-index="6"/>
  <ClassParam__Spells key="spells" v-if="shown_Main_Paramm" hr :data-index="7"/>
	<ClassParam__Weapons key="weapons" v-if="shown_Main_Paramm" hr :data-index="8"/>
	<ClassParam__EquipKit key="equipkit" v-if="shown_Main_Paramm" hr :data-index="9"/>
  <ClassParam__Text key="text" v-if="shown_Main_Paramm" :data-index="10"/>
</TransitionGroup> -->

</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import ClassParam from "@/components/parameters/2_param__class/ClassParam.js";

export default {
	name: "ClassParameters",
	mixins: [ClassParam],
	computed: {
		...mapState(usePagesStore, ["class_page", "setting_open"]),

    shown_Feats() {
      const feats = this.setting_open?.slice(0, 5) == "feats";
      return feats;
    },

    shown_Base_Stats() {
      return this.class_page.shown.stats;
    },

    shown_Stats_Param() {
      return this.shown_Base_Stats || this.shown_Feats;
    },

    shown_Main_Paramm() {
      return !this.shown_Stats_Param;
    },
	},
};
</script>

<style scoped>

.mode-fade-enter-active,
.mode-fade-leave-active {
	transition: opacity 0.2s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
	opacity: 0;
}

.container {
  position: relative;
  padding: 0;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);

}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: scaleY(0.01) translate(30px, 0); */
  transform: translateY(-170px);
}

.fade-leave-active {
  position: absolute;
  width: 100%;
}


</style>
