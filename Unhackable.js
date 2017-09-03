function run(){
	var counter = 0;
	
	document.addEventListener("click", function(){
		counter++;
		var clicks = document.getElementById("clicks");
		clicks.innerText(counter);
	});
}