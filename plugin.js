$.fn.adjustHeight = function(options) {
  var settings = $.extend({
        minHeight : null, //optional
    }, options );
  var sameHeightGlobalData = {};
  this.each(function () {    
    var height = $(this).outerHeight();
    var offset = $(this).offset();
    var key = "p".concat(Math.ceil(offset.top));
    if (sameHeightGlobalData.hasOwnProperty(key)) {
      if (sameHeightGlobalData[key] < height) {
        sameHeightGlobalData[key] = height;
      }
    } else {
      sameHeightGlobalData[key] = height;
    }
  });
  this.each(function () {
    var offset = $(this).offset();
    var key = "p".concat(Math.ceil(offset.top));
      if(sameHeightGlobalData.hasOwnProperty(key)) {
        $(this).addClass(key);             
      }
  });

  $.each(sameHeightGlobalData,function(i,v){
    i = "."+i;
    if(settings.minHeight != null){
      if(settings.minHeight < v)
      $(i).css('height', v);
      else
      $(i).css('height', settings.minHeight);
    }else{
      $(i).css('height', v);
    }   
  });
}
