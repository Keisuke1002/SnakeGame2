ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2,canv.height/2,20,20);



setInterval (function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle="lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for(let i=0;i<snake.length-1;i++){
    ctx.fillRect(snake[i].x*SIZE,
      snake[i].y*SIZE,
      SIZE-2, SIZE-2);
      if(snake[i].x==px && snake[i].y==py){
        tail=MIN;
      }
    }
    while(snake.length>tail){
      snake.shift();
    }
    if(appleX == px
      && appleY == py){
        tail++;
        appleX = Math.floor(Math.random()*canv.width/SIZE);
        appleY = Math.floor(Math.random()*canv.width/SIZE);
        console.log(tail);
      }
      ctx.fillStyle = "red";
      ctx.fillRect(appleX*SIZE,
        appleY*SIZE,
        SIZE-2,SIZE-2);
        if(dappleX == px
          && dappleY == py){
            tail=tail-2;
            dappleX = Math.floor(Math.random()*canv.width/SIZE);
            dappleY = Math.floor(Math.random()*canv.width/SIZE);
            console.log(tail);
          }
          ctx.fillStyle = "orange";
          ctx.fillRect(dappleX*SIZE,
            dappleY*SIZE,
            SIZE-2,SIZE-2);
            if(tail<=-1){
              document.location.reload();
              alert("残念");
            }
            if(px<=-2||px>=21||py<=-2||py>=21){
              document.location.reload();
              alert("残念");
            }
          },1000/FPS);
