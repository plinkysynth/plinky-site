---
title: Manual
date: "2021-01-24T08:38:00.000Z"
---

Work in progress!

# Plinky Manual

*Plinky is an 8 voice polyphonic touch synthesiser that specialises in fragile, melancholic sounds.*

Think of it as an 8 vertical stringed instrument, played by touching the 64 main pads, which are arranged in 8 vertical monophonic strips. 

You can play Plinky straight away with those 64 main pads. The row of 8 'shift' keys (blue LEDs) along the bottom are used in conjunction with the main pads to select parameters, presets, sequencer patterns, and samples.

Plinky supports 4 external CV modulation sources, called A B X Y, each with its own LFO.
A & B also have dedicated physical offset knobs, located either side of the screen. When changing parameters you can use the endless encoder to the right of the screen to fine tune the parameter settings.

Each of the 8 strings has:
* 4 sawtooth oscillators (pulse, supersaw or wavetable) or sampler grains, detuned by the tiny movements of your finger.
* A white noise generator
* an ADSR envelope controlling...
* ...a resonant 2-pole low-pass gate…
* ...with resonance
* a secondary ADSR envelope with repeat.
* Distortion / saturation

Plinky also has global delay, reverb, high pass filter, limiter and saturation units along with a simple mixer (for audio inputs), arpeggiator, sequencer and sampler.

