---
title: Blueberry build guide - V1
date: "2024-10-28T21:50:00.000Z"
---

Hello! Welcome to the Blueberry build  guide.
Blueberry is quite a simple build, and fairly beginner friendly. 

<img src="/blueberryspin.gif">

**You will need:** a soldering iron, a Blueberry kit, and a little patience.

Below are most of the parts of the Blueberry kit, with the exception of the Eurorack power cable and  mounting hardware.

![Parts](/blueberry-build-guide/IMG_7215.jpeg)

## Video guide by Meska

Plinky community member extraordinaire Meska has created a step by step video tutorial for soldering Blueberry. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/dIyjt8hb8FQ?si=62L1Ar1QQkfW-f5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The SMD headers - a nice warmup

Let's get the two 'SMD' headers out of the way - one is the small 6 pin socket for the front panel, the other is a chunky 2x5 eurorack power header.

Put a small pillow of solder on a *single* pin on each of the SMD footprints. You don't need much solder - just enough to cover the pad.

<p float="left">
  <img src="/blueberry-build-guide/IMG_7234.jpeg" width="47%" />
  <img src="/blueberry-build-guide/IMG_7237.jpeg" width="40%" />
</p>

now line up each socket and use your iron to heat up the pillow and solder that first pin. It's worth getting the socket nice and straight, centered, and upright while only 1 pin is soldered. Don't bend it! just touch your iron to re-heat the pillow and gently move the socket into place while the solder is melted. Once you're happy with the alignment, solder the rest of the pins. be sure to heat both pad and pin, so that the solder flows nicely onto both. **The power header pins can take quite a bit of heat** - let them warm up before flowing a small amount of solder. If you are using unleaded solder, you may need to turn up the temperature on your soldering iron. Here it is, soldered. 

<p float="left">
  <img src="/blueberry-build-guide/IMG_7235.jpeg" width="42%" />
  <img src="/blueberry-build-guide/IMG_7238.jpeg" width="45%" />
</p>

That's the fiddly bit out the way!

## Placing the hardware (but not soldering it) 
OK Now we're ready to put the 6 sockets into Blueberry! Don't forget the little 6 pin strip - as shown below. **DONT SOLDER ANYTHING YET!** Just plop 'em in place. The stereo pairs of thonkiconns actually share a single hole for the 'ground' pins, so it can be a bit fiddly, but you can do it! I believe in you!

![Loose parts](/blueberry-build-guide/IMG_7239.jpeg)

Why not solder them? You'll see! Now is the exciting moment we get to place the front panel over the top of everything. The thonkis and two delicate switches should all go through the holes, perhaps after a little wiggling and persuasion (good thing you didn't solder them right!). The 6 pin header and the socket you soldered earlier should mesh together beautifully inside the sandwich. This can be the fiddliest bit - don't force it, or you may rip the socket off the front panel! I found a trick is to take the 6 pins out of the main board, and put them into the socket, but super loosely, like this:

![Loose pins](/blueberry-build-guide/IMG_7240.jpeg)

That way, the pins 'dock' into the main board first, then the thonkis, and you can wriggle everything into place.

Take a moment to marvel at your achievement! Double check all the unsoldered pins came through ok, and then, screw the nuts on top of the panel to the thonkis - it's really starting to look like a music thing now! 

![Top view](/blueberry-build-guide/IMG_7216.jpeg)

## OK, NOW you can solder the hardware
At this point you should solder all of the pins poking through the bottom of the board. Don't forget any! Especially the 6 pin header. I've marked every solder point with a yellow arrow in the image below. Just 21 - not that many! **Be careful to avoid melting or disturbing the tiny pre-soldered parts**.

![Not Kittens](/blueberry-build-guide/IMG_7243.jpeg)

## Hardware Victory
My goodness! That was it! Double check you got *all* the solder joints above - are you SURE you got the 6 touch pins? ALL the thonkis? SURE? SURE? OK! - 

All that remains is to tighten the nuts, and perhaps upgrade the software!

## The Software Adventure

Your Blueberry kit should come pre-flashed with firmware, so in theory it should just work straight away without any further ado. If you want, go and read the <a href="docs/blueberry-manual">manual</a>.

However, if you wish to update Blueberry, read on.

First, download the firmware in this file: <a href="buddies-firmware/blueberry_001.uf2">`blueberry_001.uf2`</a>. Patch notes are available on the manual page.

Use a USB-C cable (not included) to plug your computer into Blueberry. You do **not** need Blueberry to be powered from eurorack for this step. 

Blueberry should show up as a USB drive called `RPI-RP2` (on mac, you may find it under `/Volumes/RPI-RP2`). If it does not, try disconnecting the USB cable, holding down the *tiny* button on the main board, just next to the USB connector (hilighted below), while reconnecting the cable - then release the button. If it *still* doesn't show up, make sure your cable has data lines (and isn't just for charging). And if that's definitely ok - maybe check your soldering?

![Boot0](/blueberry-build-guide/IMG_7243_2.jpeg)

Assuming the drive shows up, drag and drop the `blueberry_xxx.uf2` (where xxx is a version number) onto the drive. It should upload the software. 

Assuming all seems well, disconnect it from your PC, carefully connect it to your eurorack system (the power cable can be fitted either way), and -  *Happy blueberry-ing*!

**Note! you will want to calibrate the CV outputs of blueberry.** This is really easy - it just takes two patch cables once you have plugged blueberry into your eurorack system. Find out more in the <a href="docs/blueberry-manual">manual</a>.
