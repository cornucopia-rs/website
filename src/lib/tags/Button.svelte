<script>
	import Button from '$lib/actions/Button.svelte';
</script>

<div class="">
	<Button
		componentClass="rounded-full py-2 w-full max-w-xs bg-primary text-primary-content hover:bg-primary-focus my-6  mx-1"
	>
		<slot>empty button</slot>
	</Button>
</div>
