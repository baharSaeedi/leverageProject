$(function(){
//------------------------header jquery------------------------------
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {

        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });



    function FixedNav()
    {
            if ($("#header nav").offset().top > 50)
            {
                $("#header nav").css("background-color", "#040402");
            }
            else
            {
                $("#header nav").css("background-color", "transparent");
            }
    }
    FixedNav();

    $(".modal .close").click(function ()
    {
        $(".mainmenu").css("z-index","99999999999999999999999999999999999");
        $("#MyModal iframe").attr("src", $("#MyModal iframe").attr("src"));
    })
    $("[data-toggle='modal']").click(function () {
        $(".mainmenu").css("z-index","-1");
    })
    $("[data-target='#MyModalPic']").click(function () {
            $(".modal img").attr("src",$(this).children("img").attr("src"));

    })

    var position=580;
    $(window).scroll(function () {
        FixedNav();
        var scrollPos=$(window).scrollTop();
        if (position < scrollPos)
        {
            $(".toUp").css("visibility","hidden");
            if (pageYOffset>580 && $(window).width()>760)
            {
                $("#header nav").css("visibility","hidden");
                if ($(window).width()<1200)
                {
                    $("#header nav .collapse").css("visibility","visible");
                    $("#header .shadow").css("visibility","visible");
                }
            }
            else
            {
                $("#header nav").css("visibility","visible");
            }
        }
        else
        {
            $("#header nav").css("visibility","visible");
            if (pageYOffset < 50)
            {
                $(".toUp").css("visibility","hidden");
            }
            else
            {
                $(".toUp").css("visibility","visible");
            }
        }
        position = scrollPos;
    })



    function closeMenu()
    {
        $(".shadow").css("z-index","-111111");
        $(".shadow").css("display","none");
        $(".navbar-collapse").removeClass("show");
    }

    $(".menuBar").click(function ()
    {
        $(".shadow").css("z-index","20000000000000000");
        $(".shadow").css("display","block");
    })

    $(".menuTxt").click(function ()
    {
        closeMenu();
    })
    $("#fun").click(function ()
    {
        closeMenu();
    })
    $("#About").click(function ()
    {
        closeMenu();
    })
    $("#service").click(function ()
    {
        closeMenu();
    })



    $(document).click( function(event){

        if ( $(event.target).hasClass("colorBg") || $(event.target).parent().hasClass("colorBg"))
        {
            $("#header .ContactUS").addClass("linearBg");
        }
        else
        {
            $("#header .ContactUS").removeClass("linearBg");
        }
    });


    $(".dropdown-menu").mouseover(function (){
        $("#navbarDropdown1").css("color","#fc5130")
    })
    $(".dropdown-menu").mouseout(function (){
        $("#navbarDropdown1").css("color","#f5f5f5")
    })
})
//-----------------------------------------------slider jquery-------------------------------
$(function () {

    //-------------------------------loading elemnt---------------------------

    $(".firstImg").eq(0).delay(300).animate( { opacity:1 },100,function () {
        $(this).addClass("load");
    })

    $(".indicators ").delay(1500).animate({opacity:1},1000)



    function loadElement(NoSlide)
    {
        $(".headText").eq(NoSlide).animate( { opacity:1 },100,function () {
            $(this).addClass("load")
            $(".text-slider").eq(NoSlide).delay(500).animate({opacity:1 },500,function () {
                $(this).addClass("load")
                $(".getStart").eq(NoSlide).delay(300).animate({ opacity:1},500,function () {
                    $(".bg-1").eq(NoSlide).css("opacity",1);
                    $(".bg-2").eq(NoSlide).css("opacity",1);
                    $(this).addClass("load");

                })
            })
        })

    }
    function removeLoad(no)
    {
        for (i=0;i<3;i++)
        {
            if (i!=no)
            {
                $(".headText").eq(i).removeClass("load");
                $(".text-slider").eq(i).removeClass("load");
                $(".getStart").eq(i).removeClass("load");
                $(".bg-1").eq(i).css("opacity",0);
                $(".bg-2").eq(i).css("opacity",0);
            }
        }
    }



    //----------------------------------auto slide-------------------------------------



    sliderSelect = "#slides"
    enable=true;

    slidesWidth = $(sliderSelect).width();
    $(sliderSelect + " .sliding").eq(1).css("left",slidesWidth);
    $(sliderSelect + " .sliding").eq(2).css("left",2*slidesWidth);
    $(sliderSelect + " .sliding").eq(0).css("left",0);
    function SliderAutomatically(slideNo) {

                if (slideNo==0)
                {
                    loadElement(slideNo)
                }

               if (slideNo<2)
               {
                      if ($(sliderSelect+"> div ").eq(slideNo).hasClass("sliding"))
                      {
                          $(sliderSelect + " .sliding").eq(slideNo).delay(10000).animate({left: 0}, 500, function () {
                              removeLoad(slideNo);

                              if (slideNo==1)
                              {
                                  loadElement(slideNo)
                              }

                              $(".ind").removeClass("activeInd");
                              $(".ind").eq(slideNo).addClass("activeInd");


                              $(sliderSelect + " .sliding").eq(slideNo).delay(10000).animate({left: -1 * slidesWidth}, 500);

                                  slideNo++;
                                  SliderAutomatically(slideNo);

                          })
                      }
               }

               else
               {
                   if ($(sliderSelect+"> div ").eq(slideNo).hasClass("sliding")) {
                       $(sliderSelect + " .sliding").eq(slideNo).delay(10000).animate({left: 0}, 500, function () {

                           removeLoad(2);

                           loadElement(slideNo)

                           $(".ind").removeClass("activeInd");
                           $(".ind").eq(slideNo).addClass("activeInd");

                           $(sliderSelect + " .sliding").eq(slideNo).delay(10000).animate({left: 2*slidesWidth}, 200, function () {
                               $(sliderSelect + " .sliding").eq(slideNo - 1).animate({left: slidesWidth}, 200, function () {
                                   $(".ind").removeClass("activeInd");
                                   $(".ind").eq(0).addClass("activeInd");
                                   $(sliderSelect + " .sliding").eq(slideNo - 2).css("left", 0);

                                       slideNo = 0;
                                       SliderAutomatically(slideNo);
                               });
                           })
                       });
                   }
               }



    }
    SliderAutomatically(0);


    //--------------------------------indicator slide-------------------------------------

    $("#ind1").click(function (event)
    {
        $(sliderSelect + " .sliding").eq(1).stop(true,true);
        $(sliderSelect + " .sliding").eq(2).stop(true,true);
        removeLoad(0);
        event.stopImmediatePropagation();
        $(".ind").removeClass("activeInd");
        $(this).addClass("activeInd");
        $(sliderSelect + " .slide").eq(1).css("left" , slidesWidth);
        $(sliderSelect + " .slide").eq(2).css("left" , 2*slidesWidth);

            $(sliderSelect + " .slide").eq(0).animate({left: 0}, 200, function () {
                loadElement(0)
                SliderAutomatically(0);
            });

    })

    $("#ind2").click(function (event)
    {
        $(sliderSelect + " .sliding").eq(0).stop(true,true);
        $(sliderSelect + " .sliding").eq(2).stop(true,true);
        removeLoad(1);
        event.stopImmediatePropagation();
        $(".ind").removeClass("activeInd");
        $(this).addClass("activeInd");
        $(sliderSelect + " .slide").eq(0).css("left" , -1 * slidesWidth);
        $(sliderSelect + " .slide").eq(2).css("left" , 2*slidesWidth);

        $(sliderSelect + " .slide").eq(1).animate({left: 0}, 200, function () {
            loadElement(1)
            SliderAutomatically(1);
        });

    })

    $("#ind3").click(function (event)
    {
        $(sliderSelect + " .sliding").eq(0).stop(true,true);
        $(sliderSelect + " .sliding").eq(1).stop(true,true);
        removeLoad(2);
        event.stopImmediatePropagation();
        $(".ind").removeClass("activeInd");
        $(this).addClass("activeInd");
        $(sliderSelect + " .slide").eq(0).css("left" , -1*slidesWidth);
        $(sliderSelect + " .slide").eq(1).css("left" , -1*slidesWidth);

        $(sliderSelect + " .slide").eq(2).animate({left: 0}, 200, function () {
            loadElement(2)
            SliderAutomatically(2);
        });

    })





//    -------------------------drag slide--------------------------------

    var down=true;
    $(window).mouseup(function () {
        down=false;
    })

    $(function() {
        var sliding = startClientX = startPixelOffset = pixelOffset = currentSlide = 0;
        slideCount = $('.slide').length;

        $(".SliderContainer").not(".ind").on('mousedown touchstart', slideStart);
        $(".SliderContainer").not(".ind").on('mouseup touchend', slideEnd);
        $(".SliderContainer").not(".ind").on('mousemove touchmove', slide);


        function slideStart(event) {
            down=true;
            currentSlide=Number(event.target.id)
            if (event.originalEvent.touches)
                event = event.originalEvent.touches[0];
            if (sliding == 0) {
                sliding = 1;
                startClientX = event.clientX;
            }
        }
        function slide(event) {
            event.preventDefault();
            if (event.originalEvent.touches)
                event = event.originalEvent.touches[0];
            var deltaSlide = event.clientX - startClientX;
            if (sliding == 1 && deltaSlide != 0) {
                sliding = 2;
            }


            if (sliding == 2 && down) {
                var touchPixelRatio = 1;
                $(sliderSelect + " .sliding").stop(true,true);
                if ((currentSlide == 0 && event.clientX > startClientX)   ||
                    (currentSlide ==2 && event.clientX < startClientX))
                    touchPixelRatio = 10;
                pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
                $('#slides ').css('transform', 'translateX(' + pixelOffset + 'px');
            }
        }

        function slideEnd(event) {
            $('#slides ').css('transform', 'translateX(0)');
            if (sliding == 2)
            {

                sliding = 0;
                currentSlide=parseInt(event.target.id);


                if (pixelOffset<-300)
                {
                    if (currentSlide==0)
                    {
                        $(sliderSelect + " #0").css("left" , -1 * slidesWidth);
                        $(sliderSelect + " #2").css("left" , slidesWidth);
                        $(sliderSelect + " #1").animate({left: 0}, 300);
                        $(".ind").removeClass("activeInd");
                        $(".ind").eq(1).addClass("activeInd");
                        removeLoad(1);
                        loadElement(1)
                    }
                    else if(currentSlide==1)
                    {
                        $(sliderSelect + " #0").css("left" , -1*slidesWidth);
                        $(sliderSelect + " #1").css("left" , -1*slidesWidth);
                        $(sliderSelect + " #2").animate({left: 0}, 300);
                        $(".ind").removeClass("activeInd");
                        $(".ind").eq(2).addClass("activeInd");
                        removeLoad(2);
                        loadElement(2)


                    }
                }
                else if (pixelOffset>5)
                {
                    if (currentSlide==1)
                    {

                        $(sliderSelect + " #1").css("left" , slidesWidth);
                        $(sliderSelect + " #2").css("left" , slidesWidth);
                        $(sliderSelect + " #0").animate({left: 0}, 300);
                        $(".ind").removeClass("activeInd");
                        $(".ind").eq(0).addClass("activeInd");
                        removeLoad(0);
                        loadElement(0)

                    }
                    else if (currentSlide==2)
                    {

                        $(sliderSelect + " #0").css("left", -1 * slidesWidth);
                        $(sliderSelect + " #1").animate({left: 0}, 300);
                        $(sliderSelect + " #2").css("left", slidesWidth);
                        $(".ind").removeClass("activeInd");
                        $(".ind").eq(1).addClass("activeInd");
                        removeLoad(1);
                        loadElement(1)
                    }


                    }
                if ($(event.target).attr('class')!="ind" && pixelOffset<0)
                {
                    if (currentSlide==0)
                    {
                        SliderAutomatically(1);
                    }
                    else if (currentSlide==1)
                    {
                        SliderAutomatically(2);
                    }
                    else if (currentSlide==2)
                    {
                        SliderAutomatically(2)
                    }
                }
                else if ($(event.target).attr('class')!="ind" && pixelOffset>5 )
                {
                    if (currentSlide==0)
                    {
                        SliderAutomatically(0);
                    }
                    else if (currentSlide==1)
                    {
                        SliderAutomatically(0);
                    }
                    else if (currentSlide==2)
                    {
                        SliderAutomatically(1);
                    }
                }
                }
            }







    })



})



