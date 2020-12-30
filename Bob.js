class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            frictiob:0,
            density:77.8

        }
        this.body=Bodies.circle(x,y,25,options);
        World.add(world,this.body);

        console.log(this.body);

    }

    display(){
        Push()
        ellipseMode(RADIUS);
        Fill(255,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop()
    }



}