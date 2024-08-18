<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="md:mb-24 mb-12 py-16 md:px-4">
	<div class="container mx-auto md:max-w-[700px] w-[90vw]">
		<div class="text-center">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }}>
					<h3 in:fade={{ duration: 1000 }} class="mb-12 font-radley font-[#989898] text-2xl">
						About the clinic
					</h3>
					<h3 class="h-auto">
						<span class="text-[#88abda]"> Aavya</span> Mediclinic is a residential
						<span class="text-[#88abda]">OPD clinic</span>
						located in Bidyapith Road, <span class="text-[#88abda]">Deshbandhu Para</span>,
						Siliguri, West Bengal, India. Dr. Avirup provides
						<span class="text-[#88abda]">medical consultation</span> facilities here on all working days
						(Monday to Saturday)
					</h3>
				</div>
			{/if}
		</div>
	</div>
	<slot></slot>
</section>
