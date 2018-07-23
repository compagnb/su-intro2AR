## Day 4
## Multiple Markers

![Markers](../img/markers.png)

### [MARKER BASED AUGMENTED REALITY](https://www.youtube.com/watch?v=oJbvy1v72ek)
* Also called Image Recognition 
* Uses a camera and some type of visual marker using simple patterns, to produce a result only when the marker is sensed by a reader. 
* Simple patterns, such as a QR code, are used because:
    * Easily recognized 
    * Do not require a lot of processing power to read. 
* The position and orientation is also calculated, in which some type of content and/or information is then overlaied the marker. 

### HOW DOES IT WORK?
* Maker detection happens in a few stages. 
    * First, to make detection easier, the camera feed is preprocessed. 
    * An important ingredient in this step is converting the camera image to greyscale. 
    * Four fixed points are needed to determine the camera's pose. 
    * Take the camera image data and calculate the feature points from all potential markers. 
    * Then compare these potential markers to pre-programmed data, and check whether a potential marker matches any of the markers the device has been looking for.
    * Once a marker has been confirmed, we use the coordinates of its feature points to calculate mathematically the pose of the camera. 
    * [Tips on what makes a good marker](https://wiki.kudan.eu/What_Makes_a_Good_Marker%3F)

### CUSTOM MARKERS
* [Pattern Marker Generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)   
    * upload the image
    * generate a pattern file (**pattern-marker.patt**). 
    * download the trained marker
    * generated pattern file contains the encoded marker that should be reused in the code. 
    * Specify a pattern marker and provide the url to the custom marker. 

```html
<a-marker-camera type='pattern' url='path/to/pattern-marker.patt'></a-marker-camera>
```

* Barcode
    * contains a kind of binary code which encodes a number
    * very useful you have many locations with various markers
    
* Adding A Barcode
    *  First you need to tell AR.js to start detecting them and their type of binary code.  

```html
<a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'></a-scene>
```

* Now that ar.js knows you want to use barcode markers, on each of your marker you need to specify which number you will use, e.g. for barcode 5.

```html
<a-marker type='barcode' value='5'></a-marker>
```

* Marker Presets
    * There are 2 presets “hiro” and “kanji”

```html
-- here is a hiro preset -->
<a-marker preset='hiro'></a-marker>
<!-- it is the same as the marker below -->
<a-marker type='pattern' url='http://examples.org/hiro.patt'></a-marker>

<!-- here is a kanji preset -->
<a-marker preset='kanji'></a-marker>
<!-- it is the same as the marker below -->
<a-marker type='pattern' url='http://examples.org/kanji.patt'></a-marker>
```