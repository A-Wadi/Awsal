function createCookie(name, value, days) {
   if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
   } else var expires = "";
   document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
   var dc = document.cookie;
   var prefix = name + "=";
   var begin = dc.indexOf("; " + prefix);
   if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
   } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
         end = dc.length;
      }
   }
   return decodeURI(dc.substring(begin + prefix.length, end));
}

$(document).ready(function () {

   $(".textBlog").text(function (index, currentText) {
      return currentText.substr(0, 120) + " ...";
   });

   for (var i = 0; i < $(".titleBlog").length; i++) {
      $($(".titleBlog")[i]).text(function (index, currentText) {
         if ($($(".titleBlog")[i]).text().length >= 45) {
            return currentText.substr(0, 40) + " ...";
         }
      });
   }

   for (var ii = 0; ii < $(".textBoxBlog").length; ii++) {
      $($(".textBoxBlog")[i]).text(function (index, currentText) {
         if ($($(".textBoxBlog")[i]).text().length >= 180) {
            return currentText.substr(0, 170) + " ...";
         }
      });
   }

   $(window).resize(function () {
      $(".boxImgBlog").css("width", $(".imgBlog").width());
      $(".boxImgBlog").css("height", $(".imgBlog").height());
   });

   $(".boxImgBlog").css("width", $(".imgBlog").width());
   $(".boxImgBlog").css("height", $(".imgBlog").height());

   // 

   var soundLoader = document.getElementById("soundLoader"),
      soundLoaderDuration = soundLoader.duration,
      soundLoaderDurationCeil = Math.ceil(soundLoaderDuration),
      timeLoad = (soundLoaderDurationCeil / 12) * 1000;

   if (isNaN(timeLoad)) {
      timeLoad = 500;
   }

   var myCookie = getCookie("loading");
   if (myCookie == 'yes') {
      $('.loading').addClass('d-none');
      $('body').removeClass('overFlow');
   } else if (myCookie !== 'yes') {
      // $("body").addClass("overFlow");
      createCookie('loading', 'yes', '1');
      $(".loading").mousemove(function (event) {
         soundLoader.play();
      });
      $("#partLogo1").fadeIn(timeLoad);
      $("#partLogo2").delay(timeLoad).fadeIn(timeLoad);
      $("#partLogo2_1_").delay(timeLoad).fadeIn(timeLoad);
      $("#partLogo3").delay(timeLoad * 2).fadeIn(timeLoad);
      $("#partLogo4").delay(timeLoad * 3).fadeIn(timeLoad);
      $("#partLogo5").delay(timeLoad * 4).fadeIn(timeLoad);
      $("#partLogo6").delay(timeLoad * 5).fadeIn(timeLoad);
      $("#letter1").delay(timeLoad * 6).fadeIn(timeLoad);
      $("#letter2").delay(timeLoad * 7).fadeIn(timeLoad);
      $("#letter3").delay(timeLoad * 8).fadeIn(timeLoad);
      $("#letter4").delay(timeLoad * 9).fadeIn(timeLoad);
      $("#letter5").delay(timeLoad * 10).fadeIn(timeLoad);
      $("#shadowLogo, #shadowLetter1, #shadowLetter2, #shadowLetter3, #shadowLetter4, #shadowLetter5").delay(timeLoad * 11).fadeIn(timeLoad);
      setTimeout(function () {
         $('.loading').fadeOut(1000);
         $('body').delay(1000).removeClass('overFlow');
      }, ((timeLoad * 12) + 1000))
      console.log("sdfsf")
   }

   // 

   window.onscroll = function changeNav() {
      scrolDown();
   }

   function scrolDown() {
      var scrollPosY = window.pageYOffset | document.body.scrollTop,
         nav = document.querySelector('nav');
      if (scrollPosY > 10) {
         nav.classList.add("down");
      } else {
         nav.classList.remove("down");
      }
   }

   scrolDown();

   // 

   $("nav ul.ulParent>li").click(function () {
      $(this).find("ul.ulChild").slideToggle(300);
      $(this).find("ul.ulChild").toggleClass("active");
   })

   $(".keyMenu").click(function () {
      if ($(this).parents("nav").hasClass("open")) {
         $(this).parents("nav").removeClass("open");
         $(this).siblings(".ulParent").slideUp(300);
         $(this).removeClass("is-active");
      } else {
         $(this).parents("nav").addClass("open");
         $(this).siblings(".ulParent").slideDown(300);
         $(this).addClass("is-active");
      }
   })

   // 

   $(window).resize(function () {
      $(".colService").height($(".colService").width());
   });
   $(".colService").height($(".colService").width());

   // 

   function round(num, precision = 2) {
      var scaled = Math.round(num + "e" + precision);
      return Number(scaled + "e" + -precision);
   }

   //

   $(".tab").click(function () {
      var tabClass = $(this).attr('class');
      var tabClassList = tabClass.split(" ")
      var tabClassClick = tabClassList[1];
      var tabClassClickImg = "img-" + tabClassClick;
      if (!$(this).hasClass("active")) {
         $(".containerTabsWho").removeClass("tab1 tab2 tab3").addClass(tabClassClick);
         $(".containerWhoAwsal").removeClass("tab1 tab2 tab3").addClass(tabClassClick);
         $(this).delay(300).queue(function (x) {
            $(this).find(".desTab").slideDown(300);
            $(this).addClass("active");
            x();
         });
         $(this).delay(310).queue(function (next) {
            $(".tab.active").removeClass("active");
            $(this).addClass("active");
            $(".colTabs").find("i").removeClass("icon-minus").addClass(" icon-plus");
            $(".colTabs").find(".tab.active").find("i").removeClass("icon-plus").addClass(" icon-minus");
            console.log($(".colTabs").find("i"));
            next();
         });
         $(".tab.active").find(".desTab").slideUp(300);
         $(".img-tab").delay(1).queue(function (x) {
            $(this).hide().removeClass("active");
            $(".colImgsTab").find("." + tabClassClickImg).show().addClass("active");
            x();
         });
      }
   })

   $(".boxPersonTeam .playSound").click(function () {
      if ($(this).siblings("audio").get(0).paused) {
         $(this).siblings("audio").get(0).play();
         $(this).find(".icon-multimedia-1").hide();
         $(this).find(".icon-pause").show();
      } else {
         $(this).siblings("audio").get(0).currentTime = 0;
         $(this).siblings("audio").get(0).pause();
         $(this).find(".icon-multimedia-1").show();
         $(this).find(".icon-pause").hide();
      }
   })

   var varSampleSound;

   function sampleSound() {
      varSampleSound = setInterval(function () {
         for (var i = 0; i < $(".tools").siblings("audio").length; i++) {
            if ($(".tools").siblings("audio").get(i).paused) {
               $($(".tools").siblings("audio").get(i)).siblings(".tools").find("i.pause").hide()
               $($(".tools").siblings("audio").get(i)).siblings(".tools").find("i.play").show()
               $($(".tools").siblings("audio").get(i)).siblings(".tools").find("i.stop").hide()
            }
         }
      }, 1500)
   }

   $(".tools .play").click(function () {
      sampleSound();
      audio.pause();
      $(this).hide();
      $(this).siblings(".pause").show();
      $(this).siblings(".stop").show();
   })

   $(".tools .pause").click(function () {
      $(this).parent(".tools").siblings("audio").get(0).pause();
      $(this).hide();
      $(this).siblings(".stop").hide();
      $(this).siblings(".play").show();
      clearInterval(varSampleSound);
   })

   $(".tools .stop").click(function () {
      $(this).parent(".tools").siblings("audio").get(0).pause();
      $(this).parent(".tools").siblings("audio").get(0).currentTime = 0;
      $(this).hide();
      $(this).siblings(".pause").hide();
      $(this).siblings(".play").show();
      clearInterval(varSampleSound);
   })

});

