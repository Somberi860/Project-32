class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      score(){
        if(this.Visibility<0 && this.Visibility >-150){
          score++;
        }
      }
    
      display(){
        if(this.body.speed < 3){
          
          var angle = this.body.angle;
        var pos= this.body.position;
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        
        rect(0,0,this.width, this.height);
        pop();
        //World.add(world, this.body);
         }
         else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 10;
        tint(255,this.Visiblity);
        pop();
      }
}


}