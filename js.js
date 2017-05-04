
var mini = document.getElementsByClassName('mini');
var display = document.getElementById('display');



for (i=0; i< mini.length; i++) {
  mini[i].onclick=fDisplay;
}
function fDisplay() {
  display.style.backgroundImage='url('+this.src+')';
  for (i=0; i< mini.length; i++) {
  // removeClass(mini[i],'active');}
  // addClassName(this,'active');
}this.addClassName='active';
}
mini[0].click();


var display1 = document.getElementById('display1');
var gallary1 = document.getElementById('gallary1');
var out='';

var a = ['mini1.png', 'mini2.png', 'mini3.png', 'mini4.png', 'mini5.png', 'mini6.png']
// display1.style.opacity= '0';
// gallary1.style.opacity='0';
for (i=0; i< a.length; i++) {
  out +='<img class="mini1" src="img/'+a[i]+'" alt="">';
  console.log(out);
  gallary1.innerHTML = out;
  display1.style.backgroundImage='url(img/'+a[0]+')';
}

// var mini1 = document.getElementsByClassName('mini1');
// console.log(mini1);
// var time=0;
// var  ttt;
// function show() {
//    time=time+0.1;
//   //  gallary1.style.opacity='time';
//    display1.style.opacity='time';
//   for (i=0; i<mini1.length; i++) {
//
//   }
//    ttt=setTimeout(show,100);
//   }
// show()
