<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import '../app.css';
	import '../global.css';
	import ContactDialog from '$lib/components/ContactDialog.svelte';

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		// @ts-ignore
		window.lenis = lenis;

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

<ContactDialog />
<slot />
