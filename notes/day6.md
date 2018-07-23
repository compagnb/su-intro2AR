## Day 6
## 3D Models

![3d models](https://media.giphy.com/media/Mzzpe9znsU6iI/giphy.gif)

## OBJ Models
* Load assets by specifying the path directly within **url()**

```html
<a-entity obj-model=”obj: url(/path/to/nameOfFile.obj); 
mtl: url(/path/to/nameOfFile.mtl)”>
</a-entity>
```

## COLLADA (DAE) Models

```html
<a-entity collada-model=”url(/path/to/nameOfFile.dae)”>
</a-entity>
```

## glTF 2.0 and glTF Models

```html
<a-entity gltf-model=”url(/path/to/nameOfFile.gltf)”>
</a-entity>
```
* **GL Transmission Format** 
* Loads a 3D model using a **.gltf** or **.glb** file.
* Efficient & Best for web use!


* NOTE: glTF files usually come with a .bin file so make sure that both the files are in the same folder.


### Efficiencies
* Loading the images through inline is less performant than going through the asset management system.

```html
<a-scene>
  <a-assets>
    <a-asset-item id="tree-obj" src="/path/to/tree.obj"></a-asset-item>
    <a-asset-item id="tree-mtl" src="/path/to/tree.mtl"></a-asset-item>
  </a-assets>

  <a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl"></a-entity>
</a-scene>
```
### Sample files can be found:
* [Sketchup’s 3D Warehouse](https://3dwarehouse.sketchup.com/)
* [Clara.io](https://clara.io/)
* [Blender](https://www.blender.org/)
* [Sketch Fab](https://sketchfab.com/features/gltf)
* [Google Blocks](https://poly.google.com/)

### Other Resources:
* [OBJ --> GLTF](https://github.com/AnalyticalGraphicsInc/obj2gltf)
* [Collada --> GLTF](http://52.4.31.236/convertmodel.html)

### A-frame Extras
* Requires aframe-extras-loaders

```html
<script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>
```
