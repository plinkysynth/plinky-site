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

<style>
  h2,
  .post-item-footer {
    font-weight: 700;
  }

  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>Plinky - Documentation</title>
</svelte:head>

<div class="page">
  <h1>Documentation</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='docs/{post.slug}'>{post.title}</a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
