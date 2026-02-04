import { writable } from 'svelte/store';

interface ContactState {
	isOpen: boolean;
	prefilledMessage: string;
}

function createContactStore() {
	const { subscribe, set, update } = writable<ContactState>({
		isOpen: false,
		prefilledMessage: ''
	});

	return {
		subscribe,
		open: (message: string = '') =>
			set({
				isOpen: true,
				prefilledMessage: message
			}),
		close: () =>
			update((state) => ({
				...state,
				isOpen: false
			}))
	};
}

export const contactStore = createContactStore();
