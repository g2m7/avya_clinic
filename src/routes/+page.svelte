<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import ShopCTA from '$lib/ShopCTA.svelte';
</script>

<ShopCTA />
<Header />
<Hero />

<slot />

<style lang="postcss">
	:global(html) {
		font-family: 'Outfit', sans-serif;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Outfit', sans-serif;
		font-weight: 400;
		font-size: 83px;
		color: #333133;
    letter-spacing: -2px;
	}

	:global(p) {
		font-family: 'Outfit', sans-serif;
		font-size: 19px;
    font-weight: 300;
		color: #5a595a;
	}

	:global(.font-radley) {
		font-family: 'Radley, sans-serif';
		font-weight: 400;
		font-style: italic;
    color: #989898;
	}
</style>
