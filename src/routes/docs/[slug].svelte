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
  .Post {
    display: flex;
  }
  aside {
    width: 240px;
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
    opacity: 0.75;
  }
  aside ul li a:hover {
    opacity: 1;
  }
  article {
    padding: 0 0rem 4rem 4rem;
    flex-grow: 1;
  }
  article.noToc {
    padding: 0 0 4rem 0;
  }
  .Post :global(img) {
    max-width: 100%;
  }
  .Post :global(h3) {
    font-weight: bold;
  }
  .Post :global(iframe) {
    max-width: 100%;
  }
  @media(max-width: 1024px) {
    aside {
      width: 180px;
    }
  }
  @media(max-width: 640px) {
    .Post {
      flex-direction: column;
    }
    article {
      padding: 0;
    }
    aside {
      margin-bottom: 6rem;
      width: 100%;
    }
  }
</style>

<div class="page">
  <header>
    <h1>{post.title}</h1>
  </header>
  <div class="Post">
    {#if post.toc.length}
      <aside>
        <ul>
          {#each post.toc as toc}
            {#if toc.level < 3}
              <li><a href="/docs/{post.slug}#{toc.anchor}">{toc.text}</a></li>
            {/if}
          {/each}
        </ul>
      </aside>
    {/if}
    <article class="content" class:noToc={!post.toc.length}>
      {@html post.html}
    </article>
  </div>
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
