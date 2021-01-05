class paper
{ 
constructur(x,y,r)
{
           var options={
         isStatic:false,
         restituition:0.3,
         fricition:0.5,
         denscity:1.2


           }
           this.x=x;
           this.y=y;
           this.r=r
           this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        }
        display()
        {
                         var  paperpas=this.body.pos     

                      push()
                      translate(paperpos.x,paperpos.y);
                      rectMode(CENTRE)   
                      strokeWeight(3);
                      fill(255,0,255)     
                      ellipse(0,0,this.r,this.r);                           
                      pop()

}
    
    
    
    
    
    
    
    
    }





        