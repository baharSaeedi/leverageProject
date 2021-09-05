$(function () {

    function isEmpty(id)
    {
        if ($("#"+id).val() == "")
        {
            $("#"+id).css("border-color","red");
            return 1;
        }
        else
        {
            $("#"+id).css("border-color","#8e8e8e");
            return 0;
        }
    }

    function isSet(id)
    {
        if ($("#"+id+" option").filter(":selected").attr("value") == 0)
        {
            $("#"+id).css("border-color","red");
            return 1;
        }
        else
        {
            $("#"+id).css("border-color","#8e8e8e");
            return 0;
        }
    }

    function validEmail(id)
    {
        var email=$("#"+id).val();
        var AtPos = email.indexOf("@");
        var lastAtPos = email.lastIndexOf("@");
        var DotPos = email.indexOf(".");
        var lastDotPos = email.lastIndexOf(".");
        if (email.length>4)
        {
            if (AtPos>1 && AtPos == lastAtPos){

                if (DotPos>0 && (lastDotPos - AtPos)>3)
                {
                    if (email.length - lastDotPos > 2)
                    {
                        $("#"+id).css("border-color","#8e8e8e");
                        return 0;
                    }
                    else
                    {
                        $("#"+id).css("border-color","red");
                        return 1;
                    }
                }
                else
                {
                    $("#"+id).css("border-color","red");
                    return 1;
                }
            }
            else
            {
                $("#"+id).css("border-color","red");
                return 1;
            }
        }
        else
        {
            $("#"+id).css("border-color","red");
            return 1;
        }
    }






    //-----------------------news letter validation------------------------------------------
    $("#news").click(function (event) {
        $("#news").addClass("effectBg");
        event.preventDefault();
        var validCount=0;

        validCount += isEmpty("newsName");
        validCount += isEmpty("newsEmail");
        validCount += validEmail("newsEmail");

        if (validCount == 0)
        {
           $(".err").delay(2000).animate({opacity:1},500,function () {
                $(this).text("Your message was sent successful. Thanks.").removeClass("text-danger").addClass("text-success");
               $("#news").removeClass("effectBg");
           })
        }
        else
        {
            $(".err").delay(2000).animate({opacity:1},500,function () {
                $(this).text("Validation errors occurred. Please confirm the fields and submit it again.").removeClass("text-success").addClass("text-danger");
                $("#news").removeClass("effectBg");
            })
        }
    })





    //-------------------------------talk about validation---------------------------------

    $("#submit1").click(function (event) {
        event.preventDefault();
        var validCount=0;

        validCount += isEmpty("email");
        validCount += validEmail("email");
        validCount += isEmpty("name");
        validCount += isEmpty("phone");

        if (validCount == 0)
        {
            $(".form1").css("transform","scale(0)");
            $(".form2").css("left","0");
            $("#line2").addClass("newBg");
            $("#circle2").addClass("newBgcircle");
            $(".Myimage").attr("src","images/about-3.jpg")
            $("#circleBox-1").css("visibility","hidden")
        }
    })

    $("#submit2").click(function (event) {
        event.preventDefault();
        $(".form2").css("left","100%").delay(500);
        $(".form1").css("transform","scale(1)");
        $("#line2").removeClass("newBg");
        $("#circle2").removeClass("newBgcircle");
        $(".Myimage").attr("src","images/about-2.jpg");
        $("#circleBox-1").css("visibility","visible")
    })


    $("#submit3").click(function (event) {
        event.preventDefault();
        var validCount=0;

        validCount += isEmpty("company");
        validCount += isEmpty("manager");
        validCount += isSet("budget");

        if (validCount == 0)
        {
            $(".form2").css("transform","scale(0)").delay(500);
            $(".form3").css("left","0");
            $("#line3").addClass("newBg");
            $("#circle3").addClass("newBgcircle");
            $(".Myimage").attr("src","images/about-4.jpg")
        }
    })



    $("#submit4").click(function (event) {
        event.preventDefault();
        $(".form3").css("left","100%").delay(500);
        $(".form2").css("transform","scale(1)");
        $("#line3").removeClass("newBg");
        $("#circle3").removeClass("newBgcircle");
        $(".Myimage").attr("src","images/about-3.jpg")
    })

    $("#submit5").click(function (event) {
        event.preventDefault();
        var validCount=0;

        validCount += isEmpty("message");

        if (validCount == 0)
        {
            $(".second").css("transform","scale(0)");
            $(".first").css("transform","scale(0)").delay(500);
            $(".parent").css("z-index","20");
            $(".resultTalk").css("left","0");
            $(".Sending").delay(2000).animate({opacity:1},2000,function () {
                $(this).css("display","none");
                $(".firstIcon").css("display","block");
                $(".sentTxt").text("Your message was sent successful. Thanks.")
            })
        }

    })

})

$("input").keydown(function (){
    $(this).css("background-color","transparent");
})














