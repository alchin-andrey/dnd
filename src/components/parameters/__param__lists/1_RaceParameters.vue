<template>
  <RaceParam__Stats hr/>
  <RaceParam__Skills hr/> 
  <RaceParam__Qualities hr/>
  <RaceParam__Charges hr/>
  <RaceParam__Proficiencies hr/>
  <RaceParam__Fines hr/> 
  <RaceParam__Spells hr/> 
  <RaceParam__Weapons hr />
  <RaceParam__EquipKit hr />
  <RaceParam__Text />
</template>

<script>
import RaceParam from "@/components/parameters/1_param__race/RaceParam.js";
export default {
	name: "RaceParameters",
  mixins: [RaceParam],
};
</script>