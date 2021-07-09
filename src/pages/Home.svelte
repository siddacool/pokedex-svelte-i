<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import { usePokemon } from 'store/pokemon';

  onMount(() => {
    usePokemon.fetch();
  });
</script>

<div class="home">
  <a href="/123" use:link>Click me</a>
  {$usePokemon?.data[0]?.name}
</div>

<style lang="scss" scoped>
  .home {
    font-size: 18px;
    display: flex;
    flex-direction: column;

    @media (min-width: 900px) {
      align-items: center;
    }
  }
</style>
