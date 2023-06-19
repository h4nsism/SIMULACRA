class Boss{ // 보스전에 사용되는 클래스
    constructor(eaten){
        //this.hp = eaten * 100 //일정 상수 곱하기
        this.hp = 100 //일정 상수 곱하기
        this.pattern = 0 // 0은 대기/중립, 1~ 패턴
        this.status = 0 // 0 : 중립, 1 : 피격, 2: 공격
        this.sprite = []
        this.sqar = 50;
    }
    bossSet(){
        for(let i = 0; i<50; i++){
            this.sprite[i] = []
        }
    }

        
    offset(){ // 그림자를 자글자글하게 만든다.
        if(frameCount % 10 == 9){
            for (let i = 0; i < 25; i++){ // 사이드 그림자
                this.sprite[i][0] = random(i/25, i/50); // 오프셋 값
                this.sprite[i][1] = random(i/25, i/50); // 오프셋 값
                this.sprite[i][2] = random((this.sqar-5)*i/25+15, (this.sqar+5)*i/25+15);
              }
              for (let i = 0; i < 25; i++){ // 팔부분
                this.sprite[i+25][0] = random(i/25, i/50); // 오프셋 값
                this.sprite[i+25][1] = random(i/25, i/50); // 오프셋 값
                this.sprite[i+25][2] = random((this.sqar-5)*i/25+15, (this.sqar+5)*i/25+15);
              }
            }

        
    }
    shadowSet(){  // 각 rect에 위치 지정
        for (let i = 0; i < 25; i++){ // 사이드
            this.sprite[i][3] = 0
            this.sprite[i][4] = this.sprite[i][1] * 1000 * sin(PI/2) * i/50;
        }
        for (let i = 0; i < 25; i++){ // 한쪽 팔
            this.sprite[i+25][3] = this.sprite[i+25][0] * 400 * cos(-PI/3) * i/15;
            this.sprite[i+25][4] = this.sprite[i+25][1] * 400 * sin(-PI/3) * i/50;
        }
    }

    bgBossD(){
    
    }

    
    bgSideD(xpos, ypos){ // 양 사이드 그리기
        push();
        fill(0, 160);
        rectMode(CENTER);
        noStroke();
        translate(xpos,ypos);
        for (let i = 0; i < 25; i++){
        rect(
            this.sprite[i][3],
            this.sprite[i][4],
            this.sprite[i][2],
            this.sprite[i][2]
        );
        }
        pop();
    }

    bgArmD(){ // 양 사이드 그리기
        push();
        fill(0, 120);
        rectMode(CENTER);
        noStroke();
        translate(360,300);
        for (let i = 0; i < 25; i++){
        rect(
            this.sprite[i+25][3],
            this.sprite[i+25][4],
            this.sprite[i+25][2],
            this.sprite[i+25][2]
        )
        }
        for (let i = 0; i < 25; i++){
            rect(
                -this.sprite[i+25][3],
                this.sprite[i+25][4],
                this.sprite[i+25][2],
                this.sprite[i+25][2]
            )
            }
        pop();        
    }

    attackDisplay(){

    }

}