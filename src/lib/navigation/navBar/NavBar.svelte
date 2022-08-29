<script lang="ts">
	import Logo from '$lib/navigation/Logo.svelte';
	import Hamburger from '$lib/icons/actions/Hamburger.svelte';
	import { appState } from '$lib/utils/appState';
	import Button from '$lib/actions/Button.svelte';
	import CloseIcon from '$lib/icons/actions/CloseIcon.svelte';
	import Book from './Book.svelte';

	import DiscordLink from '../../actions/DiscordLink.svelte';
	import GithubLink from '$lib/actions/GithubLink.svelte';

	function sidebarState() {
		$appState.sidebarOpen = !$appState.sidebarOpen;
	}
</script>

<header class="sticky z-50 top-0  w-full flex-none items-center ">
	<div class="py-4 md:py-8 ">
		<div class="relative flex items-center">
			<!-- sm screens -->
			{#if $appState.screenSize === 'Small'}
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
				<div class="w-full absolute flex justify-center">
					<Logo />
				</div>
			{:else}
				<!-- md+ screen-->
				<div class="w-auto relative">
					<Logo />
				</div>
				<div class="flex ml-auto items-center md:space-x-8">
					<Book />

					<GithubLink />
					<DiscordLink />
				</div>
			{/if}
		</div>
	</div>

	{#if $appState.screenSize === 'Small'}
		{#if $appState.sidebarOpen}
			<div class="absolute pt-32 top-0 h-screen w-full -z-10 flex bg-base-100 py-14 px-4">
				<div class="w-full overflow-y-auto">
					<slot />
				</div>
			</div>
		{/if}
	{/if}
</header>