/*
 ** Start Script Typing
 */

var i = 0,
   a = 0,
   isBackspacing = false,
   isParagraph = false;

var textArray = [
   "أوصال .. نوصل صوتك للعالم|اطلب خدمتك من أوصال الأن!",
   "أوصال .. هي خيارك الوحيد|اتصل بنا"
];

var speedForward = 100,
   speedWait = 2500,
   speedBetweenLines = 1000,
   speedBackspace = 25;

typeWriter("output", textArray);

function typeWriter(id, ar) {
   var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"),
      eParagraph = element.children("p");

   if (!isBackspacing) {
      if (i < aString.length) {
         if (aString.charAt(i) == "|") {
            isParagraph = true;
            eHeader.removeClass("cursor");
            eParagraph.addClass("cursor");
            i++;
            setTimeout(function () {
               typeWriter(id, ar);
            }, speedBetweenLines);
         } else {
            if (!isParagraph) {
               eHeader.text(eHeader.text() + aString.charAt(i));
            } else {
               eParagraph.text(eParagraph.text() + aString.charAt(i));
            }
            i++;
            setTimeout(function () {
               typeWriter(id, ar);
            }, speedForward);
         }
      } else if (i == aString.length) {
         isBackspacing = true;
         setTimeout(function () {
            typeWriter(id, ar);
         }, speedWait);
      }
   } else {
      if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
         if (eParagraph.text().length > 0) {
            eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
         } else if (eHeader.text().length > 0) {
            eParagraph.removeClass("cursor");
            eHeader.addClass("cursor");
            eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
         }
         setTimeout(function () {
            typeWriter(id, ar);
         }, speedBackspace);
      } else {
         isBackspacing = false;
         i = 0;
         isParagraph = false;
         a = (a + 1) % ar.length;
         setTimeout(function () {
            typeWriter(id, ar);
         }, 50);
      }
   }
}


