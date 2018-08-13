/**
 *spark of a piece
 *
 * @param {*} radius
 * @param {*} color
 * @param {*} audio
 * @param {*} x
 * @param {*} y
 * @param {*} dir
 * @param {*} speed
 * @param {*} k
 * @param {*} g
 */
function Spark(radius,color,audio,x,y,dir,speed,k,g,tail){
    this.radius=radius;
    this.color=color;
    this.audio=audio;
    this.x=x;
    this.y=y;
    this.dir=dir;
    this.xSpeed=Math.cos(this.dir)*speed;
    this.ySpeed=Math.sin(this.dir)*speed;
    this.originSpeed=speed;
    this.opacity=1;
    this.isLive=true;
    this.k=k;
    this.g=g;
    this.tailLength=tail;
};

/** 
* 
* @param hex 例如:"#23ff45" 
* @param opacity 透明度 
* @returns {string} 
*/ 
Spark.prototype.hexToRgba= function (hex, opacity) { 
    return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
}

/**
 *draw the spark on the canvas 
 */
Spark.prototype.show=function(){
 //   this.drawCtx.fillStyle=this.hexToRgba(this.color,this.opacity);
    this.drawCtx.beginPath();
    var dir=Math.atan(this.ySpeed/this.xSpeed);

    var x1Angle=dir;
    var x1=this.x+this.radius*Math.sin(x1Angle);
    var y1=this.y+this.radius*Math.cos(x1Angle);

    // this.drawCtx.fillStyle="#00ff00";
    // this.drawCtx.arc(x1,y1,5,0,Math.PI*2,true);
    // this.drawCtx.fill();
    // this.drawCtx.closePath();

    var x2Angle=Math.PI+dir;
    var x2=this.x+this.radius*Math.sin(x2Angle);
    var y2=this.y+this.radius*Math.cos(x2Angle);

    // this.drawCtx.fillStyle="#0000ff";
    // this.drawCtx.beginPath();
    // this.drawCtx.arc(x2,y2,5,0,Math.PI*2,true);
    // this.drawCtx.fill();
    // this.drawCtx.closePath();

    var dir0=Math.abs(dir);
    var startAngle=0;
    var tailAngle=dir0;
    if(this.xSpeed>0&&this.ySpeed>0){
        startAngle= constant.PIHalf-dir0;
        tailAngle=dir0+constant.PI1Half;
    }else if(this.xSpeed<0&&this.ySpeed>0){
        startAngle= constant.PI1Half+dir0;
        tailAngle=constant.PIHalf-dir0;
    }else if(this.xSpeed<0&&this.ySpeed<0){
        startAngle=constant.PI1Half-dir0;
        tailAngle=constant.PIHalf+dir0;
    }else if(this.xSpeed>0&&this.ySpeed<0){
        startAngle=constant.PIHalf+dir0;
        tailAngle=constant.PI1Half -dir0;
    }

    if(this.xSpeed==0){
        startAngle=Math.PI;
        tailAngle=Math.PI;
    }


    var tailX=this.x+this.radius*this.tailLength*Math.sin(tailAngle);
    var tailY=this.y+this.radius*this.tailLength*Math.cos(tailAngle);

    // this.drawCtx.fillStyle="#f0f0ff";
    // this.drawCtx.beginPath();
    // this.drawCtx.arc(tailX,tailY,5,0,Math.PI*2,true);
    // this.drawCtx.fill();
    // this.drawCtx.closePath();

    this.drawCtx.fillStyle=this.hexToRgba(this.color,this.opacity);
    this.drawCtx.beginPath();
    this.drawCtx.arc(this.x,this.y,this.radius,startAngle,startAngle+Math.PI,true);
    this.drawCtx.fill();
    this.drawCtx.moveTo(x1,y1);
    this.drawCtx.lineTo(tailX,tailY);
    this.drawCtx.lineTo(x2,y2);
    this.drawCtx.closePath();
    this.drawCtx.fill();
};

/**
 *spart transform with the speed ,time ,
 */
Spark.prototype.transform=function(){
    if((this.dir>0&&this.dir<constant.PIHalf)||(this.dir>constant.PI1Half&&this.dir<constant.PI2)){
        this.xSpeed=this.xSpeed-this.k>=0?this.xSpeed-this.k:0;
    }
    else{
        this.xSpeed=this.xSpeed+this.k<=0?this.xSpeed+this.k:0;
    }
    this.ySpeed=this.ySpeed-this.k-this.g;
    //this.opacity=this.speed/this.originSpeed;
    this.x=this.x+this.xSpeed;
    this.y=this.y-this.ySpeed;   
}