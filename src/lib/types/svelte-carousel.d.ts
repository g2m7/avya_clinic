declare module 'svelte-carousel' {
	import { SvelteComponentTyped } from 'svelte';

	export interface CarouselProps {
		autoplay?: boolean;
		autoplayDuration?: number;
		autoplayProgressVisible?: boolean;
		swiping?: boolean;
		arrows?: boolean;
		dots?: boolean;
		infinite?: boolean;
	}

	export default class Carousel extends SvelteComponentTyped<CarouselProps> {
		goTo(index: number): void;
	}
}
