---
title: Plinky Manual
date: "2021-01-24T08:38:00.000Z"
---

# Plinky Manual

*Plinky is an 8 voice polyphonic touch synthesiser that specialises in fragile, melancholic sounds.*

![](/manual-images/plinky.png)

Think of it as an 8 stringed instrument, played by touching the 64 main pads, which are arranged in 8 vertical monophonic strips or strings. 

You can play Plinky straight away with those 64 main pads. The row of 8 'shift' keys (blue LEDs) along the bottom are used in conjunction with the main pads to select parameters, presets, sequencer patterns, and samples.

Each of the 8 strings has:
* Up to 4 oscillators (pulse, supersaw or wavetable) or sampler grains, detuned by the tiny movements of your finger.
* A white noise generator
* an ADSR envelope controlling...
* ...a resonant 2-pole low-pass gate.
* a secondary ADSR envelope with repeat.
* Distortion / saturation

Plinky supports 4 external CV modulation sources, called A B X Y, each with its own LFO.
A & B also have dedicated physical offset knobs, located to the left of the screen. When changing parameters you can use the endless encoder to the right of the screen to fine tune the parameter settings. Clicking the encoder also resets the current parameter.

Plinky also has global delay, reverb, high pass filter, limiter and saturation units along with a simple mixer (for audio inputs), arpeggiator, sequencer and sampler.

