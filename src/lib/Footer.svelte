<script lang="ts">
	import { base } from '$app/paths';
	import { scrollTo } from '$lib/actions/scrollTo';

	const currentYear = new Date().getFullYear();

	interface $$Props {
		id: string;
	}

	export let id: $$Props['id'];
</script>

<footer class="bg-[#08263f] pt-24 pb-8 text-white" {id} use:scrollTo>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Logo Area -->
			<div class="flex-shrink-0">
				<a href="https://aavyamediclinic.com/">
					<img src="{base}/images/logo.jpeg" alt="The Practitioner" class="w-32 mb-6" /></a
				>
				<ul class="space-y-2">
					<li><p class="text-gray-400 font-radley">Dr. Avirup Majumdar</p></li>
					<li><p class="text-gray-400 font-radley">MBBS, MD( General Medicine)(KGMU Lucknow)</p></li>
					<li><p class="text-gray-400 font-radley">CCEBDM (Diabetology)</p></li>
					<li><p class="text-gray-400 font-radley">Reg No- 72871 (West Bengal Medical Council)</p></li>
				</ul>
			</div>

			<div>
				<h3 class="text-2xl mb-8 font-radley text-[#bed173]">Timings</h3>
				<ul class="space-y-2">
					<li><p class="text-white">Morning: 9:00 AM to 10:00 AM</p></li>
					<li><p class="text-white">Evening : 7:30 PM to 9:00 PM</p></li>
					<li><p class="text-white">Monday to Saturday</p></li>
					<li><p class="text-white">Closed on Sunday and National holidays</p></li>
				</ul>
			</div>

			<div>
				<h3 class="text-2xl mb-8 font-radley text-[#bed173]">Contact</h3>
				<ul class="space-y-2">
					<li><p class="text-white">Mob : +91 70478 12650</p></li>
					<li>
						<p class="text-white">
							Email : <a href="mailto:aavyamediclinic@gmail.com">aavyamediclinic@gmail.com</a>
						</p>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-2xl mb-8 font-radley text-[#bed173]">Address</h3>
				<p class="text-white mb-4">
					Ward no 27, Bidyapith Road, By Lane, Ward 27, Deshbandhu Para, Siliguri, West Bengal. <br
					/>
					Pin - 734004
				</p>
				<div class="w-full h-64">
					<iframe
						title="Aavya Mediclinic Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28639.91489041142!2d88.39077352148003!3d26.714885841526783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e445ea4e82e1ab%3A0x66887e17277589c4!2sDr.%20Avirup%20Majumdar%20(AAVYA%20MEDICLINIC)!5e0!3m2!1sen!2sin!4v1695911789244!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style="border:0;"
						allow="fullscreen"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>

		<div class="mt-16 pt-8 flex flex-wrap justify-between items-center">
			<p class="font-normal text-lg text-[#97a4ae]">
				© {currentYear} Aavya Mediclinic. All rights reserved.
			</p>
		</div>
	</div>
</footer>