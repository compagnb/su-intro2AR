## Day 7
## Components

![3d models](../img/3dmodels.png)

### Writing a Component
* A-Frame’s entity-component framework are JavaScript modules that can be mixed, matched, and composed onto entities to build appearance, behavior, and functionality.
* We can register component in JavaScript and use it declaratively from the DOM. 
* Components are configurable, reusable, and shareable. Most code in an A-Frame application should live within components.
*  [Component API] documentation(https://aframe.io/docs/0.7.0/core/component.html)
*  components should be defined before <a-scene> like:

```html
<html>
  <head>
    <script src="foo-component.js"></script>
  </head>
  <body>
    <script>
      // Or inline before the <a-scene>.
      AFRAME.registerComponent('bar', {
        // ...
      });
    </script>

    <a-scene>
    </a-scene>
  </body>
</html>

```
### Registering the Component with AFRAME.registerComponent
* Components are registered with AFRAME.registerComponent()
* The name of the component will be used as the HTML attribute name
* The component definition which is a JavaScript object of methods and properties
* The definition defines lifecycle handler methods. One of which is .init(), which is called once when the component is first plugged into its entity.

```JavaScript
AFRAME.registerComponent('hello-world', {
  init: function () {
    console.log('Hello, World!');
  }
});
```

* Using the Component from HTML

```html
<a-scene>
  <a-entity hello-world></a-entity>
</a-scene>
```

* Defining Properties with the Schema