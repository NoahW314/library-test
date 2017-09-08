var runObject = {};
Object.defineProperty(runObject, "run", {
	value: 
	function run(){
		var counter = 0;
	
		document.addEventListener("click", function(){
			counter++;
			var clicks = document.getElementById("clicks");
			clicks.innerHTML = counter;
		});
	},
	writeable: false,
	configurable: false,
});