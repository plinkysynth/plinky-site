<script>
import Banner from "../components/Banner.svelte";
import Grid from "../components/Grid.svelte";

</script>

<div class="page">
  <h1>Community</h1>

  <p>Plinky was originally started as a hobby project by <a target="_blank" href="https://twitter.com/mmalex">@mmalex</a>, and has grown into a small friendly community with many creative individuals. Join us!</p>

  <Grid>
    <Banner>
      <h4>Join the Plinky Discord server</h4>
      <p>We have an active Discord server. Join us!</p>
      <a href="https://discord.gg/Zf6chA9jAz" target="_blank" class="button">Join server</a>
    </Banner>
    <Banner>
      <h4>Contribute to Plinky</h4>
      <p>All things related to Plinky are going on our Github- including everything about the synth itself eventually.</p>
      <a class="button" target="_blank" href="https://github.com/plinkysynth">Plinky Github</a>
    </Banner>
  </Grid>
</div>