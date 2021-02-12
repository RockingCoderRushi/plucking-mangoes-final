class Mango{
    constructor(x,y,r) { 
        var options={ 
         isStatic:true,
         restitution:1, 
         friction:0,
          density:1.2
  }
    this.x=x;
      this.y=y; 
      this.r=r 
      this.width = 50
      this.height = 50
     this.body=Bodies.circle(this.x, this.y, this.r/2, options)
     World.add(world, this.body);
     this.image = loadImage("Plucking mangoes/mango.png")
    }
display(){
 var mangopos=this.body.position;
  push() 
  translate(mangopos.x, mangopos.y);
  
   imageMode(CENTER)
   image(this.image,0,0,this.width,this.height)
    pop() 
}
}