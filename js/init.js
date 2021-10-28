document.addEventListener('keydown', keyPush);//documentはwebページそのものに追加する。警報機を追加する。
//keydownはkeyを押した瞬間。keypushを呼ぶということを上記では書いてある。
const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;//20pxの蛇の一つの大きさを表している。
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;//プレイヤーの初期のx,y座標
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = appleY = 15;//りんご
let dappleX = dappleY = 5;//毒りんご
