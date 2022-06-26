<script lang="ts">
	import Feature from '$lib/layout/Feature.svelte';
	import Autorenew from '$lib/icons/actions/Autorenew.svelte';
	import DataArray from '$lib/icons/DataArray.svelte';
	import ElectricBolt from '$lib/icons/ElectricBolt.svelte';
	import Person from '$lib/icons/Person.svelte';
	import PrecisionManifacturing from '$lib/icons/PrecisionManifacturing.svelte';
	import Storage from '$lib/icons/Storage.svelte';
	import Timer from '$lib/icons/Timer.svelte';
	import Tune from '$lib/icons/Tune.svelte';
	import NavLayout from '$lib/navigation/NavLayout.svelte';
	import LinkButton from '$lib/actions/LinkButton.svelte';
	import Ul from '$lib/tags/Ul.svelte';
	import Li from '$lib/tags/Li.svelte';
	import Sidebar from '$lib/navigation/Sidebar.svelte';
	import { discordServer } from '$lib/utils/externalLinks';

	let classButton = 'py-4 w-full rounded-full flex-1 ';
</script>

<svelte:head>
	<title>About Cornucopia</title>
</svelte:head>

<!-- 2 strips in the bg -->
<div
	class="absolute w-full overflow-hidden top-[35rem] md:top-[46rem] xl:top-[47rem] 2xl:top-[40rem]"
>
	<div class=" w-full relative h-[150rem]">
		<div
			class="absolute top-0 right-0 w-[90rem] lg:w-[176rem] h-10 lg:h-20 bg-gradient-to-r via-primary from-transparent opacity-100 to-neutral origin-top-right -rotate-45 "
		/>
		<div
			class="absolute top-20 lg:top-[12rem] right-0 w-[90rem] lg:w-[176rem] h-4 lg:h-12 bg-gradient-to-r via-primary from-transparent opacity-100 to-neutral origin-top-right -rotate-45 "
		/>
	</div>
</div>

