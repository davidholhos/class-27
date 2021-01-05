//creating the class Chain
class Chain {
    //creating a costructor with options
    constructor(bodyA, bodyB){
        var options = {
            //declaring what bodyA and bodyB is and setting the stiffnes and the lenght 
            bodyA: bodyA,
            bodyB: bodyB,
            stiffnes:0.05,
            lenght:10
            
        }
        //creating the constrain and adding the object to the world 
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        //storing the position of bodyA and bodyB in the variables posA and posB
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        //creating the line betwen the two bodies
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}