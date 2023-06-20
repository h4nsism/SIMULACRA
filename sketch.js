let stage = -1; // switch-case 용

let main; // 클래스
let shadow; // 클래스
let boss; // 클래스
let brights = []; // 클래스

//불리언즈
let stop = false;
let stageSet = true; // 스테이지 이동에 따라
let canMove = true; // 이동가능성점검자
let bossStart = false; // 보스 세팅
let proceed = true;

let toggle = false;

// 인터페이스 관련 (페이드 / 텍스트박스)
let fadeOn = false;
let timeOut = 40;
let popup = false; // 팝업 관련 제어자
let textNum = 0; // 텍스트 변수

let shadows = []; // shadow 클래스에 활용되는 배열
let backgrounds = []; // 전체에 적용할 배경스프라이트 배열

let cleared = []; // 클리어 방식 저장
let npc = [];
let items = []; // 소지 아이템
let sprites = []; // 플레이어 / npc 스프라이트 저장
let scripts = []
let textBar
let lastKeyPressed; // 마지막으로 저장한 키 저장(keypressed fuction에 사용.)
// keypressed에 많은 내용을 담아놓을 수 없으므로, 변수를 활용했습니다.
let sound;
let rain = [];
let logo;


function preload() {
  font = loadFont('assets/NeoDunggeunmoPro-Regular.ttf')
  logo = loadImage("assets/intro_0.png")
  backgrounds[0]= loadImage("assets/bg_00_0.png")
  backgrounds[1]= loadImage("assets/bg_01_0.png")
  backgrounds[2]= []
  backgrounds[2][0]= loadImage("assets/bg_02_0.jpg")
  backgrounds[2][1]= loadImage("assets/bg_02_1.png")
  backgrounds[2][2]= loadImage("assets/bg_02_2.png")
  backgrounds[2][3]= loadImage("assets/bg_02_3.png")
  backgrounds[2][4]= loadImage("assets/bg_02_4.png")
  backgrounds[2][5]= loadImage("assets/bg_02_5.png")
  backgrounds[3]= []
  backgrounds[3][0]= loadImage("assets/bg_03_0.png")
  backgrounds[3][1]= loadImage("assets/bg_03_1.png")
  backgrounds[4]= []
  backgrounds[4][0]= loadImage("assets/bg_04_0.png")
  backgrounds[4][1]= loadImage("assets/bg_04_1.png")
  backgrounds[5] = []
  backgrounds[5][0]= loadImage("assets/bg_05_0.png")
  backgrounds[5][1]= loadImage("assets/bg_05_0.png")
  backgrounds[5][2]= loadImage("assets/bg_05_0.png")
  backgrounds[6] = []
  backgrounds[6][0]= loadImage("assets/bg_06_0.png")
  backgrounds[6][1]= loadImage("assets/bg_06_1.png")
  backgrounds[7] = []
  backgrounds[7][0]= loadImage("assets/bg_07_0.png")
  backgrounds[7][1]= loadImage("assets/bg_07_1.png")
  backgrounds[7][2]= loadImage("assets/bg_07_2.png")   
  backgrounds[8]= []
  backgrounds[8][0]= loadImage("assets/bg_08_0.png")
  backgrounds[8][1]= loadImage("assets/bg_08_1.png")
  backgrounds[9]= []
  backgrounds[9][0]= loadImage("assets/bg_09_0.png")
  backgrounds[9][1]= loadImage("assets/bg_09_1.png")
  backgrounds[9][2]= loadImage("assets/bg_09_2.png")
  backgrounds[10]= []
  backgrounds[10][0]= loadImage("assets/bg_10_0.png")
  backgrounds[10][1]= loadImage("assets/bg_10_1.png")
  backgrounds[10][2]= loadImage("assets/bg_10_2.png")
  backgrounds[11]= [];
  backgrounds[11][0]= loadImage("assets/bg_11_0.png")
  backgrounds[11][1]= loadImage("assets/bg_11_1.png")
  backgrounds[11][2]= loadImage("assets/bg_11_2.png")
  backgrounds[12]= []
  backgrounds[12][0]= loadImage("assets/bg_12_0.png")
  backgrounds[12][1]= loadImage("assets/bg_12_1.png")
  backgrounds[12][2]= loadImage("assets/bg_12_2.png")
  backgrounds[12][3]= loadImage("assets/bg_12_3.png")
  backgrounds[12][4]= loadImage("assets/bg_12_4.png")
  backgrounds[12][5]= loadImage("assets/bg_12_5.png")
  backgrounds[12][6]= loadImage("assets/bg_12_6.png")
  backgrounds[12][7]= loadImage("assets/bg_12_7.png")
  backgrounds[12][8]= loadImage("assets/bg_12_8.png")
  backgrounds[13]= []
  backgrounds[13][0]= loadImage("assets/bg_13_0.png")
  backgrounds[13][1]= loadImage("assets/bg_13_1.png")
  backgrounds[13][2]= loadImage("assets/bg_13_2.png")
  backgrounds[13][3]= loadImage("assets/bg_13_3.png")
  backgrounds[13][4]= loadImage("assets/bg_13_4.png")
  backgrounds[13][5]= loadImage("assets/bg_13_5.png")
  backgrounds[13][6]= loadImage("assets/bg_13_6.png")
  backgrounds[13][7]= loadImage("assets/bg_13_7.png")
  backgrounds[13][8]= loadImage("assets/bg_13_8.png")
  backgrounds[14]= []
  backgrounds[14][0]= loadImage("assets/bg_14_0.png")
  backgrounds[14][1]= loadImage("assets/bg_14_1.png")
  backgrounds[14][2]= loadImage("assets/bg_14_2.png")
  backgrounds[14][3]= loadImage("assets/bg_14_3.png")
  backgrounds[14][4]= loadImage("assets/bg_14_4.png")
  backgrounds[14][5]= loadImage("assets/bg_14_5.png")
  backgrounds[14][6]= loadImage("assets/bg_14_6.png")
  backgrounds[14][7]= loadImage("assets/bg_14_7.png")
  backgrounds[15]= []
  backgrounds[15][0]= loadImage("assets/bg_15_0.png")
  backgrounds[15][1]= loadImage("assets/bg_15_1.png")
  backgrounds[15][2]= loadImage("assets/bg_15_2.png")
  backgrounds[15][3]= loadImage("assets/bg_15_3.png")
  backgrounds[15][4]= loadImage("assets/bg_15_4.png")
  backgrounds[15][5]= loadImage("assets/bg_15_5.png")
  backgrounds[15][6]= loadImage("assets/bg_15_6.png")
  backgrounds[15][7]= loadImage("assets/bg_15_7.png")
  backgrounds[16]= []
  backgrounds[16][0]= loadImage("assets/bg_16_0.png")
  backgrounds[16][1]= loadImage("assets/bg_16_1.png")
  backgrounds[16][2]= loadImage("assets/bg_16_2.png")
  backgrounds[16][3]= loadImage("assets/bg_16_3.png")
  backgrounds[16][4]= loadImage("assets/bg_16_4.png")
  backgrounds[16][5]= loadImage("assets/bg_16_5.png")
  backgrounds[16][6]= loadImage("assets/bg_16_6.png")
  backgrounds[16][7]= loadImage("assets/bg_16_7.png")
  backgrounds[16][8]= loadImage("assets/bg_16_8.png")
  backgrounds[16][9]= loadImage("assets/bg_16_9.png")
  backgrounds[16][10]= loadImage("assets/bg_16_10.png")
  backgrounds[16][11]= loadImage("assets/bg_16_11.png")
  backgrounds[16][12]= loadImage("assets/bg_16_12.png")
  backgrounds[16][13]= loadImage("assets/bg_16_13.png")
  backgrounds[16][14]= loadImage("assets/bg_16_14.png")
  backgrounds[16][15]= loadImage("assets/bg_16_15.png")
  backgrounds[17]= [];
  backgrounds[17][0]= loadImage("assets/bg_17_0.png")
  backgrounds[18]= []
  backgrounds[18][0]= loadImage("assets/bg_18_0.png")
  backgrounds[19]= []
  backgrounds[19][0]= loadImage("assets/bg_19_0.png")
  backgrounds[19][1]= loadImage("assets/bg_19_1.png")
  backgrounds[19][2]= loadImage("assets/bg_19_2.png")
  backgrounds[19][3]= loadImage("assets/bg_19_3.png")
  backgrounds[19][4]= loadImage("assets/bg_19_4.png")
  backgrounds[19][5]= loadImage("assets/bg_19_5.png")
  backgrounds[19][6]= loadImage("assets/bg_19_6.png")
  backgrounds[20]= []
  backgrounds[20][0]= loadImage("assets/bg_20_0.png")
  backgrounds[20][1]= loadImage("assets/bg_20_1.png")
  backgrounds[20][2]= loadImage("assets/bg_20_2.png")
  backgrounds[20][3]= loadImage("assets/bg_20_3.png")
  backgrounds[20][4]= loadImage("assets/bg_20_4.png")
  backgrounds[20][5]= loadImage("assets/bg_20_5.png")
  backgrounds[21]= []
  backgrounds[21][0]= loadImage("assets/bg_21_0.png")
  backgrounds[21][1]= loadImage("assets/bg_21_1.png")
  backgrounds[21][2]= loadImage("assets/bg_21_2.png")
  backgrounds[21][3]= loadImage("assets/bg_21_3.png")
  backgrounds[21][4]= loadImage("assets/bg_21_4.png")
  backgrounds[22] = []
  backgrounds[22][5]= loadImage("assets/bg_22_5.png")
  backgrounds[23] = []
  backgrounds[23][0]= loadImage("assets/bg_23_0.png")
  backgrounds[23][1]= loadImage("assets/bg_23_1.png")
  backgrounds[24] = []
  backgrounds[24][0]= loadImage("assets/bg_24_0.png")
  backgrounds[24][1]= loadImage("assets/bg_24_1.png")
  backgrounds[25] = []
  backgrounds[25][0]= loadImage("assets/bg_25_0.png")
  backgrounds[25][1]= loadImage("assets/bg_25_1.png")
  backgrounds[25][2]= loadImage("assets/bg_25_2.png")

    sound = loadSound('assets/simulacra_soundtrack.mp3', () => {
      sound.loop();
    });

for (let i = 0; i < 25; i++) {
  // i는 스프라이트 카테고리 개수로.
  sprites[i] = [];
}
for (let j = 0; j < 12; j++) {
  // 주인공 스프라이트
  sprites[0][j] = loadImage("assets/mainsprite_" + j + ".png");
}
sprites[6][0] = loadImage("assets/npc_06_0.png"); // 깨어있는
sprites[6][1] = loadImage("assets/npc_06_1.png"); // 잠자는 이미지다.
sprites[6][2]= loadImage("assets/item_06_0.png")
sprites[6][3]= loadImage("assets/item_06_1.png")
sprites[6][4]= loadImage("assets/item_06_2.png")
sprites[21][0] = loadImage("assets/npc_21_0.png"); // 잠자는 이미지다.

textBar = loadImage("assets/text.png");
}

