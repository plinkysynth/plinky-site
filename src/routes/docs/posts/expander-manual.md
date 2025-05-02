---
title: Plinky Expander Manual
date: "2021-01-24T08:38:00.000Z"
---

The Plinky Expander is a 2HP module that offers extra functionality when using Plinky in your Eurorack. 

It adds four additional CV outputs to connect with the rest of your Eurorack setup, as well as a frontside USB port and TRS MIDI allowing you to access these ports when Plinky is rack mounted.

* **TRS MIDI Input** </br> Supports both Type A (Korg) and B (Arturia)

* **TRS MIDI Output** </br> Supports Type A (Korg)

* **USB C** </br> Edit patches and interface with MIDI over USB, and update Firmware with Plinky in the rack. </br> Note that you can not power Plinky from this port.

* **A  B  X  Y  Outputs** </br> Output Plinky‘s A B X Y modulation as CV

The 2HP Expander is an updated revision of the classic [4HP DIY Plinky Expander](/docs/expander-build-guide), now available as a factory-built and tested module offering the same features in a more compact form factor. 

This version is compatible with [Plinky v3 (black)](/docs/build-guide-black) and [Plinky v2 (blue)](/docs/build-guide-blue). For compatibility with [Plinky v1 (green)](/docs/build-guide), you have to do a modification on your Plinky Expander port [as described here](/docs/expander-build-guide#for-v1-plinkies).

<img src="/expander-manual/Plinky_Expander_2HP.png" alt="Plinky Expander 2HP - Technical drawing" style="max-width: 100%;">

## Connect and Power
To connect Plinky with the Expander and use them both in your Eurorack setup, take the following steps:

* On your assembled Plinky, remove the back plate including the four hex standoffs
* Connect Plinky and the Expander with a 2x8 ribbon cable
* Connect Plinky to Eurorack power with a 2x8 ribbon cable
* Connect the Expander to Eurorack power the the 2x5 ribbon cable

The Expander's power consumption is
* 8 mA +12V
* 15 mA -12V
* 0 mA 5V

### Remove the back plate

Plinky fits in standard Eurorack rails. On your assembled Plinky, remove all connected cables. Unscrew the four black M3 Phillips screws in each of the four corners of the front panel, and remove the back panel including the four hex standoffs. Turn Plinky over.

<img src="/build-guide-black/Plinky_Build-Guide_2562.jpg" alt="Remove the back panel" style="max-width: 100%;">

### Connect Plinky with the Expander
On the backside of Plinky, there is a cutout in the middle of the PCB that houses an angled 2x8 connector, labelled "Don’t plug Power here. It’s an Expander port." 

Plug in the broad 2x8 ribbon cable. Both the cable and socket are keyed. If you have trouble fitting the connector through the slot, you can remove the plastic strain relief on one side of the cable using snipe-nosed pliers. On the expander, plug the cable into the angled 2x8 pin header labelled "From Plinky. Do not Power." The red stripe on the ribbon cable needs to match the Red Stripe mark on both PCBs.

<img src="/expander-manual/Plinky_Expander_2HP_Connections.png" alt="Plinky Expander 2HP - Technical drawing" style="max-width: 100%;">

### Connect Plinky to Eurorack power
On the bottom of Plinky, find the angled 2x8 power socket, labelled "Eurorack power". Plinky comes with a broad 2x8 ribbon cable to connect it to a -12V / +12V Eurorack power supply. Use the ribbon cable to connect the 2x8 pin header to the bus board of your Eurorack case. The red stripe on the ribbon cable needs to match the Red Stripe mark on both Plinky and bus board.Do not power Plinky from its onboard USB ports and Eurorack power at the same time. When powered from Eurorack power, use the USB port on the Expander. It transmits MIDI and Data, but does not power Plinky.

Do not power Plinky from its onboard USB ports and Eurorack power at the same time. When powered from Eurorack power, use the USB port on the Expander. It transmits MIDI and Data, but does not power Plinky.

### Connect the Expander to Eurorack power
The Expander has an angled 2x5 pin header, labelled "Power". A slim 2x5 ribbon cable is included. Use it to connect the 2x5 pin header to the bus board of your Eurorack case. Again, the red stripe on the ribbon cable needs to match the Red Stripe mark on both Expander and bus board.


## Using Plinky with Eurorack
Plinky offers dedicated CV inputs and outputs to communicate with modular gear. The implementation for gates differs slightly from what’s usual in Eurorack, so here is how you set it up as a Eurorack oscillator:

![Preset](/manual-images/preset.svg) *tap*  **Select a patch in Preset Mode**. Tap or hold the preset pad, then tap a main pad to select a preset (left 32 pads). An initialized patch or Grain Blanc Bank works great for this purpose. Tap the preset pad again to exit.

![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Arp/Latch](/manual-images/arp--latch.svg) *tap*

Enable latch by holding Shift Down and tapping the Arp pad. This switches the latch on or off. Set it to ON. Now played notes will sustain even when you take your fingers off plinky.
</br>This setting will save with your preset.
</br>Press the lowest pad. you hear a drone.


Using a Eurorack Sequencer or CV capable keyboard such as the Arturia Keystep as a CV source:

- Patch gate out from your sequencer or keyboard to gate in on Plinky. The drone goes away.
- Patch V/oct CV out from your sequencer or keyboard to pitch CV in on Plinky.

Play the Eurorack Sequencer, or play keys on the CV capable keyboard so it outputs V/oct CV and gates.
The V/oct CV pitches the drone on Plinky around. Gate opens the lowpass gate. Some things to explore:

- While the Sequencer sends an open gate, tap another pad and your notes will be transposed.
- While the Sequencer sends an open gate, tap two notes on Plinky‘s surface and you can have chords.

Most presets are not latched by default. But if you set Latch to ON, it will be saved with the preset. 
Each time you power cycle your case, unpatch the gate cable and press the lowest pad, once, to start the drone.


## Modulation A, B, X and Y
The Bottom four jacks on the expander output the A, B, X and Y modulation as CV with a -5V to 5V range. On Plinky, two rows of pads control the parameters for the A, B, X and Y modulators. Each of the rows are split, so that *SHIFT TOP* and *SHIFT BOTTOM* access one of the two inputs.

<div>

![Shift Top](/manual-images/shift-top.svg) *hold*
![AB SV Level](/manual-images/a-b-cv-level.svg)
![Offset](/manual-images/offset.svg)
![LFO Depth](/manual-images/lfo--depth.svg)
![LFO Rate](/manual-images/lfo--rate.svg)
![LFO Shape](/manual-images/lfo--shape.svg)
![LFO Symmetry](/manual-images/lfo--symmetry.svg) *tap*

</div>

* CV A *SHIFT TOP* on the A/B row (pictured)
* CV B *SHIFT BOTTOM* on the A/B row
* CV X *SHIFT TOP* on the X/Y row
* CV Y *SHIFT BOTTOM* on the X/Y row

### LFOs & Knobs
![LFO Depth](/manual-images/lfo--depth.svg)
![LFO Rate](/manual-images/lfo--rate.svg)
![LFO Shape](/manual-images/lfo--shape.svg)
![LFO Symmetry](/manual-images/lfo--symmetry.svg)
Each of the A, B, X, or Y modulators has a built in LFO that is added on top so that the modulation sources can be used without an incoming signal on the front panel jacks. Modulators A and B correspond to knobs A & B, which offset these two values.

#### CV Level
![AB CV Level](/manual-images/a-b-cv-level.svg)
![XY CV Level](/manual-images/x-y-cv-level.svg)
These pads control an attenuator for the signal coming from the A, B, X, or Y CV input jacks on Plinky's front panel. Turn this up if you want to use the incoming CV as modulation, and forward the CV coming in from the jacks on Plinky‘s panel to the Expander CV outs.

#### Offset
![Offset](/manual-images/offset.svg) This parameter offsets the CV and / or LFO. Imagine this as a constant voltage that is being added (or subtracted) from the sum of the A, B, X, or Y CV input and the LFO.Set this to add or subtract a constant voltage from the Expander‘s A, B, X, or Y CV output

#### LFO Depth
![LFO Depth](/manual-images/lfo--depth.svg) This control acts as an attenuator for the internal LFOs. The default level is zero, so turn this up if you want an LFO for modulation and output it on the Expander‘s A, B, X, or Y CV out. The value of this parameter determines the LFO amplitude on the CV output.

#### LFO Rate
![LFO Rate](/manual-images/lfo--rate.svg) Controls the rate of the internal LFO. The LFO rates can range from milliseconds at +100% to 20 seconds at -100%. Turn this up if you want the LFO for modulation and  on the Expander‘s CV output to go faster, or down if you want it to go slower.

#### LFO Shape
![LFO Shape](/manual-images/lfo--shape.svg) This parameter sets the shape of the LFO.

##### The following shapes are available:

* Triangle
* Sine
* SmthRnd (Smooth Random)
* StepRnd (Stepped Random)
* BiSquare (Bipolar Square wave, -5v - +5v)
* Square (Unipolar Square wave 0v - +5v)
* Castle (-1 0 1 0 -1 0 1 0, looks like a sandcastle)
* BiTrigs (Trigger pulses in positive and negative direction)
* Trigs (Trigger Pulses in positive direction)
* Env (a shape with a logarithmic rise and fall)

#### LFO Symmetry
![LFO Symmetry](/manual-images/lfo--symmetry.svg)  This parameter sets the slope of the LFO shape - for example turning a triangle wave into a sharp ramp up (symmetry +100) or down (symmetry -100). Set this if you want to tilt the shape of the LFO wave for modulation and on the Expander CV outs. 


## Midi CCs - Input
Here's a list of all the CC parameters that Plinky listens to.

| CC | Category | Parameter |
|----|----------|-----------|
| 13 | Sound | Shape |
| 4 | Sound | Distortion |
|9 | Sound |Pitch|
|14 |Sound|Interval|
|2|Sound|Noise level|
|5|Sound|Glide|
|71|Sound|Resonance|
|3|ENV 1|Sensitivity (LPF amount)|
|73|ENV 1|Attack|
|74|ENV 1|Sustain|
|75|ENV 1|Decay|
|72|ENV 1|Release|
|19|ENV 2|Level|
|20|ENV 2|Attack|
|21|ENV 2|Decay|
|22|ENV 2|Sustain|
|23|ENV 2|Release|
|94|FX - Delay|Delay send amt|
|12|FX - Delay|Delay time|
|112|FX - Delay|Delay pingpong|
|113|FX - Delay|Delay wobble|
|95|FX - Delay|Delay feedback amt|
|91|FX - Reverb|Reverb send amt|
|92|FX - Reverb|Reverb time|
|93|FX - Reverb|Reverb shimmer|
|114|FX - Reverb|Reverb wobble|
|102|ARP|On/off|
|103|ARP|Order|
|104|ARP|Clock division|
|105|ARP|Chance|
|106|ARP|Euclid length|
|107|ARP|Octaves|
|108|SEQ|Order|
|109|SEQ|Clock division|
|110|SEQ|Chance|
|111|SEQ|Euclid length|
|11|SEQ|Gate length|
|83|SEQ|Pattern|
|85|SEQ|Steps|
|15|Sampler|Scrub|
|16|Sampler|Grain size|
|17|Sampler|Play speed|
|18|Sampler|Timestretch|
|82|Sampler|Sample|
|116|Sampler|Jitter position|
|117|Sampler|Jitter grain size|
|118|Sampler|Jitter rate|
|119|Sampler|Jitter pulse|
|24|A|Offset|
|25|A|Depth|
|26|A|Rate|
|27|B|Offset|
|28|B|Depth|
|29|B|Rate|
|78|X|Offset|
|77|X|Depth|
|76|X|Rate|
|81|Y|Offset|
|80|Y|Depth|
|79|Y|Rate|
|89|Mixer|IN volume|
|90|Mixer|IN wet/dry amt|
|31|Mixer|HPF amt|
|7|Mixer|Synth level|
|8|Mixer|Wet/dry|

## Midi CCs - Output
Plinky supports MIDI out over USB and TRS (since hardware v3, or if you have the Expander). 

Plinky’s implementation has polyphonic aftertouch.

In addition to that, 
- the finger position for each column is sent on CC 32 - 39, 
- and the pressure for each column is sent on CC 40 - 47.

<img src="/expander-manual/Plinky_Expander_MIDI-CCs_Out.png" alt="Plinky MIDI CCs Out" style="max-width: 100%;">