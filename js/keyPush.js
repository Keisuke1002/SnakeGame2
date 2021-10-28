//キーによって移動方向を変更するプログラム
function keyPush(env) {
  switch (env.keyCode) {
    case 37: xd = -1; yd = 0; break;//x軸方向に左に移動する.←
    case 38: xd = 0; yd = -1; break;//y座標が１減り、キャンバス上では上に上がる。↑
    case 39: xd = 1; yd = 0; break;//→
    case 40: xd = 0; yd = 1; break;//↓
  }
}
