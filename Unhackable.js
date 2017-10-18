(function(){
	var counter = 0;
	var mineCounters = [];
	var touchCounters = [];

	var clicker = document.getElementById("main-clicker");
	var items = ["wood", "metal", "gold", "planetary", "galactic", "universal"];
	var types = ["mine", "touch"];
	for(var t = 0; t < types.length; t++){
		for(var i = 0; i < items.length; i++){
			var item = document.getElementById(types[t]+"-"+items[i]);
			item.addEventListener("click", function () {
				throw this;
			});
		}
	}
	
	clicker.addEventListener("click", function(){
		counter++;
		var clicks = document.getElementById("clicks");
		clicks.innerHTML = "Coins: "+counter;
	});
	
	
})();