## Quick Start Guide
Congratulations, you have (hopefully) succesfully built your Plinky! Welcome to the Plinky user community. We hope you make and share lots of beautiful music (or pure plain filth if you're into that).

### Powering Plinky
You can power Plinky by either connecting it to your Eurorack power (it requires a 5V connection) or USB (although it is best not to power through both at the same time). For connecting USB you can use either one of the connectors on the front or the back (but again, don't use both at the same time!).

### Calibrating Plinky
At first power up, (or when you wiggle knob A during the power up,) Plinky will start in Calibration mode. What this does is map the exact size and positioning of your fingers to where it will register a pad being played. For example if you play Plinky from an angle, you will touch the faceplate slightly differently. Calibration compensates for this. 

One white LED in each column will light up. Touch this in the center and the next one will light up. Touch that one in the center, and so on, making sure that the pressure is consistent on each pad.If your finger lands a bit off center from a pad, just slide it into place without lifting it off and leave it for a moment. Do this until all white LEDs have been calibrated and do the same for the Blue LEDs (the shift keys). You are now done.

> TIP: if you have large fingers, try calibrating with your little finger! Some people have found that this leads to more responsive playing after calibration.

If you make a mistake during the calibration, just unplug and replug the USB cable. If you ever want to re-calibrate, (for example, because you've moved Plinky into or out of your Eurorack, or even if you've moved it around,) just wiggle knob A during power up. 

> We've found that changing the case that Plinky's in, or the power supply you use, can affect calibration. If you find that Plinky isn't responding correctly, it's definitely worth re-calibrating. We recommend trying a few different power supplys, as different supplies seem to lead to quite different sensitivities.

### Connect your Headphones or Speakers
Plinky has two headphone outputs, on the front side and the back side. For each one, it is located to the right of the USB. The jack input on the left is the audio input (for effect processing or sampling). You are now ready to Plink.

> TIP: V2 plinky (blue board) has an analog saturation circuit. While the left inputs here are designed for stereo line level inputs, you can actually run full eurorack level 'hot' signals into plinky here, and get a really crunchy overdriven sound. Voila! you can use plinky as a saturation/fuzz box. The audio input jack on the top panel is eurorack level, having a lower gain, and will saturate less.

### Play Plinky!
Each of the center pads plays a note. Plinky is either playing a blank preset, which is a 4 voice unison Saw wave for each of the 'strings', or you are playing one of the factory presets that come with later versions of Plinky. Plinky can play 8 voices polyphony. Enjoy!

### Changing the Sound
![Shift Top](/manual-images/shift-top.svg) *hold*
![Delay](/manual-images/delay--reverb.svg) *tap*
To enter parameter edit mode you hold down a shift button, and while holding it down, select one of the icon pads. Then you release all your fingers. The bottom row of buttons are the shift / transport / mode buttons, with the blue LEDs. Its LED lights up while you have your finger held down on it. While in parameter edit mode, both the shift button and the icon pad's LEDs will flicker. The screen shows the device you are editing in the upper half and the parameter in the lower half.

Now, let's use this workflow to add some delay. Tap and hold the bottom left button, the ‘primary’ parameter editing button, referred to as *SHIFT TOP* from here on. Tap the *delay* pad, second column third row. This is the send level to the delay unit. you are now in parameter edit mode. Slide your finger upwards on the leftmost column of pads to increase the amount of delay. To hear this, play any of the pads other than the most left column (which acts as a slider). 

Play & tweak. Alternatively, you can twist the encoder (right knob) to adjust the value finely. Click the encoder to reset the value to default. Tap the *SHIFT TOP* button to return to 'full play mode', where you can use the left most column for notes. That’s the basic workflow for creating patches in Plinky!

### Adding Modulation
Adding modulation has a similar workflow. You tap and hold down a shift button, and select a parameter to enter parameter edit mode like before, but now you keep on holding down the shift button and tap one of the mod sources (the right most column of icon pads). 

![Shift Top](/manual-images/shift-top.svg) *hold*
![Distortion](/manual-images/distortion--resonance.svg) *tap*
![Mod Source A](/manual-images/mod-src--a.svg) *tap*

Let’s use the physical knob at the top left of Plinky to adjust overdrive. Hold Down *SHIFT TOP* again, then tap *drive* (third columd first row) to select overdrive. While still holding down *SHIFT TOP*, tap the *MODULATOR A* pad on the right column. What you are saying to plinky is, 'I want to link modulation source A to the parameter *distortion*'. Now you'll see three blinking LEDS: the shift button, the parameter pad and the modulation pad. The screen still shows the parameter you are editing in the lower half, but the upper half now shows the modulation source instead of the sound device. 

You have now linked the modulation source, but you also have to tell Plinky how much that modulation should impact the overdrive. You do this with the left slider, or the encoder for fine adjustments. In this case we want the knob to control the full overdrive range, so we turn it all the way up with the slider (turning the knob fully counter clockwise adds 0% overdrive, turning it all the way clockwise adds 100% overdrive). Now, the physical knob at the top left of Plinky will control overdrive. To switch between adjusting the 'base value' of the parameter and the 'modulation amount' you can tap top right *MODULATOR BASE*. To return to full play mode, tap *SHIFT TOP* one more time. That’s as complex as it gets! You now know everything you need to know to play, edit patches and modulate. Enjoy! Details follow.

> To remove a parameter's modulation, simply repeat the steps as described, and turn modulation amount back to 0% (clicking the encoder is perfect for this). To see which modulation sources are linked to a parameter, select it and check which of the modulator LEDs light up. Use *MODULATOR Base* to switch between 'base value' and 'modulation amount'
> ![Modulator Base](/manual-images/mod-src--base.svg)  

# Plinky hardware

## Top and bottom edge
Let’s take a look at Plinky’s inputs and outputs on the top and bottom edges. They have identical functions, and both can be used. On each side you find:

#### Audio in (line level stereo)
A TRS, ⅛” audio jack. Useful for two things. Plinky’s sampler can sample 65 seconds of incoming audio. Additionally, Plinky can act as a mixer with effects (reverb and delay), where each of Plinky’s audio inputs are mixed with Plinky’s internal audio. The individual inputs are mixed at unity gain, but the levels of the summed inputs and the internal sounds can be set separately. 

> Remember, if you have Plinky V2 (with the blue main board) you can and absolutely should try running Eurorack signals through Line level inputs to enloy that crunchy analog saturation. 

#### USB
The USB jack is either USB Micro-b on v1/v2, or USB-C on v3. It can power Plinky.  Warning -- do not attempt to power Plinky with both USB and Eurorack simultaneously. 
USB is also used for MIDI in/out. It needs a USB host, so you can connect it to your computer and integrate Plinky into your DAW. It has polyphonic aftertouch, and most parameters can be edited over MIDI (see the MIDI chapter). Finally, USB is used for Firmware, preset and wavetable updates.

- Firmware files are in the form of: `CURRENT.UF2`
- Wavetable files are in the form of: `WAVETAB.UF2`
- Preset files are in the form of: `PRESETS.UF2`

When copying over any of these, make sure the filename matches.

#### Audio out (line level stereo)
A TRS ⅛”audio jack that outputs the mixed output at line level. 

#### TRS MIDI Out (v3 hardware only)
TRS ⅛” jack - MIDI Type-A

#### TRS MIDI In (v3 hardware only)
TRS ⅛” jack - autosensing - accepts both MIDI Type-A and Type-B

## Main Interface
Plinky is built around 64 playable ‘pads’. Actually they are not really pads, they are zones on a vertical strip. By calibrating Plinky’s touch strips, we make them function as pads. 

### Top Row

#### Knobs A & B
These two knobs act as offsets for modulator A and B respectively. Modulator A is the sum of LFO A, CV input A and the offset of the button. These modulators can be assigned to all the parameters.

#### Screen
Plinky's screen may be small, but it shows a lot of useful information. There are three modes, each have their own interface on the screen: Play mode, Parameter Edit mode and Sampler mode.

##### Play mode
Plinky’s screen shows the last note played on the top left. On the bottom left we see the current sequencer/arp pattern. To the right of the arp/seq pattern number we see if, and if yes, which sample is selected. All the way on the right, a narrow bar shows the current pressure (max from each of the strings) that is being applied to the pads. Also on the right (left of the pressure bar) you see 4 small visualisations of modulator/LFO A, B, X and Y. The center shows a nice big waveform of what’s being played through the Mixer stage.

##### Parameter edit mode
Top left shows the device you are currently editing (Sound, Envelope, Delay, Reverb, Arp, Sequencer, A, B, X, Y, Sampler, Mixer, System)
Bottom left shows which parameter of the current device is being edited.

On the right we still see the pressure bar and the modulators. In the center we see one or two parameter values. In the upper half of the screen we see a big number, which is the current actual value of the parameter. When no modulation is applied, you will only see the big value, because the the base value and the total is equal, which you set with the slider or the encoder. 

When modulation is applied, you will see 2 numbers. The small number in the lower half of the screen is the base value of the preset, the large number in the upper half is the sum of the base values and all modulation. This means that the base value is a static number, while the current value will change with the modulation (for example, an LFO). The small value is the one you can set with the slider/encoder, and the large value is the result of this.

##### Sampler Mode
In Sampler mode you will see a large visualisation of the sample with vertical bars representing one of the 8 slice points. A small number to the right of this bar tells you which slide it is. 

On the bottom left we see the mode the sampler is in (tape/pitch). When in pitch mode, we see the base note of the current slide. On the bottom right we see the sampler playback mode (all, loop, loop all)

#### Encoder

The push encoder is used to set parameter values. Values can often be negative and positive, where different types of units correspond to the positive or negative values (eg. in the shape parameter, negative values modulate the Pulsewidth of a pulse wave, at 0 it is a supersaw, when positive it is a wavetable).

The encoder remains tied to the parameter that was last edited, even when Plinky is not in parameter edit mode. 

When pushed, the encoder will snap the parameter value back to 0. This is useful to remove modulation from a parameter. A long push on the encoder  clears the modulation.

Press and hold the push encoder down while plugging Plinky into power and it will enter the "tunnel of lights" mode where you can update the firmware or change presets. See [https://plinkysynth.com/presets](https://plinkysynth.com/presets) for details. 
 
### Columns of Jacks
The column of jacks on the left are all inputs. The column of jacks on the right are all outputs. Their individual functions are described in detail in the ‘Eurorack’ chapter. 

### Bottom Row (Shift Keys)
The Bottom row of pads (blue leds), are shift and transport controls, from left to right: 

#### Shift Top & Shift Bottom
![Shift Top](/manual-images/shift-top.svg) ![Shift Bottom](/manual-images/shift-bottom.svg)  **Edit Mode** The first two shift buttons are the most important: they allow you to modify the sound. Why two? They map to two complete sets of parameters – primary (top) on *SHIFT TOP* and secondary (bottom) on *SHIFT BOTTOM*, corresponding to the parameters that are written above and below each of the pads. Tap or hold either, then tap an icon pads to choose a parameter to edit.

Once in edit mode, adjust the chosen parameter using the left most column of pads as a slider, or use the encoder to the left of the screen. While in this mode you can play all the pads, except for the left most (slider) pads. Tap again to return to play mode (LED off). 

#### Preset
![Preset](/manual-images/preset.svg)  **Preset Mode** Tap or hold, then tap a main pad to select a preset (left 32 pads), pattern (middle 24), or sample (right 8). A long press on a sample pad will edit it; on other pads, it will copy the current preset / pattern to it. Press and hold *CLEAR* to clear the last touched preset or pattern.

#### Previous
![Previous](/manual-images/previous.svg) **Previous Button** Tap to jump to the previous step (sequencer paused) or first step (sequencer playing). *Or, hold it then tap a main pad to jump to a step within the current loop, or to set a new loop start outside the current loop.*

#### Next
![Next](/manual-images/next.svg) **Next Button** Tap to jump to the next step.  
*Or, hold it then tap a main pad to set the end of the current loop.*

#### Clear
![Clear](/manual-images/clear.svg) **Clear Button** Tap or hold to clear stuff. Useful to mute recorded notes, live, while the sequencer is playing. If recording, this will permanently clear steps.
In preset mode, hold this after tapping a main pad to clear whole patterns or re-initialize presets. 
 
#### Record and Play
![Record](/manual-images/record.svg) ![Play](/manual-images/play.svg) **Play / Record Buttons** Tap to toggle playback & recording.
Recording can be step based (when sequencer is paused) or realtime (when sequencer is playing). When you enter a note (or multiple notes, the sequencer is polyphonic) the sequencer jumps to the next step.

### Center Pads & LEDs
The pads have two functions. Their prmary role is to play notes, in default presets the bottom left pad plays C0. Each pad up is 1 note higher within the selected scale, each string is tuned 7 semitones or a perfect fifth up (but snapped to the closest note in the scale).

The second function of the pads is to select parameters. The left most column acts as a slider to modify parameter values. The right most column refer to the modulators. The center 48 pads each correspond to 2 parameters, which are printed directly above and below the pad. The parameters are described in the Parameters chapter.

Each pad also has a white LED (unless you decided to get creative in your build and install other colors, in which case, *do share!*) These LEDs have different behaviours in the various modes:
in **play mode** the LEDs light up the notes that are being played, as well as the active sequencer step.
in **parameter mode** the LEDs show both the parameter that is being edited and the modulators that have been assigned to that parameter. So when a parameter is changing unexpectedly, you can select the parameter and then the modulator that is causing the cange will also light up. 
in **preset mode** the LED's show the active preset, sequencer pattern and current sample (when in sample mode)

# Parameters
Plinky’s parameters are arranged in somewhat logical horizontal rows. Remember to touch/hold *SHIFT TOP* or *SHIFT BOTTOM* to enter parameter edit mode, then touch a pad with an icon to select that parameter. The left most column then becomes a dedicated slider, or you can use the encoder right of the screen. Pressing *SHIFT TOP* or *SHIFT BOTTOM* again leaves the left slider active, allowing you to continue to tweak a single parameter while playing with the majority of the pads. Pressing *SHIFT TOP* or *SHIFT BOTTOM* a third time returns to play mode, with all 64 pads available to play. This is the main workflow when making patches with Plinky.

The leftmost column of pads is a slider. The rightmost column of pads are modulation sources. We’ll cover those later. The middle 6 columns are the parameters themselves. From top to bottom, they are:

# Sound (Synthesizer)
#### Shape
![Shift Top](/manual-images/shift-top.svg) *hold*
![Shape](/manual-images/shape.svg) *tap*
Controls the shape of the oscillators in Plinky. When exactly 0%, you get  4 sawtooths per voice. When positive, you blend smoothly through 16 ROM wavetable shapes, (2 per voice,) provided by @miunau. When negative, you get PWM control of pulse/square shapes, (also 2 per voice.)

CV and internal modulation only work either positive or negative: you can blend through the wavetables when the parameter is over 0, or you can modulate pulse/square waves when the value is negative. You cant cross through zero.

Plinky pans each set of oscillators, (and the sample grains) a little giving the sound a rich stereo field. With the supersaw, we have 2 oscilators panned left and 2 panned right. With the wavetable and pulse oscilators 1 is panned left and 1 is panned right.

> Tip: Honestly, just play with this one for a bit. Assign it to a knob, play an arp or pads and listen to the rich, full scope of sounds Plinky will play. From there on see for yourself. Add an envelope to it, or let pressure modulate the timbre of the sound.

#### Noise
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Noise](/manual-images/noise.svg) *tap*
Each voice can add a variable amount of white noise to the oscillator, before the low-pass gate. Try assigning an envelope to the noise parameter. An envelope with a short attack and decay will give a percussive feel, while longer attack will ‘wash over’ the sound which is more suitable for pads.

#### Drive
![Shift Top](/manual-images/shift-top.svg) *hold*
![Distortion](/manual-images/distortion--resonance.svg) *tap*
When turned up high, the saturation unit will create guitar-like tones, especially when playing polyphonically. It can also be used to compensate for changes in volume, for example if the Sensitivity parameter is low.

#### Resonance
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Resonance](/manual-images/distortion--resonance.svg) *tap*
Each voice has a 2-pole lowpass gate controlled by your finger pressure and the Sensitivity control. This parameter adds resonance to the filter. Note that at high levels of resonance, you may wish to adjust the drive or the high pass filter parameters.
 
#### Pitch
![Shift Top](/manual-images/shift-top.svg) *hold*
![Pitch](/manual-images/pitch.svg) *tap*
Use this to (fine) tune Plinky. Range is 1 octave up or down, unquantized.
Tip: By default Plinky is tuned to C, so to play in G we could set this value to either 7 or - 5

#### Degree
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Degree](/manual-images/degree.svg) *tap*
Think of this as a quantized pitch control, that transposes plinky in such a way that all the notes stay in the same scale. In other words, it changes which degree of the scale is played, but not the root of the scale itself.

