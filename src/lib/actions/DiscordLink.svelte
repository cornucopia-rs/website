<script>
	import Discord from '$lib/icons/companies/Discord.svelte';
	import { discordServer } from '$lib/utils/externalLinks';
	import { appState } from '$lib/utils/appState';

	export let footerClass = '';
</script>

<a
	class="flex items-center space-x-6 tracking-wider px-1 hover:text-secondary text-xl md:text-2xl font-normal normal-case "
	href={discordServer}
>
	<Discord
		class=" opacity-80 hover:text-black 6 h-6 w-6 sm:w-8 sm:h-8 text-black bg-white hover:scale-105 rounded-full p-1"
	/>
	{#if $appState.screenSize === 'Small'}
		<h1 class={footerClass}>Go to Discord</h1>
	{/if}
</a>
