import type Lenis from 'lenis';

export function scrollTo(node: HTMLAnchorElement, { offset = 0 } = {}) {
	const handleClick = (e: MouseEvent) => {
		const href = node.getAttribute('href');
		if (!href || !href.startsWith('#')) return;

		const targetId = href.substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			e.preventDefault();

			// Try to find the Lenis instance attached to the window
			// @ts-ignore
			const lenis = window.lenis as Lenis | undefined;

			if (lenis) {
				lenis.scrollTo(targetElement, {
					offset: -offset,
					duration: 2.0, // Slower duration for "ultra smooth" feel
					easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Exponential ease out
				});
			} else {
				// Fallback to native smooth scroll
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.scrollY - offset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		}
	};

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}