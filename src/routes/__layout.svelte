<svelte:head>
	<title>SvelteKit Endpoints</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: sans-serif;
		color: hsl(0 0% 98%);
		background-color: hsl(220 10% 10%);
	}

	:global(h1) {
		padding-bottom: 1rem;
	}

	:global(a) {
		color: inherit;
	}

	:global(img) {
		display: block;
	}

	main {
		max-width: 600px;
		margin: 0 auto;
		margin-top: 4rem;
	}
</style>
