<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<section class="bg-macha-green min-h-[780px] flex items-center">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center justify-center">
      <!-- Left Column -->
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
        <div class="transition-opacity duration-300 ease-in-out" class:opacity-0={!isVisible} class:opacity-100={isVisible}>
          <p class="text-gray-600 mb-2">Naturopathic Care with Dr. Martin</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Natural Healing,<br>
            <span class="text-[#527359]">Simplified</span>
          </h1>
          <p class="text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
            To heal the core you must find the root cause. It's simpler than you think, and it will change your life.
          </p>
          <a href="/about-me" class="inline-block bg-[#BED173] text-white font-medium py-3 px-6 rounded-md hover:bg-[#527359] transition duration-300 ease-in-out">
            Start Here
          </a>
        </div>
      </div>

      <!-- Right Column -->
      <div class="w-full lg:w-1/2 relative">
        <div class="transition-all duration-300 ease-in-out transform" class:translate-y-10={!isVisible} class:translate-y-0={isVisible}>
          <img src="/images/hero.jpg" alt="Dr. Martin" class="w-full h-auto rounded-lg shadow-lg mx-auto">
        </div>
        <img src="/images/shape-2.png" alt="Decorative shape" class="absolute -bottom-10 -left-10 w-1/2 h-auto opacity-50 transition-opacity duration-300 ease-in-out" class:opacity-0={!isVisible} class:opacity-50={isVisible}>
        <img src="/images/home-back-10.png" alt="Decorative dots" class="absolute top-10 right-10 w-16 h-auto transition-all duration-300 ease-in-out" class:opacity-0={!isVisible} class:opacity-100={isVisible} class:translate-y-10={!isVisible} class:translate-y-0={isVisible}>
      </div>
    </div>
  </div>
</section>