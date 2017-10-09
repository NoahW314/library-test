/*var runObject = {};
Object.defineProperty(runObject, "run", {
	value: 
	function(){
		var counter = 0;
	
		document.addEventListener("click", function(){
			counter++;
			var clicks = document.getElementById("clicks");
			clicks.innerHTML = counter;
		});
	},
	writeable: false,
	configurable: false,
});*/

(function(){
	var counter = 0;

	document.addEventListener("click", function(){
		counter++;
		var clicks = document.getElementById("clicks");
		clicks.innerHTML = "Coins"+counter;
		
		throw document.getElementById("wood-mine");
	});
})();


