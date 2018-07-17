## Day 2

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
* It is best practice to hold CSS in a separate file.  It can embedded in HTML by using the link tag with in the head tag. 
* 
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel=”stylesheet” type=”text/css” href=”reset.css”>
        <link rel=”stylesheet” type=”text/css” href=”style.css”>
    </head>
    <body>
    </body>
</html>
```