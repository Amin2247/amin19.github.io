class MoveBackground{
  // class methods
  constructor(_delta) { 
    this.delta = _delta;
  }
  display() { 
    strokeWeight(2);
    for(let i=0; i<150; i=i+30){
      line(i+this.delta, 0, i+this.delta, 400);
    }
  }
}
