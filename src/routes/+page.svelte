<script>
	import '../app.css';
	import Section2 from './../lib/Section2.svelte';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import ShopCTA from '$lib/ShopCTA.svelte';
	import Section3 from '$lib/Section3.svelte';
</script>

<ShopCTA />
<Header />
<Hero />
<Section2 />
<Section3/>

<slot />

<style lang="postcss">
	:global(html) {
		font-family: 'Outfit', sans-serif;
	}

	:global(h1) {
		font-family: 'Outfit', sans-serif;
		font-weight: 400;
		font-size: 82px;
		color: #333133;
		letter-spacing: -2px;
	}

	:global(h2) {
		font-family: 'Outfit', sans-serif;
		font-weight: 400;
		font-size: 58px;
		color: #333133;
		letter-spacing: -2px;
		line-height: 1.14em;
	}

	:global(h3) {
		font-family: 'Outfit', sans-serif;
		font-weight: 400;
		font-size: 22px;
		color: #333133;
		letter-spacing: -1px;
	}

	:global(h4) {
		font-family: 'Outfit', sans-serif;
		font-weight: 400;
		font-size: 12px;
		color: #333133;
		letter-spacing: -1px;
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
