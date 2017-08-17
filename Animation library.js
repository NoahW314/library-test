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
		if(this.rtrn){this.x = this.fr(this.x);}
		else{this.x = this.f(this.x);}
		if(this.x >= this.max){
			if(typeof this.finish === "function"){
				this.run = false;
				this.finish();
			}
			else if(this.finish === "restart"){this.x = this.min;}
			else if(this.finish === "return"){this.rtrn = !this.rtrn;}
			else if(this.finish === "reset"){this.x = this.min; this.run = false;}
		}
	}
};
