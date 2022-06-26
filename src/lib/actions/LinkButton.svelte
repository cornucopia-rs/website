<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/actions/Button.svelte';
	import '/static/button_animation.css';
	import { appState } from '$lib/utils/appState';
	export let componentClass = '';

	export let href: string;
	function handleClick() {
		$appState.sidebarOpen = false;
		goto(href);
	}
</script>

<Button {handleClick} {componentClass}><slot /></Button>
