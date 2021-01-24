<script>
  export let segment;
</script>

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
</style>

<nav>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a>
  <a rel=prefetch class='{segment === "docs" ? "selected" : ""}' href='docs'>Documentation</a>
</nav>
