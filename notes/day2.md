## Day 2
## Text, Images & Basic Shapes

![Pokemon Go!](../img/pokemongo.jpg)

### Using Text
```html
<a-text value="Hello, World!"></a-text>
```
* The **<a-text>** tags wrap the text component.
![a text attributes](../img/atext.png)


### Images
```html
<a-image src="another-image.png"></a-image>
```
* The **image primative** shows an image on a flat plane.
![a image attributes](../img/aimage.png)


### Image Primatives
```html
<html>
  <head>
    <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```
* Primitives act as a convenience layer (i.e., syntactic sugar) primarily for newcomers. Keep in mind for now that primitives are <a-entity>s under the hood that:
    * Have a semantic name (e.g., <a-box>)
    * Have a preset bundle of components with default values
    * Map or proxy HTML attributes to component data
