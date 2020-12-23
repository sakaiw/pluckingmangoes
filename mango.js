class Mango {
    constructor(x,y,radius) {
        var options={
            isStatic: true,
            restitutuion: 0,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("mango.png");
        this.body=Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display() {
        var mangoPosition = this.body.position;
        push()
        translate(mangoPosition.x, mangoPosition.y);
        imageMode(CENTER)
        strokeWeight(3);
        fill("bisque");
        image(this.image,0,0, this.radius, this.radius);
        pop()
    }
}