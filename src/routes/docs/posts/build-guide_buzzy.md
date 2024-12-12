---
title: Buzzrito build guide - V1
date: "2024-10-28T21:50:00.000Z"
---

Hello! Welcome to the Buzzrito (Buzzy) build  guide.
Buzzy is quite a simple build, the simplest of the 3 buddies, and fairly beginner friendly. 

<img src="/buzzritospin.gif">

**You will need:** a soldering iron, a buzzrito kit, and a little patience.

Below are most of the parts of the Buzzrito kit, with the exception of the Eurorack power cable and  mounting hardware.

![Parts](/buzzrito-build-guide/IMG_7214.jpeg)

## The panel header - a nice warmup

Let's get the 'SMD' header out of the way - the small 6 pin socket for the front panel.

Put a small pillow of solder on a *single* pin on the front panel footprint. You don't need much solder - just enough to cover the pad.

![Solder one pin](/buzzrito-build-guide/IMG_7248.jpeg)

now line up the socket and use your iron to heat up the pillow and solder that first pin. It's worth getting the socket nice and straight, centered, and upright while only 1 pin is soldered. Don't bend it! just touch your iron to re-heat the pillow and gently move the socket into place while the solder is melted. 

I should note that buzzy in particular is *tight* - the pads are barely big enough to accomodate the part. err on the side of the connector being shifted towards the big jack holes, and away from the very fine golden traces under the touch pad. Here's how I lined mine up - you'll notice that I have got some messy solder into the socket holes. I did this to... show you what *NOT* to do, honest. You'll need to clean that up with solder wick later, otherwise you'll struggle to get the panel on. 

![Line it up](/buzzrito-build-guide/IMG_7249.jpeg)

And here it is, soldered. You only actually need to make electrical connection on 'one side' - the other side can just have a tiny amount of solder for rigidity. 

![Solder one side](/buzzrito-build-guide/IMG_7250.jpeg)

Be especially careful on the side with tiny tracks emenating from the connector (shown below) - its ok if you get a bit of solder on the tracks, but you don't want lots, as you'll get shorts. If you want to check, stick some pins into the socket and check for shorts with a multimeter. None of the pins should be connected together. The key is to not use too much solder - just enough, and enough heat to get it to flow. Here's how that side looked for me - not beautiful, but strong, connected, and not shorted:

![Solder the other side](/buzzrito-build-guide/IMG_7251.jpeg)

That's the fiddly bit out the way!

## Soldering the eurorack power pins

Your kit may have come with a 2x5 pin header, or a long single strip of single pins. if the latter, break it into 5, 5 and 6 pin pieces - you'll use the two 5's for the power.

Stick the 2x5 pins into the power cable, thus, to line them up:

![Power pins](/buzzrito-build-guide/IMG_7244.jpeg)

Now, with the cable still attached, put the 5x2 power pins into the back of the main board, where it says 'POWER EITHER WAY'.

Turn it over, and solder one of the pins. Once you are sure everything is flush, solder the rest of the 10 power header pins. **Be careful to avoid melting or disturbing the tiny pre-soldered parts**, and be sure to heat both the pad and the pin before adding solder. These pins are actually the hardest to solder in the entire project, because they are connected to lots of copper inside the board, and will 'suck up' a lot of heat. Don't be afraid to really heat them up, to allow the solder to form a nice joint. Don't just add lots of solder! If you bridge some of the central 6 pins (ie the center 2x3) that's not the end of the world, as they are all 'ground' - but it's ugly! :) It will work though. The 2 pins on each end are +12 and -12, so you dont want to bridge them to the center, lest you short out your eurorack power supply. Take your time, it'll be ok!  

![Power header](/buzzrito-build-guide/IMG_7246.jpeg)

## Placing the hardware (but not soldering it) 
OK Now we're ready to put the 6 sockets into Buzzrito! Don't forget the little 6 pin strip - as shown below. **DONT SOLDER ANYTHING YET!** Just plop 'em in place. The stereo pairs of thonkiconns actually share a single hole for the 'ground' pins, so it can be a bit fiddly, but you can do it! I believe in you!

![Loose parts](/buzzrito-build-guide/IMG_7252.jpeg)

Why not solder them? You'll see! Now is the exciting moment we get to place the front panel over the top of everything. The thonkis should all go through the holes, perhaps after a little wiggling and persuasion (good thing you didn't solder them right!). The 6 pin header and the socket you soldered earlier should mesh together beautifully inside the sandwich. This can be the fiddliest bit - don't force it, or you may rip the socket off the front panel! I found a trick is to take the 6 pins out of the main board, and put them into the socket, but super loosely, like this:

![Loose pins](/buzzrito-build-guide/IMG_7253.jpeg)

That way, the pins 'dock' into the main board first, then the thonkis, and you can wriggle everything into place.

Take a moment to marvel at your achievement! Double check all the unsoldered pins came through ok, and then, screw the nuts on top of the panel to the thonkis - it's really starting to look like a music thing now! 

![Top view](/buzzrito-build-guide/IMG_7217.jpeg)

## OK, NOW you can solder the hardware
At this point you should solder all of the pins poking through the bottom of the board. Don't forget any! Especially the 6 pin header. I've marked every solder point with a yellow arrow in the image below. Just 21 - not that many! **Be careful to avoid melting or disturbing the tiny pre-soldered parts**.

![Not Kittens](/buzzrito-build-guide/IMG_7255.jpeg)

## Hardware Victory
My goodness! That was it! Double check you got *all* the solder joints above - are you SURE you got the 6 touch pins? ALL the thonkis? SURE? SURE? OK! - 

All that remains is to tighten the nuts, and perhaps upgrade the software!

## The Software Adventure

Your Buzzrito kit should come pre-flashed with firmware, so in theory it should just work straight away without any further ado. If you want, go and read the <a href="docs/buzzrito-manual">manual</a>.

However, if you wish to update Buzzrito, read on.

First, download the firmware in this file: <a href="buddies-firmware/buzzrito_001.uf2">`buzzrito_001.uf2`</a>. Patch notes are available on the manual page.

Use a USB-C cable (not included) to plug your computer into Buzzrito. You do **not** need Buzzrito to be powered from eurorack for this step. 

Buzzy should show up as a USB drive called `RPI-RP2` (on mac, you may find it under `/Volumes/RPI-RP2`). If it does not, try disconnecting the USB cable, holding down the *tiny* button on the main board, just next to the USB connector (hilighted below), while reconnecting the cable - then release the button. If it *still* doesn't show up, make sure your cable has data lines (and isn't just for charging). And if that's definitely ok - maybe check your soldering?

![Boot0](/buzzrito-build-guide/IMG_7255_2.jpeg)

Assuming the drive shows up, drag and drop the `buzzrito_xxx.uf2` (where xxx is a version number) onto the drive. It should upload the software, and after a second, some LEDs should light up. That's a good sign! that means Buzzrito is working! 

Assuming all seems well, disconnect it from your PC, carefully connect it to your eurorack system (the power cable can be fitted either way), and -  *Happy buzzing*!

If you want, go and read the <a href="docs/buzzrito-manual">manual</a>.
