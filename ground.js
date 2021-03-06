class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var abc =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(abc.x, abc.y, this.width, this.height);
      }
}