//------------------------------------fun facts jquery-------------------------------
function SetNo(id ,start, No , count)
{
        if (start<=No)
        {
            $(".show"+id).text(start);
            start++;
            setTimeout("SetNo('"+id+"',"+start+","+No+","+count+")",count);
        }
        else
        {
            $(id).removeClass("show");
        }
}
$(window).scroll(function () {
    if (pageYOffset > 2003)
    {
        if ($(".NoContainer .NoBox .show:first-child").text() == "")
        {
            SetNo("#No3" ,0, 745 ,2);
            SetNo("#No4" ,0, 691 ,3);
            SetNo("#No1" ,0, 342 , 6);
            SetNo("#No2" ,0, 128 , 22);
        }
        $(".NoContainer .NoBox .show:last-child").css("opacity","1").css("transform","translateY(0)");
    }
//------------------------------------services jquery--------------------------
    $(".card-1").mouseover(function () {
        $(".backDiv-1").removeClass("boxBack");
        $(".card-1").css("background","linear-gradient(to right,#e0040e,#fc5130)").css("transform","translateY(-7px)").css("border-radius","4px");
        if ($(window).width()>1200)
        {
            $(".backDiv-2").css("transform","translate(-35px,-35px)").css("opacity",".4").css("visibility","visible");
        }

    })
    $(".cardContainer").mouseout(function () {
        $(".card-1").css("background","#191919").css("transform","translateY(0)").css("border-radius","1px");
        $(".backDiv-2").css("transform","translateY(-7px,-7px)").css("opacity","0");
        $(".backDiv-1").addClass("boxBack");
    })
})



//----------------------------search box jquery--------------------------------------
$("#header .fa-search").click(function (){
    $(".serachbox").css("z-index","999999999999999999999999999999999");
    $(".search").css("transform","translateX(-100%)");
})
$(".searchClose").click(function (){
    $(".serachbox").css("z-index","-1");
    $(".search").css("transform","translateX(0)");
})





