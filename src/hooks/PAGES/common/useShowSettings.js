import { computed, reactive } from "vue";
import { useStore } from "vuex";

export function useShowSettings() {
	const store = useStore();
	const pages = reactive(store.state.pages);

	const activePage = computed(() => store.getters["pages/activePage"]);

	const CLOSE_HOME = () => store.commit("pages/CLOSE_HOME")
	const OPEN_HOME = () => store.commit("pages/OPEN_HOME")

	const CLOSE_SETING = (page, name) => store.commit("pages/CLOSE_SETING", { page: page, name: name })
	const OPEN_SETING = (page, name) => store.commit("pages/OPEN_SETING", { page: page, name: name })

	function closeSettings(page) {
		const obj = pages[page].shown;
		for (const [key, value] of Object.entries(obj)) {
			if (value) {
				CLOSE_SETING(page, key);
			}
		}
	}

	function closeAllSetting() {
		closeSettings("main_page");
		closeSettings(activePage.value);
	}

	function goHome() {
		closeAllSetting(activePage.value);
		OPEN_HOME();
	}

	function showSettings(page, name) {
		let chapter = page === "main_page" ? page : activePage.value;
		if (pages[page].shown[name] === false) {
			closeAllSetting();
			OPEN_SETING(chapter, name);
			CLOSE_HOME();
		} else {
			goHome();
		}
	}

	return { showSettings, goHome };
}
