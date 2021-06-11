<script lang="ts">
  import BigArea from "../../components/BigArea.svelte";
  import Grid from "../../components/Grid.svelte";
  import firmware from "../../utils/firmware";
</script>

<div class="page">

  <h1>Plinky firmware</h1>

  <Grid>
    <BigArea>
      <h4>Latest STABLE firmware</h4>
      <p>The latest stable firmware version is {firmware.stable.version} released on {firmware.stable.date}.</p>
      {#if firmware.stable.comment}
        <p>&quot;{firmware.stable.comment}&quot;</p>
      {/if}
      <a href="/firmware/stable/CURRENT.uf2" class="button">Download STABLE firmware</a>
    </BigArea>
    <BigArea>
      <h4>Latest BETA firmware</h4>
      <p>The latest beta firmware version is {firmware.beta.version} released on {firmware.beta.date}.</p>
      {#if firmware.beta.comment}
        <p>&quot;{firmware.beta.comment}&quot;</p>
      {/if}
      <a href="/firmware/beta/CURRENT.uf2" class="button">Download BETA firmware</a>
    </BigArea>
  </Grid>
  
  <h2>Firmware install instructions</h2>
  
  <p>Installing the firmware takes only a few moments.</p>
  
  <ol>
    <li>Hold the right encoder down while plugging the USB cable into your Plinky.</li>
    <li>Plinky will show up as an attached drive and you should see the "tunnel of lights" effect on the LEDs.</li>
    <li>Drag and drop CURRENT.uf2 to the drive. <b>Make sure that it's called CURRENT.uf2 and nothing else.</b></li>
    <li>While flashing, the LEDs will flicker. This is normal!</li>
    <li>To finish, just click the encoder again. Plinky will boot up and you should see the correct version number.</li>
  </ol>

  <h2>History</h2>

    {#each firmware.history as history}
      <h3>{history.version} ({history.date})</h3>
      <p>{history.comment}</p>
      <p><a href="https://github.com/plinkysynth/plinky-site/raw/main/firmware/{history.file}" class="button">Download</a></p>
      <hr />
    {/each}

  <p style="display: none;">
    Redirects:
    <a href="/fw">/fw</a>
    <a href="/webusb">/webusb</a>
    <a href="/play">/play</a>
    <a href="/build">/build</a>
  </p>
  
</div>
