<script lang="ts">
	import DiscordLink from '$lib/actions/DiscordLink.svelte';
	import GithubLink from '$lib/actions/GithubLink.svelte';
	import About from './navBar/About.svelte';
	import Book from './navBar/Book.svelte';
</script>

<div class="space-y-6 text-zinc-200">
	<Book />
	<About />

	<div class="flex items-center w-full h-12">
		<div class="w-full h-0.5 rounded-full bg-zinc-600" />
	</div>
	<GithubLink />
	<DiscordLink />
</div>
