/*!2015-06-09-06:42:04 */
var screenHeight = $(window).height();
var pageNumber = 0;
var currentDistance = 0;
var contentList = $(".content-list");
var tmpEndY, tmpStartY, showTheLast = 0;
function showElement() {
    switch (pageNumber) {
        case 0:
            setTimeout(function() {
                $(".p1__cloud_2").addClass("riseUp")
            }, 500);
            setTimeout(function() {
                $(".p1__cloud_1").addClass("riseUp");
                $(".p1__t_1").addClass("riseUp");
             }, 700);
            setTimeout(function() {
                $(".p1__t_2").addClass("riseUp");
                $(".p1__t_3").addClass("riseUp");
            }, 900);
            setTimeout(function() {
                $(".p1__t_4").addClass("riseUp")
            }, 1100);
            setInterval(function() {
                $(".p1__t_3").removeClass("down").removeClass("riseUp").addClass("bigger")
            }, 2000);
            break;
        case 1:
            setTimeout(function() {
                $(".p2__cloud_2").addClass("riseUp");
            }, 500);
            setTimeout(function() {
                $(".p2__cloud_1").addClass("riseUp");
                $(".p2__t_1").addClass("riseUp");
            }, 700);
            setTimeout(function() {
                $(".p2__elder").addClass("fadeIn");
            }, 1500);
            break;
        case 2:
            setTimeout(function() {
                $(".p3__cloud_2").addClass("riseUp")
            }, 500);
            break;
        case 3:
            setTimeout(function() {
                $(".p4__smoke_3 ").addClass("smokeMove");
                $(".p4__t_1").addClass("riseUp");
            }, 500);
            setTimeout(function() {
                $(".p4__smoke_2 ").addClass("smokeMove");
                $(".p4__t_2").addClass("riseUp");
            }, 700);
            setTimeout(function() {
                $(".p4__smoke ").addClass("smokeMove");
                $(".p4__t_3").addClass("riseUp");
            }, 900);
            break;
        case 4:
            setTimeout(function() {
                $(".p5__t_1").addClass("riseUp")
            }, 500);
            setTimeout(function() {
                $(".p5__t_2").addClass("riseUp")
            }, 700);
            setTimeout(function() {
                $(".p5__t_3").addClass("riseUp")
            }, 900);
            setTimeout(function() {
                $(".p5__father").addClass("fadeIn")
            }, 1500);
            setTimeout(function() {
                $(".p5__petal").addClass("eleCircle")
            }, 2000);
            break;
        case 5:
            setTimeout(function() {
                $(".p6__t_1").addClass("riseUp")
            }, 500);
            setTimeout(function() {
                $(".p6__t_2").addClass("riseUp")
            }, 700);
            setTimeout(function() {
                $(".p6__t_3").addClass("riseUp")
            }, 900);
            setTimeout(function() {
                $(".p6__fire").addClass("fadeIn")
                $(".p6__food").addClass("fadeIn")
            }, 1500);
            break;
        case 6:
            setTimeout(function() {
                $(".p7__t_1").addClass("riseUp")
            }, 500);
            setTimeout(function() {
                $(".p7__t_2").addClass("riseUp")
            }, 700);
            setTimeout(function() {
                $(".p7__opera").addClass("fadeIn")
                $(".p7__friends").addClass("fadeIn")
                $(".p7__dialogue").addClass("fadeIn")
            }, 1200);
            setTimeout(function() {
                $(".p7__speak_1").addClass("bubble_show")
            }, 2000);
            setTimeout(function() {
                $(".p7__speak_2").addClass("bubble_show")
            }, 2800);
            setTimeout(function() {
                $(".p7__speak_3").addClass("bubble_show")
            }, 3600);
            setTimeout(function() {
                $(".p7__t_1").removeClass("up").removeClass("riseUp").addClass("fadeOut")
                $(".p7__t_2").removeClass("up").removeClass("riseUp").addClass("fadeOut")
                $(".p7__opera").removeClass("fadeIn")
                $(".p7__friends").removeClass("fadeIn")
                $(".p7__dialogue").removeClass("fadeIn")
                $(".p7__opera").addClass("fadeOut")
                $(".p7__friends").addClass("fadeOut")
                $(".p7__dialogue").addClass("fadeOut")
            }, 5600);
            setTimeout(function() {
                $(".p7__t_3").addClass("riseUp")
            }, 6100);
            break;
        case 7:
            setTimeout(function() {
                $(".p8__t_1").addClass("riseUp")
            }, 500);
            setTimeout(function() {
                $(".p8__t_2").addClass("riseUp")
            }, 700);
            setTimeout(function() {
                $(".p8__grandparent").addClass("fadeIn")
            }, 900);
            setTimeout(function() {
                $(".p8__cloud_2").addClass("riseUp")
                $(".p8__dialogue").addClass("fadeIn")
            }, 1400);
            setTimeout(function() {
                $(".p8__speak_1").addClass("bubble_show")
            }, 2200);
            setTimeout(function() {
                $(".p8__speak_2").addClass("bubble_show")
            }, 3000);
            setTimeout(function() {
                $(".p8__speak_3").addClass("bubble_show")
            }, 3800);
            setTimeout(function() {
                $(".p8__speak_4").addClass("bubble_show")
            }, 4600);
            setTimeout(function() {
                $(".p8__speak_5").addClass("bubble_show")
            }, 5400);
            setTimeout(function() {
                $(".p8__t_1").removeClass("up").removeClass("riseUp").addClass("fadeOut")
                $(".p8__t_2").removeClass("up").removeClass("riseUp").addClass("fadeOut")
                $(".p8__cloud_2").removeClass("riseUp")
                $(".p8__grandparent").removeClass("fadeIn")
                $(".p8__dialogue").removeClass("fadeIn")
                $(".p8__cloud_2").addClass("fadeOut")
                $(".p8__grandparent").addClass("fadeOut")
                $(".p8__dialogue").addClass("fadeOut")
            }, 7400);
            setTimeout(function() {
                $(".p8__t_3").addClass("riseUp")
            }, 7600);
            break;
        case 8:
            var flag = true;
            setInterval(function() {
                $(".p9__lantern").removeClass("p9__lantern_left");
                $(".p9__lantern").removeClass("p9__lantern_right");
                if(flag){
                    flag = false;
                    $(".p9__lantern").addClass("p9__lantern_left");
                }else {
                    flag = true;
                    $(".p9__lantern").addClass("p9__lantern_right");
                }
            }, 500)
            break;
        case 9:
            setTimeout(function() {
                $(".p5__t_1").addClass("riseUp")
            }, 500),
            setTimeout(function() {
                $(".p5__t_2").addClass("riseUp")
            }, 700),
            setTimeout(function() {
                $(".p5__t_3").addClass("riseUp")
            }, 900),
            setTimeout(function() {
                $(".p5__lantern").addClass("fadeIn swing")
            }, 1600),
            setTimeout(function() {
                $(".p5__t_4").addClass("riseUp")
            }, 2500),
            setTimeout(function() {
                $(".p5__act-wrap").addClass("fadeIn"),
                $(".p5__print-wrap").on("touchstart", function() {
                    $(".p5__scanner").css("display", "none"),
                    $(".p5__scanner").removeClass("scanner"),
                    $(".p5__print").css("opacity", "1"),
                    setTimeout(function() {
                        showTheLast = 1,
                        screenForward()
                    }, 500)
                })
            }, 3500)
        }
    }
