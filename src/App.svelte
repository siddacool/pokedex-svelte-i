<script lang="ts">
  import Router, { link } from 'svelte-spa-router';
  import routes from 'routes';
  import TheHeader from 'components/TheHeader.svelte';
</script>

<div class="p-4 pt-16 h-screen overflow-y-auto bg-gray-100">
  <TheHeader />
  <main>
    <Router {routes} />
  </main>
</div>

<style>
</style>
