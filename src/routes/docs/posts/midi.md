---
title: "MIDI"
date: "2021-02-01T12:51:00.000Z"
---

## General

Plinky responds to MIDI! It will show up as `plinkysynth` once you have plugged it into your computer, and will act as an 8-voice synthesizer. Plinky also supports MIDI out over USB. Plinky’s implementation has polyphonic aftertouch.

## MIDI CC list

Here's a list of all the CC parameters that Plinky listens to.

CC| Category | Parameter
--|------|-----------
13 | Sound | Shape
4 | Sound | Distortion
9 | Sound | Pitch
14 | Sound | Interval
2 | Sound | Noise level
5 | Sound | Glide
71 | Sound | Resonance
3 | ENV 1 | Sensitivity (LPF amount)
73 | ENV 1 | Attack
74 | ENV 1 | Sustain
75 | ENV 1 | Decay
72 | ENV 1 | Release
19 | ENV 2 | Level
20 | ENV 2 | Attack
21 | ENV 2 | Decay
22 | ENV 2 | Sustain
23 | ENV 2 | Release
94 | FX - Delay | Delay send amt
12 | FX - Delay | Delay time
112 | FX - Delay | Delay pingpong
113 | FX - Delay | Delay wobble
95 | FX - Delay | Delay feedback amt
91 | FX - Reverb | Reverb send amt
92 | FX - Reverb | Reverb time
93 | FX - Reverb | Reverb shimmer
114 | FX - Reverb | Reverb wobble
101 | ARP | Latch On/off
102 | ARP | On/off
103 | ARP | Order
104 | ARP | Clock division
105 | ARP | Chance
106 | ARP | Euclid length
107 | ARP | Octaves
108 | SEQ | Order
109 | SEQ | Clock division
110 | SEQ | Chance
111 | SEQ | Euclid length
11 | SEQ | Gate length
83 | SEQ | Pattern
85 | SEQ | Steps
15 | Sampler | Scrub
16 | Sampler | Grain size
17 | Sampler | Play speed
18 | Sampler | Timestretch
82 | Sampler | Sample
116 | Sampler | Jitter position
117 | Sampler | Jitter grain size
118 | Sampler | Jitter rate
119 | Sampler | Jitter pulse
24 | A | Offset
25 | A | Depth
26 | A | Rate
27 | B | Offset
28 | B | Depth
29 | B | Rate
78 | X | Offset
77 | X | Depth
76 | X | Rate
81 | Y | Offset
80 | Y | Depth
79 | Y | Rate
89 | Mixer | IN volume
90 | Mixer | IN wet/dry amt
31 | Mixer | HPF amt
7 | Mixer | Synth level
8 | Mixer | Wet/dry

## Midi CCs - Output
Plinky supports MIDI out over USB and TRS (since hardware v3, or if you have the Expander). 

Plinky’s implementation has polyphonic aftertouch.

In addition to that, 
- the finger position for each column is sent on CC 32 - 39, 
- and the pressure for each column is sent on CC 40 - 47.

<img src="/expander-manual/Plinky_Expander_MIDI-CCs_Out.png" alt="Plinky MIDI CCs Out" style="max-width: 100%;">
