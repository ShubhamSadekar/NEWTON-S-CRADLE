class Bob
{
  constructor(x,y,r){
    var options = {

    restution:0.3,
    density:7.8,
    friction:0,

    }
   this.x=x
   this.y=y
   this.r=r

   this.body=Bodies.circle(x,y,25,options);
   World .add(world,this.body);

   

    }
  display()
{
  
  push()
  
  ellipseMode(RADIUS)

  fill(255,0,255)
  
  ellipse(this.body.position.x,this.body.position.y,25,25)
  pop()
}
}
