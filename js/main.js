$().ready(function(){
    $("#myCanvas").attr("width", $(window).get(0).innerWidth);
    $("#myCanvas").attr("height", $(window).get(0).innerHeight);
    $("#myCanvas").css("background","gray");

    //test
    var ctx=$("#myCanvas").get(0).getContext("2d");
    Fireworks.prototype.drawCtx=ctx;
    Spark.prototype.drawCtx=ctx;
    
    var onSecondFrame=80;
    var fireWorks=new Fireworks(100,onSecondFrame,800,400);
    fireWorks.distribute();
    fireWorks.fire();

    var timer=setInterval(function(){
        ctx.clearRect(0,0, $("#myCanvas").width(), $("#myCanvas").height());
        fireWorks.fire();
    },1000/onSecondFrame);

    // Spark.prototype.drawCtx=ctx;
    // var oneSecondTranlatePixel=250;
    // var onSecondFrame=60;
    // var speed=oneSecondTranlatePixel/onSecondFrame;
    // var sparksAmount=720;
    // var sparks=new Spark(15,"#ff00ff",null,800,400,359*Math.PI/180,speed,speed/onSecondFrame/1,speed/onSecondFrame,5);
    // var timer=setInterval(function(){
    //     ctx.clearRect(0,0, $("#myCanvas").width(), $("#myCanvas").height());
    //         sparks.transform();
    //         sparks.show();
    // },1000/onSecondFrame);

    
});