class Paper
{
    constructor(x, y, radius)
    {
        var options=
        {
            friction : 0.5,
            isStatic : false,
            restitution :0.3,
            density:1.2
        }

        this.radius = radius;
        this.body = circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("red");
        ellipse(0,0, this.radius, this.radius);
        pop ();
    }
}