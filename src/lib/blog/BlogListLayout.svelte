<script>
	import Footer from '$lib/navigation/Footer.svelte';
	import NavLayout from '$lib/navigation/NavLayout.svelte';
	import Sidebar from '$lib/navigation/Sidebar.svelte';
</script>

<NavLayout>
	<Sidebar slot="sidebar" />
	<section slot="content" class="overflow-hidden">
		<div
			class=" space-y-6 sm:space-y-10 lg:space-y-16 py-5 md:py-12 container w-full flex flex-col items-center"
		>
			<h1
				class=" text-4xl md:text-5xl text-center tracking-wide xl:text-7xl font-light text-zinc-400 flex justify-start "
			>
				Cornucopia's Newspaper
			</h1>

			<div
				class=" bg-base-200 px-8 lg:py-10 lg:px-20 rounded-md  divide-y-2 divide-zinc-700 max-w-6xl "
			>
				<slot />
			</div>
		</div>
	</section>

	<Footer />
</NavLayout>
