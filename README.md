<pre>
	 _____________________
	|---------------------|\
	|     ____________    |||
	|    / |        | \   |||
	|   ( (| VCR.JS |) )  |||
	|    \_|________|_/   |||
	|_____________________|||
	 \_____________________\|

</pre>

#[VCR.JS](http://julianmaunder.github.com/vhs-js/)
###VHS style static while you scroll.

##Instructions

1. Clone the repo or [download the zip](https://dl.dropbox.com/u/60943841/vcr.zip).

```
git clone git://github.com/julianmaunder/vcr-js.git
```

2. VCR.JS add jQuery and vcr.js to your html page.

```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="scripts/vcr.js"></script>
```

3. Add this CSS to your stylesheet.

```css
	body {
	margin: 0;
	padding: 0;
	width: 100%;
	background: url("../images/vcr-black.jpg") top left repeat-y, blue;
	background-attachment: fixed;
	-webkit-background-size: 100% 19440px;
		 -moz-background-size: 100% 19440px;
			-ms-background-size: 100% 19440px;
					background-size: 100% 19440px;
}
```

4. Enjoy super cool glitchy retro website!

###WARNING
It's important to note that this probably won't work in very old browsers, it will also slow your site down.

##To Do
-convert to javascript and add background position polyfill
-add more flavours of static
-record screencast