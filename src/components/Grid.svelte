<style>
  .Grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }
  @media(max-width: 640px) {
    .Grid {
      grid-template-columns: 1fr;
    }    
  }
</style>

<div class="Grid">
  <slot></slot>
</div>