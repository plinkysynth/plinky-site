<script lang="ts">
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment
</script>

<style>
  header {
    margin: 0 auto;
    padding: 2rem 4rem;
    width: 100%;
    background: var(--color-bg-alt);
  }
  .max1280 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media(max-width: 640px) {
    header {
      padding: 1rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
    }
  }
</style>

<header>
  <div class="center max1280">
    <a class='{segment === undefined ? "selected" : ""}' href='.'><Logo /></a>
    <Nav {segment} />
  </div>
</header>
