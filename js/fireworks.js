function Fireworks (radius,oneSecondFrame,x,y) {
    this.sparks=[];
    this.radius=radius;
    this.oneSecondTranlatePixel=100;
    this.oneSecondFrame=oneSecondFrame;
    this.speed=this.oneSecondTranlatePixel/oneSecondFrame;
    this.sparksAmount=720;
    this.x=x;
    this.y=y;
};

/**
 *distribute the sparks
 *
 */
Fireworks.prototype.distribute=function(){
    for(var i=1;i<359;i++){
        this.distributeADirection(i);
    }
}

Fireworks.prototype.distributeADirection=function(angle){
    var dir=angle*Math.PI/180;
    var sparkRadius=1;
    var allCanContain=this.radius*2/sparkRadius;
    //var allCanContain=100;
    var num=allCanContain/60;
    for(var i=0;i<num;i++){
        var nr=Math.random()*allCanContain;
        var x=this.x+nr*Math.cos(dir);
        var y=this.y-nr*Math.sin(dir);
        this.sparks.push(new Spark(sparkRadius,"#ff0000",null,x,y,dir,this.speed,this.speed/this.oneSecondFrame/1,this.speed/this.oneSecondFrame,10));
    }
}

Fireworks.prototype.fire=function(){
    for(var i=0;i<this.sparks.length;i++)
    {
        this.sparks[i].transform();
        this.sparks[i].show();
    }
}