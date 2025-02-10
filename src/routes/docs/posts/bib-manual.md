---
title: Bib Manual
date: "2024-09-07T08:38:00.000Z"
---
## Meet Bib, shy spider with a big heart... and a talent for stereo FX

<img src="/bibspin.gif">

If you're looking for the build guide, go <a href="docs/build-guide_bib">here</a>.

The latest firmware is available to download at the bottom of this page. 

## Video demo and Jam by izaak from toadstool.tech

<iframe width="560" height="315" src="https://www.youtube.com/embed/7x9_dgjiCaw?si=FpOSyD1-1ArDOMWt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="Video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c-n1z9zD5Pw?si=tRR9bGGUOqtbDU-O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Overview

Bib is the first collaboration between Alex Evans - creator of Plinky! - and Ray Yokell aka CrazyEmperor893 of <a href="https://crey.space">The crey emporium</a>. 

Bib is a shy spider with a big heart. She first drives the signal (red page), then feeds it through a stereo delay (green page), then reverb (blue page), then finally a wet/dry mix and final output volume control (white page). 

Bib has a rear-panel 6 pin audio header compatible with Intellijel and other makers' case jacks and jack modules, one TRS stereo input and one TRS stereo output which can drive line or headphones with ease. 

Tap on the spider to set the delay tempo, long press (pressure sensitive!) to set the reverb shimmer amount, and drag across the touch strip at the bottom of the panel to influence the delay, like touching the tape of a tape delay. 

Simply select a page to edit by touching one of the four sections on the touch strip, then twist the knobs to change the two parameters associated with each page.

You can clock the delay by feeding a regular trigger into the CV input, or assign the CV input as a modulation source by tapping the strip 3 times (led will flash rainbow) then turning any knob(s) you want it to control.

## One page cheat sheet

<a href="bib_manual.png" target="blank"><img src="bib_manual.png"></a>

## Color editor

If you don't like the default colours for the Bib LED knob, and your bib is on [firmware 007 or later](#patch-notes-versions), you can edit them here! Simply connect Bib to your browser via a usb-C cable, and assuming your browser supports WebUSB (you can check [here](https://caniuse.com/?search=webusb)) you can use the UI below to edit the colours live. After you've finished editing, wait at least 5 seconds before powering down your bib (so that it can save your changes to its flash storage).

(note - if this editor is annoyingly small in your browser, click [here](/bib_palette.html) to open in its own page)

<iframe id="embedded-frame" src="/bib_palette.html" style="border: none;" width="100%"></iframe>
<script>
  window.addEventListener('message', function(event) {
    console.log(event.data);
    if (event.data && event.data.height) {
      const iframe = document.getElementById('embedded-frame');
      iframe.style.height = event.data.height + 'px';
    }
  });
</script>

## Line-in and out pinout

Bib has a 6 pin connector on her back, that can be used to send stereo line level signals in and out. (Note that europower is still required). The pinout is compatible with some eurorack cases, for example the Intellijel palette cases, which have quarter inch TRS jack sockets. These are often used as mono balanced connections, but with Bib they become stereo unbalanced input and output. The pinout, should you wish to make your own adapter or cable, is below:

<img src="/bib_jacks_pinout.webp">

## Enabling and Disabling the line-in connection

Bib has stereo eurorack level inputs and outputs on its front panel, but also sports a 6 pin header on its back for line level stereo in and out. These are compatible, for example, with the intellijel palette cases, allowing use of two case mounted TRS jacks as stereo in/out. 

However, the line-in connection when unused can, in some cases and environments, pick up a bit of noise. For that reason, we added an option in the Bib software to enable and disable this line-in connection. If you're not using the line-in feature, you can disable it by pressing and holding firmly on both the spider and the slider for 5 or more seconds. 

After 2 seconds, the knob will pulse white, indicating that all settings have been reset. Keep holding! After 5 seconds, it will pulse either red (line-in disabled) or green (line-in enabled). Release your fingers. Hold again for 5 seconds to toggle as needed.

This feature was added in version 3 of the firmware, which is the version flashed to all Thonk bibs and crey.emporium bibs sold *after* knobconn 24.

The line-out and front panel connections are always enabled, ie they are not affected by this setting.

## Firmware

First, download the latest firmware in this file: <a href="buddies-firmware/bib_007.uf2">`bib_007.uf2`</a>.
Use a USB-C cable (not included) to plug your computer into Bib. You do **not** need Bib to be powered from eurorack for this step. 

Bib should show up as a USB drive called `RPI-RP2` (on mac, you may find it under `/Volumes/RPI-RP2`). If it does not, try disconnecting the USB cable, holding down the *tiny* button on the digital board, just  opposite to the USB connector (hilighted below), while reconnecting the cable - then release the button. If it *still* doesn't show up, make sure your cable has data lines (and isn't just for charging).

Drag and drop or otherwise copy the downloaded file onto the RPI-RP2 folder, and after a second Bib should reboot, flashing white and then glowing red. You're ready to bib!

## Patch notes & versions

### Beta versions

## v7 - End October 2024 - 'Color Editor edition' 
[Download here: bib_007.uf2](buddies-firmware/bib_007.uf2)
* Add WebUSB support and color palette editing

### Current release version

## v6 - End October 2024 - 'Oops edition' 
[Download here: bib_006.uf2](buddies-firmware/bib_006.uf2)
* Allow for slightly longer presses on the slider to count as a tap
* BUGFIX! Ooops, some grotty 'grumbling' had crept into the delay. much better now.
* BUGFIX! Ooops, the tape stop and tape speed wobble effects were broken in 005. fixed!

### Older versions

## v5 - Start October 2024 - 'Timo edition'
[Download here: bib_005.uf2](buddies-firmware/bib_005.uf2)
* The touch sensitivity is improved, and some users reported the spider 'locking up' and becoming unresponsive after a while, which should be fixed. 

## v4 - September 2024 - 'Toadstool edition' 
[Download here: bib_004.uf2](buddies-firmware/bib_004.uf2)
* The spider now has different functions depending on the mode: 
    * in red it toggles between a new wavefolder / old overdrive 
    * in green it does tap tempo as before
    * in blue it sets shimmer amount as before
    * in white it is a new 'dub mute' feature: while holding temporarily it sets main red = OFF (mute input) and green feedback = FULL (freeze the delay).
* shimmer is now cyan, not peach; and the delay mode's blue shifts from blue to cyan to show how much shimmer is in at all times
* new wavefolder mode! in drive mode (red), the red color turns pink when in wavefolder mode. you tap spider to toggle (in red mode).
* the drive & wavefolder are 2x more oversampled than before so feel less digital
* the touch strip only changes mode on tap, not swipe (less confusing)
* the knob glows brighter by default
* rebalanced the parameter curves for the delay, now the 'short end' of delay time is super fun for KS type string sounds (but mad, because, bib)

## v3 - August 2024 - 'Thonk edition'
[Download here: bib_003.uf2](buddies-firmware/bib_003.uf2)
* add visual feedback on factory reset, and ability to switch on/off the line input
* this is the version flashed onto first run Thonk kits

## v2 - July 2024 - 'Knobconn edition'
[Download here: bib_002.uf2](buddies-firmware/bib_002.uf2)
* fixed a 'spider pressure overflow' 16 bit bug. this is the earliest usable firmware

