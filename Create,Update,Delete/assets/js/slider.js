$(document).ready(function(){

    let imgs =  ($(".active").parent().children().eq(0).text());

   console.log(imgs);

  $(".right").click(rightIcon)


  function rightIcon(){

    let active = $(".active")
    
    if (active.next() == null) {

       let imgs =  $(".active").parent().children().eq(0);

       imgs.addClass("active");


        active.removeClass("active")

      
    }
    else{
 
        $(".active").next().addClass("active");
      
        $(".active").prev().removeClass("active");
    }
  }
})