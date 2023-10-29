<template>
	<main>
		<div class="wrapp-book title-size flex-col gap-52 int-500-22">
			<section class="flex-col gap-8">
				<div class="int-700-22 print-grey">{{ t_Name }} /</div>
				<div class="int-600-48"> {{ t_Title }} </div>
				<div> {{ t_Details }} </div>
			</section>
			<img class="size-img" src="@/assets/img/print/spellbook.svg" alt="spellbook">
			<section class="flex-col gap-10">
				<AppPrintSpellMain title="class" :text="T(MY_Class.name)" />
				<AppPrintSpellMain v-if="MY_Subclass" title="subclass" :text="T(MY_Subclass.name)" />
				<AppPrintSpellMain title="level" :text="String(MY.level)" />
				<AppPrintSpellMain title="all_spell" text="" />
			</section>
		</div>
		
		<div class="wrapp-book second-size flex-col gap-52 int-500-22">
			<div class="book-hr" />
			<section class="flex-col gap-8">
				<div class="int-700-22"> {{ T('prepared_spells') }} </div>
				<div> {{ T('prepared_spells_details') }} </div>
			</section>

			<AppPrintSpellMain title="available_spells" :text="T(MY_Class.name)" />

			<div> {{ T('prepared_spells_footnote') }} </div>
		</div>
	</main>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "BlankTable__List_3",
	methods: {},

	computed: {
		...mapState(useMYStore, [
			"MY",
			"MY_Class",
			"MY_Subclass"
		]),
		...mapState(useSpellsStore, ["spells_Saving_Numb"]),

		t_Name() {
			return this.t(this.MY.name);
		},
		t_Title() {
			return this.T('spellbook');
		},
		t_Details() {
			return this.T('spellbook_details');
		},

	},
};
</script>

<style scoped>

.wrapp-book {
	padding: 48px 56px 56px;
	border: 1px solid #828282;
	margin: -1px -1px 0 0;
}

.title-size {
	width: 648px;
	height: 818px;
}

.second-size {
	width: 648px;
	height: 528px;
}

.size-img {
	width: 536px;
}

.book-hr {
	width: 100%;
	height: 2px;
	background: #0E1518;
}
</style>
