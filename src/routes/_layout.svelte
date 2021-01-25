<script lang="ts">
  import Header from '../components/Header.svelte';
  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100%;
  }

  main {
    flex-grow: 1;
    margin: 0 auto;
    padding: 4rem 4rem;
    width: 100%;
  }

  footer {
    color: #AAA;
    font-size: 1em;
    margin: 1em auto;
    max-width: 1280px;
    padding: 4rem 2rem;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <div class="max1280 center">
      <slot></slot>
    </div>
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} Alex Evans & The Plinky community.
    </span>
  </footer>
</div>
