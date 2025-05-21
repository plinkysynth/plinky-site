---
title: FAQ
date: "2021-01-24T08:38:00.000Z"
---

Come help us out with the FAQ on the Discord!

## General first-timers

### What is the blinking light at the top left?

That is the current step indicator of the sequencer. It blinks in time to the BPM.

### Where is the LPF?

You can change the LPF under "Sensitivity". It is tied to the pressure sensitivity by default.

### Can I save presets?

Yes! Just hold the preset button (the paper icon) and the lights on the left are your presets. Hold to save.

### How about sequences?

Yes! Same deal, the lights on the right are sequences when you hold the preset button.

## Sound

### What sampling rate is Plinky running at?

Plinky runs at 32kHz stereo.

### Oscillator shapes

When looking at the SHAPE option, you can sweep through several waveforms:

- Below 0 (-100% to 0%) are algorithmic oscillator modes (sine, saw, square).
- At 0, the mode is a pure supersaw.
- Above 0 (0% to +100%) you can find a wavetable constructed by sampling a Polivoks synthesizer running through a Sherman Filterbank, sampled through an API 512c preamp and 550A EQ into RME A/D.

Modulation is locked at these 3 stages relative to the base value. For example, if you set the base value above 0 and assign an LFO to the shape, the LFO will cause a sweep through the wavetable modes. At 0, modulation will affect the supersaw. Below 0, it will sweep through the algorithmic oscillator.

## Tech specs

### What is the CPU in Plinky?

It's a STM32l476VGT6 (or 475).

## Mac

### Install firmware (Mac M1+ / OS 14+)

In UF2 (tunnel of light) mode, Plinky has been unhappy to automatically mount on some Mac OS versions (14 and higher). 

Upgrading to [Firmware 0.A7](https://plinkysynth.com/firmware/) fixes this issue. To upgrade, mount the drive using the terminal.

- Make sure your USB cable can transmit data
- Plug the USB cable into Plinky. 
- Hold the Encoder (rightmost knob) on Plinky. 
- With Encoder held, plug the USB cable into your Mac. 
- Plinky should come up in UF2 (tunnel of light) mode, with a black screen. 
- You can release the encoder.

Open a terminal, and execute 
```
diskutil list
```
Plinky should be listed as a device. It looks like this or similar:
```
/dev/disk4 (external, physical)
#:     TYPE NAME         SIZE       IDENTIFIER
0:          PLINKY      *100.7 MB   disk4
```
The disk number is the information you are looking for.
Mount Plinky manually via the command line, and adjust the disk number if needed:
```
sudo mkdir /Volumes/USB
sudo mount -t msdos /dev/disk4 /Volumes/USB
```
You should see the Plinky drive with the UF2 files. You can now either backup the files to your Mac, or replace them with new firmware or presets.

## Linux

### Install firmware (Linux)

Here are the steps required to update your firmware to the latest build under Linux. This was tested on Raspberry Pi 4 running Raspian.

Upgrading to [Firmware 0.A7](https://plinkysynth.com/firmware/) fixes the USB drive not mounting automatically. To upgrade, mount the drive using the terminal.

Download the latest UF2 file from the [GitHub Repository](https://github.com/plinkysynth/plinky_public) page. To do this from the command line, open a terminal and enter

```
wget https://plinkysynth.com/firmware/stable/CURRENT.uf2
```

- With Plinky powered off, hold down the encoder (the rightmost knob)
- While still held down, connect Plinky to a PC or Mac USB port
- The screen remains blank, and you’ll see a tunnel of flashing LEDs
- Mount Plinky as USB Drive from the terminal:

```
sudo mkdir /mnt/plinky 
sudo mount /dev/sda /mnt/plinky
ls /mnt/plinky
```

You should see the content of Plinky listed as follows:

```
BOOTLOAD.UF2  CURRENT.UF2  INFO_UF2.TXT  SAMPLE0.UF2  SAMPLE2.UF2  SAMPLE4.UF2  SAMPLE6.UF2 
 CALIB.UF2     INDEX.HTM    PRESETS.UF2   SAMPLE1.UF2  SAMPLE3.UF2  SAMPLE5.UF2  SAMPLE7.UF2
```

Copy the firmware to Plinky.

```
sudo cp -f CURRENT.uf2 /mnt/plinky/
```

The blinking LEDs will change to a flashing pattern. Once that is done, press the encoder once to reset Plinky.


