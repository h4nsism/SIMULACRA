class NPC_09{
    constructor(){
        this.x = 510
        this.y = 250
        this.sizeX = 50 // 이미지사이즈
        this.sizeY = 100 // 이미지사이즈
        this.thank = false;
    }

    // 우선은 main 캐릭터 png로 대체해 둔 상태
    display(){
        image(backgrounds[9][2], 0, 0, 720, 480);
    }
    
}