function setup() {
  createCanvas(720, 480);
  textFont(font)
    //대사장
    scripts[0] = [];
  scripts[0][0] = "[그림자(Shadow)란 성격의 부정적인 부분을 말하며 개인이 숨기고 싶은 모든 불쾌한 요소들을 모은 것이다.]";
  scripts[0][1] = "[융은 모든 사람에게 그림자가 있다는 것을 강조했다.]";
  scripts[0][2] = "[실재하는 모든 것은 그림자를 드리우는데, 자아와 그림자의 관계는 빛과 그늘의 관계와 같으며,]";
  scripts[0][3] = "[바로 이 그림자가 우리를 인간으로 만들어 준다.]";
  scripts[0][4] = "[그림자는 완전히 없앨 수 있는 것이 아니기 때문에]";
  scripts[0][5] = "[최선의 방법은 그림자와 화해하는 것이다.]";
  scripts[0][6] = "[그림자를 없애려는 시도는 해서도 안 되는 것이다.]";
  scripts[0][7] = "...";
  scripts[0][8] = "천둥이 친다. 그림자가 너무 크다. 두렵다.";
  scripts[0][9] = "밖으로 나가자.";
  scripts[0][10] = "";
  scripts[1] = [];
  scripts[1][0] = "들판 끝까지 가보자.";
  scripts[1][1] = "비는... 맞을 만 한 것 같다...";
  scripts[1][2] = "";
  scripts[2] = [];
  scripts[2][0] = "다리가 비 때문에 무너졌다. 어떻게 할까?";
  scripts[2][1] = "수상한 물건이나 사람이 있다면 스페이스바를 눌러보자";
  scripts[2][2] = "여기서는 가로등이 수상하다.";
  scripts[2][3] = "가로등을 몇 번 끄고 켜보자. 그림자의 방향이 달라진다.";
  scripts[2][4] = ""
  scripts[2][5] = "가로등 근처에서 눌러야 한다."
  scripts[2][6] = "";
  scripts[2][7] = "이제 f키를 눌러보자.";
  scripts[2][8] = "f키를 한 번 누른 상태에선 그림자가 고정이 된다."
  scripts[2][9] = "그림자가 고정이 되면, 그림자가 딱딱해져서 밟을 수 있다."
  scripts[2][10] = "마음에 드는 위치가 아니라면 f키를 다시 눌러서 고정을 해제할 수 있다."
  scripts[2][11] = ""
  scripts[2][12] = "그렇다면 다시, 다리를 어떻게 건너볼까?"
  scripts[2][13] = "그림자의 방향이 다리 건너를 향하게 하고, f키로 고정하면 될 것 같다."
  scripts[2][14] = ""
  scripts[4] = [];
  scripts[4][0] = "빈텍스트";
  scripts[4][1] = "그냥 맨홀이다...";
  scripts[4][2] = "이 게임은 과제전을 위해 제출된 게임이다... 이런 곳까지 신경을 썼을까?"
  scripts[4][3] = "앞으로는 과한 의심을 삼가자."
  scripts[4][4] = ""
  scripts[5] = [];
  scripts[5][0] = "집 안에서 훌쩍이는 소리가 난다. ";
  scripts[5][1] = "들어가볼까?"
  scripts[5][2] = ""
  scripts[5][3] = "집...으로... 들어가보자..."
  scripts[5][4] = "제발..."
  scripts[5][5] = ""
  scripts[6] = [];
  scripts[6][0] = "빈 텍스트"
  scripts[6][1] = "흑흑...천둥번개가 너무 무서워. 잠을 잘 수가 없어요.";
  scripts[6][2] = "우는 아이를 내버려 둘 수는 없지!";
  scripts[6][3] = "아이가 잠에 들 수 있게 해주자.";
  scripts[6][4] = ""
  scripts[6][5] = "우와! 이제 밖이 안 보여! 정말 고마워."
  scripts[6][6] = "흐암~ 졸리다... 난 이만 잘게...";
  scripts[6][7] = "zzz...";
  scripts[6][8] = "아이는 완전히 잠에 들었다.";
  scripts[6][9] = ""
  scripts[6][10] = "!!";
  scripts[6][11] = "그림자가 TV를 삼켜버렸다."
  scripts[6][12] = "뭐... 보수라고 생각할까." 
  scripts[6][13] = ""
  scripts[8] = [];
  scripts[8][0] = "아직도..."
  scripts[8][1] = "아직도..."
  scripts[8][2] = "저희를 믿어주시는군요."
  scripts[8][3] = "사실 맨홀에는... 진짜 아무것도 없습니다."
  scripts[8][4] = "그렇지만 이런 자세는 좋네요."
  scripts[8][5] = "앞으로도 많은 걸 의심하시길 바랍니다."
  scripts[8][6] = "그럼 안녕히..."
  scripts[8][7] = ""
  scripts[9] = [];
  scripts[9][0] = "아직 도색 작업이 안 끝났어.";
  scripts[9][1] = "바닥에 언제 또 검댕이가 묻었대?"
  scripts[9][2] = "그런 걸 내 눈에 띄게 하지 말라고!"
  scripts[9][3] = ""
  scripts[9][4] = "내 말은 들은 척도 안 하는군!"
  scripts[9][5] = "썩 나가!"
  scripts[9][6] = "(내쫓겼다...)";
  scripts[9][7] = "(그림자를 들키지 않고 지나갈 수 없을까?)"
  scripts[9][8] = ""
  scripts[9][9] = ""
  scripts[9][10] = "이제야 좀 깨끗해지는군."
  scripts[9][11] = "기분이다! 이 미술관 만큼이나 하얀 브러쉬를 선물하지."
  scripts[9][12] = "브러쉬를 받았다! 쓸...데가 있을까?"
  scripts[9][13] = ""
  scripts[11] = [];
  scripts[11][0] = "빈텍스트"
  scripts[11][1] = "별처럼 예쁜 보석이다..."
  scripts[11][2] = "희미하게 빛을 내뿜는 것 같기도 하다."
  scripts[11][3] = "앗... 그림자가 보석을 먹어버렸다!"
  scripts[11][4] = "내가... 훔친 건 아니니까...";
  scripts[11][5] = ""
  scripts[13] = [];
  scripts[13][0] = "관리가 되지 않은 곳인가보다. 길이 무너져있다.";
  scripts[13][1] = "";
  scripts[13][2] = "불빛과 너무 멀어 조작할 수 없습니다.";
  scripts[13][3] = "";
  scripts[13][4] = "... 번개 때문인가? 아니면 내가 만져서인가... 망가졌다.";
  scripts[13][5] = "... 계속 지나가자.";
  scripts[13][6] = "";
  scripts[15] = [];
  scripts[15][0] = "문이 잠겨 있다. 어떻게 하지? 키 하나만 누르면 될 것 같은데..."
  scripts[15][1] = "...? 이게 뭐지."
  scripts[15][2] = "[ㅋㅋ 여기 옥상 뷰가 쥑이는 거 앎?] "
  scripts[15][3] = "[우리 멤들을 위해 비밀키는 비밀펜으로 적어둠.]"
  scripts[15][4] = "[경비원이 빛 암만 비춰도 절대 모름ㅋㅋ]"
  scripts[15][5] = "[어두워야 보임ㅋㅋㅋ]"
  scripts[15][6] = "... 뭐야 이게."
  scripts[15][7] = "도시의 불량 청소년들이 남긴 것 같다."
  scripts[15][8] = "아무튼... 비밀 펜으로 적힌 글씨를 찾아보자."
  scripts[15][9] = "우리가 왔던 길에 있을지도 모른다."
  scripts[15][10] = ""
  scripts[15][11] = "열렸다!"
  scripts[15][12] = "그 대단한 옥상 뷰... 보러 갈까."
  scripts[15][13] = ""
  scripts[21] = [];
  scripts[21][0] = "저기요.";
  scripts[21][1] = "여긴 별이 안 보여요. 저는 별을 보고 싶어요.";
  scripts[21][2] = "별이 보고 싶다는 아이를 도와주자.               (해결 방식이 하나만은 아닐 것 같다!)";
  scripts[21][3] = "";
  scripts[21][4] = "와… 저게 별이구나.";
  scripts[21][5] = "고마워.";
  scripts[21][6] = "별을 보는 데 손전등이 필요하지는 않더라구.";
  scripts[21][7] = "이건 너 가져.";
  scripts[21][8] = "손전등을 얻었다!";
  scripts[21][9] = "";
  scripts[21][10] = "TV를 연결했다!";
  scripts[21][11] = "다시 회수할 수 있을 것 같다.";
  scripts[21][12] = "회수하고 싶다면 다시 만져보자.";
  scripts[21][13] = "팁!";
  scripts[21][14] = "다시 말하지만, 방법은 한가지가 아니다.";
  scripts[21][15] = "";
  scripts[21][17] = "성의는 고맙지만 나도 알 건 안다고.";
  scripts[21][18] = "그림 솜씨를 좀 길러 보는 게 어때.";
  scripts[21][19] = "그래도... 보답은 해야겠지.";
  scripts[21][20] = "이건 너 가져. 버리는 거 맞아.";
  scripts[21][21] = "손전등을 얻었다!";
  scripts[21][22] = "";
  scripts[21][23] = "벽이 있다...";
  scripts[21][24] = "페인트로 별을 그려볼까?";
  scripts[21][25] = "";
  scripts[21][26] = "TV를 회수했다!";
  scripts[21][27] = "다시 연결할 수 있을 것 같다.";
  scripts[21][28] = "연결하고 싶다면 다시 만져보자.";
  scripts[21][29] = "";

  scripts[26] = [];
  scripts[26][0] = "그림자가 너무 크다. 두렵다.";
  scripts[26][1] = "[나는 너야]";
  scripts[26][2] = "[너는 나고.]";
  scripts[26][3] = "[너와 내가 다를 게 뭐지?]";
  scripts[26][4] = "";
  scripts[26][5] = "[...]";
  scripts[26][6] = "[많은 빛을 모았구나.]";
  scripts[26][7] = "[하지만 네가 나를 없애려고 해도]";
  scripts[26][8] = "[결국 나는 네가 존재하는 한 없어질 수 없어.]";
  scripts[26][9] = "[네가 빛을 받으면, 또다시 내가 생겨나겠지.]";
  scripts[26][10] = "그렇지 않을 거야.";
  scripts[26][11] = "[곧 알게 되겠지.]";
  scripts[26][12] = "두렵지만, 그림자는 사라졌다. 다행이다.";
  scripts[26][13] = "집으로 가자.";
  scripts[26][14] = "";
  scripts[26][15] = "[...]";
  scripts[26][16] = "[넌 빛나지 않는구나. 넌 나와 같아.]";
  scripts[26][17] = "[내가 편하게 해줄게. 내가 너의 모든 것을 대신해줄게.]";
  scripts[26][18] = "싫어.";
  scripts[26][19] = "그림자가 나를 덮었다.";
  scripts[26][20] = "[이제 무섭고 불안해 할 필요 없어.]";
  scripts[26][21] = "나는 이제 자유롭다.";
  scripts[26][22] = "[BAD END]";
  scripts[26][23] = "[맵 곳곳에 숨겨진 요소가 더 있습니다.]";
  scripts[26][24] = "[다음에는 더 나아갈 수 있을까요?]";
  scripts[26][25] = "";

  scripts[27] = [];
  scripts[27][0] = "the End...";



  main = new Main();
  shadow = new Shadow();
  shadow.shadowSetup();
  shadow.offset();

  for(let i = 0; i < 27; i++){
    cleared[i] = false // 기본값=false, 최초방문시 true, 특수조건시 int
    items[i] = false
  }

  for(let i = 0; i<300; i++){
    rain[i] = [];
    rain[i][0] = random(0,1440);
    rain[i][1] = random(0,480);
  }

}

