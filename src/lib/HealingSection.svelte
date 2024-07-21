<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<section class="flex flex-col md:flex-row w-full h-[95vh]">
  <!-- Left column (image) -->
  <div class="w-full md:w-1/2 h-full">
    <img src="/images/healing-section.jpg" alt="Background" class="w-full h-full object-cover" />
  </div>

  <!-- Right column (content) -->
  <div class="w-full md:w-1/2 bg-[#527359] text-white p-8 md:p-12 flex items-center overflow-y-auto">
    <div class="max-w-md mx-auto">
      {#if isVisible}
        <div in:fly="{{ y: 50, duration: 1000 }}" class="text-left">
          <h4 class="text-xl font-light text-[#88abda] mb-6">
            Do you suffer from one or more of the following?
          </h4>
          <ul class="space-y-4">
            {#each [
              "You often feel tired, fatigued, and run down during your day.",
              "You eat a healthy diet (most of the time), but still struggle to lose weight or feel good in your body.",
              "You have chronic symptoms such as bloating, irritable bowel, pain, skin issues, headaches, or depression.",
              "You are juggling work, kids, LIFE, and need easy ways to boost energy and overall well-being.",
              "You don't have the time or motivation to go through a lengthy process. You want fast results."
            ] as item}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#BED173] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</section>