function screenBack() {
    var a, b;
    pageNumber--;
    0 > pageNumber && (pageNumber = 0);
    currentDistance = screenHeight * pageNumber;
    a = "translate3d(0, -" + currentDistance + "px, 0)";
    b = "all 0.5s ease-in";
    contentList.css({
        "-webkit-transform": a,
        transform: a,
        "-webkit-transition": b,
        transition: b
    });
    $(".notice-swipe-up").css("display", "block");
}
function screenForward() {
    var a, b;
    if(pageNumber < 9){
        pageNumber++;
        currentDistance = screenHeight * pageNumber;
        a = "translate3d(0, -" + currentDistance + "px, 0)";
        b = "all 0.5s ease-in";
        contentList.css({
            "-webkit-transform": a,
            transform: a,
            "-webkit-transition": b,
            transition: b
        });
        if(pageNumber == 9){
            $(".notice-swipe-up").css("display", "none");
        }
        showElement();
        return;
    }
}
function startTouch(a) {
    if (a.touches || (a.touches = [{
        pageX: a.pageX,
        pageY: a.pageY
    }]),
    a.touches.length) {
        tmpEndY = 0;
        var b = a.touches[0];
        tmpStartY = b.pageY
    }
}
function moveTouch(a) {
    if (a.preventDefault(),
    a.touches || (a.touches = [{
        pageX: a.pageX,
        pageY: a.pageY
    }]),
    a.touches.length) {
        var b = a.touches[0];
        tmpEndY = b.pageY
    }
}
function endTouch() {
    var a = tmpEndY;
    var b = tmpStartY;
    a && a !== b && -25 >= a - b ? screenForward() : a && a !== b && a - b >= 25 &&  screenBack();
}
setTimeout(function(){
    showElement();
}, 1000);
contentList.on("touchstart mousedown", function(a) {
    startTouch(a)
}),
contentList.on("touchmove mousemove", function(a) {
    moveTouch(a)
}),
contentList.on("touchend mouseup", function(a) {
    endTouch(a)
}),
setTimeout(function() {
    $(".notice-swipe-up").addClass("swipeMove")
}, 500);
$(".p10").on("tap", function() {
    $(".speaker").css("display", "none"),
    $(".share-mask").css({
        display: "block"
    })
});
$(".share-mask").on("tap", function() {
    $(".speaker").css("display", "block"),
    $(".share-mask").css({
        display: "none"
    })
});
$(".p9__print_wrap").on("tap click touchstart", function() {
    screenForward();
});
$(".speaker").on("click", function() {
    var a = document.querySelector("audio");
    a.paused ? ($(".speaker").removeClass("speak_closed").addClass("speak_opened"),
        a.play()) : ($(".speaker").removeClass("speak_opened").addClass("speak_closed"),
        a.pause())
});
