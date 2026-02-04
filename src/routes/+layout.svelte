<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import '../app.css';
	import '../global.css';

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			// direction: 'vertical', // vertical, horizontal
			// gestureDirection: 'vertical', // vertical, horizontal, both
			// smooth: true,
			// mouseMultiplier: 1,
			// smoothTouch: false,
			// touchMultiplier: 2,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<slot />
