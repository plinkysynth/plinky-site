<script lang="ts">
  export let segment;
</script>

<nav>
  <a rel=prefetch class='{segment === "docs" ? "selected" : ""}' href='docs'>Documentation</a>
  <a rel=prefetch class='{segment === "community" ? "selected" : ""}' href='community'>Community</a>
  <a rel=prefetch class='{segment === "presets" ? "selected" : ""}' href='presets'>Presets</a>
</nav>

<style>
  nav {
    align-items: center;
    display: flex;
    flex: 1;
    padding-left: 4rem;
    height: 100%;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
    display: block;
    position: relative;
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: -0.08rem;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  @media(max-width: 640px) {
    nav {
      padding-left: 1rem;
    }
    a {
      font-size: 1.75rem;
      line-height: 1.75rem;
      position: relative;
      top: 2px;
    }
  }

</style>
