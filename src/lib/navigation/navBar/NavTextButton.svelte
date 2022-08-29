<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/actions/Button.svelte';
	import { appState } from '$lib/utils/appState';

	export let href: string;
	function handleClick() {
		$appState.sidebarOpen = false;
		goto(href);
	}
</script>

<Button
	componentClass="tracking-wider space-x-4 text-grey-200 hover:text-primary lg:px-4 text-xl lg:text-2xl font-normal normal-case "
	{handleClick}
	><slot />
</Button>
