# jQuery Vertical Centering Plugin
Version 1.1

Otto Kamiya (MegazalRock)  
mail : otto@mgzl.jp  
twitter : @megazal_rock  
facebook : facebook.com/megazalrock

## Change Log.
* 1.0.4 mini fix
* 1.0.0	Initial release

## Description

Easy vertical centering Plugin
[Demo](http://mgzl.jp/jvc-demo/)

## Dependencies
[jQuery 1.9.x and 2.0](http://jquery.com/)

## Browser Environment
Internet Explorer 7-10(Win)  
Chrome23+(Win/Mac)  
Firefox16+(Win/Mac)  
Opera12+(Win/Mac)  
Safari6+(Mac)

## Files
*	jquery-verticalcentering-plugin.js
*	jquery-verticalcentering-plugin.min.js

## Usage

### Centering to a parent element

#### HTML

	<div>
		<p class="target">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu purus id velit porttitor molestie non non velit. Vivamus dictum venenatis condimentum. In ornare tempor augue eu hendrerit. Maecenas ac ligula a ante eleifend pulvinar vel eu quam. Etiam malesuada ante laoreet dolor ullamcorper commodo. Proin adipiscing imperdiet commodo. Integer accumsan, mauris et iaculis mattis, urna orci blandit lectus, sit amet semper mi eros eget diam. Nam turpis nunc, vulputate vitae semper eu, sollicitudin eu augue. In vitae eros at nisi consectetur sodales.
		</p>
	</div>

#### JavaScript

	$(function(){
		$('.target')
			.verticalCentering();
	});

### Centering to a selected element

Pass selectors a as argument.

#### HTML

	<img class="image" src="image.jpg" height="200" width="200" alt="Image">
	<p class="target"></p>

#### JavaScript

	$(function(){
		$('.target')
			.verticalCentering('.image');
	});

### Centering and shift

Pass a value as a (second) argument.

#### HTML

	<div>
		<p class="target">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu purus id velit porttitor molestie non non velit. Vivamus dictum venenatis condimentum. In ornare tempor augue eu hendrerit. Maecenas ac ligula a ante eleifend pulvinar vel eu quam. Etiam malesuada ante laoreet dolor ullamcorper commodo. Proin adipiscing imperdiet commodo. Integer accumsan, mauris et iaculis mattis, urna orci blandit lectus, sit amet semper mi eros eget diam. Nam turpis nunc, vulputate vitae semper eu, sollicitudin eu augue. In vitae eros at nisi consectetur sodales.
		</p>
	</div>

	<img class="image" src="image.jpg" height="200" width="200" alt="Image">
	<p class="target2"></p>

#### JavaScript

	$(function(){
		$('.target')
			.verticalCentering(-20);
		$('.target2')
			.verticalCentering('.image',20);
	});
