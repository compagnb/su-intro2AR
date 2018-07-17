## Day 1
## Introduction & Workspace Set-Up

![Pokemon Go!](../img/pokemongo.jpg)

### Augmented Reality vs Virtual Reality
* **Virtual reality**, or VR, requires you to inhabit an entirely virtual environment.
    *  Examples:
        * [Jaunt VR](https://store.steampowered.com/app/456450/Jaunt_VR__Experience_Cinematic_Virtual_Reality/)
        * [Minos Starfighter VR](https://youtu.be/2Zo5ldjC3v4)
* **Augmented reality**, or AR, uses your existing natural environment and simply overlays virtual information on top of it. 
    * Users of **AR** experience a new and improved natural world where virtual information is used as a tool to provide assistance in everyday activities.
    * Examples:
        * [Pokemon Go!]()
        * [Clandestine Anomaly](https://youtu.be/hkn5PMnO5VQ)

### MARKER BASED AUGMENTED REALITY
* Also called Image Recognition 
* Uses a camera and some type of visual marker using simple patterns, to produce a result only when the marker is sensed by a reader. 
* Simple patterns, such as a QR code, are used because:
    * Easily recognized 
    * Do not require a lot of processing power to read. 
* The position and orientation is also calculated, in which some type of content and/or information is then overlaied the marker. 

### WEB BASICS REVIEW
* A website consists of three differant parts:
    * Content/Structure/Skeleton (HTML)
    * Style/Skin (CSS)
    * Function/Action (JavaScript)
* HTML 
    * Stands for HyperText Markup Language
    * The structure that holds everything together
    * No HTML... No webpage
    * All computer systems understand the instructions in HTML the same way, and its free!
    * To ensure the browser knows to use the latest version of HTML always include a doctype declaration in the first line of code, like this:

```html
<!DOCTYPE HTML>
```

### HTML TAGS/ELEMENTS
* HTML tags or elements add structure the content.
* Almost all tags/elements have an open and a close tag...

![HTML Open Tag](../img/open.png)

![HTML Close Tag](../img/close.png)

![HTML attribute](../img/attribute.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “UTF-8”>
        <title>This is the Main Heading</h1>
    </head>
    <body>
        <h1>This is the Main Heading</h1>
        <p>This text might be an introduction to the rest of the page. And if the page is a long one it might be split up into several sub-headings.</p> 
        <h2>This is a Sub-Heading</h2>
        <p>Many long articles have sub-headings to help you follow the structure of what is being written. There may even be sub-sub-headings (or lower-level headings).</p> 
        <h2>Another Sub-Heading</h2>
        <p>Here you can see another sub-heading.</p> 
    </body>
</html> 
```

* The **html** tag indicates that anything between the opening tag **<html>**and the close tag **</html>** will be written in HTML code. **It surrounds the whole page, encapsulating all the code within the page!**
* The code contained between the opening tag **<head>**and the close tag **</head>** is meta information. It is usually important information that the rest of the page will need to know, as well as information the browser will need before it renders. **Think of it like a brain!**
* **Meta** tags are tags that don’t encapsulate or contain anything (**void**). They hold information that will not be displayed on the web page, but is important to it. It is often used to set the attributes of the page description, keywords, author of the document, last modified, and other metadata. 
* The **title** tag indicates that anything between the opening tag **<title>**and the close tag **</title>** will be used as the title of the browser window. 
* The code contained between the opening tag **<body>** and the close tag **</body>** is all the actual content of the page. It will be shown in the main browser **It is the belly!** That's where we put all other tags, like headings, paragraphs, divisions (or containers), etc.

### HTML BEST PRACTICES
* **REMEMBER** to make your code legible:
    * Use quotes around attributes
    * Indent to represent nesting
    * Use same capitalization

### CSS Review
* Cascading Style Sheets
* a “style sheet language”, consisting of “style rules” that lets you style the elements on your page

```html
<p style = "color:#FF0000;">Some text...</p>
```

* The style attribute allows you to specify Cascading Style Sheet (CSS) rules within the element.

```css
Selector {
    Property: value;
    Property: value;
}
```
* CSS consists of “style rules”. Each style rule has a **selector** and declarations of **property-value** pairs.
* The **selector** is used to select which elements in the html will be given the **properties** inside the curly braces. 
* Selectors include: element/tags, Id or Class attributes, or by the position within the document. 

```html
<body style='margin : 0px; overflow: hidden;'>
```

### WHAT IS JAVASCRIPT
* A cross-platform, object-oriented scripting language.
* Used to make webpages interactive, such as parallax scrolling (client side programming)
* Used to build server-side applications, such as rest API's (server side programming)
* To create AR we need to utilize 4 JavaScript Libraries 
    * **three.js** to create and display animated 3D computer graphics in the web browser.
    * **WebGL** for rendering interactive 2D and 3D graphics within aweb browser without the use of plug-ins.
    * **A-Frame** for building virtual reality (VR) experiences.
    * ** AR.js** to create add a virtual element

### A-FRAME & AR.js
```html
<!-- include A-Frame obviously -->
<script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
<!-- include ar.js for A-Frame -->
<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></scipt>

````
* To include AR.js, you need to include **aframe-ar.js**.
```html
<a-scene embedded arjs>
```
* Then you initialize ar.js in **<a-scene>**. 
```html
<a-marker-camera preset='hiro'></a-marker-camera>
```
* Then you tell **A-Frame** that you want **arjs** to control the **camera**. For that, you just add

