<script>
  import BigArea from "../components/BigArea.svelte";
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
  
    <p>We're collecting presets and working on <a href="https://plinkysynth.github.io/editor/">a browser-based patch editor</a>. In the meantime, here is a simple list of preset banks.</p>

    <p><strong>NOTE: Replacing the preset bank will replace your patterns as well!</strong></p>

    <Grid>
      <BigArea>
        <h4>Default bank</h4>
        <p>This is the default preset set with all 32 patches set to the initial sound.</p>
        <a class="button" target="_blank" href="/presets/default/PRESETS.uf2">Download</a>
      </BigArea>
      <BigArea>
        <h4>LPZW.modules bank</h4>
        <p>These are the presets by LPZW.modules for the Schneidersladen edition of Plinky. It contains the preset file and three samples. For more info, please go to <a href="http://leipzigwest.org/" target="_blank">leipzigwest.org</a>.</p>
        <a class="button" target="_blank" href="/presets/LPZW/LPZW.zip">Download</a>
      </BigArea>
    </Grid>

    <h2>Manual preset install instructions</h2>
  
    <ol>
      <li>Hold the right encoder down while plugging the USB cable into your Plinky.</li>
      <li>Plinky will show up as an attached drive and you should see the "tunnel of lights" effect on the LEDs.</li>
      <li>Drag and drop PRESETS.uf2 to the drive. <b>Make sure that it's called PRESETS.uf2 and nothing else.</b></li>
      <li>If you're adding samples, drag and drop the SAMPLE1.uf2, SAMPLE2.uf2, etc. that you might have over to the drive as well.</li>
      <li>While flashing, the LEDs will flicker. This is normal.</li>
      <li>While you're changing banks, it's a good time to also <a href="/firmware">update your firmware</a> to the latest version! Just download the file and drag and drop while you've got Plinky hooked up.</li>
      <li>To finish, just click the encoder again. Plinky will boot up and your presets should be present.</li>
    </ol>

  </div>