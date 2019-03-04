// $( ".open" ).click(function() {
//     $( ".first-part" ).addClass("hide-left");
//     $( ".second-part" ).addClass("hide-right");
//     $( ".scroll" ).removeClass("scroll");
//     $('.open').addClass('remove')
//   });
$( ".start" ).click(function() {
  $( ".start" ).fadeOut(3000)
  $( ".word" ).css( "transform", "rotate(0deg)" );
  $( ".spin" ).css( {"opacity": "1",
                      "z-index": "101"} );
  $( ".cards-container" ).css( {"display": "initial",
                                "opacity": "0" } );


  setTimeout(function(){
  $( ".cards-container" ).css( {"opacity": "1",
                                "z-index": "102"} );
    $( ".word, .spin" ).css( {"opacity": "0" ,
                              "transition": "2s"} );
  }, 8000);

})


$( ".hovering-card" ).hover(
  function() {
    let $cards = $( ".hovering-card" );
    let count = $cards.length;
    let step = 60/count;
    for (let i = 0; i < count; i++) {
      let angle = -15 + Math.floor( step*i );
      $cards.eq(i).css( "transform", "rotate("+angle+"deg)" );
    }
  }, function() {
    $( ".hovering-card" ).css( "transform", "rotate(0deg)" );
  }
);

$( ".hovering-card" ).click(
  function() {
    let $cards = $( ".hovering-card" );
    $cards.removeClass("hovering-card")
    let count = $cards.length;
    let step = 15;
    for (let i = 0; i < count; i++) {
      let angle = -20 + Math.floor( step*i );
      $cards.eq(i).css( "transform", "translateX("+angle+"vw)" );
    }
  }
);


// let numberOfItems = $( ".date-js" ).length;
// let index = 0;
// let y_scale = 0;
// let x_scale = 0;
//
// setInterval(function() {
//   index = Math.floor( 20*Math.random() );
//   y_scale =  Math.floor( 1000*Math.random() );
//   x_scale =  Math.floor( 1000*Math.random() );
//   $( ".date-js" ).eq( index ).css( "top", y_scale + "px" );
//   $( ".date-js" ).eq( index ).css( "left", x_scale + "px" );
// }, 200);
