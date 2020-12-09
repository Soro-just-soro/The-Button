class particle{
    constructor(x,y){
        var options={
        isStatic:false,
    mass:1
}
        this.width=25
        this.height=25
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
}

}