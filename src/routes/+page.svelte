<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Gallery from '$lib/Gallery.svelte';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import Section4 from '$lib/Section4.svelte';
	import SolutionCta from '$lib/SolutionCTA.svelte';
	import Testimonials from '$lib/Testimonials.svelte';
	import '../app.css';
	import '../global.css';
	import Section2 from './../lib/Section2.svelte';
	import Services from './../lib/Services.svelte';
	import { scrollTo } from '$lib/actions/scrollTo';
</script>

<svelte:head>
	<title>{$page.data.title || 'Aavya Mediclinic'}</title>
	<meta
		name="description"
		content={$page.data.metaDescription ||
			'Aavya Mediclinic in Siliguri offers expert medical consultation by Dr. Avirup Majumdar, MD. Specializing in diabetes, thyroid, hypertension, and general medicine. Quality care with diagnostic services available. Call 7047812650 for appointments.'}
	/>
</svelte:head>

<!-- <ComingSoon /> -->
<Header />
<Hero />
<Section2 id="about" />
<Section4 />
<Services id="services" />
<SolutionCta />
<Testimonials id="testimonials" />
<Gallery id="socials" />
<Footer id="contact" />

<slot />

<style lang="postcss">
	:global(html, body) {
		max-width: 100%;
		overflow-x: hidden;
	}
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
		font-size: 34px;
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
	}

	@media (max-width: 480px) {
		:global(h1) {
			font-size: 46px;
		}

		:global(h2) {
			font-size: 38px;
		}

		:global(h3) {
			font-weight: 400;
			font-size: 24px;
		}

		:global(p) {
			font-size: 17px;
		}
	}
</style>