function draw() {

    if(!popup){
        switch (stage) {

            case 0:
              stage_00();
              break;
        
            case 1:
              stage_01();
              break;
        
            case 2:
              stage_02();
              break;
        
            case 3:
              stage_03();
              break;
        
            case 4:
              stage_04();
              break;
        
            case 5:
              stage_05();
              break;
        
            case 6:
              stage_06();
              break;
        
            case 7:
              stage_07();
              break;
        
            case 8:
              stage_08();
              break;
        
            case 9:
              stage_09();
              break;
        
            case 10:
              stage_10();
              break;
        
            case 11:
              stage_11();
              break;
        
            case 12:
              stage_12();
              break;
        
            case 13:
              stage_13();
              break;
        
            case 14:
              stage_14();
              break;
        
            case 15:
              stage_15();
              break;
        
            case 16:
              stage_16();
              break;
        
            case 17:
              stage_17();
              break;
        
            case 18:
              stage_18();
              break;
        
            case 19:
              stage_19();
              break;
        
            case 20:
              stage_20();
              break;
        
            case 21:
              stage_21();
              break;
        
            case 22:
              stage_22();
              break;
        
            case 23:
              stage_23();
              break;
        
            case 24:
              stage_24();
              break;
        
            case 25:
              bossEncounter();
              break;
        
            case 26:
              bossSetup();
              bossDisplay();
              break;

            case 27: //성공시 집 맵.
              ending_1();
              break;

            default:
              intro();
              break;

          }
    }

    if(popup){
      if(stage == 26){
        endscript = true
        if(cleared[26]){
          ending = 2
        }
        else if (!cleared[26]){
          ending = 1
        }

        if (frameCount % 20 == 19) {
          boss.offset();
        }
        boss.shadowSet();
        image(backgrounds[25][0], 0, 0, 720, 480); // 배경
      
        // 대충 보스 배경 이미지
        //bossAction()
        //image(backgrounds[25][3],60,60,620,370) // 보스 스프라이트
        boss.bgArmD(); // 보스 뒤 팔 스프라이트
      
        image(backgrounds[25][1], 0, 0, 720, 480); // 바닥
      
        boss.bgSideD(40, 20);
        boss.bgSideD(50, 20);
        boss.bgSideD(60, 30);
        boss.bgSideD(660, 20);
        boss.bgSideD(670, 30);
        boss.bgSideD(680, 20);
        image(sprites[0][6], 330, 290, 60, 120)
        image(backgrounds[25][2], 0, 0, 720, 480); // 앞풀
      }


      textBox()
    }

  if(cleared[stage-1] == false){
    cleared[stage-1] = true
  }
 // text("text " + textNum, 500, 140);
  stageEnd(); // 플레이어가 오른쪽 끝까지 가면 stage 변화, 플레이어 x값 초기화
  fade();
  //develop(); // 개발용. 나중에 삭제
}

function keyPressed() {
  // basic function. 마지막으로 클릭한 키 저장
  lastKeyPressed = keyCode;

  switch (stage) { // 각 스테이지별 스페이스바 토글

    case 0:
      break;
  
    case 1:
      break;
  
    case 2:
      if (main.x >= 40 && main.x <= 100 && main.y >= 225) {
        if(keyCode == 32){
           toggle = !toggle; 
           spacePress += 1;    
         }
       } else{
         if(keyCode == 32 && !popup){
           textNum = 4
           popup = true;
         }
       }

       if(keyCode == 32 && spacePress >=2 && spacePress <= 3 && !popup){
         textNum = 6;
         popup = true;
       }
     
       if(keyCode == 70 && fPress == 3 && !popup){
         textNum = 12;
         popup = true;
       }
      break;
  
    case 3:
      break;
  
    case 4:
      if(keyCode == 32 && detectLoca(420,290,60,40) && !popup){
        textNum = 0
        popup = true
      }
      break;
  
    case 5:
      break;
  
    case 6:
      if(keyCode == 32 && main.x <=130 && main.y >= 360 && !popup){
        if(main.preY <= 290 && main.preX >= 410 && main.preX <= 445 && stop && !npc[6].thank){
          textNum = 4
          popup = true
        }
        else if(!npc[6].thank){
          textNum = 0
          popup = true
        }
      }

        if(keyCode == 32 && detectLoca(305,395,50,35) && npc[6].thank && !popup){
          items[6] = true;
          stage_06_bool = false;
          textNum = 9
          popup = true
        }
      break;
  
    case 7:
      break;
  
    case 8:
      if(keyCode == 32 && detectLoca(360,374,60,40)  && !popup){
        textNum = 0
        popup = true
      }
      break;
  
    case 9:
      if(keyCode == 32 && detectLoca(520,300,30,30) && !items[9]){
        items[9] = true
        cleared[9] = true
        textNum = 9
        popup = true
      }
      break;
  
    case 10:
      break;
  
    case 11:
      if(keyCode == 32){
        if (canEat && !popup) {
            eat = true;
            textNum = 0
            popup = true
            }
    }
      break;
  
    case 12:
      break;
  
    case 13:
        if(keyCode == 32 && main.x >= 240 && main.x < 460 && main.y <= 340 && !popup && cleared[stage]==false){
          textNum = 1
          popup = true
        }
        if(keyCode == 32 && main.x >= 460 && main.y <= 340 && !popup && cleared[stage]==false){
          textNum = 3
          popup = true
        }
        if(keyCode == 32 && main.x >= 460 && main.y <= 340){
          toggle = false;
        }
      break;
  
    case 14:
      if(keyCode == 36 && main.x >= 450 && main.y <= 370){
        toggle = !toggle;
      }
      break;
  
    case 15:
      if(main.y <= 200-stage15_y && keyCode == 54 && !popup && !cleared[stage]){
        cleared[stage] = true;
        textNum = 11;
        popup = true;
      }
      if(main.y <= (200-stage15_y) && keyCode == 32 && !popup && !cleared[stage]){
        textNum = -1;
        popup = true;
      }
      if(main.y >= 300-stage15_y && main.y <= 500-stage15_y && keyCode == 32){
        toggle = !toggle;
      }
      break;
  
    case 16:
      break;
  
    case 17:
      break;
  
    case 18:
      break;
  
    case 19:
      break;
  
    case 20:
      break;
  
    case 21:
      if(keyCode == 32 && detectLoca(395,320,30,30) && !items[21] && !popup){
        if(!items[6] && !popup && // tv클리어
        ((main.preY <= 370 && main.preX >= 370 && main.preX <= 420)
      || (main.y <= 290 && main.x >= 370 && main.x <= 420)) && !cleared[21]){
        textNum = 3
        popup = true
        npc[21].thankA = true
      }
      else if(stage_21_bool == true && !popup){
        textNum = 16
        popup = true
        npc[21].thankB = true
      }
      else{
        textNum = 0
        popup = true
      }
      }

      if(keyCode == 32 && detectLoca(355,410,60,40)  && !popup){ // tv트리거
        if(items[6]){
          textNum = 9
          popup = true
          items[6] = false
        }else{
          textNum = 25
          popup = true
          items[6] = true
        }
      }

      
      if(keyCode == 32 && detectLoca(615,380,30,30) && !items[21] && !popup && !stage_21_bool && items[9] && !cleared[21]){ // 벽화
        textNum = 22
        stage_21_bool = true
        popup = true
      }

      break;
  
    case 22:
      break;
  
    case 23:
      break;
  
    case 24:
      break;
  
    case 25:
      break;
  
    case 26:

      break;
  
    default:
      if(keyCode == 32){
        stage = 0;
      }
      break;
  }

  if(popup && keyCode == 32){ // 텍스트 넘기기. 각 요소들 사이에는 빈칸 삽입하자.
    textNum ++
    if(scripts[stage][textNum] == ""){
        popup = false
    }
  }

  // f키 누르면 main, shadow class에 사용되는 stop boolean 변수 토글
  if (keyCode == 70) {
    stop = !stop;
    if(stage == 2){
      fPress += 1;
    }
  }

}

