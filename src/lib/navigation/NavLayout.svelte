<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from './navBar/NavBar.svelte';
	import { appState } from '$lib/utils/appState';
	import Footer from './Footer.svelte';

	onMount(() => {
		appState.updateScreenSize();
	});
</script>

<svelte:window on:resize={appState.updateScreenSize} />

<div
	class="antialiased text-base-content w-full mx-auto px-4 lg:px-12 xl:px-24 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-[100rem]"
>
	<div class="w-full h-5" />

	<div
		class="fixed w-full z-40 left-0 top-0 h-[5.25rem] md:h-[7.5rem] bg-base-100 shadow-md shadow-base-100 opacity-90"
	/>

	<NavBar>
		{#if $appState.screenSize !== 'Large'}
			<!-- Small screen-->
			<slot name="sidebar" />
		{/if}
	</NavBar>

	<main class="relative h-full mt-8 md:mt-10 ">
		<!--Small screen-->
		{#if $appState.screenSize !== 'Large'}
			<slot name="content" />
			<Footer />
		{:else}
			<!--Large screen-->
			<div class="flex justify-center w-full h-full lg:justify-start ">
				<div class="{$appState.screenSize === 'Large' ? 'block' : 'hidden'}  flex-none" />
				<div class="flex flex-col items-center overflow-x-hidden">
					<div class="z-10 w-full ">
						<slot name="content" />
					</div>
					<div class="z-10 self-start w-full ">
						<Footer />
					</div>
				</div>
			</div>
		{/if}
	</main>
</div>
