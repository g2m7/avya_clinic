<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="md:mb-24 mb-12 py-12 md:px-4">
	<div class="container mx-auto md:max-w-[700px] w-[90vw]">
		<div class="text-center">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }}>
					<h3 in:fade={{ duration: 1000 }} class="mb-12 font-radley text-[#88abda] text-2xl">
						About the clinic
					</h3>
					<h3 class="h-auto">
						Aavya Mediclinic is a residential OPD clinic located in Bidyapith Road, Deshbandhu Para,
						Siliguri, West Bengal, India. Dr. Avirup provides medical consultation facilities here
						on all working days (Monday to Saturday)
					</h3>
				</div>
			{/if}
		</div>
	</div>
	<slot></slot>
</section>
