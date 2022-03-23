// showing and hiding text on mouse-over 
$ (document).ready(function(){
    $(".local2").mouseover(function(){
        $(".h3").show();
      });

      $(".local2").mouseout(function(){
        $(".h3").hide();
      });


});