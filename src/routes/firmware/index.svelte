<script lang="ts">
  import BigArea from "../../components/BigArea.svelte";
  import Grid from "../../components/Grid.svelte";
  import firmware from "../../utils/firmware";
</script>

<div class="page">

  <h1>Plinky / Plinky+ firmware</h1>

  <p>Plinky and Plinky+ are firmware compatible. Plinky+ needs version 0.B2 or higher.</p>

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
  
  <h2>Plinky &ndash; Firmware install instructions</h2>
  
  <p>Installing the firmware takes only a few moments:</p>

  <ul>
    <li>Unplug all cables from Plinky</li>
    <li>Connect a USB cable to your Plinky</li>
    <li>Do not power from Eurorack at the same time, and use only one USB port</li>
    <li>Hold down the encoder (rightmost knob), and plug the USB cable into your computer</li>
  </ul>

  <p>Plinky will show up as a drive and you should see the "tunnel of lights" effect on Plinky's LEDs.</p>

  <ul>
    <li>Drag and drop <code>CURRENT.uf2</code> to the drive. Make sure the file is called <code>CURRENT.uf2</code> - <b>do not rename.</b></li>
    <li>While flashing, the LEDs will flicker. This is normal.</li>
    <li>To finish, just click the encoder again. Plinky will boot up and you should see the correct version number.</li>
  </ul>
  
  <img src="/build-guide-black/Plinky_Build-Guide_2610.jpg" alt="Plinky in Tunnel of Lights (UF2) Mode" width="49%">
  <img src="/build-guide-black/Plinky_Build-FW_Update.jpg" alt="Plinky Firmware Update with UF2 File" width="49%">

  <h2>Plinky+ &ndash; Firmware install instructions</h2>
  
  <p>Plinky and Plinky+ are firmware compatible. Plinky+ needs version 0.B2 or higher.</p>

  <ul>
    <li>Unplug all cables from Plinky+</li>
    <li>With Plinky+ powered off, connect Plinky+ to a power source (PC or Mac USB port, or USB power adapter)</li>
    <li>Hold down the Encoder, and with it held down, press the on/off button to turn Plinky+ on</li>
    <li>The screen remains blank, and you’ll see a tunnel of flashing LEDs</li>
    <li>Plinky should show up on your PC as a USB Drive</li>
    <li>Drag and drop the <code>CURRENT.uf2</code> file onto the Plinky USB Drive</li>
  </ul>

  <img src="/build-guide-plus/Plinky+_Build-Guide_0142.jpg" alt="Plinky+ in Tunnel of Lights (UF2) Mode" width="49%">
  <img src="/build-guide-plus/Plinky+_Build-FW_Update.jpg" alt="Plinky+ Firmware Update with UF2 File" width="49%">

  <p>USB drive not showing up?</p>
  
  <ul>
    <li>Make sure your cable can transmit data. Try another cable.</li>
    <li><strong>Mac M1 / M2</strong> users on MacOS 14 follow these <a href="https://plinkysynth.com/docs/build-guide-black/#install-firmware-mac-m1-os-14-">steps</a>. Then upgrade to Firmware 0.A7 or higher.</li>
    <li><strong>Linux</strong> users follow these <a href="https://plinkysynth.com/docs/build-guide-black/#install-firmware-linux-">steps</a>. Then upgrade to Firmware 0.A7 or higher.</li>
  </ul>
  
  <p>No tunnel of lights (DIY Plinky)?</p>
  
  <ul>
    <li> Double check that all 5 Encoder pins are soldered. The side with 2 pins is the switch for the "click".</li>
  </ul>  



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
