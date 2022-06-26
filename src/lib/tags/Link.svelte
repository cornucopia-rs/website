<script lang="ts">
	export let href: string;
</script>

<a
	class="text-primary underline underline-offset-2 hover:text-primary-focus whitespace-nowrap link-hover"
	{href}
>
	<slot>Empty link</slot>
</a>
