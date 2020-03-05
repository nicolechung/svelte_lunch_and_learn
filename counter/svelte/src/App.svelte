<script>
  let count = 0;
  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }

  function reset() {
    count = 0;
  }
</script>

<style>
  main {
    padding: 1em;
    max-width: 240px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Count {count}</h1>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
  <button on:click={reset}>reset</button>
</main>
