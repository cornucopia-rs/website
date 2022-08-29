<script>
	import Github from '$lib/icons/companies/Github.svelte';

	import { appState } from '$lib/utils/appState';
	import { github } from '$lib/utils/externalLinks';
	export let footerClass = 'flex';
</script>

<a
	class="flex items-center space-x-6 tracking-wider px-1 hover:text-secondary text-xl md:text-2xl font-normal normal-case "
	href={github}
>
	<Github class=" text-white opacity-80  h-6 w-6 sm:w-8 sm:h-8 hover:text-white hover:scale-105 " />
	{#if $appState.screenSize === 'Small'}
		<h1 class={footerClass}>Go to Github</h1>
	{/if}
</a>
