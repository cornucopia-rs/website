<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/actions/Button.svelte';

	import '/static/button_animation.css';
	export let componentClass = '';

	export let href: string;
	function handleClick() {
		goto(href);
	}
</script>

<Button {handleClick} {componentClass}><slot /></Button>
