## Day 8
## Textures & Animation

![Animation](https://giphy.com/embed/d3MKf4zf7TvpjVIs)

### Textures
* Apply the texture to our box by copying the url of the image we want to use, and then pasting it as a value of the src (source) attribute. 

```html
<a-scene embedded arjs=’sourceType: webcam;’>
    <a-box src=”https://i.imgur.com/mYmmbrp.jpg” position=”0 0.5 -0.5″ color=”blue” scale=”1 0.5 1″ rotation=“0 45 0” material=’opacity: 0.9;’></a-box>
    <a-marker-camera preset=’hiro’></a-marker-camera>
</a-scene>
```

* To add a texture to a primitive model in A-Frame, add an <a-asset> entity and create an img tag with id and source parameters, and add a source parameter to the primitive entity pointing to the ID, for example: 

```html
<a-scene embedded arjs=’sourceType: webcam;’>
    <a-assets>
        <img id=”boxTexture” src=”https://i.imgur.com/mYmmbrp.jpg”>
    </a-assets>
    <a-box src=”#boxTexture” position=”0 0.5 -0.5″ color=”blue” scale=”1 0.5 1″ rotation=“0 45 0” material=’opacity: 0.9;’></a-box>
    <a-marker-camera preset=’hiro’></a-marker-camera>
</a-scene>
```

* **segments-height** attribute is used to smooth out the edges, to make the geometry rounder and less “pointy”.

![segments height](../img/segments.png)


### Animations
* A-Frame attaching an <a-animation> element as a child of the entity to animate.
* to define a 5-meter orbit on an entity about the Y-axis that takes 10 seconds, we can offset its position and animate the rotation of a parent entity. This animation starts with the initial rotation about the Y-axis of 0 degrees and goes around to 360 degrees. It’s defined with a duration of 10000 milliseconds, maintains the final value on each cycle of the animation, and loops indefinitely.

```html
<a-entity>
  <a-entity position="5 0 0"></a-entity>
  <a-animation attribute="rotation"
               dur="10000"
               fill="forwards"
               to="0 360 0"
               repeat="indefinite"></a-animation>
</a-entity>
```
![animation attributes](../img/animationatt.png)

```html
<a-box src=”#boxTexture” position=”0 0.5 0″ color=”blue” material=’opacity: 0.8;’>

<a-animation attribute=”position” to=”5 0 0″ direction=”alternate” dur=”3000″

repeat=”indefinite”></a-animation>

</a-box>
```
