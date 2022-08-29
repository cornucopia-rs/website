<script>
	import Discord from '$lib/icons/companies/Discord.svelte';
	import { discordServer } from '$lib/utils/externalLinks';
	import { appState } from '$lib/utils/appState';

	export let iconSize = 'h-6 w-6 sm:w-8 sm:h-8 ';
</script>

<a
	class="flex items-center space-x-6 tracking-widermd:px-0 lg:px-4 text-xl md:text-2xl font-normal normal-case "
	href={discordServer}
>
	<Discord
		class="{iconSize} opacity-80 hover:text-black text-black bg-white hover:scale-105 rounded-full p-1"
	/>
	{#if $appState.screenSize === 'Small'}
		<h1>Go to Github</h1>
	{/if}
</a>
