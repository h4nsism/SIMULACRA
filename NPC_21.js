// 21번 맵 npc class
class NPC_21{
    constructor(){
        this.x = 400
        this.y = 272
        this.sizeX = 50 // 이미지사이즈
        this.sizeY = 100 // 이미지사이즈
        this.thankA = false;
        this.thankB = false;
        this.thankC = false;
    }

    // 우선은 main 캐릭터 png로 대체해 둔 상태
    display(){
        image(sprites[21][0], 0, 0, width, height);
    }
    
}