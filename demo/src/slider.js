(function(global,$,undefined){

  var defaults = {
      height:"100px",
      width:"100%;",
      nextText:">",
      prevText:"<"
  };

  var sSlider  = function(options) {
    var overrides = options || {};
    if(!overrides.container) {
      throw("A container must be provided");
    }
    return new sSlider.init(overrides);
  }

  sSlider.prototype = {};

  sSlider.init = function(overrides) {
    var self = this
    self.options = Object.assign(defaults,overrides);

    //caching dom
    self.roots = document.querySelectorAll(self.options.container);

    if(!self.roots.length) {
      throw('could not find the container');
    }

    self.sliders = [];
    self.roots.forEach(function(node){
      console.log(node);
      // self.sliders.push(render.apply(self));
    });
  }


  // var render = function(context,root) {
  //   var
  // }

  sSlider.init.prototype = sSlider.prototype;

  global.sSlider = sSlider;

})(window,$)
