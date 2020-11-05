class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      
    }
    display() { 
      console.log(this.body.speed);
      if (this.body.speed < 4) {
        super.display();
      }
      else {
        push();
        this.Visiblity = this.Visiblity - 5;
        
        
        
        pop();
        console.log(this.Visiblity)
        World.remove(world, this.body);
      }
  
      
    }
  
  }