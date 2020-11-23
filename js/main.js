var menuIcon = $(".fas.fa-bars");
var menu = $(".hamburger-menu");
var close = $(".fas.fa-times");


menuIcon.click(
  function (){
    menu.show(2000);
  }
)

close.click(
  function(){
    menu.hide(2000);
  }
)