<NavLayout>
	<Sidebar slot="sidebar" />
	<div slot="content">
		<section
			class=" mt-24 md:mt-[16rem] w-full flex flex-col items-center sm:items-start text-center sm:text-left"
		>
			<div
				class="space-y-1 md:space-y-2 text-xl italic uppercase sm:normal-case sm:text-4xl md:text-5xl lg:text-7xl lg:space-y-6 text-neutral"
			>
				<h1 class="font-semibold ">
					Generate <b
						class="font-semibold underline underline-offset-2 lg:underline-offset-4 text-accent"
						>type checked</b
					> Rust
				</h1>
				<h2 class="font-light tracking-tight md:tracking-wide">from your PostgreSQL</h2>
			</div>
			<div class="w-full max-w-xs sm:max-w-xl xl:max-w-2xl ">
				<h3 class="w-full py-4 md:py-8 tracking-wide md:text-xl ">
					Cornucopia is a pure Rust CLI utility resting on postgres designed to facilitate
					PostgreSQL workflows in Rust.
				</h3>
			</div>
		</section>

		<!--Features-->
		<section
			id="features"
			class=" mx-auto flex flex-col items-center py-[7rem] my-[3rem] md:my-[10rem] lg:my-[11rem]"
		>
			<h1
				class="mb-6 text-4xl font-semibold tracking-widest sm:mb-10 lg:mb-10 text-zinc-100 sm:text-5xl lg:text-7xl"
			>
				Features
			</h1>
			<div
				class="w-full py-4 bg-black backdrop-blur-md supports-backdrop-blur:bg-transparent bg-opacity-60 border-y-4 lg:py-10 border-secondary-focus border-opacity-60"
			>
				<div class="flex flex-wrap ">
					<Feature
						title="SQL-first"
						content=" Your database schema is the source of truth. No ORM."
					>
						<Storage />
					</Feature>
					<Feature
						title="Custom user types"
						content="Support custom user types like composites, enums, domains and one-dimensional array"
					>
						<Person />
					</Feature>

					<Feature
						title="Asynchronous streams"
						content="Strongly-typed async row streams suitable for web servers."
					>
						<ElectricBolt />
					</Feature>
					<Feature
						title="Nullable return columns"
						content=" Allow the user to have nullable return colums."
					>
						<DataArray />
					</Feature>
					<Feature
						title="Self managed"
						content="Build your queries against your own live database, or let Cornucopia manage that for you."
					>
						<PrecisionManifacturing />
					</Feature>
					<Feature
						title="Flexible connexion types"
						content="Use, mix and match the connection types that you want: pooled or not, transaction or not."
					>
						<Tune />
					</Feature>
					<Feature
						title="Compatible with build.rs"
						content="Rebuild Rust queries whenever SQL files change."
					>
						<Autorenew />
					</Feature>
					<Feature title="No macros" content=" No macros, respects your compile times.">
						<Timer />
					</Feature>
				</div>

				<div class="flex flex-col justify-center py-8 space-y-6 xl:py-4">
					<LinkButton
						href="/book/index.html"
						componentClass=" border border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-base-100  mx-auto py-3 w-full max-w-sm rounded-full"
						>See the book</LinkButton
					>
				</div>
			</div>
		</section>

		<!-- Hero-->
		<section class="text-zinc-400 body-font ">
			<div class="container flex justify-end mb-[14rem] sm:mb-[20rem] md:mb-[32rem] lg:mb-[40rem]">
				<div class="flex flex-col items-center lg:items-start md:text-left">
					<h1
						class="mb-4 text-3xl font-medium text-center title-font sm:text-left sm:text-4xl text-zinc-200"
					>
						Designed to facilitate PostgreSQL
						<br class="hidden lg:inline-block " />for your project in Rust
					</h1>
					<div class="pb-16">
						<Ul>
							<Li
								>Cornucopia aims to get out of your way, <b
									>transpiling your PostgreSQL queries to Rust on demand.</b
								></Li
							>
							<Li
								>Each query is prepared against your schema, ensuring that the query statements are
								valid SQL.</Li
							>
							<Li
								>These prepared statements are then be used to generate properly type-checked Rust
								code for this query.</Li
							>
						</Ul>
					</div>
					<div class="grid grid-cols-2 gap-4 sm:w-full sm:flex sm:flex-row sm:items-center">
						<!-- Downloads -->
						<a href="https://crates.io/crates/cornucopia">
							<img
								class="grid-col-1 "
								alt="Crates.io"
								src="https://img.shields.io/crates/d/cornucopia?style=for-the-badge"
							/>
						</a>

						<!-- Stars -->
						<a href="https://github.com/cornucopia-rs/cornucopia/stargazers">
							<img
								class="grid-col-1"
								alt="GitHub Repo stars"
								src="https://img.shields.io/github/stars/cornucopia-rs/cornucopia?color=%23D97706&logo=github&style=for-the-badge"
							/>
						</a>

						<!-- Open issues-->
						<a href="https://github.com/cornucopia-rs/cornucopia/issues">
							<img
								class="grid-col-1"
								alt="GitHub issues"
								src="https://img.shields.io/github/issues-raw/cornucopia-rs/cornucopia?logo=github&style=for-the-badge"
							/>
						</a>

						<!-- License -->
						<a href="https://github.com/cornucopia-rs/cornucopia#License">
							<img
								class="grid-col-1"
								alt="Crates.io"
								src="https://img.shields.io/crates/l/cornucopia?style=for-the-badge"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!--Contribute-->
		<section
			class="lg:mb-10 md:ml-5 text-zinc-200 flex flex-col items-center md:items-start font-semibold text-5xl sm:text-7xl lg:text-8xl overflow-hidden h-[32rem] md:h-[30rem]"
		>
			<h1
				class="mb-12 md:mb-16 font-extrabold leading-snug tracking-tighter text-center mt-52 sm:mt-0 md:text-left sm:tracking-wide"
			>
				Join the team!
			</h1>

			<div
				class="flex-col self-center w-full max-w-sm space-y-10 sm:ml-1 md:self-start sm:max-w-md"
			>
				<!-- contributing section-->
				<LinkButton
					href="/book/contributing.html"
					componentClass="{classButton} flex-1 rounded-full bg-secondary text-secondary-content hover:bg-secondary-focus normal-case text-xl"
				>
					How to contribute
				</LinkButton>

				<!-- Discord link-->
				<LinkButton
					href={discordServer}
					componentClass="{classButton} border border-secondary text-secondary hover:bg-secondary-focus hover:border-secondary-focus hover:text-secondary-content normal-case text-xl"
				>
					Join us on Discord!
				</LinkButton>
			</div>

			<div
				class="absolute sm:bottom-36 lg:bottom-52 sm:pt-32 -z-50 right-0 h-[34rem]  sm:h-[58rem] opacity-5"
			>
				<img class="w-full h-full" alt="Minimalist version of the logo" src="white_logo.svg" />
			</div>
		</section>
	</div>
</NavLayout>
