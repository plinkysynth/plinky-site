<script>
  import Banner from "../components/Banner.svelte";
  import Grid from "../components/Grid.svelte";
</script>

<svelte:head>
  <title>Plinky - Presets</title>
 	<meta property="og:url" content="https://www.plinkysynth.com/presets" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Plinky - 8-voice polyphonic touch synthesiser" />
  <meta name="Description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
  <meta property="og:description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
  <meta name="twitter:card" content="summary_large_image" />
 	<meta name="twitter:domain" value="plinkysynth.com" />
  <meta name="twitter:title" content="Plinky - 8-voice polyphonic touch synthesiser" />
  <meta name="twitter:description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
</svelte:head>

  <div class="page">
    <h1>Presets</h1>
  
    <p>We're collecting presets and working on <a href="https://plinkysynth.github.io/plinky-webusb-test/">a browser-based patch editor</a>. In the meantime, here is a simple list of presets.</p>

    <Grid>
      <Banner>
        <h4>Default presets</h4>
        <p>This is the default preset set with all 32 sounds empty.</p>
        <a class="button" target="_blank" href="/presets/default/PRESETS.uf2">Download</a>
      </Banner>
      <Banner>
        <h4>Pal Secam Kids presets</h4>
        <p>These are the presets by Pal Secam Kids for the Schneidersladen edition of Plinky.</p>
        <a class="button" target="_blank" href="/presets/palsecamkids/PRESETS.uf2">Download</a>
      </Banner>
    </Grid>

    <h2>Manual preset install instructions</h2>
  
    <ol>
      <li>Hold the right encoder down while plugging the USB cable into your Plinky.</li>
      <li>Plinky will show up as an attached drive and you should see the "tunnel of lights" effect on the LEDs.</li>
      <li>Drag and drop PRESETS.uf2 to the drive. <b>Make sure that it's called PRESETS.uf2 and nothing else.</b></li>
      <li>While flashing, the LEDs will flicker. This is normal.</li>
      <li>To finish, just click the encoder again. Plinky will boot up and your presets should be present.</li>
    </ol>

  </div>