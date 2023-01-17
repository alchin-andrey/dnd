<template>
    <RaceParam__Stats hr/>
    <RaceParam__Skills hr/>
    <RaceParam__Qualities hr/>
    <RaceParam__Proficiencies hr/>
    <RaceParam__Fines hr/>
    <RaceParam__Spells hr/>
    <RaceParam__Text />
</template>

<script>
// import { mapState} from "pinia";
// import { usePagesStore } from "@/stores/user/PagesStore";

import RaceParam from "@/components/parameters/1_param__race/RaceParam.js";
export default {
	name: "RaceParameters",
  mixins: [RaceParam],
	// computed: {
	// 	...mapState(usePagesStore, ["race_page"]),
	// },
};
</script>