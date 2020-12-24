var hey = false;
var ta;
var tl;

function logo(){
  ta = new TimelineMax({paused:true});
  ta.to( $(".box"), 0.5, {scale:5, ease: Expo.easeinOut})
    .to( $(".logo2"), 0.2, {opacity: 1}, "-=0.4")
    //.to( $(".logo2"), 0.2, {scaleX:1})
}

logo();

$(".logobox").hover(function(){
  hey = !hey;
  if (hey) {
    ta.play(0);
  }
  else {
    ta.reverse();
  }
});





   function work1(){
     wa = new TimelineMax({paused:true});
     wa.to( $(".work1box"),0.3,{y:-12})
   }

   work1();

   function work2(){
     wb = new TimelineMax({paused:true});
     wb.to( $(".work2box"),0.3,{y:-12})
   }

   work2();

   function work3(){
     wc = new TimelineMax({paused:true});
     wc.to( $(".work3box"),0.3,{y:-12})
   }

   work3();

   function work4(){
     wd = new TimelineMax({paused:true});
     wd.to( $(".work4box"),0.3,{y:-12})
   }

   work4();



//(".about").on("click",function(){
//  tb.play(0);


//});

//$(".home").on("click",function(){
//  tb.reverse();

//});

$(".work1viewmore").click(function(){
  $(".portfoliopage1").css('right',0);
  $(".moveback1").css('left',20+'%');
  $(".portfoliocontent").css('right',105+'%');
});

$(".moveback1").click(function(){
  $(".portfoliopage1").css('right',-105+'%');
  $(".moveback1").css('left',120+'%');
  $(".portfoliocontent").css('right',5+'%');
});


$(".work2viewmore").click(function(){
  $(".portfoliopage2").css('right',0);
  $(".moveback2").css('left',20+'%');
  $(".portfoliocontent").css('right',105+'%');
});

$(".moveback2").click(function(){
  $(".portfoliopage2").css('right',-105+'%');
  $(".moveback2").css('left',120+'%');
  $(".portfoliocontent").css('right',5+'%');
});


$(".work3viewmore").click(function(){
  $(".portfoliopage3").css('right',0);
  $(".moveback3").css('left',20+'%');
  $(".portfoliocontent").css('right',105+'%');
});

$(".moveback3").click(function(){
  $(".portfoliopage3").css('right',-105+'%');
  $(".moveback3").css('left',120+'%');
  $(".portfoliocontent").css('right',5+'%');
});


$(".work4viewmore").click(function(){
  $(".portfoliopage4").css('right',0);
  $(".portfoliopage4").css('position','absolute');
  $(".moveback4").css('left',20+'%');
  $(".portfoliocontent").css('right',105+'%');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});

$(".moveback4").click(function(){
  $(".portfoliopage4").css('right',-105+'%');
  $(".portfoliopage4").css('position','fixed');
  $(".moveback4").css('left',120+'%');
  $(".portfoliocontent").css('right',5+'%');
});


var portfoliohover1 =false;
var portfoliohover2 =false;
var portfoliohover3 =false;
var portfoliohover4 =false;

$(".work1box").hover(function(){
  portfoliohover1=!portfoliohover1;
  if(portfoliohover1){

  $(".work1textbox").css('height',160+'px');
  $(".work1viewmore").css('opacity',1);
  $(".work1infor").css('top',30+'px');
  $(".work1img img").css('transform','scale(1.1)');
  $(".work1img").css('opacity',0.7);

}
  else{

  $(".work1textbox").css('height',80+'px');
  $(".work1viewmore").css('opacity',0);
  $(".work1infor").css('top',40+'px');
  $(".work1img img").css('transform','scale(1)');
  $(".work1img").css('opacity',1);
  }
});

$(".work2box").hover(function(){
  portfoliohover2=!portfoliohover2;
  if(portfoliohover2){

  $(".work2textbox").css('height',160+'px');
  $(".work2viewmore").css('opacity',1);
  $(".work2img img").css('transform','scale(1.1)');
  $(".work2img").css('opacity',0.7);

}
  else{

  $(".work2textbox").css('height',80+'px');
  $(".work2viewmore").css('opacity',0);
  $(".work2img img").css('transform','scale(1)');
  $(".work2img").css('opacity',1);

  }
});

$(".work3box").hover(function(){
  portfoliohover3=!portfoliohover3;
  if(portfoliohover3){

  $(".work3textbox").css('height',160+'px');
  $(".work3viewmore").css('opacity',1);
  $(".work3img img").css('transform','scale(1.1)');
  $('.work3img').css('opacity',0.7);

}
  else{

  $(".work3textbox").css('height',80+'px');
  $(".work3viewmore").css('opacity',0);
  $(".work3img img").css('transform','scale(1)');
  $('.work3img').css('opacity',1);

  }
});

$(".work4box").hover(function(){
  portfoliohover4=!portfoliohover4;
  if(portfoliohover4){

  $(".work4textbox").css('height',160+'px');
  $(".work4viewmore").css('opacity',1);
  $(".work4img img").css('transform','scale(1.1)');
  $('.work4img').css('opacity',0.7);


}
  else{

  $(".work4textbox").css('height',80+'px');
  $(".work4viewmore").css('opacity',0);
  $(".work4img img").css('transform','scale(1)');
  $('.work4img').css('opacity',1);

  }
});
