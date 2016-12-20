$(document).ready(function(){
  var hoverFunc = function(id)
  {
    if( id.hasClass("active"))
      {
        return;
      }
    id.addClass("active");
    $(".isActive").removeClass("active");
    $(".isActive").removeClass("isActive");
    id.addClass("isActive");
  };
  $(".header-pills li").click(function(){
    hoverFunc($(this));
  });
  $(".container-fluid #Bio").hover(function(){   hoverFunc($("#button1"));
  });
  $(".container-fluid #projects").hover(function(){
    hoverFunc($("#button2"));
  });
  $(".container-fluid #contact").hover(function(){
    hoverFunc($("#button3"));
    });
});
