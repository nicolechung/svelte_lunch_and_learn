<script>
  export let count;
</script>

<style>
  h1 {
    color: #424874;
  }

  .svelte-container {
    background-color: #81f5ff;
    padding: 20px;
    margin-top: 30px;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
    border: none;
    font-size: 20px;
    background-color: #ffffdd;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  strong {
    font-weight: 900;
  }
</style>

<div class="svelte-container">
  <h1>Hello from Svelte!</h1>
  <button on:click>reset</button>
  <p>
    this is a prop from React:
    <strong>{count}</strong>
  </p>
</div>
