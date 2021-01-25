<script lang="ts">
  import Banner from "../components/Banner.svelte";
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
</style>

<svelte:head>
  <title>Plinky</title>
</svelte:head>

<TextAndImage src="plinky_alpha_2.png" alt="Plinky design">
  <h1>Plinky is an 8-voice polyphonic touch synthesiser that specialises in fragile, melancholic sounds.</h1>
  <p>It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector.</p>

  <h4>When is it available?</h4>
  <p>As it is a hobby project at heart, the DIY kits are made in limited quantities. The first run of 100 sold out in December 2020. There is a second run of 500 underway and available early 2021. You can wishlist it at Thonk, who will then notify you of new stock.</p>
  <a class="button" target="_blank" href="https://www.thonk.co.uk/shop/plinky/">Wishlist at Thonk</a>
</TextAndImage>

<Blocks>
  <LinkBlock href="/firmware" label="Download">
    <h3>Firmware</h3>
    <p>The latest firmware version is {firmware.stable.version} released on {firmware.stable.date}.</p>
  </LinkBlock>
  <LinkBlock href="/docs/build-guide" label="Building instructions">
    <h3>Building</h3>
    <p>Building your Plinky is part of the fun, and easy!</p>
  </LinkBlock>
  <LinkBlock href="/docs/play-guide" label="Playing instructions">
    <h3>How to play</h3>
    <p>Got your Plinky working? Great! Go here to learn how to play it.</p>
  </LinkBlock>
  <LinkBlock href="/docs/faq" label="FAQ">
    <h3>FAQ</h3>
    <p>Find all the little gotchas and tidbits here.</p>
  </LinkBlock>
</Blocks>


<Banner>
  <h4>Stay up to date!</h4>
  <p>Sign up to the Plinky mailing list for updates.</p>
  <a class="button" target="_blank" href="http://eepurl.com/heuCM5">Sign up</a>
</Banner>