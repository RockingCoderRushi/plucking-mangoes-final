class Stone{
    constructor(x,y,r) { 
        var options={ 
         isStatic:false,
         restitution:0, 
         friction:1,
          density:1.2
  }
    this.x=x;
      this.y=y; 
      this.r=r 
      this.width = 30;
      this.height = 30;
     this.body=Bodies.circle(this.x, this.y, this.r/4, options)
     World.add(world, this.body);
     this.image = loadImage("Plucking mangoes/stone.png")
    }
display(){
  var stonepos=this.body.position;
  push() 
  translate(stonepos.x, stonepos.y);
  imageMode(CENTER)
  image(this.image,0,0,this.width,this.height)
  pop() 
}
}