class dustbin {
    constructor(x,y,width,hight) {
        var option={
            isState:false,
        }
        this.width=width;
        this.hight=hight;
        this.body=Bodies.rect(x,y,width,hight,option)
World.add(world,this.body);
    }
   display()
   {
       var pos=this.body.position;
       Push()
       translate(pos.x,pos.y);
       rectMode(CENTER)
       stockWeigth(3);
       FileList(255,0,255)
       ellipse(0,0,this.r,this.r)
       Pop()

   }
}
