---
title: Plinky Editors
date: "2021-01-24T08:38:00.000Z"
slug: play-guide
---

## Browser-based Patch Editor

Plinky has a a browser-based patch editor at [plinkysynth.github.io/editor](https://plinkysynth.github.io/editor/).
You will need a Web-Serial enabled browser like Google Chrome to run it, and allow it to connect with Plinky. 

Here's how to use the editor.

- Connect Plinky to your Computer using a USB cable
- Open Chrome, and navigate to [plinkysynth.github.io/editor](https://plinkysynth.github.io/editor/)
- The page reads "Current state: disconnected". 
- Click the Connect button.
- A popup will appear and prompt you to select a MIDI device. Select "Plinky MIDI Synth" and click connect.

If do not see Plinky listed here, try another USB cable. 
<br>Note that some USB cables are charge-only and do not transmit data.
<br>On Linux, you will need to [grant hardware access](#browser-based-patch-editor-linux-) to Plinky. 

![Plinky - Browser-based Patch Editor](/editors/Plinky_Patch_Editor_0.png)

The page should change to read "Current state: connected" at the top.

- Under Current Patch, the page will say "No patch in browser memory"
- Enter the patch number you want to edit.
- This should ideally be the same preset you have selected on Plinky, unless you plan to copy a preset into another slot.
- Click Load Patch. This downloads the settings to the browser.
- You will see the page fill with the parameters of the patch.

You may need to scroll down to see a list of all the parameters.

![Plinky - Browser-based Patch Editor](/editors/Plinky_Patch_Editor_1.png)

For each Parameter, you can change these parameters:

- use the Slider to set the base value for the parameter.
- Env sets the amount the envelope will modulate this parameter
- Pressure sets how much pressure will influence this parameter
- A, B, X, Y determine the modulation from the A, B knobs and A, B, X, Y Control voltage
- Random: enter a number to set how much this parameter is randomized each time you play a note

Click the Details arrow to expand a detailed description for this Parameter.

![Plinky - Browser-based Patch Editor](/editors/Plinky_Patch_Editor_2.png)

Once you are done editing the parameters, scroll back up.

- Under Patch name and category, you can set a patch name, and a descriptive (or silly) category.
- Click Save patch. This upload the settings to Plinky.

Important: the values you edit do not update in real time.
You have to click Save Patch in order upload the settings to Plinky and hear your changes.

If you want to edit a subset of parameters in real time, use the TouchOSC editor.

Under Link to Patch, you will find the complete Patch encoded in a link.
Copy this Link and save it in a text file if you want to archive your preset.
Note that this saves the synthesis parameters, but not the sampled material.

### Browser-based patch editor (Linux)

When trying to connect to the [browser-based patch editor](https://plinkysynth.github.io/editor/) using Linux, if you get a message like 

```
SecurityError: Failed to execute 'open' on 'USBDevice': Access denied. 
```

you may need to grant hardware access to Plinky. This can be done by adding an udev rule.

First, ensure that the Plinky is connected to your computer via USB. 
</br>You can check if the Plinky is connected by running:
```
lsusb
```

You should see a line similar to:
```
Bus 001 Device 026: ID cafe:4018 Plinky PlinkySynth MIDI
```

Note the cafe id. If this is not showing up, you may need to check your USB cable.

Next, add yourself to the plugdev group. You can do this by running:
```
sudo usermod -a -G plugdev $USER
```

You will need to log out and log back in for the group membership to take effect. 
</br>To check if you are in the plugdev group, you can run:
```
groups
```

This should show a list of groups you are in, and plugdev should be one of them.


Next, you need to create a udev rule to allow access to the Plinky. 
</br>You can use nano or any other editor of your choice:
```
sudo nano /etc/udev/rules.d/99-plinky.rules
```

The file should have the following line:
```
SUBSYSTEM=="usb", ATTRS{idVendor}=="cafe", MODE="0660", GROUP="plugdev"
```

This grants read access to the Plinky to the plugdev group.

Then, reload the udev rules:
```
sudo udevadm control --reload-rules
```

Finally, unplug and replug the Plinky, and you should be able to connect to the editor.
</br>Thank you to users ddmm64 and ch-one for submitting this solution.

## TouchOSC Editor

Steven [Okyeron](https://www.instagram.com/okyeron/) / [Denki Oto](https://www.denki-oto.com/) has created a TouchOSC template for Plinky. 

It allows you to edit a subset of Plinkys parameters via MIDI in realtime, using Plinky's [MIDI implementation](../docs/midi).

Here's how to use it:

- Install TouchOSC from [hexler.net/touchosc](https://hexler.net/touchosc).
- In this guide we use version 1.3.5.212 on Windows 10.
- Download the template file for Plinky: [plinky_control_v1.2.tosc](/editors/plinky_control_v1.2.tosc)
- Connect Plinky to your Computer via USB

Now open TouchOSC and load the template file via File > Open.

![Plinky - TouchOSC Editor](/editors/TouchOSC_1.0_Plinky_Control_V1.png)

Next, make sure Plinky is found as a MIDI device.

- Go to Edit > Preferences
- Under Inputs and Outputs, set a checkmark next to PlinkySynth MIDI

If do not see Plinky listed here, try another USB cable. 
<br>Note that some USB cables are charge-only and do not transmit data.

![Plinky - TouchOSC Editor](/editors/TouchOSC_2.1_Preferences.png)

Then, you need to tell TouchOSC you want to send the MIDI from this template to Plinky.

- Go to Edit > Connections
- Check Connection 1
- For Send Port and Receive Port click Browse, then select PlinkySynth MIDI

Save your settings by clicking Done.

![Plinky - TouchOSC Editor](/editors/TouchOSC_3.1_Connections.png)

To launch the template, click the Play button.

Use the sliders to set Plinkys parameters in realtime, via MIDI.

![Plinky - TouchOSC Editor](/editors/TouchOSC_4.1_Play.png)

While this example is written for the desktop app, TouchOSC runs on Android and iOS as well. You should be able to connect Plinky via an OTG USB cable and be able to control Plinky in a similar fashion.