#### Octave
![Shift Top](/manual-images/shift-top.svg) *hold*
![Octave](/manual-images/octave--scale.svg) *tap*
Use this to quickly change pitch, quantised to octaves.

#### Scale

![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Scale](/manual-images/octave--scale.svg) *tap*
Selects which scale of notes plinky uses.  

#### The following Scales are available:

* Major
* Minor
* Harminoc Min
* Penta Maj
* Penta Min
* Hirajoshi
* Insen
* Iwato
* Minyo
* Fifths
* Triad Maj
* Triad Min
* Dorian
* Phrygian
* Lydian
* Mixolydian
* Aeolian
* Locrian
* Blues Min
* Blues Maj
* Romanian
* Wholetone
* Harmonics
* Hexany
* Just
* Chromatic

#### Glide
![Shift Top](/manual-images/shift-top.svg) *hold*
![Glide](/manual-images/glide--microtone.svg) *tap*
Controls the speed of the portamento between notes in a single voice. Higher = slower

#### Microtone
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Microtone](/manual-images/glide--microtone.svg) *tap*
Controls how much vertical movement of your finger detunes the note. This also thickens the sound through 'unison' detuning of the individual oscillators in each note, so values above 0 are recommended.

#### Osc Interval
![Shift Top](/manual-images/shift-top.svg) *hold*
![Osc Interval](/manual-images/osc-interval--column.svg) *tap*
Each voice has several oscillators, and this sets a fixed interval between them, from +1 to -1 octaves.

