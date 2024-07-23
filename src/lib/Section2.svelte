<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="mt-8 mb-8 py-16 px-4">
	<div class="container mx-auto max-w-[700px]">
		<div class="text-center">
			{#if isVisible}
				<div in:fly={{ y: 50, duration: 1000 }}>
					<h3 in:fade={{ duration: 1000 }} class="mb-12 font-radley font-[#989898] text-2xl">About me</h3>
					<h2 class="mb-12 h-auto">
						Hi! I'm Dr. Avirup Majumder, your
						<span class="text-[#88abda]">naturopathic doctor </span>
						and nutrition expert in <span class="text-[#88abda]">New York City.</span>
					</h2>
					<a
						href=""
						class="inline-flex items-center px-6 py-3 text-[17px] text-[#5a595a] hover:text-[#BED173] rounded-md transition-colors delay-100 duration-300"
						in:fade={{ delay: 500, duration: 1000 }}
					>
						Find Out More
						<svg
							class="ml-2 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							></path>
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
