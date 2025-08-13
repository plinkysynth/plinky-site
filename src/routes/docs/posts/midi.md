---
title: "MIDI"
date: "2021-02-01T12:51:00.000Z"
---

## General

Plinky responds to MIDI! 

### TRS MIDI

**On Plinky V3** the MIDI jacks are the leftmost two jacks next to the Audio I/O and the bottom USB port.

- **The TRS MIDI input** is the leftmost TRS jack. The input accepts TRS MIDI Type A or B. 
- **The TRS MIDI output** is the second TRS jack from the left. The output is TRS MIDI Type A (Korg).

**On Plinky+** the MIDI jacks are located on the back panel. 

- **The TRS MIDI input** is located next to the USB jack and can be either Type A or B. 
- **The TRS MIDI output**  is next to the power switch and is TRS MIDI Type A (Korg).

**On Plinky V1 and V2**, you can add TRS MIDI with the 2HP [Expander](../docs/expander-manual). 

The input circuit used on all versions is the [LPZW.modules](https://leipzigwest.org/) [Autocrossover circuit](https://github.com/kay-lpzw/LPZW_TRS_MIDI/). Thank you Kay!

### USB MIDI 

If you connect Plinky to a computer with a USB cable, it will create a MIDI Port as ``plinkysynth``. Plinky will then act as an 8-voice synthesizer. It acts as USB a client, so you need to connect it to your computer or another MIDI host to use the port. Plinky has polyphonic MIDI Note Input and Output.

#### Input
Plinky responds to incoming notes, as well as MIDI Control Changes (CC). These allow you to edit a subset of Plinky's parameters via MIDI in real time. You can play Plinky while MIDI is being sent to it. Plinky will prioritise touch input over MIDI input, so you can jam over a pre-recorded MIDI pattern.

#### Output
Plinky sends polyphonic aftertouch, as well as pressure and position as MIDI Control Changes (CC) for each of its strings.

### Set MIDI Input and Output channels

Plinky sends and listens to MIDI channel 1 by default. 

To set the MIDI I/O channels, use the unprinted pad in the bottom row.

![Shift Top](/manual-images/shift-top.svg) *hold*
![Unprinted](/manual-images/unprinted.svg) *tap*

To change the MIDI input channel, you hold down the shift top button, and while holding it down, select one the unprinted pad. Use the Encoder to select the MIDI input channel, ranging from 1 - 16.

![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Unprinted](/manual-images/unprinted.svg) *tap*

To change the MIDI output channel, you hold down the shift bottom button, and while holding it down, select one the unprinted pad. Use the Encoder to select the MIDI output channel, ranging from 1 - 16.

This setting is stored with each patch. That means you can set and recall it individually for each preset.

## MIDI CCs - Input

Here's a list of all the CC parameters that Plinky listens to.

<div markdown class="three">

<div>

#### Oscillator

| CC | Parameter |
|----|-----------|
| 13 | Shape |
| 4 | Distortion |
|9 |Pitch|
|14 |Interval|
|2|Noise level|
|5|Glide|
|71|Resonance|

&nbsp;

</div>

<div>

#### Arpeggiator

| CC | Parameter |
|----|-----------|
|102|On/off|
|103|Order|
|104|Clock division|
|105|Chance|
|106|Euclid length|
|107|Octaves|

&nbsp;

</div>

<div>

#### Sequencer

| CC | Parameter |
|----|-----------|
|108|Order|
|109|Clock division|
|110|Chance|
|111|Euclid length|
|11|Gate length|
|83|Pattern|
|85|Steps|

&nbsp;

</div>

</div>



<div markdown class="three">

<div>

#### Envelope 1

| CC | Parameter |
|----|-----------|
|3|Sensitivity (LPF amount)|
|73|Attack|
|74|Sustain|
|75|Decay|
|72|Release|

&nbsp;

</div>

<div>

#### Envelope 2

| CC | Parameter |
|----|-----------|
|19|Level|
|20|Attack|
|21|Decay|
|22|Sustain|
|23|Release|

&nbsp;

</div>

<div>

#### FX - Delay

| CC | Parameter |
|----|-----------|
|94|Delay send amt|
|12|Delay time|
|112|Delay pingpong|
|113|Delay wobble|
|95|Delay feedback amt|

&nbsp;

</div>

</div>



<div markdown class="three">

<div>

#### Modulation A B

| CC | Parameter |
|----|-----------|
|24|Offset|
|25|Depth|
|26|Rate|
|27|Offset|
|28|Depth|
|29|Rate|

&nbsp;

</div>

<div>

#### Modulation X Y

| CC | Parameter |
|----|-----------|
|78|Offset|
|77|Depth|
|76|Rate|
|81|Offset|
|80|Depth|
|79|Rate|

&nbsp;

</div>

<div>

#### FX - Reverb

| CC | Parameter |
|----|-----------|
|91|Reverb send amt|
|92|Reverb time|
|93|Reverb shimmer|
|114|Reverb wobble|

&nbsp;

</div>

</div>



<div markdown class="three">

<div>

#### Sampler

| CC | Parameter |
|----|-----------|
|15|Scrub|
|16|Grain size|
|17|Play speed|
|18|Timestretch|
|82|Sample|

&nbsp;

</div>

<div>

#### Sampler Jitter

| CC | Parameter |
|----|-----------|
|116|Jitter position|
|117|Jitter grain size|
|118|Jitter rate|
|119|Jitter pulse|

&nbsp;

</div>

<div>

#### Mixer

| CC | Parameter |
|----|-----------|
|80|Reverb send amt|
|90|Reverb time|
|31|HPF amount|
|7|Synth Level|
|8|Wet / Dry|

&nbsp;

</div>

</div>

## Midi CCs - Output
Plinky supports MIDI out over USB and TRS (since hardware v3, or if you have the Expander). 

Plinky’s implementation has polyphonic aftertouch.

In addition to that, 
- the finger position for each column is sent on CC 32 - 39, 
- and the pressure for each column is sent on CC 40 - 47.


<div markdown class="two">

<img src="/manual-images/Plinky_MIDI-CCs_Out.png" alt="Plinky MIDI CCs Out" style="max-width: 100%;">

<img src="/manual-images/Plinky+_MIDI-CCs_Out.png" alt="Plinky+ MIDI CCs Out" style="max-width: 100%;">

</div>
