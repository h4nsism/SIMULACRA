class Shadow{
    constructor(){
        this.x = 300;
        this.y = 300;
        this.size = 0;
        this.dir = 0;
        this.sqar = 50;
        this.stop = false
    }

    shadowSetup(){ // 초기에 배열 만든다. 
        for (let i = 0; i < 50; i++){
            shadows[i] = [];
        }
    }
    position(light){ // 광원에 따라 달리 잡힌다. 
        if(light.lightOn){
          this.size = dist(light.x, light.y, this.x, this.y);
          this.dir = calculateAngle(light.x, light.y, this.x, this.y);
        }
    }
    offset(){ // 그림자를 자글자글하게 만든다.
        if(frameCount % 20 == 19){
            for (let i = 0; i < 50; i++){
                shadows[i][0] = random(i/50, i/100); // 오프셋 값
                shadows[i][1] = random(i/50, i/100); // 오프셋 값
                shadows[i][2] = random((this.sqar-10)*i/50+30, (this.sqar+10)*i/50+30);
              }
        }

        
    }
    shadowSet(){  // 각 rect에 위치 지정
        for (let i = 0; i < 50; i++){
            shadows[i][3] = shadows[i][0] * this.size * cos(this.dir) * i/30;
            shadows[i][4] = shadows[i][1] * this.size * sin(this.dir) * i/100;
        }
    }
    // 그림자가 그 자리에 고정
    fixPosition(main){
        this.x = main.preX;
        this.y = main.preY+60;
        push();
        fill(0, 255);
        rectMode(CENTER);
        noStroke();
        translate(this.x, this.y);
        for (let i = 0; i < 50; i++){
            rect(
                shadows[i][3],
                shadows[i][4],
                shadows[i][2] * (abs(cos(this.dir))*0.4+0.5),
                shadows[i][2] * (abs(sin(this.dir))*0.4+0.5)
            );
        }
         pop();
    }
    display(main){
        this.x = main.x;
        this.y = main.y + 50; // main 캐릭터 발 밑에 그림자 붙임
        push();
        fill(0, this.size/2);
        rectMode(CENTER);
        noStroke();
        translate(this.x, this.y);
        for (let i = 0; i < 50; i++){
        rect(
            shadows[i][3],
            shadows[i][4],
            shadows[i][2] * (abs(cos(this.dir))*0.4+0.5),
            shadows[i][2] * (abs(sin(this.dir))*0.4+0.5)
        );
        }
        pop();

        // push()
        // stroke(255,0,0)
        // translate(this.x, this.y);
        // line(0,0,
        //     this.size * cos(this.dir) * 49/30,
        //     this.size * sin(this.dir) * 49/100)
        // pop()


    }

    shadowMove(main){
      bottomLine = new Line(tan(this.dir)*3/10, 25 );
      topLine = new Line(tan(this.dir)*3/10, -25);

      push();
      translate(this.x, this.y);
      // bottomLine.write();
      // topLine.write();

      bottomLine.isAbove(main);
      topLine.isAbove(main);

      if(cos(this.dir) >= 0){
        if(topLine.above == false && bottomLine.above == true
          && main.preX <= main.x && main.x < main.preX + this.size * cos(this.dir) * 49/30){
            canMove = true;
          } else{
            canMove = false;
          }
      } else{
        if(topLine.above == false && bottomLine.above == true
          && main.preX > main.x && main.x >= main.preX + this.size * cos(this.dir) * 49/30){
            canMove = true;
          } else{
            canMove = false;
          }
      }

      pop();


  }

}




let bottomLine;
let topLine;

class Line {
    constructor(m, b) {
      this.m = m;
      this.b = b;
      this.above = false;
    }
    
    // Draw the line
    write() {
  
      let x1 = -width;
      let y1 = this.m * x1 + this.b;
      let x2 = width;
      let y2 = this.m * x2 + this.b;
      
      stroke(255,0,0);
      line(x1, y1, x2, y2);
  
    }
    
    // Check if a point is above the line
    isAbove(main) {
      if(main.y - main.preY < this.m * (main.x - main.preX) + this.b){
        this.above = true;
      } else{
        this.above =  false;
      }
    }
  }