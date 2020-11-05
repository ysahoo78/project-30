class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':1.5,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        var angle = this.body.angle
        rotate(angle);
        
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}