<script lang="ts">
  interface IsState {
    id: string;
  }

  export let params: IsState = { id: '' };
</script>

<div class="details text-center">{params.id}</div>
