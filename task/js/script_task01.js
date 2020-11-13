$(function(){

    let windowH
    let documentH 
    let documentW 
    let scrollTop
    let separate
    let scrollRatio
  
    $(window).on("scroll resize load",function(){
      windowH = $(this).height()
      documentH = $(document).height()
      documentW = $(document).width()
      scrollTop = $(this).scrollTop()
      scrollRatio = scrollTop/(documentH-windowH)
      
      separate = documentH / 10;
  
      if(scrollTop < separate){
        $("body").removeClass().addClass("one")
      }else if(scrollTop < separate * 3){
        $("body").removeClass().addClass("two")
      }else if(scrollTop < separate * 5){
        $("body").removeClass().addClass("three")
      }else if(scrollTop < separate * 7){
        $("body").removeClass().addClass("four")
      }else{
        $("body").removeClass().addClass("five")
      }
  
      console.log(windowH,documentH,scrollTop)
  
    })
 
  })