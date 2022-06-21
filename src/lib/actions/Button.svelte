<script lang="ts">
	import '/static/button_animation.css';
	export let componentClass = '';

	export let handleClick = () => {};
</script>

<button on:click={handleClick} class="{componentClass} flex items-center justify-center">
	<slot>Empty button</slot>
</button>
