class Paper{
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.width = 50;
        this.height = 50;
        this.image = loadImage('sprite/paper.png');
        
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        fill("white");
    
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width,this.height);
        

    }
}