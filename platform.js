class Platform {
    constructor(x,y,width,height){
    var options = {
     isStatic:true
    }
     
       
     
     this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    
     this.width = width;
     this.height =height;
        World.add(world,this.body);
    
    }
    display(){
        var platformpos = this.body.position;
    push();
    translate(platformpos.x,platformpos.y)
    rectMode(CENTER)
    fill (255,30,255)
    rect(0,0,this.width, this.height);
    pop();

    }
}