function mousePressed() {}

function intro(){
  image(logo, 0, 0, 720, 480);
main = new Main();
shadow = new Shadow();
shadow.shadowSetup();
shadow.offset();

stop = false;
stageSet = true;
canMove = true;
bossStart = false;
proceed = true;

toggle = false;

fadeOn = false;
timeOut = 40;
popup = false;
textNum = 0;
cleared = [];
items = [];
  for(let i = 0; i < 27; i++){
    cleared[i] = false // 기본값=false, 최초방문시 true, 특수조건시 int
    items[i] = false
  }

}


// 각 맵에 대한 function. 맵 draw, 인터랙션 등을 가급적 모두 여기서 작성, draw function 내에는 최소한의 function만 실행시키도록 합시다.
function stage_00() {
  // 맵제작완
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
    
    if(cleared[stage] == false){
        popup = true
    }
    
  }

  
  image(backgrounds[stage], 0, 0, 720, 480);

  if(frameCount%100 == 0){
    thunderTime = int(random(0,100));
  }
  if(frameCount%100 >= thunderTime && frameCount%100 <= thunderTime + 4){
    fill(255,100);
    rect(0,0,720,480);
  }

    //brights[stage].display(main);
    shadow.position(brights[stage]);
    shadow.shadowSet();
    shadow.offset(brights[stage]);
    shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

    main.move(); // 이전좌표 저장 + 일단 이동
    main.canMove(0, 270, 720, 480); // 검사
    main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
    main.display(); // 출력
  
}

let stage01_x = 0;
function stage_01() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.y = 260
    stageSet = false;
  }
  if(cleared[stage] == false && timeOut == 0){
    textNum = 0
    popup = true
}
  image(backgrounds[stage], -stage01_x, 0, 1440, 480);

  // brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(110, 100, 720, 480); // 검사
  if (!canMove) {
    main.canMove(0, 250, 120, 275);
  }

  // 맵을 이동시킨다.
  if (canMove && main.x >= 365 && stage01_x <= 715) {
    //오른쪽으로 갈 때
    stage01_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage01_x <= 720 && stage01_x >= 0) {
    // 왼쪽으로 갈 때
    stage01_x -= 5;
    canMove = false;
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  
  for(let i = 0; i < 300; i++){
    stroke(255, 50);
    line(rain[i][0], rain[i][1], rain[i][0], rain[i][1] + 20);
    line(rain[i][0]-720, rain[i][1], rain[i][0]-720, rain[i][1] + 20);
    rain[i][1] += 10;
    if(rain[i][1] >= 480){
      rain[i][1] = rain[i][1] -480;
    }
  }

  if(frameCount%100 == 0){
    thunderTime = int(random(0,100));
  }
  if(frameCount%100 >= thunderTime && frameCount%100 <= thunderTime + 4){
    fill(255,200);
    rect(0,0,1440,480);
    noFill();
  }
}

let spacePress = 0;
let fPress = 0;
function stage_02() {
  // 다리
  if (stageSet) {
    brights[stage] = new Light(770, 190); // 임의로 가로등을 이 위치에 설치(실제 작동 은 -50,190의 가로등)
    shadow.position(brights[stage]);
    main.y = 220;
    toggle = false;
    stageSet = false;
  }

  if(cleared[stage] == false && timeOut == 0){
    textNum = 0
    popup = true
}

  image(backgrounds[stage][0], 0, 0, 720, 480);

  // ellipse(50, 190, 30, 30);
  // ellipse(670, 190, 30, 30);

  if (toggle == true) {
    brights[stage].x = -50;
    brights[stage].y = 190;
  } else {
    brights[stage].x = 770;
    brights[stage].y = 190;
  }


  // //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);

  // f키 눌러서 stop이 되면 그림자 그 자리에 고정
  stopShadow();

  // main의 이동값
  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 100, 200, 295); // 검사
  if (!canMove) {
    main.canMove(470, 100, 720, 295);
  }
  if (!canMove && stop) {
    shadow.shadowMove(main);
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

    if(!toggle){
    image(backgrounds[stage][4], 0, 0, 720, 480);
   
 } else{
   image(backgrounds[stage][5], 0, 0, 720, 480);
 }

 for(let i = 0; i < 300; i++){
  stroke(255, 50);
  line(rain[i][0], rain[i][1], rain[i][0], rain[i][1] + 20);
  line(rain[i][0]-720, rain[i][1], rain[i][0]-720, rain[i][1] + 20);
  rain[i][1] += 10;
  if(rain[i][1] >= 480){
    rain[i][1] = rain[i][1] -480;
  }
}

if(main.x >= 40 && main.x <= 100 && main.y >= 225){
  push();
  stroke(0)
  strokeWeight(4)
  fill(255);
  textSize(50);
  text("!", 80,200);
  pop();
}


}
function stage_03() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  image(backgrounds[stage][0], 0, 0, 720, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 100, 300, 480); // 검사
  if (!canMove) {
    main.canMove(290, 140, 720, 480);
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
  image(backgrounds[stage][1], 0, 0, 720, 480);
}

let stage04_x = 0;
function stage_04() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  image(backgrounds[stage][0], -stage04_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 140, 720, 480); // 검사
  // 맵을 이동시킨다.
  if (canMove && main.x >= 365 && stage04_x <= 715) {
    //오른쪽으로 갈 때
    stage04_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage04_x <= 720 && stage04_x >= 0) {
    // 왼쪽으로 갈 때
    stage04_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
  image(backgrounds[stage][1], -stage04_x, 0, 1440, 480);
}


