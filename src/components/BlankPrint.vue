<template>
	<div class="blank-conteiner int-400">




		<!-- <div class="wrap">
		  <table class="table-main">
  			<thead>
  				<tr>
  					<th class="int-600" colspan="2">{{ MY.name }}</th>
  				</tr>
  			</thead>
        <tbody>
        <tr class="cell-main">
          <td><AppMainCell title="race" :content="MY.race.name" /></td>
          <td><AppMainCell title="race" :content="MY.race.name" /></td>
        </tr>
        
        </tbody>
  		</table>
		</div> -->


		<div class="table-main grid-container">
			<div class="cell cell-title int-600">{{ MY.name }}</div>
			<AppMainCell class="cell-main" title="race" :content="MY.race.name" />
			<AppMainCell class="cell-main" title="ethnos" :content="MY.ethnos.name" />
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "BlankPrint",
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY"]),

		t_Html() {
			return this.t("authors");
		},
	},
};
</script>

<style scoped>
.int-400 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 15px;
	letter-spacing: 0.02em;
}

.int-600 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 0.02em;
}

.blank-conteiner {
	width: 100%;
	width: 1044px;
	color: #000000;
	z-index: 10;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	/* margin-right: -1044px; */
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

/* .wrap {
  border: 1px solid red;
  border-radius: 5px;
} */

/* table {
  border-radius: 10px;
  border: 1px solid #000;
  display: block;
} */

.wrap {
  /* border: 0.5px solid #000000; */
  border-radius: 3px;
}

/* table{border-collapse:collapse}
td{border:0.5px solid #000}
td:first-child {border-left:none}
td:last-child {border-right:none}
tr:first-child > td{border-top:none}
tr:last-child > td{border-bottom:none} */

.table-main {
	width: 324px;
  border-collapse: collapse;
	border: 0.5px solid #000000;
  border-radius: 3px; /* CSS3 */
  display: block;
}

.cell-main td {
  padding: 4px 6px 2px;
  border: 0.5px solid #000000;
  /* border-radius: 3px; */
}

.cell-main {
  padding: 4px 6px 2px;
  border: 0.5px solid #000000;
  /* border-radius: 3px; */
}



.table-title {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 23px 12px 25px;
	height: 72px;
	border: 0.5px solid #000000;
	border-radius: 3px 3px 0px 0px;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(2, 50%);
}

.cell {
	border: 0.5px solid #000000;
}

.cell-title {
	grid-column: span 2;
	padding: 23px 12px 25px;
	/* border-radius: 3px 3px 0px 0px; */
}

.cursor {
	cursor: pointer;
}

.marg {
	margin-left: 32px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.grid {
	display: grid;
}

.gap-4 {
	gap: 4px;
}

.gap-26 {
	gap: 26px;
}

.flex {
	display: flex;
}

.story-dev {
	color: black;
	text-align: start;

	/* margin-bottom: 22px; */
}

.soon-class {
	color: #05ff00;
}

.text {
	width: 300px;
	white-space: pre;
	overflow: hidden; /* Обрезаем всё за пределами блока */
	text-overflow: ellipsis;
}

.text-finish {
	width: 320px;
}

.text:first-letter {
	text-transform: uppercase;
}

.link-pad {
	padding: 16px;
}
</style>
