/*global $:true, jQuery:true */
/*! jQuery Vertical Centering Plugin 2013-4-21
* Vertion: 1.0
* Depends: jQuery 1.8.0 - 1.9.1
* Author: Otto Kamiya (MegazalRock) http://mgzl.jp/
* License: MIT License*/
(function(){
	var fn = {
		verticalCentering:function(target,shift){
			shift = shift || 0;
			if(typeof target === 'number'){
				shift = target;
				target = undefined;
			}
			var $self = $(this), $target = ((target === undefined) ? $self.parent() : $(target));
			var i = 0,length = $self.length;
			$self.each(function(){
				$self = $(this);
				var selfHeight = $self.outerHeight(),targetHeight = $target.innerHeight();
				if(targetHeight > selfHeight){
					$self
						.css({
							marginTop:(targetHeight - selfHeight)/2 + shift
						});
				}
			});
		}
	};
	$.fn.extend(fn);
})(jQuery);