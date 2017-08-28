//add multiple finishes for this.finish
//make this.f defualt for this.fr when finish is "return"
//add "wait" in combination with other finish(es) to finish
//add error messages?
//add stop to finish
//add number of times to loop through array of finishes
//add conditions instead of time limits?
//choice to base min and max on x or y
var Counter = function (x, min, max, finish, f, fr, maxTimes, finish2, finish3) {
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
	this.finish3 = finish3;
	if(Array.isArray(this.min)){
		this.minArray = min;
		this.maxArray = max;
		this.min = this.minArray[0];
		this.max = this.maxArray[0];
		this.finish2 = fr;
		this.finish3 = maxTimes;
		this.fr = undefined;
		this.maxTimes = undefined;
	}
};
Counter.prototype.count = function () {
	if(this.run){
		if(Array.isArray(this.f)){
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
		if(this.y >= this.max || this.y <= this.min){
			if(typeof this.finish === "function"){
				this.run = false;
				this.finish();
			}
			else if(this.finish === "restart"){this.x = 0;}
			else if(this.finish === "return"){
				this.rtrn = !this.rtrn;
				this.finish3();
				this.times++;
				if(this.times >= this.maxTimes){
					this.run = false;
					this.finish2();
				}
			}
			else if(this.finish === "reset"){this.y = this.f(0); this.run = false;}
			else if(Array.isArray(this.f)){
				if(this.fCount === this.f.length-1){
					if(typeof this.finish === "function"){
						this.run = false;
						this.finish();
					}
					else if(this.finish === "loop"){
						this.fCount = 0;
						this.x = this.minArray[0];
						this.min = this.minArray[0];
						this.max = this.maxArray[0];
						this.finish3();
					}
				}
				else{
					this.fCount++;
					this.x = this.minArray[this.fCount];
					this.min = this.minArray[this.fCount];
					this.max = this.maxArray[this.fCount];
					this.finish2();
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
