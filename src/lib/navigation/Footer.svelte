<script>
	import DiscordLink from './navBar/DiscordLink.svelte';
	import GithubLink from './navBar/GithubLink.svelte';
</script>

<footer class="pb-6 sm:pb-0 body-font mt-20 border-t border-zinc-600">
	<div class="container sm:py-6 mx-auto flex items-center sm:flex-row flex-col">
		<p class="text-sm py-2 text-zinc-400">
			© 2022 — Cornucopia-rs contributor
			<a
				href="https://github.com/cornucopia-rs/cornucopia"
				class="text-zinc-500 whitespace-nowrap sm:ml-1"
				target="_blank"
				rel="noopener noreferrer">@Cornucopia-rs</a
			>
		</p>
		<div
			class="space-x-6 md:space-x-0 inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
		>
			<DiscordLink
				iconSize="h-8 w-8 text-zinc-400 hover:text-neutral-focus sm:hover:text-base-100 sm:bg-zinc-400"
				textClass="hidden"
			/>
			<GithubLink iconSize="h-8 w-8 text-zinc-400 hover:text-neutral" textClass="hidden" />
		</div>
	</div>
</footer>
