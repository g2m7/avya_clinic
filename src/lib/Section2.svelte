<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="md:mt-8 md:mb-8 py-16 md:px-4 ">
	<div class="container mx-auto md:max-w-[700px] w-[90vw]">
		<div class="text-center">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }}>
					<h3 in:fade={{ duration: 1000 }} class="mb-12 font-radley font-[#989898] text-2xl">
						About me
					</h3>
					<h2 class="h-auto">
						Hi! I'm Dr. Avirup Majumder, Esteemed Physician,
						<span class="text-[#88abda]"> Diabetologist, </span>
						and Internal Medicine Specialist in <span class="text-[#88abda]">Siliguri.</span>
					</h2>
				</div>
			{/if}
		</div>
	</div>
</section>
