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
    <h1>Documentation - Plinky</h1>
    <h2>Plinky Manual & Build guides</h2>
    <div class="post-item"><h3><a href="docs/manual">Plinky Manual</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide-black">Plinky build guide - V3 Black (new)</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide-blue">Plinky build guide - V2 Blue (old)</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide">Plinky build guide - V1 Green (old)</a></h3></div>
    <div class="post-item"><h3><a href="docs/expander-build-guide">Plinky Expander build guide</a></h3></div>
    <br/>
    <h2>Plinky More information</h2>
    <div class="post-item"><h3><a href="docs/midi">MIDI</a></h3></div>
    <div class="post-item"><h3><a href="docs/editors">Plinky Editors</a></h3></div>
    <div class="post-item"><h3><a href="docs/faq">FAQ</a></h3></div>
    <div class="post-item"><h3><a href="docs/play-guide">Plinky Play guide</a></h3></div>
    <br/>
    <h1>Documentation - Buddies</h1>
    <br/>
    <h2>Bib</h2>
    <div class="post-item"><h3><a href="docs/bib-manual">Bib Manual</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide_bib">Bib build guide - V2</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide_bib_v1">Bib build guide - V1</a></h3></div>
    <br/>
    <h2>Buzzrito</h2>
    <div class="post-item"><h3><a href="docs/buzzrito-manual">Buzzrito Manual</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide_buzzy">Buzzrito build guide - V1</a></h3></div>
    <br/>
    <h2>Blueberry</h2>
    <div class="post-item"><h3><a href="docs/blueberry-manual">Blueberry Manual</a></h3></div>
    <div class="post-item"><h3><a href="docs/build-guide_blueberry">Blueberry build guide - V1</a></h3></div>
    <br/>
    <h2>3U combo panel</h2>
    <div class="post-item"><h3><a href="docs/build-guide_combo">3U Bib-Buzzrito-Blueberry Combo build guide</a></h3></div>
    

</div>