#### Stride (Column)
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Stride](/manual-images/osc-interval--column.svg) *tap*
 Controls the interval, in semitones, between each column of plinky. It defaults to 7 semitones, a perfect fifth, like a Cello or Violin. The notes are always snapped to the chosen scale, even if the stride calls for chromatic notes, so plinky does its best to choose column pitches that follow this stride while staying in-scale.

## Envelope Generator
![Attack](/manual-images/attack.svg)
![Decay](/manual-images/decay.svg)
![Sustain](/manual-images/sustain.svg)
![Release](/manual-images/release.svg)
Plinky has two Envelope Generators. Envelope 1 (the upper parameter) is mapped to the Low Pass Gates and has Attack, Decay, Sustain and Release stages. Envelope 2 (the bottom parameter) is unassigned by default and can be mapped to parameters with the Envelope modulator pad. Like Envelope 1 it is an ADSR envelope. The parameters on the same pads.

#### Sensitivity
![Shift Top](/manual-images/shift-top.svg) *hold*
![Sensitivity](/manual-images/sensitivity--env-2-level.svg) *tap*
Master sensitivity, controlling the mapping of finger pressure to the opening/closing of each voice's low-pass gate. If you are looking for a lowpass cutoff frequency, this is the parameter you want.

#### Envelope 2 Level
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Envelope 2 Level](/manual-images/sensitivity--env-2-level.svg) *tap*
Sets the peak level of the second envelope, which can be used as a modulation source.

#### Attack Time 1 & 2
![Attack](/manual-images/attack.svg)
Attack (top) is for the main envelope that controls the lowpass gate. The peak level is set by the pressure of your finger, modulated by the Sensitivity parameter. Attack (bottom) controls the attack time for the secondary envelope. The peak level is controlled by ENV 2 Level.

#### Decay Time 1 & 2
![Decay](/manual-images/decay.svg)
Decay (top) is for the main envelope that controls the decay time for the lowpass gate. Decay (bottom) controls the decay time of the secondary envelope.

#### Sustain Level 1 & 2
![Sustain](/manual-images/sustain.svg)
Sustain (top) is for the main envelope that controls the sustain level for the lowpass gate. Sustain (bottom) controls the sustain level of the secondary envelope.

#### Release Time 1 & 2
![Release](/manual-images/release.svg)
Release (top) is for the main envelope that controls the release time for the lowpass gate. Release (bottom) controls the release time of the secondary envelope.

## Master Effects
![Delay or Reverb](/manual-images/delay--reverb.svg)
![Time](/manual-images/time.svg)
![Ratio](/manual-images/pingpong--shimmer.svg)
![Wobble](/manual-images/wobble.svg)
![Feedback](/manual-images/feedback.svg)
Plinky has 2 send/return effects: a Delay and a Reverb. They can be added to both the Synth/Sampler outputs and to the audio coming in through one of the input jacks. The parameters in this section apply to the effect parameters, where the Send parameter determines how much of the effect is sent to the mixer. In the mixer section you can adjust the dry/wet settings for the effects. 

### Delay

#### Delay Send
![Shift Top](/manual-images/shift-top.svg) *hold*
![Delay](/manual-images/delay--reverb.svg) *tap*
Amount of the dry sound sent to the delay unit.  
Turn it up for echos!

#### Delay Time
![Shift Top](/manual-images/shift-top.svg) *hold*
![Delay Time](/manual-images/time.svg) *tap*
The time between each echo. Positive values are un-quantized; negative values are multiples of the current tempo.

#### Delay Ratio
![Shift Top](/manual-images/shift-top.svg) *hold*
![Pingpong](/manual-images/pingpong--shimmer.svg) *tap*
The delay unit is stereo. This moves the right tap to an earlier time, causing ping-pong poly-rhthmic repeats. Try simple ratios like 33%, 50%, 75%.

