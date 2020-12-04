class Paper{
    constructor(x,y,radius){
        var options={
           // isStatic:false,
            restitution: 0.1,
            friction:1.5,
            density :1.2
        }

        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius
        World.add(world,this.body) ;  
    
   }
    display(){
        var paperpos=this.body.position;
       
        push();
        translate(paperpos.x,paperpos.y);
        //rectMode(CENTER);
        ellipseMode(RADIUS);
       strokeWeight(3);
        fill("red")
        ellipse(0,0,this.radius,this.radius);
     pop();
    }
}