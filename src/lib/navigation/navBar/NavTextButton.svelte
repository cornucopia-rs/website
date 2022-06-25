<script lang="ts">
	import LinkButton from '$lib/actions/LinkButton.svelte';

	export let href: string;
</script>

<LinkButton
	componentClass=" tracking-wider space-x-4 text-zinc-100 hover:text-neutral md:px-4 text-xl md:text-2xl font-normal normal-case "
	{href}
	><slot />
</LinkButton>
