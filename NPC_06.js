
// 6번 맵 npc class
class NPC_06{
    constructor(){
        this.x = 285
        this.y = 272
        this.sizeX = 50 // 이미지사이즈
        this.sizeY = 100 // 이미지사이즈
        this.thank = false;
    }

    // 우선은 main 캐릭터 png로 대체해 둔 상태
    display(){
        if(!this.thank){
            image(sprites[6][0], 0, 0, width, height);
        } else{
            image(sprites[6][1],0,0,width,height);
        }
    }
    
    // npc의 대사
    
}