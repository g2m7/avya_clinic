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

