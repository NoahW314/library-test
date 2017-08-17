var Counter = function (y, min, max, finish, f, fr) {
	this.x = 0;
	this.y = y;
	this.sy = y;
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
		if(this.rtrn){
			this.x--;
			this.y = this.fr(this.x);
		}
		else{
			this.x++;
			this.y = this.f(this.x);
		}
		if(this.y > this.max || this.y < min){
			if(typeof this.finish === "function"){
				this.run = false;
				this.finish();
			}
			else if(this.finish === "restart"){this.x = 0;}
			else if(this.finish === "return"){this.rtrn = !this.rtrn;}
			else if(this.finish === "reset"){this.y = this.sy; this.run = false;}
		}
	}
};
