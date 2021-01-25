<script lang="ts">
  export let href;
  export let label;
</script>

<style>
  .LinkBlock {
    display: grid;
    grid-template-rows: repeat(1fr);
  }
  .ButtonArea {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>

<div class="LinkBlock Block">
  <div class="LinkTextArea">
    <slot></slot>
  </div>
  <div class="ButtonArea">
    <a {href} class="button">{label}</a>
  </div>
</div>