$(".rowWorkCus").each(function () {
   var audio = $(this).find("audio").get(0);
   var times;
   audio.onloadedmetadata = function () {
      times = spillingTime(audio.duration);
      $(".rowWorkCus").find(".dur").text(times);
   };
});
var intervals = {};
var isAnyOnePlaying = false;
$(".rowWorkCus .play").on("click", function () {
   $(".rowWorkCus .pause").each(function () {
      $(this).click();
   });
   let id = $(this).parents(".rowWorkCus").attr("id");
   var audio = $(this).siblings("audio").get(0);
   $(this).siblings(".pause").show();
   $(this).hide();
   audio.play();
   var element = $(this);
   intervals[id] = setInterval(() => {
      var times = spillingTime(audio.currentTime);
      element.siblings(".now").text(times);
   }, 1000);
   $(".imgWorks1").addClass("active");
   $(".imgWorks2").addClass("active");
   $(".rowWorkCus").removeClass("active");
   $(this).parents(".rowWorkCus").addClass("active");
});

$(".rowWorkCus .pause").on("click", function () {
   let id = $(this).parents(".rowWorkCus").attr("id");
   audio = $(this).siblings("audio").get(0);
   $(this).siblings(".play").show();
   $(this).hide();
   audio.pause();
   clearInterval(intervals[id]);
   $(".imgWorks1").removeClass("active");
   $(".imgWorks2").removeClass("active");
   $(".rowWorkCus").removeClass("active");
});

$(".rowWorkCus .sound").on("click", function () {
   audio = $(this).siblings("audio").get(0);
   $(this).siblings(".mute").show();
   $(this).hide();
   audio.muted = true;
});

$(".rowWorkCus .mute").on("click", function () {
   audio = $(this).siblings("audio").get(0);
   $(this).siblings(".sound").show();
   $(this).hide();
   audio.muted = false;
});

function spillingTime(time) {
   var minutes = 0;
   var seconds = 0;
   if (time < 60) {
      seconds = Math.floor(time);
   } else {
      minutes = Math.floor(time / 60);
      seconds = Math.floor(time % 60);
   }
   return minutes + ":" + seconds;
}

boxesCount = $(".rowCustomers > .wrapper .boxCustomer").length;
let width = 200;
let allowBoxes = Math.floor($(window).outerWidth(true) / width);
let margin = ($("html").outerWidth(true) % width) / (allowBoxes + 2);
$(".rowCustomers > .wrapper .boxCustomer").css("position", "absolute");
$(".rowCustomers > .wrapper .boxCustomer").each(function (index) {
   let left = ((index) * width) + (margin * (index + 1));
   $(this).width(width);
   $(this).css("left", (left) + 'px');
});

if (allowBoxes < boxesCount) {
   setInterval(() => {
      $(".rowCustomers > .wrapper").animate({
         right: (width + margin) + 'px',
      }, 1000, function () {
         lastBoxStyle = $(`.rowCustomers > .wrapper > .boxCustomer`).eq(boxesCount - 1).attr("style");
         $(".rowCustomers > .wrapper .boxCustomer").each(function (index) {
            if (index != 0) {
               baseStyle = $(this).css("left");
               $(".rowCustomers > .wrapper .boxCustomer").eq(boxesCount - index).css("left", $(`.rowCustomers > .wrapper > .boxCustomer`).eq(boxesCount - index - 1).css("left"));
            }
         });
         $(`.rowCustomers > .wrapper > .boxCustomer`).eq(0).attr("style", lastBoxStyle);
         $(".rowCustomers > .wrapper").css("right", '0');
      });
   }, 3500);
}

$(".boxSample").click(function () {
   $(".imgSamplePopUp2").attr("src", "");
   $(".imgSamplePopUp2").attr("src", $(this).find(".imgSamplePopUp").attr("src"));
   $(".popUp").removeClass("none");
})

$(".exitPopUP").click(function () {
   $(".popUp").addClass("none");
})