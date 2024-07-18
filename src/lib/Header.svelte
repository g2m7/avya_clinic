<script>
  import { base } from '$app/paths';
  let isOffcanvasOpen = false;
  
  function toggleOffcanvas() {
    isOffcanvasOpen = !isOffcanvasOpen;
  }
</script>

<style>
  .nav-link{
    text-shadow: 0 0 0 transparent;
    transition: color .3s ease-in-out,background-color .3s ease-in-out,border-color .3s ease-in-out,border-radius .3s ease-in-out,text-shadow .3s ease-in-out;
  }
</style>

<header class="absolute w-full z-50 bg-[#faf5f0]">
  <nav class="max-w-full mx-2 my-3 px-8 sm:px-4 lg:px-6">
    <div class="flex justify-between items-center h-16">
      <!-- Logo Area -->
      <div class="flex-shrink-0 invert">
        <img src="https://the-practitioner.cmsmasters.net/wp-content/uploads/2022/05/logo-landing-2.svg" alt="The Practitioner" class="w-full">
      </div>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a href="#demos" class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link">Demos</a>
        <a href="#features" class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link">Features</a>
        <a href="#posttypes" class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link">Post Types</a>
        <a href="#layouts" class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link">Layouts</a>
        <a href="#plugins" class="text-[#5a595a] text-lg font-normal hover:text-[#989898] transition-colors nav-link">Plugins</a>
      </div>
      
      <!-- CTA Button -->
      <div class="hidden md:block">
        <a href="https://1.envato.market/cmsmasters-the-practitioner" target="_blank" 
           class="inline-flex items-center px-7 py-3 bg-[#BED173] text-white text-lg font-bold rounded-md hover:bg-[#ec9f57] transition-colors duration-300">
          Book Now
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button on:click={toggleOffcanvas} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#BED173] hover:bg-white/10 transition-colors duration-300" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if isOffcanvasOpen}
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
        <a href="#demos" class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]">Demos</a>
        <a href="#features" class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]">Features</a>
        <a href="#posttypes" class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]">Post Types</a>
        <a href="#layouts" class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]">Layouts</a>
        <a href="#plugins" class="block px-4 py-2 text-[#333133] text-base font-normal hover:text-[#BED173] hover:bg-[#FAF5F0]">Plugins</a>
      </div>
    </div>
  {/if}
</header>

<!-- Scroll to top button -->
<button class="fixed bottom-4 right-4 bg-[#527359] text-white p-2 rounded-full hover:bg-[#333133] transition-colors duration-300">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
  </svg>
</button>