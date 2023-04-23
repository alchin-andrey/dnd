import WelcomeBanner from "@/components/WelcomeBanner.vue";
import PlagBanner from "@/components/PlagBanner.vue";
// import Welcome from "@/components/Welcome.vue";
// import WhatDND from "@/components/WhatDND.vue";
import Donate from "@/components/Donate.vue";
import PromoSlider from "@/components/PromoSlider.vue";
import BlankPrint from "@/components/BlankPrint.vue";

import HeaderMenu from "@/components/menu/0_HeaderMenu.vue";
import HeaderSettings from "@/components/settings/__settings__lists/0_HeaderSettings.vue";

// MASTER_PAGE
// import MasterParameters from "@/components/parameters/__param__lists/0_MasterParameters.vue";

// RACE_PAGE
import RaceMenu from "@/components/menu/1_RaceMenu.vue";
import RaceSettings from "@/components/settings/__settings__lists/1_RaceSettings.vue";
import RaceParameters from "@/components/parameters/__param__lists/1_RaceParameters.vue";
// CLASS_PAGE
import ClassMenu from "@/components/menu/2_ClassMenu.vue";
import ClassSettings from "@/components/settings/__settings__lists/2_ClassSettings.vue";
import ClassParameters from "@/components/parameters/__param__lists/2_ClassParameters.vue";

// ALIGNMENT_PAGE
import AlignmentMenu from "@/components/menu/3_AlignmentMenu.vue";
import AlignmentSettings from "@/components/settings/__settings__lists/3_AlignmentSettings.vue";
import AlignmentParameters from "@/components/parameters/__param__lists/3_AlignmentParameters.vue";

export default {
	components: {
    WelcomeBanner,
    PlagBanner,
    // Welcome,
    // WhatDND,
		Donate,
		PromoSlider,
		BlankPrint,

		HeaderMenu,
		HeaderSettings,

    // MASTER_PAGE
    // MasterParameters,
		// RACE_PAGE
		RaceMenu, //TODO: Сылки на рост, вес, возраст
		RaceSettings,
		RaceParameters,
		// CLASS_PAGE
		ClassMenu,
		ClassSettings,
		ClassParameters,

		// ALIGNMENT_PAGE
		AlignmentMenu,
		AlignmentSettings,
		AlignmentParameters,
	},
};