#### Delay Wobble
![Shift Top](/manual-images/shift-top.svg) *hold*
![Delay Wobble](/manual-images/wobble.svg) *tap*
Amount of simulated tape speed wobble, causing pitch distortions in the delay.

#### Delay Feedback
![Shift Top](/manual-images/shift-top.svg) *hold*
![Delay Feedback](/manual-images/feedback.svg) *tap*
Amount of feedback - the volume of each echo reduces by this amount.

### Reverb

#### Reverb Send
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Reverb Send](/manual-images/delay--reverb.svg) *tap*
Amount of the dry sound sent to the reverb unit. Turn it up for reverb!

#### Reverb Time
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Reverb Time](/manual-images/time.svg) *tap*
Controls the length of the decay of the reverb.

#### Shimmer
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Shimmer](/manual-images/pingpong--shimmer.svg) *tap*
Amount of octave-up signal that is fed into the reverb, causing a shimmer effect.

#### Reverb Wobble
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Reverb Wobble](/manual-images/wobble.svg) *tap*
Amount of simulated tape speed wobble, causing pitch distortions in the reverb. Avoids metallic artefacts.

## Arpeggiator & Sequencer
<div>

![Tempo/Swing](/manual-images/tempo--swing.svg)
![Arp/Latch](/manual-images/arp--latch.svg)
![Mode](/manual-images/order.svg)
![Clock Division](/manual-images/clock-div.svg)
![Chance](/manual-images/chance.svg)
![Euclid Length](/manual-images/euclid-len.svg)
![Sequencer Gate Length](/manual-images/gate-len.svg)
![Arpeggiator Octaves](/manual-images/arp-octaves.svg)

</div>

Plinky has a powerful arpeggiator and sequencer, Each with their own quirks. The arpeggiator can be latched (when you lift your fingers the last notes / pressure  is continued). Besides the obvious clock divisions / multiplications, the arpeggiator can also play euclidean patterns or random rhythms. Additionally the arp has some interesting order/modes, that allow for even more complex rhythms and/or polyphonic arps. 
The sequencer is polyphonic. The sequencer can also control the arpeggiator: If both are on, the sequencer will play patterns of arps. As both the sequencer and the arpeggiator’s clocks can be divided to up to 256x the clock’s speed, this allows for very long, complex patterns. [TO DO] As the latch on/off and the Arp on/off will become mappable parameters, this allows for even more extensive sequencing possibilities. 

#### Tempo / BPM
![Shift Top](/manual-images/shift-top.svg) *hold*
![Tempo](/manual-images/tempo--swing.svg) *tap*
Tempo in BPM. You can also tap this parameter pad rhythmically to set the tempo. It controls the sequencer, arpeggiator and clocked parameters (like echo time for synced delays) and devices

#### Swing
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Swing](/manual-images/tempo--swing.svg) *tap*
[OUT OF ORDER]. This parameter will be used to add swing in a future firmware update

#### Latch
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Latch](/manual-images/arp--latch.svg) *tap*
Switches the latch on/off. When on, played notes will sustain even when you take your fingers off plinky. Useful for chords, arps, drones, or using plinky as an oscillator voice.

### Arpeggiator
![Shift Top](/manual-images/shift-top.svg) *hold*
![Arp](/manual-images/arp--latch.svg) *tap*
Switches the arpeggiator on and off.

#### Arpeggiator Mode / Order (Top)
![Shift Top](/manual-images/shift-top.svg) *hold*
![Arp Mode](/manual-images/order.svg) *tap*
Select the arpeggiator mode.

#### The following arpeggiator modes are available:

* Up
* Down
* Up then Down
* Up then Down (repeat end notes)
* Up with lowest note pedal
* Down with lowest note pedal
* Up then down with lowest note pedal
* Random
* Random playing 2 notes at a time
* Repeat all notes (polyphonic)
* Up (all 8 columns)
* Down (all 8 columns)
* Up then Down (all 8 columns)
* Random (all 8 columns)
* Random, 2 notes at a time (all 8 columns)

The '8 column' modes include every column, even those without a note, introducing rests into the arpeggio. 

#### Arpeggiator Clock Division
![Shift Top](/manual-images/shift-top.svg) *hold*
![Arp Clock Division](/manual-images/clock-div.svg) *tap*
Sets the speed of the arpeggiator. Negative numbers are un-quantized, positive numbers divide a 32nd note clock. The following divisions are available:

* 1/32
* 2/32 
* 3/32
* 4/32
* 5/32 
* 6/32
* 8/32
* 10/32 
* 12/32
* 16/32
* 20/32 
* 24/32
* 32/32
* 40/32 
* 48/32
* 64/32
* 80/32 
* 96/32
* 128/32
* 160/32 
* 192/32 
* 256/32

#### Arpeggiator Chance / Density (top)
![Shift Top](/manual-images/shift-top.svg) *hold*
![Arpeggiator Chance](/manual-images/chance.svg) *tap*
Sets the probability of the arpeggiator progressing on each tick of its clock. If the arp length parameter is 0, this is a true random probability, otherwise it's the density of a euclidean rhythm.

#### Arpeggiator Euclidian Length (top)
![Shift Top](/manual-images/shift-top.svg) *hold*
![Arpeggiator Euclid Length](/manual-images/euclid-len.svg) *tap*
When non zero, this sets the length of the euclidean pattern used by the arp. Use the arp probability parameter to change how many notes are included in each pattern. Negative values treat rests differently, try both.

#### Arpeggiator Octaves
![Shift Top](/manual-images/shift-top.svg) *hold*
![Arpeggiator Octaves](/manual-images/arp-octaves.svg) *tap*
Sets how many octaves the arpeggiator ranges over. This means that if you only play 1 note, the arp will play as many octaves of that note (upwards) as you have set the parameter to.

### Sequencer

#### Sequencer Mode / Order
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Sequencer Mode](/manual-images/order.svg) *tap*
Sets the order in which steps are played by the sequencer.

