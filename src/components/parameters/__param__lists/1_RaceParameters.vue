<template>
    <RaceParam__Stats hr/> <!-- //TODO -->
    <RaceParam__Skills hr/> 
    <RaceParam__Qualities hr/> <!-- //TODO -->
    <RaceParam__Charges hr/>
    <RaceParam__Proficiencies hr/>
    <RaceParam__Fines hr/> 
    <RaceParam__Spells hr/> <!-- //TODO -->
    <RaceParam__Weapons hr />
		<RaceParam__EquipKit hr />
    <RaceParam__Text /> <!-- //TODO -->
</template>

<script>
import RaceParam from "@/components/parameters/1_param__race/RaceParam.js";
export default {
	name: "RaceParameters",
  mixins: [RaceParam],
};
</script>