function stage_05() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;

    if(!proceed){
      main.x = 300;
      main.y = 200;
    }
  }
  if(cleared[stage] == false && timeOut == 0){
    textNum = 0
    popup = true
}

  image(backgrounds[stage][0], 0, 0, 720, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  
  if(main.x >= 705 && !popup){
    textNum = 3
    main.x -= 5
    popup = true
  }

  main.canMove(0, 180, 710, 480); // 검사
  if (!canMove) {
    main.canMove(275, 100, 400, 180);
  }
  if (canMove && main.y <= 120) {
    stage++;
    stageSet = true;
    fadeOn = true;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  
}

let stage_06_bool = true;
let toggle_06 = false;

function stage_06() {
  // 맵제작완
  if (stageSet) {
    brights[stage] = new Light(700, 1000); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 580;
    main.y = 400;
    stop = false;
    stageSet = false;
    npc[6] = new NPC_06(); // npc 클래스
  }

  image(backgrounds[12][0], 0, 0, 720, 480);

  for(let i = 0; i < 300; i++){
    stroke(255, 50);
    line(rain[i][0], rain[i][1], rain[i][0], rain[i][1] + 20);
    line(rain[i][0]-720, rain[i][1], rain[i][0]-720, rain[i][1] + 20);
    rain[i][1] += 10;
    if(rain[i][1] >= 480){
      rain[i][1] = rain[i][1] -480;
    }
  }

  if(frameCount%100 == 0){
    thunderTime = int(random(0,100));
  }
  if(frameCount%100 >= thunderTime && frameCount%100 <= thunderTime + 4){
    fill(255,200);
    rect(0,0,1440,480);
    noFill();
  }

  image(backgrounds[6][0], 0, 0, 720, 480);

  if(stage_06_bool){
      brights[stage].x = 310;
      brights[stage].y = 900;
      if(!stop){
        fill(255,255,250,((abs(main.x - 425)-50)*2));
      } else{
        fill(255,255,250,((abs(main.preX - 425)-50)*2));
      }
  }
  push()
  noStroke();
  beginShape();
  vertex(445,290);
  vertex(0,300);
  vertex(0,720);
  vertex(225,480);
  vertex(590,285);
  endShape();
  image(backgrounds[6][1], 0, 0, 720, 480);
  pop()

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);

  stopShadow(); // f키 눌러서 stop이 되면 그림자 그 자리에 고정


  // 그림자가 창문을 가려서 멈추면 npc가 "고마워"

    if(!npc[6].thank && textNum == 9){

        npc[6].thank = true;
        cleared[6] = 1;
        
    }

  npc[6].display();

  if(((main.preY <= 290 && main.preX >= 410 && main.preX <= 445)
  || (main.y <= 290 && main.x >= 410 && main.x <= 445)) && !npc[6].thank){
    push();
    stroke(0)
    strokeWeight(4)
    fill(255);
    textSize(50);
    text("!", 100,380);
    pop();
  }

  if(main.y < 285){
      
  }

  main.move();
  main.canMove(125, 265, 710, 480);
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  if (main.x <= 590 && main.x >= 570 && main.y >= 420) {
    if (cleared[6] == 1) {
      stage++;
      proceed = true;
    } else if (cleared[6] == false) {
      stage--;
      proceed = false;
    }
    stageSet = true;
    fadeOn = true;
  }

  if(stage_06_bool){
    image(sprites[6][2], 0, 0, 720, 480);
  }
  else{
    image(sprites[6][4], 0, 0, 720, 480);
  }
  
  if(!items[6] && npc[6].thank){
    push();
    stroke(0)
    strokeWeight(4)
    fill(255);
    textSize(50);
    text("!", 320,400);
    pop();
  }


}


function stage_07() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    if (proceed) {
      main.x = 300;
      main.y = 200;
    }

    stageSet = false;
  }

  image(backgrounds[stage][0], 0, 0, 720, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(300, 180, 720, 480); // 검사
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  image(backgrounds[stage][1], 0, 0, 720, 480);
  image(backgrounds[stage][2], 0, 0, 720, 480);

}

let stage08_x = 0;
function stage_08() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  image(backgrounds[stage][0], -stage08_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 250, 720, 480); // 검사

  if (canMove && main.x >= 365 && stage08_x <= 715) {
    //오른쪽으로 갈 때
    stage08_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage08_x <= 720 && stage08_x >= 0) {
    // 왼쪽으로 갈 때
    stage08_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  image(backgrounds[stage][1], -stage08_x, 0, 1440, 480);

}

