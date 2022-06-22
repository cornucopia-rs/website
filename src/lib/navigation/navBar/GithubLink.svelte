<script>
	import Github from '$lib/icons/companies/Github.svelte';
	import NavTextButton from './NavTextButton.svelte';

	export let textClass = 'sm:hidden';
	export let iconSize = 'h-6 w-6 sm:w-10 sm:h-10 ';
</script>

<NavTextButton href="https://github.com/cornucopia-rs/cornucopia">
	<Github class="{iconSize} sm:hover:text-neutral-focus sm:rounded-full" />
	<h1 class={textClass}>Github</h1>
</NavTextButton>
