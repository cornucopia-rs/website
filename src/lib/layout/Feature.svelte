<script lang="ts">
	import Person from '$lib/icons/Person.svelte';
	import H3 from '$lib/tags/H3.svelte';

	export let title = 'Shooting';
	export let content = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
</script>

<div
	class="flex flex-col px-6 py-8 normal-case text-base-content xl:px-10 xl:py-6  xl:w-1/3 md:w-1/2 xl:flex-row text-start "
>
	<div
		class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mt-2 mb-5 rounded-full bg-primary text-neutral xl:mb-0 xl:mr-6"
	>
		<div class="flex items-center justify-center w-10 h-10 text-2xl text-center">
			<slot>
				<Person />
			</slot>
		</div>
	</div>
	<div class="flex-grow">
		<H3>{title}</H3>
		<p>
			{content}
		</p>
	</div>
</div>
