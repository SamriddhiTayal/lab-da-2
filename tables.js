 let rtp1 = document.getElementById('pr1');
 let rtp2 = document.getElementById('pr2');
 let rtp3 = document.getElementById('pr3');
 let rtp4 = document.getElementById('pr4');
 let rtp5 = document.getElementById('pr5');

 let tp1 = 0;
 let tp2 = 0;
 let tp3 = 0;
 let tp4 = 0;
 let tp5 = 0;
 while (true) {
   let prono = Number(prompt('Give the product number:'));
   if (prono === -1) {
     rtp1.innerHTML = `$ ${tp1}`;
     rtp2.innerHTML = `$ ${tp2}`;
     rtp3.innerHTML = `$ ${tp3}`;
     rtp4.innerHTML = `$ ${tp4}`;
     rtp5.innerHTML = `$ ${tp5}`;
     break;
   }
   var quan = Number(prompt('Give the product quantity'));
   switch (prono) {
     case 1:
       tp1 += quan * 2.98;
       break;
     case 2:
       tp2 += quan * 4.5;
       break;
     case 3:
       tp3 += quan * 9.98;
       break;
     case 4:
       tp4 += quan * 4.49;
       break;
     case 5:
       tp5 += quan * 6.87;
       break;
     default:
       break;
   }
 }
