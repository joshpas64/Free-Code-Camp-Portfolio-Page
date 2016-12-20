# Free-Code-Camp-Portfolio-Page
Link to codepen at http://codepen.io/joshpas4991/pen/woQbGz

This was the second project in the first part of learning front-end webdev at <a href="https://www.freecodecamp.com">Free Code Camp</a> 

The description of the project was to build a portfolio page for yourself following <a href="https://www.freecodecamp.com/challenges/build-a-personal-portfolio-webpage">these rules.</a>
And following this <a href="https://codepen.io/FreeCodeCamp/full/YqLyXB/">example.</a> This repository will include the <strong>FULL SOURCE CODE</strong>, which include some of the html and frameworks included in a codepen project as well as the code you put in the tabs you create a new codepen.io <strong>pen</strong>.
Usually a codepen has 3 tabs
## HTML                 CSS                     JS

The <strong>HTML</strong> tab is where you right and edit all the html code that will provide the content and basic framework, layout, and organization to your webpage. <em> ALSO </em> note, that all the code written in the <strong>CSS tab</strong> and <strong>JS tab</strong> are all automically linked to the html page that is in your pen. My project will contain the source code you would put in the <strong><em>HTML CSS JS</em></strong> tabs.

You are allowed to import some common CSS, HTML, and Javascript preprocessor and libraries which you can either pick from Codepen or include or link to on your own.

### How to do So
1. Go and click the Settings Icon <img src="http://image.flaticon.com/icons/svg/17/17214.svg" width="10" height="10"> on your <strong>HTML CSS</strong> or <strong> JS or Javascript</strong> tab.
2. From there you will see either a `HTML PreProcessor` or `CSS Preprocessor` or `Javascript Preprocessor` header with a drop-down list below which will give you a list of options of anything you wish to add
3. Below that option you will see another header called <strong>Add External [placeholder language]</strong> with input boxes below it.
4. Below those input boxes you will see an option called `Quick Add` where you can pick from commonly used libraries like bootstrap, jQuery, React, backbone, Animate.css, Angular, Ember, etc. (You are not limited to whatever is in the list you can link to any library of HTML, CSS, or Javascript that you would like.

### What I used.
* General <a href="http://getbootstrap.com/">Bootstrap library<a>.
* The <a href="https://bootswatch.com/superhero/">Superhero template</a> from <a href="https://bootswatch.com/">bootswatch</a>.
* Basic <a href="https://jquery.com/">jQuery</a>.

### Adding External Stylesheets or Libraries

1. You must first know the format of an HTML document it usually has this kind of layout in code
```html
<!DOCTYPE HTML>
  <html>
  <head>
    <meta charset="UTF-8">
    <link/>
    <link/>
    <title>The title of your web page in the tab bar goes here</title>
    <style>
    </style>
    <script>
    </script>
    </head>
    <body>
      <header>
      </header>
      <main>
      </main>
      <script></script>
    </body>
    </html>
```
2. In  the `<head></head>` section of an html page is the section where you put either links to stylesheets or other images or icons with the `<link/>` tag. You directly add your own stylesheet that is generated for only this webpage by adding CSS code in between the  `<style></style>` tags in your `<head>` section. For scripts, such as javascript use `<script></script>` tags. There, you can either directly add your own javascript code or link to a javascript library if you wish.
3. Examples, the stylesheets I used and would link to
```html
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>
    <link rel='stylesheet prefetch' href='https://bootswatch.com/superhero/bootstrap.min.css'>
```
Just remember for CSS use <strong>rel="stylesheet"</strong> and use <strong>href="https://somepath.css"</strong> attributes when making the link. Adding your own CSS code
```html
		<style>
			body {
			background-color: red;
			}
			.some-class p {
			text-align: left;
			}
			</style>
```
4. For applying javascript use `<script></script>` and either link or add code there, Example:
linking to jQuery 
```html
	  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
```
or add your own code if you want
```html
	<script>
		$(document).ready(function(){
		$("p").addClass("text-center");
		$("#specialButton").click(function(){
					$(this).css({"background-color": "red"});
		});
		$("body").addClass("container-fluid");
		$("body").css({"background-color": "gray", "margin" : "20px"});
		});
		</script>
```
The javascript could be between in the `<head></head>` tags or after the `</main>` closing tag but before the end of
the html body (i.e. before the `</body></html>` tags, it depends


The full project, including the source code is here but to see what it looks like in the codepen editor feel free to check out
<a href="http://codepen.io/joshpas4991/full/woQbGz/">the actual codepen pen</a>