* Pause
* Forwards
* Backwards
* Pingpong
* Pingpong (repeat end notes)
* Random

#### Sequencer Clock Division
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Sequencer Clock Division](/manual-images/clock-div.svg) *tap*
Sets the speed of the sequencer. Negative numbers are un-quantized, positive numbers divide a 32nd note clock. The following divisions are available:

* 1/32
* 2/32 
* 3/32
* 4/32
* 5/32 
* 6/32
* 8/32
* 10/32 
* 12/32
* 16/32
* 20/32 
* 24/32
* 32/32
* 40/32 
* 48/32
* 64/32
* 80/32 
* 96/32
* 128/32
* 160/32 
* 192/32 
* 256/32

#### Sequencer Chance / Density
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Chance](/manual-images/chance.svg) *tap*
Sets the probability of the sequencer progressing on each tick of its clock. If the sequencer length parameter is 0, this is a true random probability, otherwise it's the density of a euclidean rhythm.

#### Sequencer Euclidian Length
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Euclidian Length](/manual-images/euclid-len.svg) *tap*
When non zero, this sets the length of the euclidean pattern used by the sequencer. Use the sequencer probability parameter *(density bottom)* to change how many notes are included in each pattern. Negative values treat rests differently, try both.

#### Sequencer Gate Length
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Sequencer Gate Length](/manual-images/gate-len.svg) *tap*
Sets the length of the gate of each step. The gate is the signal that determines whether a note is on or off. Longer gates means notes are played longer, which (in tandem with Envelope 1) determines how long notes are sustained.

## Sampler
<div>

![Scrub](/manual-images/scrub--jitter.svg)
![Grain Size](/manual-images/grain-size--jitter.svg)
![Play Speed](/manual-images/play-speed--jitter.svg)
![Time Stretch](/manual-images/timestretch.svg)
![Sample](/manual-images/sample.svg)
![Pattern/Step Offset](/manual-images/pattern--step-offset.svg)

</div>

Plinky lets you record 8 samples, each split into 8 'slices', corresponding to the 8 columns (strings). Once recorded, the bottom row of parameters control the granular playback of your samples.

To record or edit a sample, press *PRESET* to go into preset mode, then press and hold one of the 8 rightmost pads. Now press and hold *RECORD* to record a new sample. Plinky will first have to clear the data stored for that slot which will take a few seconds. Use knob A to adjust the recording level.
Press *RECORD* or *PLAY* to 'arm'. Plinky will start recording when it hears audio, or tap *RECORD* / *PLAY* again to start recording silence. 

If you want to set the 8 slice points while recording, tap any of the main pad buttons at the start of each slice. If not, Plinky will cut the sample into 8 equal length slices. You can edit the split points later. Press *RECORD* or *PLAY* any time to stop recording. 

When recording is finished, to audition the slices, press and hold the main pad buttons along the top row. If you slide your finger up and down, it adjusts the start point of each slice. 

There are two options associated with samples, controlled by the usual 2 parameter shift keys *SHIFT TOP* / *SHIFT BOTTOM*: Tape/Pitch mode and Loop mode. 
Press *SHIFT BOTTOM* to cycle loop mode between 'play slice', 'loop slice', 'play all', 'loop all'.
Press *SHIFT TOP* to toggle between Tape mode and Pitch mode.

Tape mode lays out the sample slices across all 64 pads, top to bottom then left to right, allowing you to quickly play from any point within the sample by pressing the appropriate pad. The pitch of playback is only affected by the 'sample rate' parameter.

In Pitch mode, each slice is assigned a base pitch, visible like 'C#3' in the OLED display. You can set this reference pitch for each slice, by sliding your finger in the lower half of the main pad area. Now when you perform notes in plinky, it has set up a multisample key-split and chooses the closest pitched slice to the desired note. Be careful of octaves to be sure to use all your slices. If multiple slices have the same pitch, they will be round-robined.

Press *CLEAR* to leave sample edit mode.

#### Scrub
![Shift Top](/manual-images/shift-top.svg) *hold*
![Scrub](/manual-images/scrub--jitter.svg) *tap*
Controls the starting point of the sample playback, relative to the slice point. If you modulate this parameter you get dynamic slicing.

#### Scrub Jitter
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Scrub Jitter](/manual-images/scrub--jitter.svg) *tap*
Adds an amount of randomness to the sample playback position.

#### Grain Size
![Shift Top](/manual-images/shift-top.svg) *hold*
![Grain Size](/manual-images/grain-size--jitter.svg) *tap*
Sets the size of the grains. Modulate to achieve granular sound effects.

#### Grain Size Jitter
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Grain Size Jitter](/manual-images/grain-size--jitter.svg) *tap*
Adds an amount of randomness to the sample grain size.

#### Play Speed
![Shift Top](/manual-images/shift-top.svg) *hold*
![Play Speed](/manual-images/play-speed--jitter.svg) *tap*
Determines at what relative speed the sample is played back, eg. 50% slows the sample down by a factor of 2, 200% speeds up the sample twice. Playback speed affects the pitch of the sample accordingly, slowing the sample down pitches it down, speeding up also pitches up.

#### Play Speed Jitter
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Play Speed Jitter](/manual-images/play-speed--jitter.svg) *tap*
Adds an amount of randomness to the sample playback speed.

#### Time Stretch
![Shift Top](/manual-images/shift-top.svg) *hold*
![Time Stretch](/manual-images/timestretch.svg) *tap*
Determines at what relative speed the sample is played back, but without changing the pitch. As the sample is cut up in miniscule ‘grains’ of audio (milliseconds), Plinky repeats some of these grains to slow down, and leaves some grains out to speed up. Changes in grain size have more drastic effects when samples are stretched severely. 

#### Sample
![Sample](/manual-images/sample.svg) *tap*
Controls which sample is being played, allowing you to change samples from within a preset by assigning a LFO or CV source to this parameter.

