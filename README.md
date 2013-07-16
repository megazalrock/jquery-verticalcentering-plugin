# jQuery Vertical Centering Plugin
Version 1.0.5

Otto Kamiya (MegazalRock)  
mail : otto@mgzl.jp  
twitter : @megazal_rock  
facebook : facebook.com/megazalrock

## License ライセンス
[The MIT License (MIT)](https://github.com/megazalrock/jquery-verticalcentering-plugin/blob/master/LICENSE.txt)

## Change Log 更新履歴
* 1.0.5 use "use strict", add Japanese explanation.
* 1.0.4 mini fix
* 1.0.0	Initial release

## Description 概要
Easy vertical centering Plugin

[Demo](http://mgzl.jp/jvc-demo/)

上下中央揃えを簡単に行なうjQueryプラグインです。

[デモ](http://mgzl.jp/jvc-demo/)

## Dependencies 依存ライブラリ
[jQuery 1.9.x and 2.0](http://jquery.com/)

## Browser Environment 対応ブラウザ
Internet Explorer 7-10(Win)  
Chrome23+(Win/Mac)  
Firefox16+(Win/Mac)  
Opera12+(Win/Mac)  
Safari6+(Mac)

## Files ファイル
*	jquery-verticalcentering-plugin.js
*	jquery-verticalcentering-plugin.min.js

## Usage 使い方

### Centering to a parent element 親要素に対して上下中央揃え	

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

### Centering to a selected element 任意の要素に対して上下中央揃え

Pass selectors as a argument.
セレクターを引数として渡して下さい。

#### HTML

	<img class="image" src="image.jpg" height="200" width="200" alt="Image">
	<p class="target"></p>

#### JavaScript

	$(function(){
		$('.target')
			.verticalCentering('.image');
	});

### Centering and shift 上下中央揃えしてオフセット

Pass a value as a (second) argument.

（第二）引数に移動させるピクセル数を渡して下さい。

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