## Quick Start Guide
Congratulations, you have (hopefully) succesfully built your Plinky! Welcome to the Plinky user community. We hope you make and share lots of beautiful music (or pure plain filth if you're into that).

### Powering Plinky
You can power Plinky by either connecting it to your Eurorack power (it requires a 5V connection) or USB (but never both at the same time). For connecting USB you can use either one of the connectors on the front or the back. Now Plinky will start up in Calibration Mode

### Calibrating Plinky
At first power up (or when you wiggle knob A during the power up) Plinky will start in Calibration Mode. What this does is map the exact size and positioning of your fingers to where it will register a pad being played (for example, if you play Plinky form an angle, you will touch the faceplate slightly differently. Calibration compensate for this). 

One the white LEDs will light up. Touch this in the center and the next one will light up. Touch that one in the center, and so on, making sure that the pressure is consistent on each pad. Do this until all white LEDs have been calibrated and do the same for the Blue LEDs (the shift keys). You are now done.

If you make a mistake during the calibration, just unplug and replug the USB cable. If you ever want to re-calibrate (for example, because you've moved Plinky into or out of your Eurorack, or even if you've moved it around), just wiggle knob A during power up. 

### Connect your Headphone of Speakers
Plinky has two Headphone outputs, on the front side and the back side. For each one, it is located to the right of the USB. The jack input on the left is the audio input (for effect processing or sampling). You are now ready to Plink.

### Play Plinky!
Each of the center Pads plays a note. Plinky is either playing a blank preset, which is a SuperSaw wave with 4 oscillators per 'strings', or you are playing one of the factory presets that come with later versions of Plinky. Plinky can play 8 voices polyphony. Enjoy!

### Changing the Sound
Now let’s add some delay. The bottom row of buttons, with blue LEDs, work as shift/transport/mode buttons. Tap the bottom left button, the ‘primary’ parameter editing button, referred to as SB_PARAMS_TOP from here on. Its LED lights, and you are invited to select a parameter – one of the icon pads. Tap the P_dlsend pad, second column third row. This is the send level to the delay unit. Slide your finger upwards on the leftmost column of pads to increase the amount of delay. To hear this, play any of the pads other than the most left column (which acts as a slider). Play & tweak, then press SB_PARAMS_TOP again. You are now ready to return to full ‘play mode’. That’s the basic workflow for creating patches in Plinky!

### Adding Modulation
Let’s use the physical knob at the top left of Plinky to adjust overdrive. Tap SB_PARAMS_TOP again, then tap P_drive (third columd first row) to select overdrive. Instead of just turning it up with the leftmost slider, this time, first tap M_A in the right column to select ‘modulation source A’. NOW turn it all the way up with the left slider, then tap top right M_BASE to return to ‘base value’, and SB_PARAMS_TOP  to return to play mode. Now, the physical knob at the top left of Plinky will control overdrive. That’s as complex as it gets! You now know everything you need to know to play, edit patches and modulate. Enjoy! Details follow.

# Plinky hardware

## Front and back
Let’s take a look at Plinky’s in- and outputs on the front and back first. They have identical functions, and both can be used. On each side you find:

#### Audio in (line level stereo)
A TRS, ⅛” audio jack. Useful for two things. Plinky’s sampler can sample 65 seconds of incoming audio. Additionally, Plinky can act as a mixer with effects (reverb and delay), where each of Plinky’s audio inputs are mixedwith Plinky’s internal audio. The individual inputs are mixed at unity gain, but the levels of the summed inputs and the internal sounds can be set separately.

#### USB
Micro USB slot. It can power Plinky (as long as it is not Eurorack powered, **do not connect both at the same time!**
USB is also used for MIDI in/out. It needs a USB host, so you can connect it to your computer and integrate Plinky into your DAW. It has polyphonic aftertouch, and most parameters can be edited over MIDI (see the MIDI chapter). Finally, USB is used for Firmware updates.

#### Audio out (line level stereo)
A TRS ⅛”audio jack that outputs the mixed output at line level. 

## Main Interface
Plinky is built around 64 playable ‘pads’. Actually they are not really pads, they are zones on a vertical strip. By calibrating Plinky’s touch strips, we make them function as pads. 

### Toprow

#### knob A & knob B
These two knobs act as offsets for modulator A and B respectively. Modulator A is the sum of LFO A, CV input A and the offset of the button. These modulators can be assigned to all the parameters

#### screen
Plinky has a little screen, but it shows quite a lot of useful information, depending on what you’re doing. There are various modes, each have their own interface on the screen: Play mode, Parameter Edit mode, Sampler Mode
**Play mode**
Plinky’s screen shows the last note played on the top left. On the bottom left we see the current sequencer/arp pattern. To the right of the arp/seq pattern number we see if, and if yes, which sample is selected. All the way on the right, a narrow bar shows the current pressure (max from each of the strings) that is being applied to the pads. Also on the right (left of the pressure bar) you see 4 small visualisations of modulator/LFO A, B, X and Y. The center shows a nice big waveform of what’s being played through the Mixer stage.
**Parameter edit mode**
Top left shows the device you are currently editing (Sound, Envelope, Delay, Reverb, Arp, Sequencer, A, B, X, Y, Sampler, Mixer, System)
Bottom left shows which parameter of the current device is being edited.
On the right we still see the pressure bar and the modulators. In the center we see one or two parameter values. In the upper half of the screen we see a big number, which is the current actual value of the parameter. When no modulation is applied, you will only see the big value, because the the base value and the total is equal, which you set with the slider or the encoder. 
When modulation is applied, you will see 2 numbers. The small number in the lower half of the screen is the base value of the preset, the large number in the upper half is the sum of the base values and all modulation. This means that the base value is a static number, while the current value will change with the modulation (for example, an LFO). The small value is the one you can set with the slider/encoder, and the large value is the result of this.
**Sampler Mode**
In Sampler mode you will see a large visualisation of the sample with vertical bars representing one of the 8 slice points. A small number to the right of this bar tells you which slide it is. 
On the bottom left we see the mode the sampler is in (tape/pitch). When in pitch mode, we see the base note of the current slide. On the bottom right we see the sampler playback mode (all, loop, loop all)

#### encoder
ENC_P
The push encoder is used to set parameter values. Values can often be negative and positive, where different types of units correspond to the positive or negative values (eg. in the shape parameter, negative values modulate the Pulsewidth of a pulse wave, at 0 it is a supersaw, when positive it is a wavetable).

The encoder remains tied to the parameter that was last edited, even when Plinky is not in parameter edit mode. 

When pushed, the encoder will snap the parameter value back to 0. This is useful to remove modulation from a parameter. A long push on the encoder functions clears the modulation.
 
### Left and Right rows of jacks
The column of jacks on the left are all inputs. The column of jacks on the right are all outputs. Their individual functions are described in detail in the ‘Eurorack’ chapter. 

### Bottom row (Shift Keys)
The Bottom row of pads (blue leds), are shift and transport controls, from left to right: 

#### shift (top) & Shift (bottom)
SB_PARAMS_TOP, SB_PARAMS_BOT
**Edit Mode** The first two shift buttons are the most important: they allow you to modify the sound. Why two? They map to two complete sets of parameters – primary (top) on SB_PARAMS_TOP and secondary (bottom) on SB_PARAMS_BOT, corresponding to the parameters that are written above and below each of the pads. Tap or hold either, then tap an icon pads to choose a parameter to edit.

Once in edit mode, adjust the chosen parameter using the left most column of pads as a slider, or use the encoder to the left of the screen. While in this mode you can play all the pads, except for the left most (slider) pads. Tap again to return to play mode (LED off). 

#### preset
SB_PRESET
**Preset Mode** Tap or hold, then tap a main pad to select a preset (left 32 pads), pattern (middle 24), or sample (right 8). A long press on a sample pad will edit it; on other pads, it will copy the current preset / pattern to it. Press and hold SB_CLEAR to clear the last touched preset or pattern.

#### previous
SB_PREV
Previous Button Tap to jump to the previous step (sequencer paused) or first step (sequencer playing). *Or, hold it then tap a main pad to jump to a step within the current loop, or to set a new loop start outside the current loop.*

#### next
SB_NEXT
Next Button Tap to jump to the next step.
*Or, hold it then tap a main pad to set the end of the current loop.*

#### clear
SB_CLEAR
Clear Button Tap or hold to clear stuff. Useful to mute recorded notes, live, while the sequencer is playing. If recording, this will permanently clear steps.
In preset mode, hold this after tapping a main pad to clear whole patterns or re-initialize presets. 
 
#### record and play
SB_RECORD, SB_PLAY
Play / Record Buttons Tap to toggle playback & recording.
Recording can be step based (when sequencer is paused) or realtime (when sequencer is playing). When you enter a note (or multiple notes, the sequencer is polyphonic) the sequencer jumps to the next step.

### Center pads & LEDs
The pads have two functions. Their prmary role is to play notes, in default presets the bottom left pad plays C0. Each pad up is 1 note higher within the selected scale, each string is tuned 7 semitones or a perfect fifth up (but snapped to the closest note in the scale).

The second function of the pads is to select parameters. The left most column acts as a slider to select parameter values. The right most column refer to the modulators. The center 48 pads each correspond to 2 parameters, which are printed directly above and below the pad. The parameters are described in the Parameters chapter.

Each pad also has a white LED (unless you decided to get creative in your build and installed other colors, in which case, *do share!*) These LEDs have different behaviours in the various modes:
in **play mode** the LEDs light up the notes that are being played, as well as the active sequencer step.
in **parameter mode** the LEDs show both the parameter that is being edited and the modulators that have been assigned to that parameter. So when a parameter is changing unexpectedly, you can select the parameter and then the modulator that is causing the cange will also light up. 
in **preset mode** the LED's show the active preset, sequencer pattern and current sample (when in sample mode)

# Parameters
Plinky’s parameters are arranged in somewhat logical horizontal rows. Remember to touch/hold SB_PARAMS_TOP or SB_PARAMS_BOT to enter parameter edit mode, then touch a pad with an icon to select that parameter. The left most column then becomes a dedicated slider, or you can use the encoder right of the screen. Pressing SB_PARAMS_TOP or SB_PARAMS_BOT again leaves the left slider active, allowing you to continue to tweak a single parameter while playing with the majority of the pads. Pressing SB_PARAMS_TOP or SB_PARAMS_BOT a third time returns to play mode, with all 64 pads available to play. This is the main workflow when making patches with Plinky.

The leftmost column of pads is a slider. The rightmost column of pads are modulation sources. We’ll cover those later. The middle 6 columns are the parameters themselves. From top to bottom, they are:

# Synth Voice
#### shape
P_PWM
Controls the shape of the oscillators in Plinky. When exactly 0%, you get a supersaw: 4 sawtooths per voice. When positive, you blend smoothly through 16 ROM wavetable shapes provided by @miunau. When negative, you get PWM control of pulse/square shapes. CV control and LFO's only work either positive or negative.

CV Modulation only works on one side of the spectrum: you either blend through the wavetables when the parameter was over 0, or you modulate pulse/square waves when initial CV was negative.

Tips : Honestly, justy play with this one for a bit. Assign it to a knob, play an arp or pads and listen to the rich, full scope of sounds Plinky will play. From there on see for yourself. Add an envelope to it, or let Pressure change the timbre of the sound.

#### noise
P_NOISE
Each voice can add a variable amount of white noise to the oscillator, before the low-pass gate.

Tips: assign an envelope (eg. Envelope 2 if you want the noise to modulate separately from what Envelope 1 is controlling) to add some interest to the sound. An envelope with a short attack and decay will add a percussive feel to the sound, while longer attack will ‘wash over’ the sound, more suitable for pads.

#### drive
P_DRIVE
Drive/Saturation. When turned up high, the saturation unit will create guitar-like tones, especially when playing polyphonically. It can also be used to compensate for changes in volume, for example if the Sensitivity parameter is low.

#### resonance
P_MIXRESO
Each voice has a 2-pole lowpass gate controlled by your finger pressure and the Sensitivity control. This parameter adds resonance to the filter. Note that at high levels of resonance, you may wish to adjust the drive or the high pass filter parameters.
 
#### pitch
P_PITCH
Use this to (fine) tune plinky. Range is 1 octave up or down, unquantized.
Tip: By default Pliny is tuned to C, so to play in G we could set this value to either 7 or - 5

#### degree
P_ROTATE
Think of this as a quantized pitch control, that transposes plinky in such a way that all the notes stay in the same scale. In other words, it changes which degree of the scale is played, but not the root of the scale itself.

#### octave
P_OCT
Use this to quickly change pitch, quantised to octaves.

#### scale
P_SCALE
Selects which scale of notes plinky uses. The following Scales are available on Plinky:
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


#### glide
P_GLIDE
Controls the speed of the portamento between notes in a single voice. Higher = slower

#### microtune
P_MICROTUNE
Controls how much vertical movement of your finger detunes the note. This also thickens the sound through 'unison' detuning of the individual oscillators in each note, so values above 0 are recommended.

#### interval
P_INTERVAL
Each voice has several oscillators, and this sets a fixed interval between them, from +1 to -1 octaves.

#### stride 
P_STRIDE
Controls the interval, in semitones, between each column of plinky. It defaults to 7 semitones, a perfect fifth, like a Cello or Violin. The notes are always snapped to the chosen scale, even if the stride calls for chromatic notes, so plinky does its best to choose column pitches that follow this stride while staying in-scale.

## Envelope Generator
Plinky has two Envelope Generators. Envelope 1 (the upper parameter) is mapped to the Low Pass Gates and has Attack, Decay, Sustain and Release stages. Envelope 2 (the bottom parameter) is unassigned by default and can be mapped to parameters with the Envelope modulator pad. Like Envelope 1 it is an ADSR envelope. The parameters on the same pads.

#### sensitivity
P_SENS
Master sensitivity, controlling the mapping of finger pressure to the opening/closing of each voice's low-pass gate. If you are looking for a lowpass cutoff frequency, this is the parameter you want.

#### env 2 Level
P_ENV_LEVEL
Sets the peak level of the second envelope, which can be used as a modulation source.

#### attack (top) & attack (bottom)
P_A, P_A2
Attack time. Attack (top) is for the main envelope that controls the lowpass gate. The peak level is set by the pressure of your finger, modulated by the Sensitivity parameter. Attack (bottom) controls the attack time for the secondary envelope. The peak level is controlled by ENV 2 Level.

#### decay (top) & decay (bottom)
P_D, P_D2
Decay time. Decay (top) is for the main envelope that controls the decay time for the lowpass gate. Decay (bottom) controls the decay time of the secondary envelope.

#### sustain (top) & sustain (bottom) 
P_S, P_S2
Sustain level. Sustain (top) is for the main envelope that controls the sustain level for the lowpass gate. Sustain (bottom) controls the sustain level of the secondary envelope.

#### release (top) & release (bottom)
P_R, P_R2
Release time. Release(top) is for the main envelope that controls the release time for the lowpass gate. Release (bottom) controls the release time of the secondary envelope.

## Master Effects
Plinky has 2 send/return effects: a Delay and a Reverb. They can be added to both the Synth/Sampler outputs and to the audio coming in through one of the input jacks. The parameters in this section apply to the effect parameters, where the Send parameter determines how much of the effect is sent to the mixer. In the mixer section you can adjust the dry/wet settings for the effects. 

#### delay send
P_DLSEND
Amount of the dry sound sent to the delay unit. Turn it up for echos

#### delay time
P_DLTIME
The time between each echo. Positive values are un-quantized; negative values are multiples of the current tempo.

#### delay ratio
P_DLRATIO
The delay unit is stereo. This moves the right tap to an earlier time, causing ping-pong poly-rhthmic repeats. Try simple ratios like 33%, 50%, 75%.

#### delay wobble
P_DLWOB
Amount of simulated tape speed wobble, causing pitch distortions in the delay.

#### delay feedback
P_DLFB
Amount of feedback - the volume of each echo reduces by this amount.

#### reverb send
P_RVSEND
Amount of the dry sound sent to the reverb unit. Turn it up for reverb!

#### reverb time
P_RVTIME 
Controls the length of the decay of the reverb.

#### shimmer
P_RVSHIM
Amount of octave-up signal that is fed into the reverb, causing a shimmer effect.

#### reverb wobble
P_RVWOB
Amount of simulated tape speed wobble, causing pitch distortions in the reverb. Avoids metallic artefacts.

## arpeggiator & sequencer
Plinky has a powerful arpeggiator and sequencer, Each with their own quirks. The Arpeggiator can be latched (when you lift your fingers the last notes / pressure  is continued). Besides the obvious clock divisions / multiplications, the Arpeggiator can also play Euclidean patterns or random rhythms. Additionally the Arp has some interesting order/modes, that allow for even more complex rhythms and/or polyphonic arps. 
The sequencer is polyphonic. The sequencer can also control the Arpeggiator: If both are on, the sequencer will play patterns of arps. As both the sequencer and the arpeggiator’s clocks can be divided to up to 256x the clock’s speed, this allows for very long, complex patterns. [TO DO] As the latch on/off and the Arp on/off will become mappable parameters, this allows for even more extensive sequencing possibilities. 

#### bpm
P_TEMPO
Tempo in BPM. You can also tap this parameter pad rhythmically to set the tempo. It controls the Sequencer, Arpeggiator and clocked parameters (like echo time for synced Delays) and devices

#### swing
P_SWING
[OUT OF ORDER]. This parameter will be used to add swing in a future firmware update

#### arp
P_ARPONOFF
Switches the arpeggiator on and off.

#### latch
P_LATCHONOFF
Switches the latch on/off. When on, played notes will sustain even when you take your fingers off plinky. Useful for chords, arps, drones, or using plinky as an oscillator voice.

#### order (top)
P_ARPMODE
Arpeggiator mode. The following Arpeggiator modes are available: 
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

#### order (bottom)
P_SEQMODE
Sequencer mode. Sets the order in which steps are played by the sequencer.
* Pause
* Forwards
* Backwards
* Pingpong
* Pingpong (repeat end notes)
* Random

#### clock div (top)
P_ARPDIV
Sets the speed of the arpeggiator. Negative numbers are un-quantized, positive numbers divide a 32nd note clock. The following devision are available:
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

#### clock div (bottom)
P_SEQDIV
Sets the speed of the sequencer. Negative numbers are un-quantized, positive numbers divide a 32nd note clock.

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

#### chance / density (top)
P_ARPPROB
Sets the probability of the arpeggiator progressing on each tick of its clock. If the Arp Length parameter is 0, this is a true random probability, otherwise it's the density of a Euclidean rhythm.

#### chance / density (bottom)
P_SEQPROB
Sets the probability of the sequencer progressing on each tick of its clock. If the Sequencer Length parameter is 0, this is a true random probability, otherwise it's the density of a Euclidean rhythm.

#### euclid len (top)
P_ARPLEN
When non zero, this sets the length of the euclidean pattern used by the arp. Use the Arp probability parameter to change how many note are included in each pattern. Negative values treat rests differently, try both.

#### euclid len (bottom)
P_SEQLEN
When non zero, this sets the length of the euclidean pattern used by the sequencer. Use the Seq Probability parameter to change how many note are included in each pattern. Negative values treat rests differently, try both.

#### arp octaves
P_ARPOCT
Sets how many octaves the arpeggiator ranges over. This means that if you only play 1 note, the arp will play as many octaves of that note (upwards) as you have set the parameter to.

#### gate len 
P_GATE_LENGTH
Sets the length of the gate of each step. The gate is the signal that determines whether a note is on or off. Longer gates means notes are played longer, which (in tandem with the Envelope 1) determines how long notes are sustained.

## Sampler
Plinky lets you record 8 samples, each split into 8 'slices', corresponding to the 8 columns (strings).
Once recorded, the bottom row of parameters control the granular playback of your samples.

To record or edit a sample, press SB_PRESET to go into preset mode, then press and hold one of the 8 rightmost pads. Now press and hold SB_RECORD to record a new sample. Use knob A to adjust the recording level.
Press SB_RECORD or SB_PLAY to 'arm'. Plinky will start recording when it hears audio, or tap SB_RECORD/SB_PLAY again to start recording silence. 

If you want to set the 8 slice points while recording, tap any of the main pad buttons at the start of each slice. If not, Plinky will cut the sample into 8 equal length slices. You can edit the split points later. Press SB_RECORD or SB_PLAY any time to stop recording. 

When recording is finished, to audition the slices, press and hold the main pad buttons along the top row. If you slide your finger up and down, it adjusts the start point of each slice. 

There are two options associated with samples, controlled by the usual 2 parameter shift keys SB_PARAMS_TOP/SB_PARAMS_BOT: Tape/Pitch mode and Loop mode. 
Press SB_PARAMS_BOT to cycle loop mode between 'play slice', 'loop slice', 'play all', 'loop all'.
Press SB_PARAMS_TOP to toggle between Tape mode and Pitch mode.

Tape mode lays out the sample slices across all 64 pads, top to bottom then left to right, allowing you to quickly play from any point within the sample by pressing the appropriate pad. The pitch of playback is only affected by the 'sample rate' parameter.

In Pitch mode, each slice is assigned a base pitch, visible like 'C#3' in the OLED display. You can set this reference pitch for each slice, by sliding your finger in the lower half of the main pad area. Now when you perform notes in plinky, it has set up a multisample key-split and chooses the closest pitched slice to the desired note. Be careful of octaves to be sure to use all your slices. If multiple slices have the same pitch, they will be round-robined.

Press SB_CLEAR to leave sample edit mode.

#### scrub
P_SMP_POS
[Controls the starting point of the sample playback, relative to the slice point.]

#### jitter (scrub)
P_JIT_POS
Adds an amount of randomness to the sample playback position.

#### grain size
P_SMP_GRAINSIZE
Sets the size of the grains. Modulate to achieve granular sound effects.

#### jitter (grain size)
P_JIT_GRAINSIZE
Adds an amount of randomness to the sample grain size.

#### play speed
P_SMP_RATE
Determines at what relative speed the sample is played back, eg. 50% slows the sample down by a factor of 2, 200% speeds up the sample twice. Playback speed affects the pitch of the sample accordingly, slowing the sample down pitches it down, speeding up also pitches up.

#### jitter (play speed)
P_JIT_RATE
Adds an amount of randomness to the sample playback speed

#### time stretch
P_SMP_TIME
Determines at what relative speed the sample is played back, but without changing the pitch. As the sample is cut up in miniscule ‘grains’ of audio (milliseconds), Plinky repeats some of these grains to slow down, and leaves some grains out to speed up. Changes in grain size have more drastic effects when samples are stretched severely. 

#### jitter (pulse todo)
P_JIT_PULSE_TODO
[description]

#### sample
P_SAMPLE
Controls which sample is being played, allowing you to change samples from within a preset by assigning an LFO or cv source to this parameter.

#### pattern
P_SEQPAT
Controls which sequencer pattern is being played back, allowing you to change patterns from within a preset by assigning an LFO of cv source to this parameter. If you add a slow rising saw to this parameter you can chain various patterns together. 

#### step offset
P_SEQSTEP
Offsets the starting point of the sequencer pattern, allowing for variations in sequencer playback

## Modulation A, B X & Y (inputs & LFO's)
The next two rows controls the A/B  and X/Y modulators. Shift key SB_PARAMS_TOP gives you parameters for input A and X and shift key SB_PARAMS_BOT gives you parameters for input B and Y. Each of the modulation sources corresponds to one of the CV input jacks. each input has a dedicated built in LFO that is added on top – so that these modulation sources can be useful even without any jacks plugged in. Finally, modulators A and B also correspond to knobs A & B, that offset these two values. 

#### CV level
P_ASCALE, P_BSCALE, P_XSCALE, P_YSCALE
An attenuator for the signal coming from the CV input jacks.

#### offset
P_AOFFSET, P_BOFFSET, P_XOFFSET, P_YOFFSET
Offsets the CV and/or LFO. This is a constant voltage that is being added (or subtracted) from the sum of the CV input and the LFO.

#### depth
P_ADEPTH, P_BDEPTH, P_XDEPTH, P_YDEPTH
Attenuator for the internal LFO's.The default value is zero so turn this up for LFO's.

#### rate
P_AFREQ, P_BFREQ, P_XFREQ, P_YFREQ
Controls the rate of the internal LFO. The LFO rates can range from 20 sceonds (at +100%) to [x] milliseconds at -100%. At 0% the rate is [y] milliseconds. 

#### shape
P_ASHAPE, P_BSHAPE, P_XSHAPE, P_YSHAPE
Sets the shape of the LFO. The following shapes are available:
* Triangle
* Sine
* SmthRnd (Smooth Random)
* StepRnd (Stepped Random)
* BiSquare ([Bipolar Square wave, -5v - +5v])
* Square ([Unipolar Square wave 0v - +5v])
* Castle ([dunno have to describe])
* BiTrigs ([Trigger pulses in positive and negative direction])
* Trigs ([Trigger Pulses in positive direction])
* Env ([dunno])

#### symmetry
P_AWARP, P_BWARP, P_XWARP, P_YWARP
Sets the slope of the LFO shape - for example turning a triangle wave into a sharp ramp up (symmetry +100) or down (symmetry -100). 

## Mixer
#### synth
P_MIXSYNTH
Sets the gain level of Plinky's synth / sampler. Above 50% you will start hitting a limiter, which can help to glue patches with wide dynamic range togetherYou can use this as a volume control if you are taking audio from the left / mono output. 

#### input
P_MIXINPUT
Sets the gain level of Plinky's inputs. In case both the inputs on the face plate and the front/back side are used, Plinky mixes the inputs at fixed levels, where the front/back inputs are amplified by [x db].

#### wet/dry
P_MIXWETDRY
Sets the balance between the dry signal of Plinky's voice (synth or sampler) and the wet signal of the Reverb and Delay units (the distortion/saturation device is applied directly to the 8 individual voices.) The default setting is zero where there is an equal mix of wet and dry signals. 100 is completely wet and -100 is completely dry.

#### input>fx
P_MIXINWETDRY
Sets the balance between the dry signal of the audio inputs and the wet signal passing through the Reverb and Delay units.

#### HPF
P_MIXHPF
After the synth/sampler, external audio and the effects are mixed, they pass through a High Pass Filter. This parameter controls the cut off frequency.

#### CV Quant
P_CV_QUANT / NEW P for V2
[description]

#### volume
P_HEADPHONE
Sets the level of the final output stage for the headphone out. Turn this up to 11.

#### [name]
P_ACCEL_SENS
Attenuator for the Accelerometer. this parameter controls how sensitive Plinky reacts to the accelerometer.

# MIDI & CV
#### General
Plinky responds to MIDI! It will show up as plinkysynth once you have plugged it into your computer, and will act as an 8-voice synthesizer. If you also bought the Expander for Plinky, this will also respond to and output MIDI over TRS. Refer to the Expander part of the manual. Plinky uses midi channel [x]. 

You can play Plinky also when MIDI is being sent to it. Plinky will prioritizes touch inputs over MIDI inputs, so you can jam over a pre-recorded MIDI pattern.
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
Plinky (V2) fits in standard Eurorack rails. It can be powered over Eurorack, but make Plinky sure not to combine USB and eurorack power supplies. Plinky has dedicated inputs and outputs to communicate with (semi-)modular gear. Read the description well, because some of the implementations differ slightly from what’s usual in Eurorack (mostly Gate).

The 8 jack inputs, at left, from top to bottom provide:
#### clock input
A 1/16th note clock input. Plinky responds to 2PPQN audio pulses. As soon as Plinky receives a clock in the Arpegiator / Sequencer will start playing. Other clocked devices (delay, in the future possibly the LFO’s) will switch back to the internal clock as soon as the external clock stops. 
#### gate input
An analogue gate that scales the openness of all low pass gates (0-5v).
#### pitch input
A pitch input for transposition via a V/oct input in -2v to 5v range (with quantization controlled by the u secondary parameter).
#### A, B, X, Y inputs
Modulation (A, B, X, Y) with -5v to 5v range
##### audio input
An audio input that is mixed with the synth output as well as being sent to the FX units. 

#### Left / Mono output
An audio output, at Eurorack level, mono (left channel)
#### Right output
An audio output, at Eurorack level, mono (right channel)
#### Clock output
Outputs the clock, which is controlled by the BPM parameter. [outputs at 2 pulses per beat]
#### Trigger Output
Outputs a trigger signal on for each of the notes played (by hand, arpeggiator or sequencer)
#### Pitch Hi output
This is a 1v/oct CV signal that plays all the notes that are currently being played.
#### Gate output
Outputs a gate signal. As long as one of the pads is being touched, a 5v signal is being generated.
#### Pitch Lo output
A 1v/oct CV signal that outputs only the lowest note that is currently being played.
#### Pressure output
A CV signal that outputs highest amount of pressure that is currently being put on either one of the strings. This corresponds to the 'pressure bar' on the right side of the screen.

# The Expander
the Plinky Expander is a 4HP Eurorack module that adds a bunch of funtionality to Plinky, mostly to interface even better with the rest of your Eurorack setup. The following features will be included in the first version of the firmware:
#### TRS Midi input
Gate and 1v/oct MIDI input, both Korg and Arturia standards (A and B) are supported. 
#### TRS Midi output
Gate and 1v/oct MIDI output, both Korg and Arturia standards (A and B) are supported. 
#### A, B, X, Y outputs
4 jacks that output the A, B, X and Y signals as CV. 

# Patch import / export 
[currently being developed by Miunau and Orangetronic, woot woot!] 
