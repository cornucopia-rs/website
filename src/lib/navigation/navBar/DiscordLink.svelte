<script>
	import Discord from '$lib/icons/companies/Discord.svelte';
	import NavTextButton from './NavTextButton.svelte';

	export let textClass = 'sm:hidden';
	export let iconSize = 'h-6 w-6 sm:w-10 sm:h-10 ';
</script>

<NavTextButton href="https://discord.gg/RkQpGVQc">
	<Discord
		class="{iconSize} sm:text-base-100 sm:bg-zinc-300 sm:hover:bg-neutral-focus sm:rounded-full sm:p-1"
	/>
	<h1 class={textClass}>Discord</h1>
</NavTextButton>
