//multiple finishes at once
//add "wait" in combination with other finish(es) to finish
//add error messages?
//add number of times to loop through array of finishes
//add conditions instead of time limits?
//choice to base min and max on x or y
//finish action and finish function
//use finish2 as finish3 if array length is 1
//don't run undefined functions
//rename variables
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
	this.finishCount = 0;
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
	if(!Array.isArray(this.finish)){
		this.finish = [this.finish];
	}
};
Counter.prototype.functionFinish = function () {
	this.run = false;
	this.finish[this.finishCount]();
};
Counter.prototype.restartFinish = function () {
	this.x = 0;
};
Counter.prototype.returnFinish = function () {
	this.rtrn = !this.rtrn;
	this.finish3();
	this.times++;
	if(this.times >= this.maxTimes){
		this.run = false;
		this.finish2();
	}
};
Counter.prototype.resetFinish = function () {
	this.y = this.f(0);
	this.run = false;
};
Counter.prototype.arrayCountersFinish = function () {
	if(this.fCount === this.f.length-1){
		if(typeof this.finish[this.finishCount] === "function"){
			this.run = false;
			this.finish[this.finishCount]();
		}
		else if(this.finish[this.finishCount] === "loop"){
			this.fCount = 0;
			this.x = this.minArray[0];
			this.min = this.minArray[0];
			this.max = this.maxArray[0];
			this.finish3();
		}
		else if(this.finish[this.finishCount] === "stop"){this.run = false;}
	}
	else{
		this.fCount++;
		this.x = this.minArray[this.fCount];
		this.min = this.minArray[this.fCount];
		this.max = this.maxArray[this.fCount];
		this.finish2();
	}
};
Counter.prototype.stopFinish = function () {
	this.run = false;
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
				if(this.fr === undefined){
					this.y = this.f(this.x);
				}
				else{
					this.y = this.fr(this.x);
				}
			}
			else{
				this.x++;
				this.y = this.f(this.x);
			}
		}
		if(this.y >= this.max || this.y <= this.min){
			if(typeof this.finish[this.finishCount] === "function"){
				this.functionFinish();
			}
			else if(this.finish[this.finishCount] === "restart"){
				this.restartFinish();
			}
			else if(this.finish[this.finishCount] === "return"){
				this.returnFinish();
			}
			else if(this.finish[this.finishCount] === "reset"){
				this.resetFinish();
			}
			else if(Array.isArray(this.f)){
				this.arrayCountersFinish();
			}
			else if(this.finish[this.finishCount] === "stop"){
				this.stopFinish();
			}
			
			this.finishCount++;
			if(this.finishCount >= this.finish.length){
				this.finishCount = 0;
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