<script>
  import { onMount } from "svelte";
  let url = 'https://www.plinkysynth.com/docs/play-guide'
  onMount(() => {
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  });
</script>

<h1>Redirecting you to the play guide..</h1>
<a href={url}>If you're not automatically redirected within a few seconds, click here</a>