<template>
	<div class="blank-conteiner int-400-22">
		<section class="blank-head">
			<div class="grid-wrap">
				<BlankTable__MainNames />
				<BlankTable__MainSett />
				<BlankTable__Proficiencies />
			</div>
			<Blank__Avatar />
		</section>
      
		<section class="blank-bottom">
      <!-- <div class="column-wrap">Voluptate occaecat eu culpa nostrud sit voluptate culpa tempor laborum ex esse.Cillum esse et ex do do anim elit cupidatat irure. Fugiat dolore tempor laboris in laboris aute consectetur id amet amet quis consectetur culpa ex. Est ipsum ex excepteur culpa adipisicing dolor quis irure aute reprehenderit nostrud. Consectetur enim ipsum duis laborum nostrud elit quis duis ad Lorem elit. Minim sint labore eu veniam sint excepteur sunt ut magna nostrud quis ipsum id. Sunt fugiat eu tempor eiusmod sit cillum.

Id aliqua incididunt labore culpa quis aliquip excepteur eiusmod id sit. Id minim enim sunt aliqua mollit non laborum minim nulla exercitation Lorem commodo ipsum. Aliquip adipisicing cupidatat aute duis nostrud incididunt consequat non et. Proident eu magna excepteur labore officia elit fugiat sit. Elit amet reprehenderit ad aliquip ipsum ut ex dolor ex. Sit ex reprehenderit labore tempor elit. Nulla sit consequat tempor velit Lorem ut magna dolor commodo tempor minim cupidatat.

Consequat exercitation labore ullamco est do labore sint. Mollit voluptate do pariatur dolor magna tempor laborum exercitation velit ex magna pariatur. Commodo tempor ullamco anim mollit voluptate nostrud.

Adipisicing incididunt adipisicing pariatur sit aliqua eiusmod id proident amet elit sunt do id. Nisi dolor ea et incididunt ipsum ea veniam velit cillum aliquip ullamco officia. Non reprehenderit est ex ad eiusmod adipisicing proident nulla duis aliquip exercitation. Voluptate ad ullamco eiusmod excepteur sit occaecat commodo.

Sit sunt magna consectetur velit irure eiusmod mollit mollit et elit Lorem deserunt. Aute magna eiusmod elit elit sunt labore. Laboris amet consequat quis amet sint sunt dolore reprehenderit esse Lorem do consectetur. Adipisicing culpa et incididunt laboris occaecat. Aute est ad ex duis aliqua aliquip et.

Veniam nulla ipsum incididunt sit nulla ullamco velit excepteur mollit. Minim sint ut voluptate sint veniam non nulla. Voluptate nostrud sunt dolore aliquip. Magna quis occaecat voluptate pariatur anim velit in adipisicing tempor sint occaecat. Irure adipisicing irure anim qui pariatur eu qui irure dolor enim velit eu ipsum qui. Voluptate ex sunt officia officia ad exercitation ea ut pariatur ea consectetur mollit incididunt. Deserunt adipisicing est occaecat enim.

Ipsum commodo anim voluptate mollit voluptate laboris occaecat ea ullamco velit id laboris aliquip. Adipisicing tempor reprehenderit sunt qui irure reprehenderit do eu ipsum elit enim quis et. Ea qui cillum tempor cillum excepteur do deserunt labore sit fugiat. Adipisicing anim nisi est ipsum in. Eu eu culpa elit in pariatur cillum qui sunt nisi ea consequat Lorem cillum labore.

Est commodo mollit sint ea cillum dolore sint ex magna occaecat ipsum. Laborum qui velit reprehenderit dolore qui enim. Ad do deserunt commodo laboris aliquip anim cupidatat non. Consequat magna dolor cupidatat non pariatur nostrud ea elit. Aliquip esse aliqua minim deserunt. Amet veniam eiusmod commodo in eu enim incididunt ut. Consequat voluptate sunt dolore id in nulla eu.

Adipisicing Lorem qui sint eiusmod est non mollit eiusmod consectetur cillum reprehenderit. Et quis culpa dolore adipisicing anim velit cillum nulla irure. Duis anim adipisicing fugiat labore et. Eiusmod et dolor aute proident est magna. Sunt magna culpa velit pariatur. Reprehenderit aliqua officia ipsum eu quis proident occaecat sit laboris veniam amet. Quis sunt minim consequat do nulla labore eu nulla proident duis est culpa.

Labore ipsum sint consectetur consequat culpa duis consequat eiusmod nisi non. Minim elit tempor anim nisi veniam. Aliqua eu dolore veniam aliquip incididunt. Est non minim nostrud commodo.</div> -->
    </section>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
	mixins: [BlankPrintLink],
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
	},
};
</script>

<style scoped>
.blank-conteiner {
	width: 100%;
	height: 100%;
	width: 2088px; /* 1588 */
	height: 2952px;
	color: #000000;
	z-index: 10;
	padding: 72px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	margin-right: -2088px;
}

.blank-head {
	display: flex;
	gap: 72px;
	height: 1404px;
}

.blank-bottom {
	border-top: 1px dashed #333333;
  padding-top: 72px;
	height: 100%;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.grid-wrap {
	min-width: 648px;
	max-width: 648px;
	margin: 1px 1px 0 0;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.column-wrap {
  columns: 3;
}
</style>