#### Pattern
![Shift Top](/manual-images/shift-top.svg) *hold*
![Pattern](/manual-images/pattern--step-offset.svg) *tap*
Controls which sequencer pattern is being played back, allowing you to change patterns from within a preset by assigning an LFO or CV source to this parameter. If you add a slow rising saw to this parameter you can chain various patterns together. 

#### Step Offset
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Step Offset](/manual-images/pattern--step-offset.svg) *tap*
Offsets the starting point of the sequencer pattern allowing for variations in sequencer playback.

## Modulation A, B, X and Y (Inputs & LFO's)
The next two rows controls the A/B  and X/Y modulators. Each are split so that *SHIFT TOP* and *SHIFT BOTTOM* access one of the two inputs.

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
Each input also has a dedicated built in LFO that is added on top so that these modulation sources can be useful even without any jacks plugged in. Finally, modulators A and B correspond to knobs A & B, which offset these two values.

#### CV Level
![AB CV Level](/manual-images/a-b-cv-level.svg)
![XY CV Level](/manual-images/x-y-cv-level.svg)
An attenuator for the signal coming from the corresponding CV input jacks.

#### Offset
![Offset](/manual-images/offset.svg) Offsets the CV and/or LFO. This is a constant voltage that is being added (or subtracted) from the sum of the CV input and the LFO.

#### LFO Depth
![LFO Depth](/manual-images/lfo--depth.svg) Attenuator for the internal LFO's.The default value is zero so turn this up for LFO's.

#### LFO Rate
![LFO Rate](/manual-images/lfo--rate.svg) Controls the rate of the internal LFO. The LFO rates can range from 20 sceonds (at +100%) to milliseconds at -100%. At 0% the rate is [y] milliseconds. 

#### LFO Shape
![LFO Shape](/manual-images/lfo--shape.svg)  Sets the shape of the LFO.

##### The following shapes are available:

* Triangle
* Sine
* SmthRnd (Smooth Random)
* StepRnd (Stepped Random)
* BiSquare (Bipolar Square wave, -5v - +5v)
* Square (Unipolar Square wave 0v - +5v)
* Castle (-1 0 1 0 -1 0 1 0, kinda looks like a sandcastle...)
* BiTrigs (Trigger pulses in positive and negative direction)
* Trigs (Trigger Pulses in positive direction)
* Env

#### LFO Symmetry
![LFO Symmetry](/manual-images/lfo--symmetry.svg)  Sets the slope of the LFO shape - for example turning a triangle wave into a sharp ramp up (symmetry +100) or down (symmetry -100). 

## Mixer

#### Synth
![Shift Bottom](/manual-images/shift-top.svg) *hold*
![Synth](/manual-images/synth.svg) *tap*
Sets the gain level of Plinky's synth / sampler. Above 50% you will start hitting a limiter, which can help to glue patches with wide dynamic range together. You can use this as a volume control if you are taking audio from the left / mono output. 

#### Input
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Input](/manual-images/input.svg) *tap*
Sets the gain level of Plinky's inputs. These inputs take line level signals and amplify them to Eurorack levels, but... If you feed it eurorack level, the analog saturation unit in Plinky V2 does it's thing. In case both the inputs on the face plate and the front/back side are used, Plinky mixes the inputs at fixed levels.

#### Wet/Dry
![Shift Top](/manual-images/shift-top.svg) *hold*
![Wet/Dry](/manual-images/wet-dry.svg) *tap*
Sets the balance between the dry signal of Plinky's voice (synth or sampler) and the wet signal of the Reverb and Delay units (the distortion/saturation device is applied directly to the 8 individual voices.) The default setting is zero where there is an equal mix of wet and dry signals. 100 is completely wet and -100 is completely dry.

#### Input FX
![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Input FX](/manual-images/wet-dry.svg) *tap*
Sets the balance between the dry signal of the audio inputs and the wet signal passing through the Reverb and Delay units.

#### High Pass Filter (HPF)
![High Pass Filter](/manual-images/hpf.svg)
After the synth/sampler, external audio and the effects are mixed, they pass through a High Pass Filter. This parameter controls the cut off frequency.

#### Settings
![Settings](/manual-images/cv-quantize.svg)
Plinky’s pitch input is most useful when you have a sequence or latched note playing; the pitch is transposed according to the pitch CV input (1 volt per octave), and you can use this last parameter to choose if the transposition is unquantized, quantized to semitones, or transposed in-scale. 0v (C0) means no transposition.

#### Volume
![Volume](/manual-images/volume.svg)
Sets the level of the final output stage for the headphone out. Turn this up to 11.

#### Empty Pad
![Accelrometer Sensitivity](/manual-images/blank.svg)
Attenuator for the Accelerometer. This parameter controls how sensitive Plinky reacts to the accelerometer. The icon is left blank because this parameter will be moved to the settings menu, which will be included in a firmware update.

## Modulators
#### Modulator Base
![Modulator Base](/manual-images/mod-src--base.svg)
Toggles between the selected modulator and the base parameter of a device. This way you can set both the base value, and the amount of modulation that is assigned to that parameter. 

#### Envelope 2
![Mod Source Envelope 2](/manual-images/mod-src--envelope-2.svg)
An assignable ADSR envelope generator. Set it's Attack, Decay, Sustain, Release and peak level with the bottom parameters of the Envelope Generator. Envelope 1 is assigned to the sensitivity by default, but this second ADSR is unassigned by default.

#### Pressure
![Mod Source Pressure](/manual-images/mod-src--sensitivity.svg)
Modulate any parameter with the maximum pressure that is applied on each of the strings. Corresponds with the pressure bar in the right of screen.

#### Modulator A, B, X and Y
![MODULATOR A](/manual-images/mod-src--a.svg)
![MODULATOR B](/manual-images/mod-src--b.svg)
![MODULATOR X](/manual-images/mod-src--x.svg)
![MODULATOR Y](/manual-images/mod-src--y.svg)
These pads assign Modulator A, B, X and Y to parameters. Each of these modulators feature a CV input (which can be attenauted) and an LFO with extensive options. Modulator A & B have physical knobs A & B as extra offset, and Modulators X & Y correspond to the X- and Y-axis of the accelerometer. 

