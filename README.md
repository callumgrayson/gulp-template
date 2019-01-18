# Template for Simple JS App with Gulp Build
This is a build template for vanilla Javascript applications. Transpile, autoprefix, minify and bundle your assets.

## Installation
In your terminal:
1. `git clone https://github.com/callumgrayson/gulp-template.git`
2. `cd gulp-template`
3. `npm i`

The last command will install the dependecies needed for the gulp build.

## Development
In **`src`** open **`index.html`** with your editor's live server to see 'changes on save' as you develop your project. 
- Edit the **`index.html`** file in place.
- Develop your project and place any images in the **`img`** folder.
- If you rename any folders the build will not work unless you also change the relevant names in the **`gulpfile.js`** file.

## Build
- Run **`gulp`** in your terminal. Gulp will transpile, autoprefix, minify and bundle your css, image and javascript files in the **`docs`** folder.
- In the **`docs`** folder, in **`index.html`** un/comment thusly: 
```html
<!-- <link rel="stylesheet" href="./main.css"> -->
<!-- <script src="./app.js" defer></script> -->
<link rel="stylesheet" href="./main.min.css">
<script src="./app.min.js"></script>
```
- Upload/deploy the contents of the **`build`** folder to your site.

## Demo
See a build of the 
[Template](https://callumgrayson.github.io/gulp-template/).






