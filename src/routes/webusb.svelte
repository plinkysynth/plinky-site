<script>
  import { onMount } from "svelte";
  let url = 'https://plinkysynth.github.io/editor'
  onMount(() => {
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  });
</script>

<h1>Redirecting you to the Plinky editor..</h1>
<a href={url}>If you're not automatically redirected within a few seconds, click here</a>