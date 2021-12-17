<script lang="ts">
	import Nested from "./Nested.svelte";
	export let name: string;
	export let text: string;
	let hoge = 'hoge';
	let count = 0;
	let loggedIn = false;

	function handleClick() {
		count += 1;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<h1>{text}</h1>
	<p>{hoge}</p>
	<Nested />
	<button on:click={handleClick}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>

	{#if loggedIn}
		<button on:click="{() => loggedIn = false}">Log Out</button>
	{:else}
		<button on:click="{() => loggedIn = true}">Log In</button>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>