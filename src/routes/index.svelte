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
  <p>It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector.</p>

  <h4>When is it available?</h4>
  <p>As it is a hobby project at heart, the DIY kits are made in limited quantities. The first run of 100 sold out in December 2020. There was a second run of 200 made end of May 2021, <a href="https://www.thonk.co.uk/plinky-2021/" target="_blank">with more on the way</a>. You can wishlist it at Thonk, who will notify you of new stock.</p>
  <a class="button" target="_blank" href="https://www.thonk.co.uk/shop/plinky/">Wishlist at Thonk</a>
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
  <LinkBlock href="/docs/build-guide-blue" label="Building instructions">
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
  <p>Sign up to the Plinky mailing list for updates.</p>
  <a class="button" target="_blank" href="https://eepurl.com/heuCM5">Sign up</a>
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