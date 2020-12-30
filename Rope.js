class Rope{
    constructor(body1,body2,seatX,seatY){
        this.seatX=seatX;
        this.seatY=seatY;
        var options={
            bodyA=body1,
            bodyB=body2,
            pointB:{x:this.seatX,y:this.seatY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);

    }

    display(){
        var point1=this.rope.bodyA.position;
        var point2=this.rope.bodyB.position;
        strokeweight(3)
        var Anhor1X=point1.x;
        var Anhor1Y=point2.y;
        var Anhor2X=point2.x+this.seatX;
        var Anhor2Y=point2.y+this.seatY;

        Line(Anhor1X,anhor1Y,Anhor2X,Anhor2Y);
        
    }





}