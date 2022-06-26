<script lang="ts">
	import LearnMore from '$lib/actions/LearnMore.svelte';

	export let href: string;

	export let catergory = 'Undefined Category';
	export let date = 'Undefined Date';
	export let title = 'Undefined Title';
	export let content =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos eveniet cum earum nulla repellat tempora consequuntur blanditiis tenetur sint vitae animi nam hic, ducimus beatae repudiandae. Illo, explicabo sed.';
</script>

<div class="py-8 flex flex-wrap md:flex-nowrap text-zinc-400">
	<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
		<span class="font-semibold title-font text-white">{catergory}</span>
		<span class="mt-1 text-zinc-400 text-sm">{date}</span>
	</div>
	<div class="md:flex-grow">
		<h2 class="text-2xl font-medium text-white title-font mb-2">
			{title}
		</h2>
		<p class="leading-relaxed">
			{content}
		</p>
		<div class="mt-10">
			<LearnMore {href} />
		</div>
	</div>
</div>
