<script lang="ts">
  import BigArea from "../components/BigArea.svelte";
  import Blocks from "../components/Blocks.svelte";
  import LinkBlock from "../components/LinkBlock.svelte";
  import TextAndImage from "../components/TextAndImage.svelte";
  import firmware from "../utils/firmware";
</script>
<style>
  h1 {
    border-bottom: 0;
    padding-bottom: 0;
  }
  iframe {
    width: 100%;
    max-width: 800px;
  }
  .Examples {
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .Video, .Sound {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 0 4rem;
  }
  @media(max-width: 1024px) {
    .Examples {
      grid-template-columns: 1fr;
    }
    .Video {
      padding: 0 0 4rem 0;
    }
    .Sound {
      padding: 0;
    }
  }
</style>

<TextAndImage src="plinky_alpha_2.png" alt="Plinky design">
  <h1>Plinky is an 8-voice polyphonic touch synthesiser that specialises in fragile, melancholic sounds.</h1>
  <p>It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth over CV or MIDI, with line-level stereo input and a headphone output, all powered by USB.</p>

  <h4>When is it available?</h4>
  <p>Plinky is fully open source. It is is available as a full DIY Kit at <a href="https://www.thonk.co.uk/brand/plinkysynth/">Thonk (UK)</a>, <a href="https://www.exploding-shed.com/plinky/100085">Exploding Shed (EU)</a> and <a href="https://nightlife-electronics.com/products/plinky-v3-diy-kit">Nightlife Electronics (CAN)</a>.</p>
  <p>Built Plinky are available at <a href="https://schneidersladen.de/en/plinky-plinky-v3">Schneidersladen (EU)</a>, <a href="https://www.thonk.co.uk/brand/plinkysynth/">Thonk (UK)</a>, <a href="https://www.perfectcircuit.com/plinky-plinky-v3.html">Perfect&nbsp;Circuit (US)</a> and <a href="https://nightlife-electronics.com/products/plinky">Nightlife Electronics (CAN)</a>. Or you can make your own!</p>
  <a class="button" target="_blank" href="https://github.com/plinkysynth/plinky_public">View on Github</a>
</TextAndImage>

<TextAndImage src="plinky+_alpha.png" alt="Plinky+ design" border={true}>
  <h1>Plinky+ is the extra-large deluxe version of Plinky.</h1>
  <p>Plinky+ doubles the size of the play surface. It comes with a metal enclosure, a clear dustcover, a bigger display, symmetric 6.35mm audio outputs and a printed manual. It includes all the Eurorack I/O of Plinky and the Expander, and comes assembled or as a solderless DIY Kit.</p>

  <h4>Where can I get one?</h4>
  <p>Assembled Plinky+ are available at 
  <a href="https://www.thonk.co.uk/shop/plinky-plus-assembled/">Thonk (UK)</a>, 
  <a href="https://schneidersladen.de/making-sound-machines-plinky">Schneidersladen (EU)</a>,
  <a href="https://www.elevatorsound.com/product/making-sound-machines-plinky-polyphonic-synthesizer-and-sampler/">Elevator Sound (UK)</a>,
  <a href="https://www.perfectcircuit.com/making-sound-machines-plinky-plus.html">Perfect&nbsp;Circuit (US)</a> and 
  <a href="https://nightlife-electronics.com/products/plinky-plinky">Nightlife Electronics (CAN)</a>.</p>
  <p>It is also available as a full DIY Kit at 
    <a href="https://www.thonk.co.uk/shop/plinky-plus-kit/">Thonk (UK)</a>, 
    <a href="https://www.exploding-shed.com/plinky/100962">Exploding Shed (EU)</a> and 
    <a href="https://nightlife-electronics.com/products/plinky-plinky-diy-kit">Nightlife Electronics (CAN)</a>.
  It does not require soldering and contains all the parts you need to assemble the synth. You need to bring your own tools.</p>

  
  <a class="button" target="_blank" href="/docs/build-guide-plus">View Build Guide</a>
</TextAndImage>

<TextAndImage src="buddies2.png" alt="Buddies design" border={true}>
  <h1>Plinky now welcomes 3 small 12HP x 1U modules to the family: Bib, Buzzrito and Blueberry.</h1>
  <p>These little buddies provide a plinky style stereo reverb, delay, and drive (<a href="docs/bib-manual">Bib</a>), a rich swarm oscillator (<a href="docs/buzzrito-manual">Buzzrito</a>), 
  and a generative touch sequencer (<a href="docs/blueberry-manual">Blueberry</a>).
  They take the touch-enabled sensitivity of Plinky, and break it out into 3 small (12HP) modules for your 1U eurorack row.</p>
  <p>If you don't have a 1U eurorack row, there is an option to mount all 3 in a single 12HP standard Eurorack module.</p> 
  <p>They are the result of a collaboration between Plinky community members <b>mmalex</b> and <b>CrazyEmperor893</b>.</p> 
  <h4>Available now!</h4>
  <p>The buddies are available now as kits from Thonk. <a href="https://www.thonk.co.uk/shop/plinky-bib/">Bib</a>, <a href="https://www.thonk.co.uk/shop/plinky-buzzrito/">Buzzrito</a>, <a href="https://www.thonk.co.uk/shop/plinky-blueberry/">Blueberry</a>
  and <a href="https://www.thonk.co.uk/shop/plinky-bib-buzz-blue-3u/">the 3U mega combo bundle</a>.
</p>  
<p>Bib is available now, in prebuilt form from the <a href="https://crey.space">Crey Emporium</a>, with the other buddies to follow extremely soon.</p>
  <p>You can read the manuals (<a href="docs/bib-manual">Bib</a>, <a href="docs/buzzrito-manual">Buzzrito</a>, <a href="docs/blueberry-manual">Blueberry</a>) right now,
  and build guides (<a href="docs/build-guide_bib">Bib</a>, <a href="docs/build-guide_buzzy">Buzzrito</a>, <a href="docs/build-guide_blueberry">Blueberry</a>) in the Docs section of this site.</p>
  <p>For sneak peaks and sound demos, follow <a href="https://www.instagram.com/plinkysynth">PlinkySynth</a> and <a href="https://www.instagram.com/crazyemperor893/">CrazyEmperor893</a> on instagram.</p>
</TextAndImage>


<div class="Examples">
  <div class="Video">
    <iframe width="800" title="Plinky introduction video" height="450" src="https://www.youtube.com/embed/us__mX0_Aqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
  <div class="Sound">
    <iframe width="100%" title="Plinky example songs" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1224352735&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
  </div>
</div>

<Blocks>
  <LinkBlock href="/firmware" label="Download">
    <h3>Firmware</h3>
    <p>The latest firmware version is {firmware.stable.version} released on {firmware.stable.date}.</p>
  </LinkBlock>
  <LinkBlock href="/docs/build-guide-black" label="Building instructions">
    <h3>Building</h3>
    <p>Building your Plinky is part of the fun, and easy!</p>
  </LinkBlock>
  <LinkBlock href="/docs/play-guide" label="Playing instructions">
    <h3>How to play</h3>
    <p>Got your Plinky working? Great! Go here to learn how to play it.</p>
  </LinkBlock>
  <LinkBlock href="/docs/manual" label="Manual">
    <h3>Manual</h3>
    <p>Read the Plinky manual.</p>
  </LinkBlock>
</Blocks>

<BigArea>
  <h4>Stay up to date!</h4>
  <p>Join the Plinky Discord server for updates.</p>
  <a href="https://discord.gg/Zf6chA9jAz" target="_blank" class="button">Join server</a>
</BigArea>

<svelte:head>
  <title>Plinky - an 8-voice polyphonic touch synthesiser</title>
 	<meta property="og:url" content="https://www.plinkysynth.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Plinky - 8-voice polyphonic touch synthesiser" />
  <meta name="Description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
  <meta property="og:description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
  <meta name="twitter:card" content="summary_large_image" />
 	<meta name="twitter:domain" content="plinkysynth.com" />
  <meta name="twitter:title" content="Plinky - 8-voice polyphonic touch synthesiser" />
  <meta name="twitter:description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
</svelte:head>
