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
  <p>Plinky is now fully open source! V3 is becoming available as DIY and ready-made kits at Thonk and Schneidersladen. Or you can make your own!</p>
  <a class="button" target="_blank" href="https://github.com/plinkysynth/plinky_public">View on Github</a>
</TextAndImage>

<TextAndImage src="buddies2.png" alt="Buddies design" border={true}>
  <h1>Plinky now welcomes 3 small 12HP x 1U modules to the family: Bib, Buzzrito and Blueberry.</h1>
  <p>These little buddies provide a plinky style stereo reverb, delay, and drive (<a href="docs/bib-manual">Bib</a>), a rich swarm oscillator (Buzzrito), and a generative touch sequencer (Blueberry).
  They take the touch-enabled sensitivity of Plinky, and break it out into 3 small (12HP) modules for your 1U eurorack row.</p>
  <p>If you don't have a 1U eurorack row, there will be an option to mount all 3 in a single 12HP standard Eurorack module. Stay tuned!</p> 
  <p>They are the result of a collaboration between Plinky community members <b>mmalex</b> and <b>CrazyEmperor893</b>.</p> 
  <h4>Tell me more!</h4>
  <p>You can read the Bib <a href="docs/bib-manual">manual</a> and <a href="docs/build-guide_bib">build guide</a> right now. More information on Buzzrito and Blueberry will be coming soon! For sneak peaks and sound demos, follow <a href="https://www.instagram.com/plinkysynth">PlinkySynth</a> and <a href="https://www.instagram.com/crazyemperor893/">CrazyEmperor893</a> on instagram.</p>
  <h4>When will they be available?</h4>
  <p>Bib is on sale now, in prebuilt form from the <a href="https://crey.space">Crey Emporium</a>, and shortly from <a href="https://thonk.co.uk">Thonk</a> as a kit. The other two buddies will be available soon!</p>
</TextAndImage>


<div class="Examples">
  <div class="Video">
    <iframe width="800" title="Plinky introduction video" height="450" src="https://www.youtube.com/embed/us__mX0_Aqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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
 	<meta name="twitter:domain" value="plinkysynth.com" />
  <meta name="twitter:title" content="Plinky - 8-voice polyphonic touch synthesiser" />
  <meta name="twitter:description" content="Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector." />
</svelte:head>
