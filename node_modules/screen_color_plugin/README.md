# SCREEN COLOR PLUGIN

https://screen-color-button.vercel.app/

## Description
This is a jQuery plugin that enables developers to add a screen color change button to their web pages. With this plugin, users can customize the background colors of the page and add visual effects to the button.

## Features

- **Dynamic Color Change:** Choose from a variety of pre-defined colors to customize the appearance of your page.
- **Button Sink Effect:** 

## How to Use

1. **Installation:**
   - npm i screen_color_plugin

2. **Initialization:**
   - Select the desired button using jQuery and call the `scrollColorChange()` method to activate the plugin.

   ```html
   <script src="path/to/jquery.min.js"></script>
   <script src="path/to/my-plugin.js"></script>
   <script>
     $(document).ready(function () {
       $("#scrollDownButton").scrollColorChange({
         colors: [
           { name: "blue", color: "rgb(43, 174, 226)" },
           { name: "green", color: "rgb(43, 226, 113)" },
           // Add more colors as needed
         ],
       });
     });
   </script>
   
## Customization
Customize colors by adding or removing objects in the `colors` array.

## Contribution
Feel free to contribute with improvements, bug fixes, or new features. Open an issue or submit a pull request!
Let's collaborate!

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
