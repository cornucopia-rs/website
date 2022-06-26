import { writable } from 'svelte/store';

export type AppState = {
	sidebarOpen: boolean;
	screenSize: ScreenSize | null;
};

// Manage the screen size
export type ScreenSize = 'Small' | 'Medium' | 'Large';

function createAppState() {
	function computeScreenSize(): ScreenSize {
		const myOuterWidth = window.outerWidth;
		console.log(myOuterWidth);
		// sm and - in tailwindCSS
		if (myOuterWidth < 768) {
			return 'Small';
			// md and lg in tailwindCSS
		} else if (myOuterWidth < 1280) {
			return 'Medium';
			// xl and + in tailwindCSS
		} else {
			return 'Large';
		}
	}

	const state: AppState = {
		sidebarOpen: false,
		screenSize: null,
	};

	const { subscribe, set, update } = writable(state);

	return {
		subscribe,
		set,
		update,
		updateScreenSize: () => {
			update((state) => {
				return {
					sidebarOpen: state.sidebarOpen,
					screenSize: computeScreenSize()
				}
			});
		}
	};
}





export const appState = createAppState();