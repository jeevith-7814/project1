class Rope {
 // define the constructor 
 constructor(firstBody, secondBody){
   var options = {
       bodyA:firstBody,
       bodyB:secondBody,
       stiffness: 0.01,
       length:200
   }
   this.rope =Constraint.create(options);
  World.add(world,this.rope);
 }
  display(){
     line(x1,y1,x2,y2);
  }
 
}

