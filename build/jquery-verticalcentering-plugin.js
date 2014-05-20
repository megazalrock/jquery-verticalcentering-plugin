/*! jQuery Vertical Centering Plugin 2014-05-20
 *  Vertion : 1.0.7
 *  Dependencies : jQuery 1.9.1 - 2.1.1
 *  Author : Otto Kamiya (MegazalRock)
 *  License : MIT*/
(function($){
	"use strict";
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
			return this;
		}
	};
	$.fn.extend(fn);
})(jQuery);