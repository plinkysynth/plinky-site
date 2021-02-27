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
