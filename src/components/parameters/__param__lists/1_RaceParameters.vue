<template>
    <RaceParam__Stats hr/> //TODO
    <RaceParam__Skills hr/> 
    <RaceParam__Qualities hr/> //TODO
    <RaceParam__Proficiencies hr/>
    <RaceParam__Fines hr/> //TODO
    <RaceParam__Spells hr/> //TODO
    <RaceParam__Text /> //TODO
</template>

<script>
import RaceParam from "@/components/parameters/1_param__race/RaceParam.js";
export default {
	name: "RaceParameters",
  mixins: [RaceParam],
};
</script>