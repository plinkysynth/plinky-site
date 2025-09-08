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
        <iframe width="624" title="" height="351" src="https://www.youtube.com/embed/b4zJ6FDCMCA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h4>Deadriot Bank</h4>
        <p><a href="https://soundcloud.com/deadriot_ncn" target="_blank">Deadriot</a> is the experimental alias of Dennis Radtke & Markus Joos. Celebrating the release of Plinky+, their exclusively synth-focussed Bank of 32 Presets explores their love for warm and wide expressive pads and arps.</p>
        <p>Easily moving through Dark Techno, Rave, Ambient & Broken Beats in their own music, Deadriot's preset bank reflects a passion for carefully crafting sounds that gives their own tracks their warmth and definition, and packs a punch on a club system. Find Deadriot's music on <a href="https://soundcloud.com/deadriot_ncn" target="_blank">Soundcloud</a> and <a href="https://deariotkm.bandcamp.com/album/ruin" target="_blank">Bandcamp</a>.</p>
        <p>Includes the preset file, a PDF with notes and sweet spots for each patch, and individual links for the <a href="https://plinkysynth.github.io/editor/">patch editor</a>. This Preset Bank works for Plinky and Plinky+.</p>
        <a class="button" target="_blank" href="/presets/Deadriot/Deadriot.zip">Download</a>
      </BigArea>        
      <BigArea>
        <iframe width="624" title="" height="351" src="https://www.youtube.com/embed/FsOyG4VjLC4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h4>Grain Blanc Bank</h4>
        <p>Ambient minimalist Grain Blanc has created this bank of 32 presets, exploring the cinematic side of Plinky with shimmery pads, brassy leads and ghostly soundscapes.
        Find Grain Blanc's beautiful and haunting performances with Plinky on <a href="https://www.youtube.com/@grainblanc_" target="_blank">YouTube</a>.</p>
        
        <p>Includes the preset file, 8 samples and individual links for the <a href="https://plinkysynth.github.io/editor/">patch editor</a>.
        <br>Find a short description and performance tips in the PDF patch notes.</p>
        <p>This Preset Bank works for Plinky and Plinky+.</p>
        <a class="button" target="_blank" href="/presets/GrainBlanc/GrainBlanc.zip">Download</a>
      </BigArea>    
      <BigArea>
        <iframe width="624" title="" height="351" src="https://www.youtube.com/embed/zXjph5cix2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h4>Meska Bank</h4>
        <p>This bank of 32 presets by Meska draws focus to the "dark" side of Plinky, exploring lush delays, cavernous reverb, pitch drift and gnarly saturation.
        Meska has created a number of great Plinky patch explainers on <a href="https://www.youtube.com/@Meska_Statik" target="_blank">YouTube</a>.</p>
        
        <p>Includes the preset file, 8 samples and individual links for the <a href="https://plinkysynth.github.io/editor/">patch editor</a>. 
        <br>On all patches, Knob A is sensitivity. Set to zero, it turns the sound off.</p>
        <p>This Preset Bank works for Plinky and Plinky+.</p>
        <a class="button" target="_blank" href="/presets/Meska/Meska.zip">Download</a>
      </BigArea>
      <BigArea>
        <h4>LPZW.modules Bank</h4>
        <p>These are the presets by <a href="http://leipzigwest.org/" target="_blank">LPZW.modules</a> for the Schneidersladen edition of Plinky. Includes the preset file, three samples and individual links for the <a href="https://plinkysynth.github.io/editor/">patch editor</a>.</p>
        <p>This Preset Bank works for Plinky and Plinky+.</p>
        <a class="button" target="_blank" href="/presets/LPZW/LPZW.zip">Download</a>
      </BigArea>
      <BigArea>
        <h4>Default Bank</h4>
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

    <p>No tunnel of lights on Plinky?</p>
    
    <ul>
      <li> Double check that all 5 Encoder pins are soldered. The side with 2 pins is the switch for the "click".</li>
    </ul>

    <p>USB drive not showing up?</p>
    
    <ul>
      <li>Make sure your cable can transmit data. Try another cable.</li>
      <li>Mac M1 / M2 users on MacOS 14 follow these <a href="https://plinkysynth.com/docs/build-guide-black/#install-firmware-mac-m1-os-14-">steps</a></li>
      <li>Linux users follow these <a href="https://plinkysynth.com/docs/build-guide-black/#install-firmware-linux-">steps</a></li>
    </ul>

  </div>