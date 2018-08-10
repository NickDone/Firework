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
    //radius increase
    // var PI2=Math.PI*2;
    // for(var i=0;i<=360;i++){
    //     var num=10;
    //     var dir=i*180/Math.PI;
    //     for(var j=0;j<num;j++){
    //         var nr=Math.random()*this.radius;
    //         var x=this.x+nr*Math.sin(dir);
    //         var y=this.y+nr*Math.cos(dir);
    //         this.sparks.push(new Spark(1,"#ff0000",null,x,y,dir,this.speed,this.speed/this.oneSecondFrame/1,this.speed/this.oneSecondFrame,5));
    //      //   var sparks=new Spark(15,"#ff00ff",null,800,400,340*Math.PI/180,speed,speed/onSecondFrame/1,speed/onSecondFrame,5);
    //        }
    // }
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