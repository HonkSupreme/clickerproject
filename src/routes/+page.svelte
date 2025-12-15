<script lang="ts">
	let count = 0;
	const increment = () => (count += 1);
</script>

<svelte:head>
	<title>Clicker Project</title>
</svelte:head>

<main>
	<h1>Clicker Project</h1>
	<div class="clicker">
		<button on:click={increment}>Click me</button>
		<p>Count: {count}</p>
	</div>
</main>

<style>
	main { display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:60vh; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
	.clicker { text-align:center; }
	button { font-size:1.1rem; padding:0.5rem 0.9rem; margin-top:1rem; }
	p { margin-top:0.5rem; font-size:1.1rem; }
</style>
