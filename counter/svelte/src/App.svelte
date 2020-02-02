<script>
 let count = 0;
 function increment() {
	 count += 1
 }

 function decrement() {
	 count -= 0
 }

 function reset() {
	 count = 0
 }
</script>

<main>
	<h1>Count {count}</h1>
	<button on:click={increment}>+</button>
	<button on:click={decrement}>-</button>
	<button on:click={reset}>reset</button>
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