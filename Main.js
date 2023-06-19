class Main{ // 일단 주인공의 조작. 나중에 그림자랑 물리자. 
    constructor(){
        this.x = 50
        this.y = 320
        this.sizeX = 60 // 이미지사이즈
        this.sizeY = 120 // 이미지사이즈
        this.preX = 0; // 좌표 고정시 업데이트되는 X
        this.preY = 0; // 좌표 고정시 업데이트되는 X

        this.x_ = 0 // 상시업데이트
        this.y_ = 0  // 상시업데이트


    }
    canMove(x1,y1,x2,y2){
        if(this.x > x1 && this.x < x2 && this.y > y1 && this.y < y2){
            canMove = true
        }
        else{
            canMove = false
        }
    }


    move(){ // asdw control / 맵에 따른 최대/최소 조건
        this.x_ = this.x; // 직전좌표 기억
        this.y_ = this.y; // 직전좌표 기억

        if (keyIsDown(65)) { // a key 누르면 좌측으로 이동
            this.x -= 5
            }
        else if (keyIsDown(68)) { // d key 누르면 우측으로 이동
            this.x += 5
            }
        if (keyIsDown(87)) { // w key 누르면 위로 이동
            this.y -= 3
            }
        else if (keyIsDown(83)) { // s key 누르면 아래로 이동
            this.y += 3
            }
        

        if (keyIsDown(70)){
            this.save();
        } // f key 누르면 이전 좌표 저장
    }

    fixloca(){
        if (!canMove){
            this.x = this.x_; // 직전좌표 회귀
            this.y = this.y_; // 직전좌표 회귀 
            canMove = true
        }

    }


    save(){
        this.preX = this.x;
        this.preY = this.y;
    }

    display(){ // 스프라이트 처리 관련 보완 필요.
        push()
        translate(this.x, this.y)
        imageMode(CENTER)
        if (lastKeyPressed == 65) { // a key
            if(keyIsDown(65)){
                if(frameCount % 20 > 10){
                    image(sprites[0][1],0,0,this.sizeX, this.sizeY) // 좌도보1
                }
                else{
                    image(sprites[0][2],0,0,this.sizeX, this.sizeY) //좌도보2
                }
            }
            else{
                image(sprites[0][0],0,0,this.sizeX, this.sizeY) //좌중립
            }
          }
        else if (lastKeyPressed == 68) { // d key
            if(keyIsDown(68)){
                if(frameCount % 20 > 10){
                    image(sprites[0][4],0,0,this.sizeX, this.sizeY) // 우도보1
                }
                else{
                    image(sprites[0][5],0,0,this.sizeX, this.sizeY) //우도보2
                }
            }
            else{
                image(sprites[0][3],0,0,this.sizeX, this.sizeY) //우중립
            }
          }
        else if (lastKeyPressed == 87) { // w key
            if(keyIsDown(87)){
                if(frameCount % 20 > 10){
                    image(sprites[0][7],0,0,this.sizeX, this.sizeY) // 상도보1
                }
                else{
                    image(sprites[0][8],0,0,this.sizeX, this.sizeY) //상도보2
                }
            }
            else{
                image(sprites[0][6],0,0,this.sizeX, this.sizeY) //상중립
            }
          }
        else if (lastKeyPressed == 83) { // s key
            if(keyIsDown(83)){
                if(frameCount % 20 > 10){
                    image(sprites[0][10],0,0,this.sizeX, this.sizeY) // 하도보1
                }
                else{
                    image(sprites[0][11],0,0,this.sizeX, this.sizeY) //하도보2
                }
            }
            else{
                image(sprites[0][9],0,0,this.sizeX, this.sizeY) //하중립
            }
          }
        else{
            image(sprites[0][9],0,0,this.sizeX, this.sizeY) //하중립 - 극초기설정
        }
        pop()
    }

}