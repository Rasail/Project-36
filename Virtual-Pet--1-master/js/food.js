class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('images/Milk.png');
    }
    getFoodStock(){
    return this.foodStock;
    }
    updateFoodStock(foodStock){
    this.foodStock=foodStock;
    }
    deductFood(){
    if(this.foodStock>0){
        this.foodStock=this.foodStock-1;
    }
}
    display(){
  background(0);
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
      var x=80,y=100;

      imageMode(CENTER);
      image(this.image,720,220,70,70);

      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
  }   