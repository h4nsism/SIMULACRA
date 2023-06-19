class Light{
    constructor(xpos, ypos){
      this.lightOn = true;
      this.x = xpos;
      this.y = ypos;
      this.xpos = xpos; // 각 맵마다 가로등의 위치를 입력받아 그 위치에 광원 설치
      this.ypos = ypos;
    }
  
    display(main){
      if (this.lightOn){
        push();
        fill(255, 100);
        noStroke();
        let dir = calculateAngle(this.x, this.y, main.x, main.y);
        arc(this.x, this.y, 150, 150, dir - PI/3, dir + PI/3);
        pop();
        fill(255);
      } else{
        fill(100);
      }
      ellipse(this.x, this.y, 50, 50);
      }
  
      toggle(){
        this.lightOn = !this.lightOn;
      }
  }