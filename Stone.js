class Stone {
    constructor(x,y,width,height) {
      var options={
			restitution:0.85,
			friction:1,
			density:10

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
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("brown");
			fill("grey");
			//draw the ellipse here to display the stone ball
			rect(0,0, this.width, this.height);
			pop()
	}

}