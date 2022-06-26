<script lang="ts">
	import ArrowForward from '$lib/icons/actions/ArrowForward.svelte';
	import Link from '$lib/tags/Link.svelte';

	export let href: string;
	export let button = 'Learn More';
</script>

<Link {href}>
	<div class=" flex items-center">
		{button}
		<ArrowForward class="h-4 w-4 ml-2" />
	</div>
</Link>
