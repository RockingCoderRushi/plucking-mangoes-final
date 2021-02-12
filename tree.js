class Tree {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = 450;
        this.height = 450;
       
        this.image = loadImage("Plucking mangoes/tree.png")
      }
      display(){
       
       
       
        image(this.image,this.x,this.y,this.width,this.height)
      }
}