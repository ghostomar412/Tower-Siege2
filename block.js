class Block extends BASE{
  constructor(x, y, width, height) {
super(x,y,width,height);
this.visiblity=255
}
display(){
  console.log(this.body.speed);
  if(this.body.speed < 9){
    super.display();
 }
 else{

 Matter.World.remove(world,this.body)
  push();
 this.visiblity=this.visiblity-5

 pop();
 }
}



}
