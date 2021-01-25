<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`docs/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  header {
    text-align: left;
  }
  header h1 {
    border-bottom: 0;
    margin-bottom: 0;
  }
  .Post {
    display: flex;
  }
  aside {
    width: 280px;
    flex-shrink: 0;
  }
  aside ul {
    margin: 0;
    padding: 0;
  }
  aside ul li {
    list-style: none;
  }
  aside ul li a {
    display: block;
    padding: 1.9rem 0 1.5rem 0;
    text-decoration: none;
    border-bottom: 1px solid var(--color-border);
    letter-spacing: -0.05rem;
  }
  article {
    padding: 0 8rem 4rem 8rem;
    flex-grow: 1;
  }
  .Post :global(img) {
    max-width: 100%;
  }
</style>

<header>
  <h1>{post.title}</h1>
</header>
<div class="Post">
  <aside>
    <ul>
      {#if post.toc}
        {#each post.toc as toc}
          {#if toc.level < 3}
            <li><a href="/docs/{post.slug}#{toc.anchor}">{toc.text}</a></li>
          {/if}
        {/each}
      {/if}
    </ul>
  </aside>
  <article class="content">
    {@html post.html}
  </article>
</div>

<svelte:head>
  <title>Plinky - {post.title}</title>
<!--   <link rel="canonical" href="" /> -->
<!-- 	<meta property="og:url" content=""} /> -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Plinky - {post.title}" />
	<meta name="Description" content={post.excerpt} />
	<meta property="og:description" content={post.excerpt} />
<!-- 	<meta property="og:image" content="" /> -->
	<meta name="twitter:card" content="summary_large_image" />
<!-- 	<meta name="twitter:domain" value="" /> -->
<!-- 	<meta name="twitter:creator" value="" /> -->
	<meta name="twitter:title" value={post.title} />
	<meta name="twitter:description" content={post.excerpt} />
<!-- 	<meta name="twitter:image" content="" /> -->
	<meta name="twitter:label1" value="Published on" />
	<meta
		name="twitter:data1"
		value={new Date(post.printDate).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})} />
	<meta name="twitter:label2" value="Reading Time" />
	<!--<meta name="twitter:data2" value={post.printReadingTime} />-->
</svelte:head>
