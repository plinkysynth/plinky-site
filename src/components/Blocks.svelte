<style>
  .Blocks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 4rem 0;
    border: 1px solid var(--color-border);
    border-bottom: 0;
    padding: 0;
    border-radius: 6px;
  }
  .Blocks :global(.Block) {
    border-right: 1px solid var(--color-border);
    padding: 4rem;
    border-bottom: 1px solid var(--color-border);
  }
  .Blocks :global(.Block:nth-child(4)) {
    border-right: 0;
  }
  .Blocks :global(.Block p) {
    margin: 0 0 3rem 0;
  }
  .Blocks :global(.Block h3) {
    margin: 0 0 2rem 0;
  }
  .Blocks :global(a.button, button) {
    text-align: center;
  }
  @media(max-width: 1024px) {
    .Blocks {
      grid-template-columns: 1fr 1fr;
    }
    .Blocks :global(.Block:nth-child(2)) {
      border-right: 0;
    }
  }
  @media(max-width: 640px) {
    .Blocks {
      grid-template-columns: 1fr;
    }
    .Blocks :global(.Block) {
      border-right: 0;
    }
  }
</style>

<div class="Blocks">
  <slot></slot>
</div>