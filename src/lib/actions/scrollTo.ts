export function scrollTo(node: HTMLElement) {
  const id = node.id;
  
  if (id) {
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Check if the URL contains the ID on page load
    if (window.location.hash === `#${id}`) {
      setTimeout(scrollToElement, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToElement);

    return {
      destroy() {
        window.removeEventListener('hashchange', scrollToElement);
      }
    };
  }
}