<script lang="ts">
	import LinkButton from '$lib/actions/LinkButton.svelte';
</script>

<div class="flex-none ">
	<LinkButton
		href="/"
		componentClass=" space-x-1 sm:space-x-4 lg:mr-6 flex items-center tracking-tight sm:tracking-widest"
	>
		<img
			alt="Logo Cornucopia"
			aria-hidden="true"
			class=" w-12 h-12 md:w-14 md:h-14 hover:animate-[spin_0.5s_ease_1] "
			src="/LogoCornucopia.svg"
		/>

		<div class=" text-4xl font-light sm:hidden lg:block">Cornucopia</div>
	</LinkButton>
</div>
