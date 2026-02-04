<script lang="ts">
	import { base } from '$app/paths';
	import { scrollTo } from '$lib/actions/scrollTo';

	const currentYear = new Date().getFullYear();

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];
</script>

<footer
	class="bg-[#08263f] text-white pt-16 md:pt-24 pb-12 md:pb-8 rounded-t-[2rem] md:rounded-t-[3rem] -mt-10 relative z-10"
	{id}
	use:scrollTo
>
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
			<!-- Brand & Doctor Info (Span 4) -->
			<div class="lg:col-span-4">
				<a href="https://aavyamediclinic.com/" class="block mb-8">
					<img src="{base}/images/logo.jpeg" alt="Aavya Mediclinic" class="w-40 rounded-sm" />
				</a>
				<h3 class="text-3xl font-light mb-4 text-[#bed173]">Dr. Avirup Majumdar</h3>
				<ul class="space-y-2 text-gray-400 font-light">
					<li>MBBS, MD (General Medicine) - KGMU Lucknow</li>
					<li>CCEBDM (Diabetology)</li>
					<li>Reg No- 72871 (West Bengal Medical Council)</li>
				</ul>
			</div>

			<!-- Timings (Span 3) -->
			<div class="lg:col-span-3">
				<h3 class="text-xl mb-6 font-medium text-[#bed173] uppercase tracking-wider">Timings</h3>
				<ul class="space-y-3 text-gray-300 font-light">
					<li class="flex justify-between border-b border-gray-700 pb-2">
						<span>Morning</span>
						<span>9:00 AM - 10:00 AM</span>
					</li>
					<li class="flex justify-between border-b border-gray-700 pb-2">
						<span>Evening</span>
						<span>7:30 PM - 9:00 PM</span>
					</li>
					<li class="pt-2">Monday to Saturday</li>
					<li class="text-sm text-gray-500">Closed on Sunday & National Holidays</li>
				</ul>
			</div>

			<!-- Contact & Map (Span 5) -->
			<div class="lg:col-span-5 flex flex-col gap-8">
				<!-- Contact Info -->
				<div>
					<h3 class="text-xl mb-6 font-medium text-[#bed173] uppercase tracking-wider">
						Contact Us
					</h3>
					<div class="flex flex-col gap-2 text-lg font-light">
						<a href="tel:+917047812650" class="hover:text-[#bed173] transition-colors"
							>+91 70478 12650</a
						>
						<a
							href="mailto:aavyamediclinic@gmail.com"
							class="hover:text-[#bed173] transition-colors">aavyamediclinic@gmail.com</a
						>
					</div>
					<p class="mt-4 text-gray-400 leading-relaxed">
						Ward no 27, Bidyapith Road, By Lane, Ward 27, Deshbandhu Para, Siliguri, West Bengal.
						Pin - 734004
					</p>
				</div>

				<!-- Map -->
				<div class="w-full h-48 rounded-sm overflow-hidden shadow-inner bg-gray-800">
					<iframe
						title="Aavya Mediclinic Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28639.91489041142!2d88.39077352148003!3d26.714885841526783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e445ea4e82e1ab%3A0x66887e17277589c4!2sDr.%20Avirup%20Majumdar%20(AAVYA%20MEDICLINIC)!5e0!3m2!1sen!2sin!4v1695911789244!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style="border:0;"
						allow="fullscreen"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class=""
					></iframe>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="mt-12 md:mt-20 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center text-gray-500 text-sm gap-4 md:gap-0 text-center md:text-left"
		>
			<p>© {currentYear} Aavya Mediclinic. All rights reserved.</p>
			<div class="flex gap-6">
				<a href="/" class="hover:text-white transition-colors">Privacy Policy</a>
				<a href="/" class="hover:text-white transition-colors">Terms of Service</a>
			</div>
		</div>

		<!-- Big Text Background -->
		<div class="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
			<h1
				class="text-[12vw] font-bold text-white whitespace-nowrap text-center leading-none select-none translate-y-[10%]"
			>
				AAVYA CLINIC
			</h1>
		</div>
	</div>
</footer>