#### Random
![random](/manual-images/mod-src--random.svg)
Assigns (an amount of) randomness to parameters.

### That's it for the parameters!

It's a bunch of information, but you'll get it quick!

# MIDI & CV
#### General
Plinky responds to MIDI! It will show up as plinkysynth once you have plugged it into your computer, and will act as an 8-voice synthesizer. If you also bought the Expander for Plinky, this will respond to and output MIDI over TRS. Refer to the Expander part of the manual. Plinky v3 adds hardware TRS MIDI jacks on the bottom edge. The TRS MIDI Out is Type-A while the TRS MIDI In is autosensing and can accept both MIDI Type-A and Type-B.

You can play Plinky while MIDI is being sent to it. Plinky will prioritise touch input over MIDI input, so you can jam over a pre-recorded MIDI pattern.

#### Set MIDI Input and Output channels

Plinky sends and listens to MIDI channel 1 by default. 

To set the MIDI I/O channels, use the unprinted pad in the bottom row.

![Shift Top](/manual-images/shift-top.svg) *hold*
![Unprinted](/manual-images/unprinted.svg) *tap*
To change the MIDI input channel, you hold down the shift top button, and while holding it down, select one the unprinted pad. Use the Encoder to select the MIDI input channel, ranging from 1 - 16.

![Shift Bottom](/manual-images/shift-bottom.svg) *hold*
![Unprinted](/manual-images/unprinted.svg) *tap*
To change the MIDI output channel, you hold down the shift bottom button, and while holding it down, select one the unprinted pad. Use the Encoder to select the MIDI output channel, ranging from 1 - 16.

This setting is stored with each patch. That means you can set and recall it individually for each preset.

#### USB Midi in
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
#### USB Midi out
Plinky supports MIDI out over USB. Plinky’s implementation has polyphonic aftertouch.
#### Power
Plinky can be powered over USB. Make sure you do not combine eurorack and USB-power. 


# Eurorack
Plinky (V2) fits in standard Eurorack rails. It can be powered over Eurorack, but make sure not to combine USB and eurorack power supplies. Plinky has dedicated inputs and outputs to communicate with (semi-)modular gear. Read the description well, because some of the implementations differ slightly from what’s usual in Eurorack (mostly Gate).

### Quick Start

Here's how you set Plinky up as an Eurorack oscillator:

![Preset](/manual-images/preset.svg) *tap*  Select a patch in **Preset Mode**. Tap the preset pad, then tap a main pad to select a preset (left 32 pads). An initialized patch or [Grain Blanc Bank](../presets) Preset 1 works great in this context. Tap the preset pad again to exit.

![Shift Top](/manual-images/shift-top.svg) *hold*
![Arp/Latch](/manual-images/arp--latch.svg) *tap*

Enable latch by holding Shift Down and selecting Arp. Set latch to On. 
</br>This setting will save with your preset.
</br>Press the lowest pad. you hear a drone.



Using an Eurorack Sequencer or Arturia Keystep as a CV source:

- Patch gate out to gate in on Plinky. The drone goes away.
- Patch V/oct CV out to pitch CV in on Plinky.

Play the sequencer, or play keys on the Arturia Keystep. 
</br>The V/oct CV pitches the drone around. Gate opens the lowpass gate.

- with an open gate, tap another pad and your notes will be transposed.
- with an open gate, tap two notes and you can have chords.

Plinky's default preset is not latched by default, but of course you can save them like that.
Each time you power cycle your case, you will need to remove the gate cable and press the lowest pad, once, to start the drone. 


### Inputs and outputs


The 8 jack inputs, at left, from top to bottom provide:
#### Clock Input
A 1/16th note clock input. Plinky responds to 4 PPQN audio pulses. As soon as Plinky receives a clock in the Arpegiator / Sequencer will start playing. Other clocked devices (delay, in the future possibly the LFO’s) will switch back to the internal clock as soon as the external clock stops. 
#### Gate Input
An analogue gate that scales the openness of all low pass gates (0-5v).
#### Pitch Input
A pitch input for transposition via a V/oct input in -2v to 5v range (with quantization controlled by the u secondary parameter).
#### A, B, X, Y Inputs
Modulation (A, B, X, Y) with -5v to 5v range
#### Audio Input
An audio input that is mixed with the synth output as well as being sent to the FX units. 
#### Left / Mono Output
An audio output, at Eurorack level, mono (left channel)
#### Right Output
An audio output, at Eurorack level, mono (right channel)
#### Clock Output
Outputs the clock, which is controlled by the BPM parameter. Outputs 4 pulses per beat (4 PPQN).
#### Trigger Output
Outputs a trigger signal on for each of the notes played (by hand, arpeggiator or sequencer)
#### Pitch Hi Output
This is a 1v/oct CV signal that plays all the notes that are currently being played.
#### Gate Output
Outputs a gate signal. As long as one of the pads is being touched, a 5v signal is being generated.
#### Pitch Lo Output
A 1v/oct CV signal that outputs only the lowest note that is currently being played.
#### Pressure output
A CV signal that outputs highest amount of pressure that is currently being put on either one of the strings. This corresponds to the 'pressure bar' on the right side of the screen.


# The Expander
The Plinky Expander is a 4HP Eurorack module that adds a bunch of funtionality to Plinky, mostly to interface even better with the rest of your Eurorack setup. The following features will be included in the first version of the firmware:
#### TRS Midi Input
Gate and 1v/oct MIDI input, both Korg and Arturia standards (A and B) are supported. 
#### TRS Midi Output
Gate and 1v/oct MIDI output, both Korg and Arturia standards (A and B) are supported. 
#### A, B, X, Y Outputs
4 jacks that output the A, B, X and Y signals as CV. 

# Patch Import / Export 

You can import and export patches via the web editor:
https://plinkysynth.github.io/editor/
