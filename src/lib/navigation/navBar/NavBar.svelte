<script lang="ts">
	import Logo from '$lib/navigation/Logo.svelte';
	import Hamburger from '$lib/icons/actions/Hamburger.svelte';
	import { appState } from '$lib/utils/appState';
	import Button from '$lib/actions/Button.svelte';
	import CloseIcon from '$lib/icons/actions/CloseIcon.svelte';
	import Book from './Book.svelte';
	import About from './About.svelte';
	import Blog from './Blog.svelte';
	import DiscordLink from '../../actions/DiscordLink.svelte';
	import GithubLink from '$lib/actions/GithubLink.svelte';

	function sidebarState() {
		$appState.sidebarOpen = !$appState.sidebarOpen;
	}
</script>

<header class="sticky z-50 top-0  w-full flex-none items-center ">
	<div class="py-4 md:py-8 ">
		<div class="relative flex items-center">
			{#if $appState.screenSize !== 'Large'}
				<Button
					handleClick={sidebarState}
					componentClass=" text-zinc-300 z-50 mr-4 p-3 over:text-white border-none"
				>
					<div class="w-full h-full">
						{#if $appState.sidebarOpen}
							<CloseIcon class="h-7 w-7" />
						{:else}
							<Hamburger class="h-7 w-7" />
						{/if}
					</div>
				</Button>
			{/if}
			<div class="w-full sm:w-auto absolute sm:relative sm:block flex justify-center">
				<Logo />
			</div>

			<div class=" hidden sm:flex  ml-auto items-center space-x-10 md:space-x-4">
				<Book />
				<About />
				<Blog />

				<GithubLink />
				<DiscordLink />
			</div>
		</div>
	</div>

	{#if $appState.sidebarOpen}
		<div
			class="absolute sm:hidden mt-[5.2rem] md:mt-[5.5rem] top-0 h-screen w-full z-10 flex bg-base-100 py-14 px-4"
		>
			<div class="w-full overflow-y-auto">
				<slot />
			</div>
		</div>
	{/if}
</header>
