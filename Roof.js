class Roof{
    constructor(x,y,weight,height){
        this.body=Bodies.rectangle(x,y,weight,height,{isStatic:true});
        this.width=weidth,
        this.height=height,
        World.add(world,this.body);
    }

    display(){
        push()
        rectMode(CENTER);
        fill("blue");
        rect(this.body.position.x,this.body.position.y,this.weight,this.height);
        pop()
    }

}