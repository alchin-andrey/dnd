<template>
  <AlignmentParam__Text />
  <ClassParam__Stats hr />
  <ClassParam__Skills hr />
  <ClassParam__SkillsPassive hr />
  <ClassParam__Qualities hr />
  <ClassParam__Charges hr />
  <ClassParam__Proficiencies hr />
  <ClassParam__Fines hr />
  <ClassParam__Spells hr />
  <ClassParam__Weapons hr />
  <ClassParam__EquipKit />
</template>

<script>
import AlignmentParam from "@/components/parameters/3_param__alignment/AlignmentParam.js";
export default {
	name: "AlignmentParameters",
	mixins: [AlignmentParam],
};
</script>
