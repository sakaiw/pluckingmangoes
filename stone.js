  class Stone {
	constructor(x,y,radius) {
		var options ={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
	}
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body);

	}
	display() {
			var stoneposition = this.body.position;		
			push()
			translate(stoneposition.x, stoneposition.y);
			rectMode(CENTER)
			rotate(this.body.angle)
			fill("teal");
			imageMode(CENTER);
			ellipseMode(RADIUS);
			image(this.image, 0,0,this.radius*2, this.radius*2)
			pop()
			
	}

}