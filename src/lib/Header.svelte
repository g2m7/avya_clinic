<script>
  import { base } from '$app/paths';
  let isOffcanvasOpen = false;
  
  function toggleOffcanvas() {
    isOffcanvasOpen = !isOffcanvasOpen;
  }
</script>

<header class="absolute w-full z-50 bg-transparent">
  <nav class="max-w-full mx-8 my-4 px-8 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo Area -->
      <div class="flex-shrink-0">
        <img src="https://the-practitioner.cmsmasters.net/wp-content/uploads/2022/05/logo-landing-2.svg" alt="The Practitioner" class="w-full">
      </div>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a href="#demos" class="nav-link">Demos</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#posttypes" class="nav-link">Post Types</a>
        <a href="#layouts" class="nav-link">Layouts</a>
        <a href="#plugins" class="nav-link">Plugins</a>
      </div>
      
      <!-- CTA Button -->
      <div class="hidden md:block">
        <a href="https://1.envato.market/cmsmasters-the-practitioner" target="_blank" 
           class="cta-button">
          Purchase for $69
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button on:click={toggleOffcanvas} type="button" class="mobile-menu-button" aria-controls="mobile-menu" aria-expanded="false">
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
        <a href="#demos" class="mobile-nav-link">Demos</a>
        <a href="#features" class="mobile-nav-link">Features</a>
        <a href="#posttypes" class="mobile-nav-link">Post Types</a>
        <a href="#layouts" class="mobile-nav-link">Layouts</a>
        <a href="#plugins" class="mobile-nav-link">Plugins</a>
      </div>
    </div>
  {/if}
</header>

<!-- Scroll to top button -->
<button class="scroll-to-top-button">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
  </svg>
</button>

<style>
  .nav-link {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    text-transform: none;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #BED173;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    padding: 17px 45px;
    background-color: #BED173;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    text-transform: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #527359;
    color: #ffffff;
  }

  .mobile-menu-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.375rem;
    color: #ffffff;
  }

  .mobile-menu-button:hover {
    color: #BED173;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .mobile-nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #333133;
    font-size: 16px;
    font-weight: 400;
    text-transform: none;
  }

  .mobile-nav-link:hover {
    color: #BED173;
    background-color: #FAF5F0;
  }

  .scroll-to-top-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background-color: #527359;
    color: #ffffff;
    padding: 0.5rem;
    border-radius: 9999px;
    transition: background-color 0.3s ease;
  }

  .scroll-to-top-button:hover {
    background-color: #333133;
  }
</style>