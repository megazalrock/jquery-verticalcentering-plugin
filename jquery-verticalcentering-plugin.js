/*global $:true, jQuery:true */
/*! jQuery Vertical Centering Plugin 2013-4-21
* Vertion: 1.0
* Depends: jQuery 1.8.0 - 1.9.1
* Author: Otto Kamiya (MegazalRock) http://mgzl.jp/
* License: MIT License*/
(function(){
	var fn = {
		verticalCentering:function(target,_options){
			if($.isPlainObject(target)){
				_options = target;
				target = undefined;
			}else{
				_options = _options || {};
			}
			var options = {
				shift:0
			};
			$.extend(true,options,_options);
			var $self = $(this), $target = ((target === undefined) ? $self.parent() : $(target)), changeSize;
			var i = 0,length = $self.length;
			$self.each(function(){
				$self = $(this);
				var selfHeight = $self.outerHeight(),targetHeight = $target.innerHeight();
				if(targetHeight > selfHeight){
					$self
						.css({
							marginTop:(targetHeight - selfHeight)/2 + options.shift
						});
				}
			});
		}
	};
	$.fn.extend(fn);
})(jQuery);