let stage_09_bool = false // 검문 걸렸다.
function stage_09() {
  if (stageSet) {
    brights[stage] = new Light(300, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
    stage_09_bool = false
    npc[9] = new NPC_09();
  }
  if(cleared[stage] == false && timeOut == 0){
    textNum = 0
    popup = true
}

  image(backgrounds[stage][0], 0, 0, 720, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  stopShadow();


  main.move();

  main.canMove(0, 270, 720, 480);
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  // 그림자를 달고 들어오려고 하면 08 스테이지로 던짐
  if (!cleared[9] &&
    !((stop && main.preY>440)|| (stop && main.preX <= 60) || main.y>440 || main.x < 295)&& !stage_09_bool){
    stage_09_bool = true
    textNum = 4
    popup = true
  }

  if(main.x >= 300){
    push();
    stroke(0)
    strokeWeight(4)
    fill(255);
    textSize(50);
    text("!", 530,220);
    pop();
  }

  if(!cleared[9] && textNum == 8 && stage_09_bool){
    stage -= 1;
    main.x = 450;
    stage_09_bool = false
    fadeOn = true;
    stageSet = true;
  }

  npc[9].display();

  image(backgrounds[stage][1], 0, 0, 720, 480);



  
}

let stage10_x = 0;
function stage_10() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stop = false;
    stageSet = false;
  }

  image(backgrounds[stage][0], -stage10_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(40, 160, 720, 480); // 검사
  if (!canMove) {
    main.canMove(0, 0, 45, 250);
  }

  if (canMove && main.x >= 365 && stage10_x <= 715) {
    //오른쪽으로 갈 때
    stage10_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage10_x <= 720 && stage10_x >= 0) {
    // 왼쪽으로 갈 때
    stage10_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  image(backgrounds[stage][1], -stage10_x*0.9, 0, 1440, 480);
  image(backgrounds[stage][2], -stage10_x*0.8, 0, 1440, 480);

}

let eat = false; // space bar
let canEat = false; // 삼키기 가능
function stage_11() {
  if (stageSet) {
    brights[stage] = new Light(200, 700); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stop = false;
    stageSet = false;
  }

  image(backgrounds[stage][0], 0, 0, 720, 480);

  if (main.x >= 290 && main.x <= 295 && main.y >= 230 && main.y <= 355) {
    canEat = true;
  } else {
    canEat = false;
  }
  if (!eat) {
    // 개발자용 보석
    image(backgrounds[stage][1], 0, 0, 720, 480);
  } else {
    items[stage] = true;
  }

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);

  stopShadow(); // f키 눌러서 stop이 되면 그림자 그 자리에 고정

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 100, 300, 480);
  if (!canMove) {
    main.canMove(290, 100, 720, 179);
  }
  if (!canMove) {
    main.canMove(460, 100, 720, 480);
  }
  if (!canMove) {
    main.canMove(290, 350, 720, 480);
  }

  if(main.y >= 340){
    image(backgrounds[stage][2], 0, 0, 720, 480);
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  if(main.y < 340){
    image(backgrounds[stage][2], 0, 0, 720, 480);
  }

}

let thunderTime;
let stage12_x = 0;

// 이거.. 왼편에 틈이 생기는데 대체 뭐 때문이지.
function stage_12() {
  if (stageSet) {
    brights[stage] = new Light(shadow.x+100, shadow.y); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }


  image(backgrounds[stage][0], -stage12_x, 0, 1440, 480);
  image(backgrounds[stage][8], -stage12_x*0.5, -50, 1440, 480);
  image(backgrounds[stage][1], -stage12_x*0.6, 0 , 1440, 450);

  for(let i = 0; i < 300; i++){
    stroke(255, 50);
    line(rain[i][0]-stage12_x*0.6, rain[i][1], rain[i][0]-stage12_x*0.6, rain[i][1] + 20);
    rain[i][1] += 10;
    if(rain[i][1] >= 480){
      rain[i][1] = rain[i][1] -480;
    }
  }

  image(backgrounds[stage][2], -stage12_x, 0, 1440, 480);



  if(frameCount%100 == 0){
    thunderTime = int(random(0,100));
  }
  if(frameCount%100 >= thunderTime && frameCount%100 <= thunderTime + 4){
    fill(255,200);
    rect(0,0,1440,480);
    image(backgrounds[stage][3], -stage12_x, 0, 1440, 480);
  }

  image(backgrounds[stage][4], -stage12_x*0.8, 0, 1440, 480);
  image(backgrounds[stage][5], -stage12_x, 0, 1440, 480);

  if(frameCount%100 >= thunderTime && frameCount%100 <= thunderTime + 4){
    image(backgrounds[stage][6], -stage12_x, 0, 1440, 480);
    brights[stage].x = shadow.x;
    brights[stage].y = -1000;
  } else{
    brights[stage].x = shadow.x+100;
    brights[stage].y = shadow.y;
  }


  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 270, 720, 480); // 검사

  if (canMove && main.x >= 365 && stage12_x <= 715) {
    //오른쪽으로 갈 때
    stage12_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage12_x <= 720 && stage12_x >= 0) {
    // 왼쪽으로 갈 때
    stage12_x -= 5;
    canMove = false;
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  image(backgrounds[stage][7], -stage12_x, 0, 1440, 480);
}

let thunderPos = false;
let preStop = false;
function stage_13() {
  if (stageSet) {
    brights[stage] = new Light(350, 300); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    cleared[stage-1] = true;
    toggle = true;
    stageSet = false;
  }
  
  if(cleared[stage] == false && timeOut == 0){
    textNum = 0
    popup = true
}

  image(backgrounds[12][0], 0, 0, 720, 480);
  image(backgrounds[12][1], -main.x*0.01, 50, 720, 480);
  image(backgrounds[12][8], -main.x*0.02, 0, 720, 480);

  for(let i = 0; i < 300; i++){
    stroke(255, 50);
    line(rain[i][0], rain[i][1], rain[i][0], rain[i][1] + 10);
    rain[i][1] += 10;
    if(rain[i][1] >= 480){
      rain[i][1] = rain[i][1] -480;
    }
  }

  image(backgrounds[stage][2], 0, 0, 720, 480);
  image(backgrounds[stage][0], 0, 0, 720, 480);

  // 천둥 숫자를 뽑습니다.
  if(frameCount%100 == 0){
    thunderTime = int(random(0,100));
  }

  // 천둥과 빛.
  if(frameCount%100 == thunderTime){
    if(!stop){
      preStop = false;
    } else{
      preStop = true;
    }
  }
  if(frameCount%100 >= thunderTime && frameCount%100 <= thunderTime + 20){
    fill(255);
    rect(0,0,720,480);
    image(backgrounds[stage][3], 0, 0, 720, 480);
    image(backgrounds[stage][1], 0, 0, 720, 480);
    brights[stage].x = -500;
    brights[stage].y = 100;

    // 이미 이전에 고정시킨 경우.
    if(thunderPos && stop && preStop){
      brights[stage].x = -500;
      brights[stage].y = 100;
    }

    // 처음으로 고정시키는 경우.
    if(stop && !preStop){
      thunderPos = true;
      brights[stage].x = -500;
      brights[stage].y = 100;
    }
    
    // 다른 방향에서 고정된 경우.
    if(preStop && !thunderPos){
      brights[stage].x = 350;
      brights[stage].y = 300;
      thunderPos = false;
    }

    // 해제한 경우
    if(!stop){
      thunderPos = false;
    }
  } else{
    // 번개가 번쩍이지 않는 상황입니다.
    if(thunderPos && stop){
      brights[stage].x = -500;
      brights[stage].y = 100;
    } else{
      brights[stage].x = 350;
      brights[stage].y = 300;
    }
  }

  image(backgrounds[stage][4], 0, 0, 720, 480);

  if(toggle){
    image(backgrounds[stage][7], 0, 0, 720, 480);
  } else{
    image(backgrounds[stage][8], 0, 0, 720, 480);
  }


    //brights[stage].display(main);
    shadow.position(brights[stage]);
    shadow.shadowSet();
    shadow.offset(brights[stage]);
  
    stopShadow(); // f키 눌러서 stop이 되면 그림자 그 자리에 고정
  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 290, 300, 480); // 검사
  if (!canMove) {
    main.canMove(580, 290 , 720, 480);
  }

  if (!canMove && stop) {
    shadow.shadowMove(main);
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display();

}

// tip : 세로 맵은... 처음 화면은 480 더해준 거 기준으로 생각하기...
let stage14_y = 480;
let preToggle = false;
function stage_14() {
  if (stageSet) {
    brights[stage] = new Light(main.x, 960); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 20;
    main.y = 400;
    if (proceed) {
    } else {
      main.x = 350;
      main.y = 40;
    }
    proceed = true;
    stageSet = false;
  }

  if(preToggle){
    brights[stage].x = 50;
    brights[stage].y = 0;
  } else{
    brights[stage].x = main.x;
    }

  image(backgrounds[stage][0], 0, -stage14_y, 720, 960);
  image(backgrounds[stage][1], 0, (-stage14_y)*0.8-96, 720, 960);

  image(backgrounds[stage][5], 0, -stage14_y, 720, 960);
  image(backgrounds[stage][6], 0, -stage14_y, 720, 960);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 240, 510, 480); // 검사
  if (!canMove) {
    main.canMove(300, 0, 440, 250);
  }

  if (canMove && main.y >= 245 && stage14_y <= 475) {
    //위로
    stage14_y += 4;
    canMove = false;
  }
  if (canMove && main.y <= 235 && stage14_y <= 720 && stage14_y >= 0) {
    // 아래로
    stage14_y -= 4;
    canMove = false;
  }
  if (main.y <= 30) {
    stage++;
    stageSet = true;
    fadeOn = true;
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  image(backgrounds[stage][2], 0, -stage14_y, 720, 960);
  image(backgrounds[stage][7], 0, 200-stage14_y, 720, 960);

  if(preToggle && stage14_y>300 && stage14_y<370){
    push();
    stroke(0)
    strokeWeight(4)
    fill(255);
    textSize(50);
    text("!", main.x + 30,220);
    pop();
  }

}

// 대충... 불 켜기.
let stage15_y = 480;
let doorPress = false;
function stage_15() {
  if (stageSet) {
    brights[stage] = new Light(350, 0); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 350;
    main.y = 400;
    if (proceed) {
      toggle = preToggle;
    } else {
      main.x = 350;
      main.y = 40;
    }
    proceed = false;
    stageSet = false;
  }

  image(backgrounds[stage][0], 0, -stage15_y, 720, 960); //야외

  image(backgrounds[stage][1], 0, -stage15_y, 720, 960); // 뒷건물배경
  image(backgrounds[stage][2], 0, -stage15_y, 720, 960); // 오른 벽
  image(backgrounds[stage][5], 0, -stage15_y, 720, 960); // 계단

  if(!cleared[stage]){
    image(backgrounds[stage][6], 0, -stage15_y, 720, 960);
  }
  if(!toggle){
    brights[stage].x = 350;
    brights[stage].y = 960;
    image(backgrounds[stage][3], 0, -stage15_y, 720, 960);    
  } else{
    brights[stage].x = 50;
    brights[stage].y = 480-stage15_y;
    image(backgrounds[stage][4], 0, -stage15_y, 720, 960);
    preToggle = true;
  }
  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  if(!cleared[stage]){
    main.canMove(300, 100, 440, 480); // 검사
  } else{
    main.canMove(300, 0, 440, 480); // 검사
  }

  // 그냥 이동 / 맵움직임 관련
    if (canMove && main.y >= 245 && stage15_y <= 475) {
    //위로
    stage15_y += 4;
    canMove = false;
  }
  if (canMove && main.y <= 235 && stage15_y <= 720 && stage15_y >= 0) {
    // 아래로
    stage15_y -= 4;
    canMove = false;
  }

  if (main.y <= 30) {
    stage++;
    proceed = true
    stageSet = true;
    fadeOn = true;
  }
  if (main.y >= 400) {
    stage--;
    stageSet = true;
    fadeOn = true;
    proceed = false
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  if(main.y >= 300-stage15_y && main.y <= 500-stage15_y){
    push();
    stroke(0)
    strokeWeight(4)
    fill(255);
    textSize(50);
    text("!", main.x + 30,220);
    pop();
  }


}

// 16부터 proceed랑 위치값 설정 관련해서 수정 필요...
let stage16_x = 0;
function stage_16() {
  if (stageSet) {
    brights[stage] = new Light(-50, 0); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);

    main.x = 40;
    main.y = 400;
    //proceed = true;
    if(proceed){
  
    } else {
      main.x = 690;
      main.y = 400;
    }
    proceed = true;
    stageSet = false;
  }

    brights[stage].x = 50;
    brights[stage].y = 0;
    
  image(backgrounds[stage][0], 0, 0, 1440, 600);
  image(backgrounds[stage][2], -stage16_x*0.2, 0, 1440, 480);
  image(backgrounds[stage][3], -stage16_x*0.2, 0, 1440, 480);
  image(backgrounds[stage][6], (-stage16_x*0.2)-200, 20, 1440, 500); //good
  image(backgrounds[stage][6], (-stage16_x*0.2)-230, 70, 1440, 500);
  image(backgrounds[stage][4], (-stage16_x*0.3)-200, 0, 1440, 480);
  image(backgrounds[stage][15], -stage16_x*0.3, 0, 1440, 480);

  image(backgrounds[stage][5], -stage16_x*0.2, 0, 1440, 480);
  image(backgrounds[stage][5], -stage16_x*0.2 - 200, 0, 1440, 480);
  image(backgrounds[stage][7], (-stage16_x*0.3) + 200, 20, 1440, 500);
  image(backgrounds[stage][7], (-stage16_x*0.4) + 250, 0, 1440, 500);
  image(backgrounds[stage][7], (-stage16_x*0.4) + 250, 30, 1440, 500);
  image(backgrounds[stage][6], -stage16_x*0.2, 0, 1440, 500);
  image(backgrounds[stage][7], -stage16_x*0.4, 0, 1440, 500);
  image(backgrounds[stage][1], -stage16_x*0.3, 0, 1440, 480);

  image(backgrounds[stage][8], -stage16_x*0.6, 0, 1440, 500);
  image(backgrounds[stage][9], -stage16_x*0.7, 0, 1440, 480);
  image(backgrounds[stage][10], -stage16_x*0.7, 0, 1440, 480);
  image(backgrounds[stage][11], -stage16_x*0.7, 0, 1440, 480);
  image(backgrounds[stage][12], 100-stage16_x*1.05, 0, 1440, 480);
  image(backgrounds[stage][13], 100-stage16_x*1.1, 0, 1440, 480);
  image(backgrounds[stage][14], -stage16_x, 0, 1440, 480);


  // image(backgrounds[stage][0], -stage16_x*0.01, 0, 1440, 480);
  // image(backgrounds[stage][1], -stage16_x*0.01, 0, 1440, 480);
  // image(backgrounds[stage][2], -stage16_x*0.02, 0, 1440, 480);
  // image(backgrounds[stage][3], -stage16_x*0.03, 0, 1440, 480);
  // image(backgrounds[stage][15], -stage16_x*0.03, 0, 1440, 480);
  // image(backgrounds[stage][4], -stage16_x*0.03, 0, 1440, 480);
  // image(backgrounds[stage][5], -stage16_x*0.04, 0, 1440, 480);
  // image(backgrounds[stage][6], -stage16_x*0.05, 20, 1440, 500);
  // image(backgrounds[stage][7], -stage16_x*0.05, 20, 1440, 500);
  // image(backgrounds[stage][8], -stage16_x*0.05, 20, 1440, 500);
  // image(backgrounds[stage][9], -stage16_x*0.05, 0, 1440, 480);
  // image(backgrounds[stage][10], -stage16_x*0.06, 0, 1440, 480);
  // image(backgrounds[stage][11], -stage16_x*0.07, 0, 1440, 480);
  // image(backgrounds[stage][12], -stage16_x*0.8, 0, 1440, 480);
  // image(backgrounds[stage][13], -stage16_x*0.08, 0, 1440, 480);
  // image(backgrounds[stage][14], -stage16_x, 0, 1440, 480);

  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(40, 330, 720, 480); // 검사

  if (canMove && main.x >= 365 && stage16_x <= 715) {
    //오른쪽으로 갈 때
    stage16_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage16_x <= 720 && stage16_x >= 0) {
    // 왼쪽으로 갈 때
    stage16_x -= 5;
    canMove = false;
  }

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
}

function stage_17() {
  if (stageSet) {
    brights[stage] = new Light(-50, 400); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 20;
    main.y = 400;
    if (proceed) {
    } else {
      main.x = 350;
      main.y = 40;
    }
    proceed = true;
    stageSet = false;
  }

  image(backgrounds[stage-1][0], -500, 0, 1440, 480);
  image(backgrounds[stage-1][1], -500, 0, 1440, 480);
  image(backgrounds[stage-1][2], -500, 0, 1440, 480);
  image(backgrounds[stage-1][3], -500, 0, 1440, 480);
  image(backgrounds[stage-1][15], -500, 0, 1440, 480);
  image(backgrounds[stage-1][4], -500, 0, 1440, 480);
  image(backgrounds[stage-1][5], -500, 0, 1440, 480);
  image(backgrounds[stage-1][6], -500, 20, 1440, 500);
  image(backgrounds[stage-1][7], -500, 20, 1440, 500);
  image(backgrounds[stage-1][8], -500, 20, 1440, 500);
  image(backgrounds[stage-1][9], -500, 0, 1440, 480);
  image(backgrounds[stage-1][10], -500, 0, 1440, 480);
  image(backgrounds[stage-1][11], -500, 0, 1440, 480);
  image(backgrounds[stage-1][12], -500-main.x*0.1, 0, 1440, 480);
  image(backgrounds[stage-1][13], -500-main.x*0.05, 0, 1440, 480);

  image(backgrounds[17][0], 0, 0, 720, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 330, 700, 480); // 검사
  if (!canMove) {
    main.canMove(290, 0, 430, 330);
  }
  if (main.y <= 30) {
    stage++;
    stageSet = true;
    fadeOn = true;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
}

let stage18_y = 480;
function stage_18() {
  if (stageSet) {
    brights[stage] = new Light(main.x, main.y-300); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 360;
    main.y = 400;
    if (proceed) {
    } else {
      main.x = 360;
      main.y = 35;
    }
    proceed = false;
    stageSet = false;
  }

  brights[stage].x = main.x-50
  brights[stage].y = main.y-300
  image(backgrounds[stage-2][0], -500, -stage18_y, 1440, 960);

  image(backgrounds[stage-2][1], -500, -stage18_y*0.1+100, 1440, 480);

  image(backgrounds[stage-2][2], -500, -stage18_y*0.1+100, 1440, 480);
  image(backgrounds[stage-2][3], -500, -stage18_y*0.1+100, 1440, 480);
  image(backgrounds[stage-2][15], -500, -stage18_y*0.2+100, 1440, 480);
  image(backgrounds[stage-2][4], -500, -stage18_y*0.2+100, 1440, 480);

  image(backgrounds[stage-2][5], -500, -stage18_y*0.1+200, 1440, 480);
  image(backgrounds[stage-2][6], -500, -stage18_y*0.1+200, 1440, 500);
  image(backgrounds[stage-2][7], -500, -stage18_y*0.1+200, 1440, 500);
  image(backgrounds[stage-2][8], -500-main.x*0.05, -stage18_y*0.2+250, 1440, 500);
  image(backgrounds[stage-2][9], -500-main.x*0.05, -stage18_y*0.2+200, 1440, 480);
  image(backgrounds[stage-2][9], -300-main.x*0.05, -stage18_y*0.2+200, 1440, 480);
  image(backgrounds[stage-2][10], -500-main.x*0.05, -stage18_y*0.2+200, 1440, 480);
  image(backgrounds[stage-2][11], -500-main.x*0.05, -stage18_y*0.3+300, 1440, 480);
  image(backgrounds[stage-2][12], -500-main.x*0.1, -stage18_y*0.6+530, 1440, 530);
  image(backgrounds[stage-2][13], -500-main.x*0.05, -stage18_y*1.1+530, 1440, 530);

  image(backgrounds[stage-2][14], -500, -stage18_y*1.2+600, 1440, 600);


  image(backgrounds[stage][0], 0, -stage18_y, 720, 960);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(300, 0, 430, 480); // 검사
  if (canMove && main.y >= 245 && stage18_y <= 480) {
    //위로
    stage18_y += 4;
    canMove = false;
  }
  if (canMove && main.y <= 235 && stage18_y <= 720 && stage18_y >= 0) {
    // 아래로
    stage18_y -= 4;
    canMove = false;
  }
  if (main.y <= 30) {
    stage++;
    stageSet = true;
    fadeOn = true;
  }
  if (main.y >= 450) {
    stage--;
    stageSet = true;
    fadeOn = true;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
}

let stage19_y = 480;
function stage_19() {
  if (stageSet) {
    brights[stage] = new Light(350, -1000); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 700;
    main.y = 185;
    if (proceed) {
    } else {
      main.x = 360;
      main.y = 450;
    }
    proceed = false;
    stageSet = false;
  }

  image(backgrounds[stage][0], 0, -stage19_y, 720, 960);
  image(backgrounds[stage][1], 0, -stage19_y*0.1-300, 720, 960);
  image(backgrounds[stage][2], -main.x*0.05, -stage19_y*0.1-300, 720, 960);
  image(backgrounds[stage][3], -main.x*0.05, -stage19_y*0.2-100, 720, 960);
  image(backgrounds[stage][4], -main.x*0.05, -stage19_y*0.9, 720, 960);
  image(backgrounds[stage][5], -main.x*0.1, -stage19_y*0.9, 720, 960);
  image(backgrounds[stage][6], 0, -stage19_y, 720, 960);


  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(300, 415, 430, 480); // 검사
  if (!canMove) {
    main.canMove(20, 400, 720, 425);
  }
  if (canMove && main.y >= 435 && stage19_y <= 480) {
    //위로
    stage19_y += 4;
    canMove = false;
  }
  if (canMove && main.y <= 425 && stage19_y <= 720 && stage19_y >= 0) {
    // 아래로
    stage19_y -= 4;
    canMove = false;
  }
  if (main.y >= 460) {
    stage--;
    stageSet = true;
    fadeOn = true;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
}

let stage20_x = 0;
function stage_20() {
  if (stageSet) {
    brights[stage] = new Light(main.x, main.y-1000); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  brights[stage].x = main.x;
  brights[stage].y = main.y-1000;

  image(backgrounds[stage][0], -stage20_x, 0, 1440, 480);
  image(backgrounds[stage][1], -stage20_x*0.3, 0, 1440, 480);
  image(backgrounds[stage][2], -stage20_x*0.7, 0, 1440, 480);
  image(backgrounds[stage][3], -stage20_x*0.8, 0, 1440, 480);
  image(backgrounds[stage][4], -stage20_x*0.9, 0, 1440, 480);
  image(backgrounds[stage][5], -stage20_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 270, 720, 480); // 검사
  if (canMove && main.x >= 365 && stage20_x <= 715) {
    //오른쪽으로 갈 때
    stage20_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage20_x <= 720 && stage20_x >= 0) {
    // 왼쪽으로 갈 때
    stage20_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
}

let stage_21_bool = false;
function stage_21() {
  if (stageSet) {
    brights[stage] = new Light(550, 200); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
    items[9] = true
    main.y = 270
    npc[21] = new NPC_21();

}


  image(backgrounds[20][0], 0, 0, 720, 480);
  image(backgrounds[stage][0], 0, 0, 720, 480);
  image(backgrounds[stage][1], 0, 0, 720, 480);
  if(items[6]){
    image(sprites[6][4], 0, 0, 720, 480);
  }

  if(main.y >= 320){ // 애 좌표
    npc[21].display();
  }

  if(!items[6]){
    brights[stage].x = 200
    brights[stage].y = 800
  }
  else{
    brights[stage].x = 550
    brights[stage].y = 200
  }

  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);


  if (npc[21].thankA || npc[21].thankB){
    cleared[21] = true;
    items[21]= true
  }

 
  stopShadow(); // f키 눌러서 stop이 되면 그림자 그 자리에 고정
  main.move();
  main.canMove(0, 265, 620, 480);
  if (!canMove) {
    main.canMove(600, 265, 720, 314);
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  if(main.y < 320){
    npc[21].display();
  }

  if(!items[6]){
    image(sprites[6][3], 0, 0, 720, 480);
  }

  if(!stage_21_bool){
    image(backgrounds[stage][3], 30, 0, 750, 480);
  }
  else{
    image(backgrounds[stage][4], 30, 0, 750, 480);
  }




  if( !items[6] &&
    ((main.preY <= 370 && main.preX >= 370 && main.preX <= 420)
  || (main.y <= 290 && main.x >= 370 && main.x <= 420) || stage_21_bool) && !cleared[21]){
    push();
    stroke(0)
    strokeWeight(4)
    fill(255);
    textSize(50);
    text("!", 410,300);
    pop();
  }



}

let stage22_x = 0;
function stage_22() {
  if (stageSet) {
    brights[stage] = new Light(main.x, main.y-1000); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  brights[stage].x = main.x;
  brights[stage].y = main.y-1000;

  image(backgrounds[20][0], -stage22_x, 0, 1440, 480);
  image(backgrounds[20][1], -stage22_x*0.3, 0, 1440, 480);
  image(backgrounds[20][2], -stage22_x*0.7, 0, 1440, 480);
  image(backgrounds[20][3], -stage22_x*0.8, 0, 1440, 480);
  image(backgrounds[20][4], -stage22_x*0.9, 0, 1440, 480);
  image(backgrounds[22][5], -stage22_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 270, 720, 480); // 검사
  if (canMove && main.x >= 365 && stage22_x <= 715) {
    //오른쪽으로 갈 때
    stage22_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage22_x <= 720 && stage22_x >= 0) {
    // 왼쪽으로 갈 때
    stage22_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
}

let stage23_x = 0;
function stage_23() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  image(backgrounds[stage][0], -stage23_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 230, 305, 390); // 검사
  if (!canMove) {
    main.canMove(304, 170, 520, 350);
  }
  if (!canMove) {
    main.canMove(518, 230, 720, 390);
  }

  if (canMove && main.x >= 365 && stage23_x <= 715) {
    //오른쪽으로 갈 때
    stage23_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage23_x <= 720 && stage23_x >= 0) {
    // 왼쪽으로 갈 때
    stage23_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
  image(backgrounds[stage][1], -stage23_x, 0, 1440, 480);
}

let stage24_x = 0;
function stage_24() {
  if (stageSet) {
    brights[stage] = new Light(600, 50); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    stageSet = false;
  }

  image(backgrounds[stage][0], -stage24_x, 0, 1440, 480);

  //brights[stage].display(main);
  shadow.position(brights[stage]);
  shadow.shadowSet();
  shadow.offset(brights[stage]);
  shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

  main.move(); // 이전좌표 저장 + 일단 이동
  main.canMove(0, 230, 720, 480); // 검사

  if (canMove && main.x >= 365 && stage24_x <= 715) {
    //오른쪽으로 갈 때
    stage24_x += 5;
    canMove = false;
  }
  if (canMove && main.x <= 355 && stage24_x <= 720 && stage24_x >= 0) {
    // 왼쪽으로 갈 때
    stage24_x -= 5;
    canMove = false;
  }
  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력
  image(backgrounds[stage][1], -stage24_x, 0, 1440, 480);
}


// 이하부터 보스 페이즈에 사용되는 펑션.
function bossEncounter() {
  if (stageSet) {
    brights[stage] = new Light(360, 1000); // 임의로 가로등을 이 위치에 설치
    shadow.position(brights[stage]);
    main.x = 30;
    main.y = 330;
    stageSet = false;
  }

  image(backgrounds[stage][0], 0, 0, 720, 480);
  image(backgrounds[stage][1], 0, 0, 720, 480);

  if (!bossStart) {
    //brights[stage].display(main);
    shadow.position(brights[stage]);
    shadow.shadowSet();
    shadow.offset(brights[stage]);
    shadow.display(main); // 이 맵에서는 그림자 정지가 안된다.

    main.move(); // 이전좌표 저장 + 일단 이동
    main.canMove(0, 240, 370, 400); // 검사
    main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
    main.display(); // 출력
  }
  image(backgrounds[stage][2], 0, 0, 720, 480);

  if (main.x >= 360) {
    bossStart = true;
    stage = 26;
  }
}

function bossSetup() {
  // 보스 페이즈 최초로 도입할 때만.
  if (bossStart) {
    let lighten = 0; // 지금까지 먹은 케이스 체크
    for (let i = 0; i < 3; i++) {
      if (cleared[i] == 1) {
        lighten++;
      }
    }
    timeOut = 120;
    fadeOn = true;
    fade();
    boss = new Boss(lighten); // 보스 클래스 생성
    boss.bossSet();
    boss.offset();
    bossStart = false; // draw에 배치해도 다시 발동되지 않음.
  }
}

let ending = false
let endscript = false
let imageX = 300;
function bossDisplay() {

  if (frameCount % 20 == 19) {
    boss.offset();
  }
  boss.shadowSet();

  image(backgrounds[25][0], 0, 0, 720, 480); // 배경

  // 대충 보스 배경 이미지
  //bossAction()
  //image(backgrounds[25][3],60,60,620,370) // 보스 스프라이트
  boss.bgArmD(); // 보스 뒤 팔 스프라이트

  image(backgrounds[25][1], 0, 0, 720, 480); // 바닥

  boss.bgSideD(40, 20);
  boss.bgSideD(50, 20);
  boss.bgSideD(60, 30);
  boss.bgSideD(660, 20);
  boss.bgSideD(670, 30);
  boss.bgSideD(680, 20);

  
  if (items[6] == true && items[11] == true && items[21] == true){
    cleared[26] = true;

  }
  

  if(!bossStart && timeOut == 0){
    if(cleared[26]){
      textNum = 5;
      popup = true;
    } else if(!cleared[26]){
      textNum = 15;
      popup = true;
      

    }
  }



    main.move(); // 이전좌표 저장 + 일단 이동
      main.canMove(80, 240, 640, 400); // 검사



  fill(225)

  main.fixloca(); // canMove 오류 시 기존좌표로 돌아가고
  main.display(); // 출력

  if(ending == 1 && endscript && !popup){
    image(backgrounds[25][0], 0, 0, 720, 480); // 배경
    image(backgrounds[25][1], 0, 0, 720, 480); // 바닥
    imageX -= 2;
    if(frameCount%20< 10){
      image(sprites[0][1], imageX, 290,60,120);
    } else{
      image(sprites[0][2], imageX, 290,60,120);
    }
  
    if(imageX <= 0){
      stage = -1;
    }
    background(0, (imageX-250)*5)
  }

  if(ending == 2 && endscript && !popup){
    image(backgrounds[25][0], 0, 0, 720, 480); // 배경
    image(backgrounds[25][1], 0, 0, 720, 480); // 바닥
    imageX += 2;
    if(frameCount%20< 10){
      image(sprites[0][4], imageX, 290,60,120);
    } else{
      image(sprites[0][5], imageX, 290,60,120);
    }
  
    if(imageX >= 720){
      stage = 27;
      imageX = 0
    }
    background(0,500-(imageX-250)*5)
  }

  
  

  image(backgrounds[25][2], 0, 0, 720, 480); // 앞풀
}

function ending_1(){
  image(backgrounds[0], 0, 0, 720, 480);
  imageX += 2;
  if(frameCount%20< 10){
    image(sprites[0][4], imageX, 290,60,120);
  } else{
    image(sprites[0][5], imageX, 290,60,120);
  }
  background(0,250-imageX*2)

  if(imageX == 200){
    stage = -1
  }
}




// 범용
function stopShadow() {
  // 그림자 멈추기 / 디스플레이
  if (stop) {
    shadow.fixPosition(main);
  } else {
    shadow.display(main);
  }
}
function stageEnd() {
  // 맵이동
  if (stage >= 0) {
    if (main.x + 15 > width) {
      stage++;
      proceed = true;
      main.x = 40;
      stageSet = true;
      main.y = 320;
      fadeOn = true;
      stop = false;
    }

    if (main.x - 15 < 0 && stage != 0) {
      stage--;
      proceed = false;
      main.x = width - 40;
      main.y = 320;
      fadeOn = true;
      stageSet = true;
    }
  }
}
function textBox(){
    image(textBar,120,0,480,140)
    push()
    textSize(20)
    fill(255)
    textAlign(LEFT)
    text(scripts[stage][textNum],180,50,400,100)
    pop()
}


function calculateAngle(x1, y1, x2, y2) {
  // 각도계산.
  // Calculate the angle using the arctangent function
  let dx = x2 - x1;
  let dy = y2 - y1;
  let angle = atan2(dy, dx);

  // Ensure the angle is between 0 and 360 degrees
  if (angle < 0) {
    angle += 2 * PI;
  }

  return angle;
}
function detectLoca(x,y,areaX,areaY){
  let locaTrue
  if(main.x <= x + areaX && main.x >= x - areaX && main.y <= y + areaY && main.y >= y - areaY){
    locaTrue = true
  }
  else{
    locaTrue = false
  }
  return locaTrue
}
function fade() {
  // 페이드 인아웃
  if (fadeOn) {
    if (timeOut > 0) {
      background(0, (timeOut % 40) * 6);
      timeOut--;
    } else {
      fadeOn = false;
      timeOut = 40;
    }
  }
}




function develop() {
  격자
  if (stop) {
    const gridSize = 40; // Size of each grid cell
    const rows = height / gridSize; // Number of rows based on screen height
    const cols = width / gridSize; // Number of columns based on screen width

    // Draw the grid
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        push();
        stroke(255, 0, 0, 10); // Set stroke color to black
        noFill(); // Disable fill
        rect(x, y, gridSize, gridSize); // Draw a rectangle for each grid cell
        pop();
      }
    }
  }

  push();
  textAlign(RIGHT);
  fill(255, 0, 0);
  text(main.x + "," + main.y, 700, 20);
  text("shadodDir: " + shadow.dir, 700, 40);
  text("shadowSize: " + int(shadow.size), 700, 60);
  text("stage: " + stage, 700, 80);
  pop();
}
