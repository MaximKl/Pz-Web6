$( function() {
    var icons = {
        header: "ui-icon-plusthick",
        activeHeader: "ui-icon-minusthick"
      };
      $( "#accordion" ).accordion({
        icons: icons,
        classes: {
            "ui-accordion" : "my_class"
        }
      });
      $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
          $( "#accordion" ).accordion( "option", "icons", null );
        } else {
          $( "#accordion" ).accordion( "option", "icons", icons );
        }
      });
  } );
  $( function() {
    $( "#menu" ).menu();
  } );

  $( function() {
    $( "#tabs" ).tabs();
  } );
  $( "#tabs" ).tabs({
    collapsible: true
  });
  $('.small a').click(function(e){
      if($('.big img').attr('src')!==$(this).attr('href')){
        $('.big img').hide().attr('src',$(this).attr('href')).fadeIn(1000);
      }
    e.preventDefault();
  });
 $('.small a img').click(function(){
    $('.small a img').fadeTo(500,1).css({});
     $(this).fadeTo(600,0.4).css({});
 });
 $(document).ready(function(){
  $('.jig').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    speed:1500
  });
});
$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );