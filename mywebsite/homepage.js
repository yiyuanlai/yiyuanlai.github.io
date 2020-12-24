var hey = false;
var ta;
var tl;

function logo(){
  ta = new TimelineMax({paused: true});
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

var hi =false;

 function contact(){
   tl = new TimelineMax({paused: true});
   tl.to( $(".contactbox"), 0.5, {scale:7, ease: Expo.easeinOut})
 }

contact();

$(".contactbox").hover(function(){
  hi = !hi;
  if (hi) {
    tl.play(0);
  }
  else {
    tl.reverse();
  }
});


 function about(){
   tb = new TimelineMax({paused: true});
   tb.to( $(".text"),0.8, {y:100, opacity:0})
   .to( $(".wood"),1, {x:-600, opacity:0.5 },"-=0.7")
   .to( $(".sketch2"),1, {x:600}, "-=1")
   .from( $(".headshot"),1, {x:600}, "-=1" )
   .from($(".hello"),0.7, {x:400, opacity:0 },"-=0.5"   )
   .from($(".wholename"),0.7, {x:400, opacity:0 },"-=0.7"   )
   .from($(".1"),0.8, {x:400, opacity:0 },"-=0.7"   )
   .from($(".2"),0.9, {x:400, opacity:0 },"-=0.7"   )
   .from($(".3"),1, {x:400, opacity:0 },"-=0.7"   )

 }


   about();




$(".about").on("click",function(){
  tb.play(0);


});

$(".home").on("click",function(){
  tb.reverse();

});
