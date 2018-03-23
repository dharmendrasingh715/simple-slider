(function(global,$,undefined){

  var settings = {};

  var sSlider  = function(options) {
    console.log(options.container);
    if(!options.container) {
      throw("A container must be provided");
    }
    return new sSlider.init(options);
  }

  sSlider.prototype = {};

  sSlider.init = function(options) {
    this.options = Object.assign(settings,options);



  }

  sSlider.init.prototype = sSlider.prototype;

  global.sSlider = sSlider;

})(window,$)
