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
    }
  }
</style>

<header>
  <div class="center max1280">
    <a class='{segment === undefined ? "selected" : ""}' href='.'><Logo /></a>
    <Nav {segment} />
  </div>
</header>
