(function(global,$,undefined){

	var defaults = {
		height:"600px",
		width:"100%",
		nextText:">",
		prevText:"<"
	};

	var sSlider  = function(options) {
		var overrides = options || {};
		if(!overrides.container) {
			throw("A container must be provided");
		}
		return new sSlider.init(overrides);
	};

	sSlider.prototype = {};

	sSlider.init = function(overrides) {
		var self = this;
		self.options = Object.assign(defaults,overrides);

		//caching dom
		self.roots = document.querySelectorAll(self.options.container);

		if(!self.roots.length) {
			throw('could not find the container');
		}

		self.sliders = [];
		self.roots.forEach(function(node){
			self.sliders.push(renderSlider(self,node));
		});
	};


	var renderSlider = function(context,root) {
		
		var docFrag = document.createDocumentFragment();
		var container = document.createElement('div');
		container.className =  "sslider-container";
		container.style.height = context.options.height;
		container.style.width = context.options.width;
		container.innerHTML = '<div class="sslider-slide-control">'+
		'<span class="sslider-button sslider-slide-previous">'+ context.options.prevText +'</span>'+
		'<span class="sslider-button sslider-slide-next">'+ context.options.nextText+ '</span>'+
		'</div>';

		var content = document.createElement('div');
		content.className = "sslider-content";
		var images = root.querySelectorAll('img');
		images.forEach(function(img){
			var image = document.createElement('img');
			image.className = "sslider-slide";
			image.src = img.src;
			content.appendChild(image);
		});

		container.appendChild(content);
		docFrag.appendChild(container);
		root.innerHTML = "";
		root.appendChild(docFrag);

		root.addEventListener('click', function(event){
			if(event && event.target.nodeName == "SPAN") {
				
			}
		});

	};

	sSlider.init.prototype = sSlider.prototype;

	global.sSlider = sSlider;

})(window,$);
