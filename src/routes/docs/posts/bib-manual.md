---
title: Bib Manual
date: "2024-09-07T08:38:00.000Z"
---
## Meet Bib, shy spider with a big heart... and a talent for stereo FX

<img src="/bibspin.gif">

If you're looking for the build guide, go <a href="docs/build-guide_bib">here</a>.

The latest firmware is available to download <a href="docs/build-guide_bib/#the-software-adventure">here</a> along with instructions on how to flash it onto your Bib. 

## Overview

Bib is the first collaboration between Alex Evans - creator of Plinky! - and Ray Yokell aka CrazyEmperor893 of <a href="https://crey.space">The crey emporium</a>. 

Bib is a shy spider with a big heart. She first drives the signal (red page), then feeds it through a stereo delay (green page), then reverb (blue page), then finally a wet/dry mix and final output volume control (white page). 

Bib has a rear-panel 6 pin audio header compatible with Intellijel and other makers' case jacks and jack modules, one TRS stereo input and one TRS stereo output which can drive line or headphones with ease. 

Tap on the spider to set the delay tempo, long press (pressure sensitive!) to set the reverb shimmer amount, and drag across the touch strip at the bottom of the panel to influence the delay, like touching the tape of a tape delay. 

Simply select a page to edit by touching one of the four sections on the touch strip, then twist the knobs to change the two parameters associated with each page.

You can clock the delay by feeding a regular trigger into the CV input, or assign the CV input as a modulation source by tapping the strip 3 times (led will flash rainbow) then turning any knob(s) you want it to control.

## One page cheat sheet

<a href="bib_manual.png" target="blank"><img src="bib_manual.png"></a>

## Enabling and Disabling the line-in connection

Bib has stereo eurorack level inputs and outputs on its front panel, but also sports a 6 pin header on its back for line level stereo in and out. These are compatible, for example, with the intellijel palette cases, allowing use of two case mounted TRS jacks as stereo in/out. 

However, the line-in connection when unused can, in some cases and environments, pick up a bit of noise. For that reason, we added an option in the Bib software to enable and disable this line-in connection. If you're not using the line-in feature, you can disable the line-in connection by pressing and holding firmly on both the spider and the slider for 5 or more seconds. 

After 2 seconds, the knob will pulse white, indicating that all settings have been reset. Keep holding! After 5 seconds, it will pulse either red (line-in disabled) or green (line-in enabled). Release your fingers. Hold again for 5 seconds to toggle as needed.

This feature was added in version 3 of the firmware, which is the version flashed to all Thonk bibs and crey.emporium bibs sold *after* knobconn 24.

The line-out and front panel connections are always enabled, ie they are not affected by this setting.
