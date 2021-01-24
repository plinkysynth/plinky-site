<script>
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
</style>

<header>
  <div class="center max1280">
    <Logo />
    <Nav {segment} />
  </div>
</header>
