<script lang="ts">
	import LinkButton from '$lib/actions/LinkButton.svelte';
</script>

<div class="flex-none ">
	<LinkButton href="/" componentClass=" space-x-4 lg:mr-6 flex items-center">
		<img
			alt="Logo Cornucopia"
			aria-hidden="true"
			class=" w-12 h-12 lg:w-14 lg:h-14 hover:animate-[spin_0.5s_ease_1] "
			src="favicon.svg"
		/>

		<div class=" tracking- text-4xl font-light">Cornucopia</div>
	</LinkButton>
</div>
