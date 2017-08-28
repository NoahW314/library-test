var Counter = function (x, min, max, finish, f, fr, maxTimes, finish2) {
	this.x = x;
	this.y = 0;
	this.min = min;
	this.max = max;
	this.finish = finish;
	this.f = f;
	this.fr = fr;
	this.run = true;
	this.rtrn = false;
	this.times = 0;
	this.maxTimes = maxTimes;
	this.fCount = 0;
	this.finish2 = finish2;
};
Counter.prototype.count = function () {
	if(this.run){
		if(typeof this.f === "array"){
			this.x++;
			this.y = this.f[this.fCount](this.x);
		}
		else{
			if(this.rtrn){
				this.x--;
				this.y = this.fr(this.x);
			}
			else{
				this.x++;
				this.y = this.f(this.x);
			}
		}
		if(this.y > this.max || this.y < this.min){
			if(typeof this.finish === "function"){
				this.run = false;
				this.finish();
			}
			else if(this.finish === "restart"){this.x = 0;}
			else if(this.finish === "return"){this.rtrn = !this.rtrn; this.times++; if(this.times >= this.maxTimes){this.run = false; this.finish2();}}
			else if(this.finish === "reset"){this.y = this.f(0); this.run = false;}
			else if(this.f.length > 0){
				if(this.fCount === this.f.length-1){
					if(typeof this.finish === "function"){
						this.run = false;
						this.finish();
					}
					if(this.finish === "loop"){
						this.fCount = 0;
						this.x = this.min[0];
					}
				}
				else{
					this.fCount++;
					this.x = this.min[this.fCount];
					this.fr();
				}
			}
		}
	}
};

var Timer = function (start, end, f) {
	this.x = start;
	this.goal = end;
	this.f = f;
};
Timer.prototype.time = function () {
	this.x++;
	if(this.x >= this.goal){
		this.f();
	}
};
