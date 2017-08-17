var Counter = function (min, max, finish, f, fr) {
	this.x = min;
	this.min = min;
	this.max = max;
	this.finish = finish;
	this.f = f;
	this.fr = fr;
	this.run = true;
	this.rtrn = false;
};
Counter.prototype.count = function () {
	if(this.run){
		if(this.rtrn){this.fr(this.x);}
		else{this.f(this.x);}
		if(this.x >= this.max){
			if(typeof finish === "function"){
				this.run = false;
				finish();
			}
			else if(finish === "restart"){this.x = this.min;}
			else if(finish === "return"){this.rtrn = true;}
		}
	}
};
