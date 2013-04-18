/*global $:true, jQuery:true */
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
			$self.each(function(){
				$self = $(this);
				var selfHeight = $self.outerHeight(),targetHeight = $target.innerHeight();
				if(targetHeight > selfHeight){
					$self
						.css({
							marginTop:(targetHeight - selfHeight)/2 + options.shift
						});
					$target
						.css({
							overflow:'hidden'
						});
				}
			});
		}
	};

	$.fn.extend(fn);

})(jQuery);