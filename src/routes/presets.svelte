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
        <h4>Meska bank</h4>
        <p>This bank of 32 presets by Meska draws focus to the "dark" side of Plinky, exploring lush delays, cavernous reverb, pitch drift and gnarly saturation.
        Meska has created a number of great Plinky patch explainers on <a href="https://www.youtube.com/@Meska_Statik" target="_blank">YouTube</a>.</p>
        
        <p>Includes the preset file, 8 samples and individual links for the <a href="https://plinkysynth.github.io/editor/">patch editor</a>. 
        <br>On all patches, Knob A is sensitivity. Set to zero, it turns the sound off.</p>
        <a class="button" target="_blank" href="/presets/Meska/Meska.zip">Download</a>
      </BigArea>
      <BigArea>
        <h4>LPZW.modules bank</h4>
        <p>These are the presets by LPZW.modules for the Schneidersladen edition of Plinky. It contains the preset file and three samples. For more info, please go to <a href="http://leipzigwest.org/" target="_blank">leipzigwest.org</a>.</p>
        <a class="button" target="_blank" href="/presets/LPZW/LPZW.zip">Download</a>
      </BigArea>
      <BigArea>
        <h4>Default bank</h4>
        <p>This is the default preset set with all 32 patches set to the initial sound.</p>
        <a class="button" target="_blank" href="/presets/default/PRESETS.uf2">Download</a>
      </BigArea>
    </Grid>

    <h2>Manual preset install instructions</h2>
  
    <p>To upload these presets:</p>

    <ul>
      <li>Unplug all cables from Plinky</li>
      <li>Connect a USB cable to your Plinky</li>
      <li>Do not power from Eurorack at the same time, and use only one USB port</li>
      <li>Hold down the encoder (rightmost knob), and plug the USB cable into your computer</li>
    </ul>

    <p>Plinky will show up as a drive and you should see the "tunnel of lights" effect on Plinky's LEDs.</p>

    <ul>
      <li>If you want a backup of your Plinky before replacing the presets, copy the content of the Plinky drive to a folder on your PC.</li>
      <li>Drag and drop PRESETS.uf2 to the drive. <b>Make sure the file is called PRESETS.uf2 - do not rename.</b></li>
      <li>Drag and drop SAMPLE0.uf2, SAMPLE1.uf2 .. SAMPLE7.UF2, up to 8 files. You will have to copy them one by one, one after the other.</li>
    </ul>

    <p>While flashing, the LEDs will flicker. This is normal.</p>

    <ul>
      <li>While you're changing banks, it's a good time to also <a href="/firmware">update your firmware</a> to the latest version! 
      Download the file and drag and drop it to the Plinky drive.</li>
      <li>To finish, just click the encoder again. Plinky will boot up and your presets should be present.</li>
    </ul>

  </div>