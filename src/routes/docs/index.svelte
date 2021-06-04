<script context="module" lang="ts">
  export function preload({ params, query }) {
    return this.fetch(`docs.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script lang="ts">
  export let posts;
</script>

<svelte:head>
  <title>Plinky - Documentation</title>
</svelte:head>

<div class="page">
  <h1>Documentation</h1>
  {#each posts as post, index}
    <div class="post-item">
      <h2>
        <a href='docs/{post.slug}'>{post.title}</a>
      </h2>
    </div>
  {/each}
</div>
