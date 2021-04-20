class Iron {
    constructor(x,y,width,height) {
      var options={
			restitution:0.1,
			friction:4,
			density:30

		}
        this.x=x;
		this.y=y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("lightgrey");
			//draw the ellipse here to display the iron ball
			rect(0,0, this.width, this.height);
			pop()
	}

}