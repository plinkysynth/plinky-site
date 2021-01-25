<script>
  import Banner from "../../components/Banner.svelte";
  import Grid from "../../components/Grid.svelte";
  import firmware from "../../utils/firmware";
</script>

<h1>Plinky firmware</h1>

<Grid>
  <Banner>
    <h4>Latest STABLE firmware</h4>
    <p>The latest stable firmware version is {firmware.stable.version} released on {firmware.stable.date}.</p>
    <a href="/firmware/stable/CURRENT.uf2" class="button">Download STABLE firmware</a>
  </Banner>
  <Banner>
    <h4>Latest BETA firmware</h4>
    <p>The latest beta firmware version is {firmware.beta.version} released on {firmware.beta.date}.</p>
    <a href="/firmware/beta/CURRENT.uf2" class="button">Download BETA firmware</a>
  </Banner>
</Grid>

<h2>Firmware install instructions</h2>

<p>Installing the firmware takes only a few moments.</p>

<ol>
  <li>Hold the right encoder down while plugging the USB cable into your Plinky.</li>
  <li>Plinky will show up as an attached drive and you should see the "tunnel of lights" effect on the LEDs.</li>
  <li>Drag and drop CURRENT.uf2 to the drive. <b>Make sure that it's called CURRENT.uf2 and nothing else.</b></li>
  <li>While flashing, the LEDs will flicker. This is normal.</li>
  <li>To finish, just click the encoder again. Plinky will boot up and you should see the correct version number.</li>
</ol>

