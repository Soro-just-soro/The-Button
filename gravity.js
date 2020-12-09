class gravity{
    constructor(){
        this.position=createVector(width/2,height/2)
        this.mass=20
        this.G=1

    }
calculateGravity(M){
    let force=p5.Vecotor.sub(this.position,M.Position)
    let Distance=force.mag()
    distance=constraint(disatnce,5,25)
    force.normalize()
    let strenght=(this.G*this.mass*M.mass/starDistance)
    force.mult(strenght)
    return force
}
display(){
    ellipseMode(CENTER)
    strokeWeight(4)
    stroke(0)
    ellipse(this.position.x,this.position.y,this.mass*2,this.mass*2)
}
}