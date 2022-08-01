<script>
	import DiscordLink from '../actions/DiscordLink.svelte';
	import GithubLink from '$lib/actions/GithubLink.svelte';
</script>

<footer class="bg-base-100 text-base-content body-font">
	<div class="container flex flex-col items-center px-5 py-8 mx-auto mt-20 sm:flex-row">
		<a
			href="/"
			class="flex items-center justify-center font-medium text-white title-font md:justify-start"
		>
			<img
				alt="Logo Cornucopia"
				aria-hidden="true"
				class=" w-10 h-10 opacity-60 hover:animate-[spin_0.5s_ease_1] "
				src="white_logo.svg"
			/>
			<span class="px-4 text-xl font-light">Cornucopia</span>
		</a>
		<p
			class="tracking-tighter sm:tracking-normal mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-700 sm:py-2 sm:mt-0"
		>
			© 2022 cornucopia-rs contributors —
			<a
				href="https://github.com/cornucopia-rs/cornucopia"
				class="ml-1 text-gray-500"
				target="_blank"
				rel="noopener noreferrer">@cornucopia-rs</a
			>
		</p>
		<span
			class="inline-flex justify-center mt-4 space-x-8 md:space-x-0  opacity-50 sm:ml-auto sm:mt-0 sm:justify-start"
		>
			<GithubLink iconSize="h-8 w-8" textClass="hidden" />
			<DiscordLink iconSize="h-8 w-8" textClass="hidden" />
		</span>
	</div>
</footer>
