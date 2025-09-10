<script>
  import BigArea from "../components/BigArea.svelte";
  import Grid from "../components/Grid.svelte";
</script>

<svelte:head>
  <title>Plinky - Wavetables</title>
 	<meta property="og:url" content="https://www.plinkysynth.com/wavetables" />
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
    <h1>Wavetables</h1>
  
    <p>Plinky and Plinky+ allow you to replace the wavetable in the positive range (0 - 100%) of the <a href="https://plinkysynth.com/docs/manual#sound-synthesizer-">Shape parameter</a>. 
    <br>Install <code>wavetab.uf2</code> in Tunnel-of-Lights Mode - instructions below.</p>

    <p><strong>NOTE:</strong>  Replacing the wavetable will alter the sound of your Synth presets.
    <br>To revert to the default wavetable, install Wavetable 01 Original by Miunau.</p>

    <Grid>
      <BigArea>
        <iframe width="624" title="" height="351" src="https://www.youtube.com/embed/xCfGhoqigv8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src="/wavetables/Wavetable_11_Spectral_Triangle_Meska.png" alt="Wavetable 11 Spectral Triangle Meska" style="max-width: 100%;">

        <h2>Spectral Triangle</h2>
        <p>Created by <a href="https://www.youtube.com/@Meska_Statik" target="_blank">Meska</a>.</p> 
        <p>This is a spectral triangle. The first half of the wavetable is a triangle doing amplitude modulation (AM) on itself. The other half is the same wave run through a spectral processor.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_11_Spectral_Triangle_Meska/Wavetable_11_Spectral_Triangle_Meska.zip">Download</a>
      </BigArea>

      <BigArea>
        <iframe width="624" title="" height="351" src="https://www.youtube.com/embed/ecyK2lhCuZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src="/wavetables/Wavetable_10_VacuumTube_Meska.png" alt="Wavetable 10 Vacuum Tube Meska" style="max-width: 100%;">

        <h2>Vacuum Tube</h2>
        <p>Created by <a href="https://www.youtube.com/@Meska_Statik" target="_blank">Meska</a>.</p> 
        <p>This set goes from phase-modulated sine wave to vacuum tube feedback. It's a phase-mod sine (around 30%), then clipped by the vacuum tube, adding fedback. Around 70% you have a full-on tube feed, without any input. And after a selection of feeback waves, back to a phased sine wave.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_10_VacuumTube_Meska/Wavetable_10_VacuumTube_Meska.zip">Download</a>
      </BigArea> 

      <BigArea>
        <iframe width="624" title="" height="351" src="https://www.youtube.com/embed/I1WheaLFfVw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src="/wavetables/Wavetable_09_Wavefolder_Meska.png" alt="Wavetable 10 Vacuum Tube Meska" style="max-width: 100%;">

        <h2>Wavefolder</h2>
        <p>Created by <a href="https://www.youtube.com/@Meska_Statik" target="_blank">Meska</a>.</p> 
        <p>If you want to try the wavetables I have made for Plinky these last couple of days, here they are. Its sine to wavefolding, to morphing wave-folded, to feedback and back to wavefolded sine. Perfect for smooth arpeggios and heavy basslines.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_09_Wavefolder_Meska/Wavetable_09_Wavefolder_Meska.zip">Download</a>
      </BigArea> 

      <BigArea>
        <img src="/wavetables/Wavetable_08_Phase_Vowels.png" alt="Wavetable 10 Vacuum Tube Meska" style="max-width: 100%;">

        <h2>Phase Vowels</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p> 
        <p>This set was generated with the Phaseshaping Oscillator of <a href="https://fors.fm/chiral" target="_blank">Fors Chiral</a>. Chiral is a great Max for Live plugin developed by <a href="https://mtsn.se/" target="_blank">Ess Mattisson</a> and <a href="https://felishaledesma.com/" target="_blank">Felisha Ledesma</a>, and it has a feature that lets you export single cycle waveshapes.
        This set sweeps through the overtones in a manner that results in very vowel-y, vocal sounds.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_08_Phase_Vowels/Wavetable_08_Phase_Vowels.zip">Download</a>
      </BigArea> 

      <BigArea>
        <img src="/wavetables/Wavetable_07_Additive_Complex.png" alt="Wavetable 07 Additive Complex" style="max-width: 100%;">

        <h2>Additive Complex</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p> 
        <p>This set was generated with an additive generator. Think of it working like a drawbar organ, in that it lets you set an individual volume for each overtone / harmonic. 
        In this set, the overtones for the waves were randomized. The result is the most varied wavetable set of the ones generated using the additive method, however in comparison to the FM wavetable banks, it still remains relatively mild and suitable for chords and harmonies.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_07_Additive_Complex/Wavetable_07_Additive_Complex.zip">Download</a>
      </BigArea>  

      <BigArea>
        <img src="/wavetables/Wavetable_06_Additive_Drawbar.png" alt="Wavetable 06 Additive Drawbar" style="max-width: 100%;">

        <h2>Additive Drawbar</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p>
        <p>This set was generated with an additive generator. Think of it working like a drawbar organ, in that it lets you set an individual volume for each overtone / harmonic. 
        In this set, the waves resemble organ tones, each with an individual mix of overtones.
        In higher registers, this bank has an organ sound to it.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_06_Additive_Drawbar/Wavetable_06_Additive_Drawbar.zip">Download</a>
      </BigArea>  

      <BigArea>
        <img src="/wavetables/Wavetable_05_FM_Complex.png" alt="Wavetable 05 FM Complex" style="max-width: 100%;">

        <h2>FM Complex</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p> 
        <p>This set was generated with an FM generator. The one used here was two-operator, but with individual waveforms for both and a number of interesting offset and drive options. 
        In this set, the waves were designed to have stronger individual characteristics, like pulses, edges and intervals within the wave. The resulting sounds are interesting to use in achord context, as they bring their own harmonic material to the table. Some of the waveforms tend to sound glassy, others overtone-rich like C64 variants of square waveforms.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_05_FM_Complex/Wavetable_05_FM_Complex.zip">Download</a>
      </BigArea>  

      <BigArea>
        <img src="/wavetables/Wavetable_04_FM_Overtones.png" alt="Wavetable 04 FM Overtones" style="max-width: 100%;">

        <h2>FM Overtones</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p> 
        <p>This set was generated with an FM generator. The one used here was two-operator, but with individual waveforms for both and a number of interesting offset and drive options. 
        In this set, the waves were chosen for their rich overtones, making sweeps through the waveforms more variable in timbre. The resulting sounds have an emphasis in midrange harmonics, and can have a sparkly top end. This set of waves has strong vibes of retro-classic 8-bit gaming.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_04_FM_Overtones/Wavetable_04_FM_Overtones.zip">Download</a>
      </BigArea>  

      <BigArea>
        <img src="/wavetables/Wavetable_03_FM_Harmonics.png" alt="Wavetable 03 FM Harmonics" style="max-width: 100%;">

        <h2>FM Harmonics</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p>
        <p>This set was generated with an FM generator. The one used here was two-operator, but with individual waveforms for both and a number of interesting offset and drive options. 
        In this set, the waves were designed to retain a strong fundamental, in order to keep them suitable for playing harmonies. The resulting sounds can be bright, depending on how you set the lowpass gate / touch sensitivity on Plinky. Some of the waveforms tend to be more nasal, while others have a richer sound to them.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_03_FM_Harmonics/Wavetable_03_FM_Harmonics.zip">Download</a>
      </BigArea>  

      <BigArea>
        <img src="/wavetables/Wavetable_02_Additive_Harmonics.png" alt="Wavetable 02 Additive Harmonics" style="max-width: 100%;">

        <h2>Additive Harmonics</h2>
        <p>Created by <a href="https://makingsoundmachines.com/" target="_blank">Making Sound Machines</a>.</p> 
        <p>This set was generated with an additive generator. Think of it working like a drawbar organ, in that it lets you set an individual volume for each overtone / harmonic. 
        In this set, the waves were designed to add just one or two specific overtones. The result is sonically similar to a bandpass filter, emphasising the root frequency and boosting one or a couple narrow bands from the spectrum. 
        If you have a parameter or the encoder on Plinky set to the shape parameter, you can simulate sweeping through the overtones with this wavetable set.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_02_Additive_Harmonics/Wavetable_02_Additive_Harmonics.zip">Download</a>
      </BigArea> 

      <BigArea>
        <img src="/wavetables/Wavetable_01_Original_Miunau.png" alt="Wavetable 01 Original Miunau" style="max-width: 100%;">

        <h2>Original (Default)</h2>
        <p>Created by <a href="https://miunau.com/" target="_blank">Miunau</a>.</p> 
        <p>This is the default set of waveforms that ship with Plinky and Plinky+. Install this set if you want to revert to the default wavetable and the classic Plinky sound.</p>
        <a class="button" target="_blank" href="/wavetables/Wavetable_01_Original_Miunau/Wavetable_01_Original_Miunau.zip">Download</a>
      </BigArea> 

    </Grid>


  <h2>Plinky &ndash; Wavetable install instructions</h2>
  
  <p>Installing a wavetable takes only a few moments:</p>

  <ul>
    <li>Unplug all cables from Plinky</li>
    <li>Connect a USB cable to your Plinky</li>
    <li>Do not power from Eurorack at the same time, and use only one USB port</li>
    <li>Hold down the encoder (rightmost knob), and plug the USB cable into your computer</li>
  </ul>

  <p>Plinky will show up as a drive and you should see the "tunnel of lights" effect on Plinky's LEDs.</p>

  <ul>
    <li>Drag and drop <code>wavetab.uf2</code> to the drive. Make sure the file is called <code>wavetab.uf2</code> - <b>do not rename.</b></li>
    <li>While flashing, the LEDs will flicker. This is normal.</li>
    <li>To finish, just click the encoder again. Plinky will boot up and you should see the correct version number.</li>
  </ul>
  
  <img src="/build-guide-black/Plinky_Build-Guide_2610.jpg" alt="Plinky in Tunnel of Lights (UF2) Mode" width="49%">
  <img src="/build-guide-black/Plinky_Build-FW_Update.jpg" alt="Plinky Firmware Update with UF2 File" width="49%">

  <h2>Plinky+ &ndash; Wavetable install instructions</h2>
  
  <p>Wavetables for Plinky and Plinky+ are cross-compatible.</p>

  <ul>
    <li>Unplug all cables from Plinky+</li>
    <li>With Plinky+ powered off, connect Plinky+ to a power source (PC or Mac USB port, or USB power adapter)</li>
    <li>Hold down the Encoder, and with it held down, press the on/off button to turn Plinky+ on</li>
    <li>The screen remains blank, and you’ll see a tunnel of flashing LEDs</li>
    <li>Plinky should show up on your PC as a USB Drive</li>
    <li>Drag and drop the <code>wavetab.uf2</code> file onto the Plinky USB Drive</li>
  </ul>

  <img src="/build-guide-plus/Plinky+_Build-Guide_0142.jpg" alt="Plinky+ in Tunnel of Lights (UF2) Mode" width="49%">
  <img src="/build-guide-plus/Plinky+_Build-FW_Update.jpg" alt="Plinky+ Firmware Update with UF2 File" width="49%">

  <p>USB drive not showing up?</p>
  
  <ul>
    <li>Make sure your cable can transmit data. Try another cable.</li>
    <li><strong>Mac M1 / M2</strong> users on MacOS 14 follow these <a href="https://plinkysynth.com/docs/build-guide-black/#install-firmware-mac-m1-os-14-">steps</a>. Then upgrade to Firmware 0.A7 or higher.</li>
    <li><strong>Linux</strong> users follow these <a href="https://plinkysynth.com/docs/build-guide-black/#install-firmware-linux-">steps</a>. Then upgrade to Firmware 0.A7 or higher.</li>
  </ul>

  </div>