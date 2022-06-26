<script lang="ts">
	import LinkButton from '$lib/actions/LinkButton.svelte';
	import Footer from '$lib/navigation/Footer.svelte';
	import ChevronL from '$lib/icons/actions/ChevronL.svelte';
	import NavLayout from '$lib/navigation/NavLayout.svelte';
	import Sidebar from '$lib/navigation/Sidebar.svelte';
	import H1 from '$lib/tags/H1.svelte';
	export let title: string;
	export let date_author: string;
</script>

<NavLayout>
	<Sidebar slot="sidebar" />
	<div slot="content" class=" w-full flex flex-col items-center">
		<div class="w-full space-x-10 py-6 ">
			<LinkButton
				componentClass="text-primary hover:text-primary-focus hover:underline hover:underline-offset "
				href="/blogList"
			>
				<ChevronL class="h-5 w-5" />
				<h1>Go back</h1>
			</LinkButton>
		</div>

		<div class="max-w-4xl">
			<H1>{title}</H1>

			<h4 class="text-zinc-500 font-normal mt-2">
				{date_author}
			</h4>

			<slot />
			<Footer />
		</div>
	</div>
</NavLayout>
