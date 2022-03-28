var asideContainer = null;
var panelOpen = null;
var panelClose = null;
var detailSideOpen = null;
var asideSideOpen = null;
var oldval = null;

$(document).ready(function(){
    init();
    panelControl(asideContainer, panelOpen, detailSideOpen, panelClose, asideSideOpen);
    selfClose();
    customizeInput();
    
    etcFAQsAccordion();
    shoppingBagOpen();

    contactUs();
    deliveryBtn();
    detailAdd();

    heartBtn();

    
    listImgUp(ringList, ringName);
    listImgUp(braceletList, braceletName);
    listImgUp(necklaceList, necklaceName);
    listImgUp(earringList, earringName);
    listImgUp(watchList, watchName);


    // mobileFooterAccordion();
    mobileHamburger();



    mobileProductDetail();

    scrollHeaderBG();


    mobileEtcSideBar();

    loginProcess();
    
});



function init(){
    asideContainer = $(".asideContainer");
    detailSideOpen = $('.detail > div').children('.sideOpen');
    asideSideOpen = $('.sideBar').find('.sideOpen');
    panelOpen = $('.status').children(".sideOpen");
    panelClose = $(".sideClose");
    ringList = $(".ring ul > li");
    ringName = "list_ring";
    braceletList = $(".bracelet ul > li");
    braceletName = "list_bracelet";
    necklaceList = $(".necklace ul > li");
    necklaceName = "list_necklace";
    earringList = $(".earring ul > li");
    earringName = "list_earring";
    watchList = $(".watch ul > li");
    watchName = "list_watch";
}

function panelControl(asideContainer, panelOpen, detailSideOpen, panelClose, asideSideOpen){
    var currentPanel;
    $(panelOpen).click(function(){
        currentPanel = '#' + $(this).attr('data-popName');
        $(asideContainer).addClass("active");
        $(currentPanel).addClass("active");
    });
    $(panelClose).click(function(){
        $(currentPanel).removeClass('active');
        $(asideContainer).removeClass("active");
    });
    $(detailSideOpen).click(function(){
        currentPanel = '#' + $(this).attr('data-popName');
        $(currentPanel).addClass("active");
    });

    $(asideSideOpen).click(function(){
        currentPanel = '#' + $(this).attr('data-popName');
        $(currentPanel).addClass("active");
    })

}
function selfClose(){
    $('.selfDeactive').click(function(){
        var deactiveTarget = $(this).parents('aside');
        var getID = '#'+ deactiveTarget.attr('id');
        $(getID).removeClass('active');
        // console.log(getID);
    });
}
function customizeInput(){
    $(".customInput").change(function(){
        if($(this).val()){
            $(this).parent(".inputList").addClass('active');
        }else if(!$(this).val()){
            $(this).parent(".inputList").removeClass('active');
        }
    });
};




function contactUs(){
    $('.etcContactUs').find('textarea').change(function(){
        if($(this).val()){
            $(this).parents('fieldset').children('.btnContactUs').addClass('active');
        }else if(!$(this).val()){
            $(this).parents('fieldset').children('.btnContactUs').removeClass('active');
        }
    })
}

function deliveryBtn(){
    $('#checkoutContainer').find('#phoneNumb').change(function(){
        if($(this).val()){
            $(this).parents('fieldset').children('.compelete').addClass('active');
        }else if(!$(this).val()){
            $(this).parents('fieldset').children('.compelete').removeClass('active');
        }
    })
}




function etcFAQsAccordion(){
    $('#accordionContainer li > h4').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('p,span,ol').slideToggle('fast');
        $(this).parent().siblings('li').children('p,span,ol').slideUp('fast')
            .parent('li').find('h4').removeClass('active');
        return false;
        
    })
}





function shoppingBagOpen(){
    var leftBoxOpen = $('#shoppingBag').find('.btnCheckOut');
    var leftBox = $('#checkoutContainer');
    $(leftBoxOpen).click(function(){
        $(leftBoxOpen).addClass('transparent');
        $(leftBox).addClass('active');
    })
}




function detailAdd(){
    $('.detailAddBtn').click(function(){
        $('.asideContainer').addClass('active');
        $('#shoppingBag').addClass('active');
    })
}




function listImgUp(target,listName){
    for (let i = 0; i <= target.length; i++) {
        var currentList = target.eq(i);
        var imageUrl ="images/" +  listName + (i+1) + ".png";
        currentList.css("background-image",'url("' + imageUrl + '")');
    }
}
/*
    listImgUP 함수

    target에서 list 자체를 넘겨받고, listName img 파일명의 공통부를 전달받아.
    list 자체의 길이만큼 반복을 수행. 
    i = 0 일때 1번 list 를 처리.
    imageUrl = path를 완성 "images/list_ring1.png";
    eq가 i번째 대상.
    currentList = 1번 list.
    그러니까 1번list한테 css 함수로 background-image를 삽입.

    추가적으로 변수 2개만 계속 생성해내면, 무한으로 사용가능.
*/


function heartBtn(){
    var whiteHeart = $('.productPhoto').find('button');
    $(whiteHeart).click(function(){
        $(this).toggleClass('active');
    })
}



// function mobileFooterAccordion(){
//     $('footer').find('ul').hide();
//     $('footer div h3').click(function(){
//         $(this).toggleClass('active');
//         $(this).nextAll('ul').slideToggle('fast');
//         $(this).parent().siblings('div').children('ul').slideUp('fast')
//             .parent('div').find('h3').removeClass('active');
//         return false;
        
//     })
// }

function mobileHamburger(){
    var moblieMenuBtn = $('.hamburger');
    var moblieHeader = $('header');
    $(moblieMenuBtn).click(function(){
        $(moblieHeader).toggleClass('active');
    })
}



function mobileProductDetail(){
    var detailOpenBtn = $('.detailOpen');
    var productDetail = $('.detail');
    $(detailOpenBtn).click(function(){
        $(productDetail).toggleClass('active');
        $(detailOpenBtn).toggleClass('active');
        $(productDetail).slideToggle('fast');
        $(detailOpenBtn).slideDown('fast');
    })
}



function scrollHeaderBG(){
    $(window).scroll(function(){
        var navBar = $(this).scrollTop();
        var $header = $('header');
        if(navBar > 55){
            $header.addClass('scrollBG');
        }else{
            $header.removeClass('scrollBG');
        }
    })
}
// scroll Header BG


// $(function(){
//     $(window).scroll(function(){
//         var navBar = $(this).scrollTop();
//         var $header = $('header');
//         if(navBar > 55){
//             $header.addClass('scrollBG');
//         }else{
//             $header.removeClass('scrollBG');
//         }
//     })
// })


function mobileEtcSideBar(){
    var activeMenu = $('.etcSideBar > ul li');
    $(activeMenu).click(function(){
        $(this).addClass('active');
    })
}


function loginProcess(){
    var beforeLogin = $('.hold');
    var asideBG = $('.asideContainer');
    var popUpLogin = $('#login');
    $(beforeLogin).click(function(){
        alert("Please Login.");
        $(asideBG).addClass('active');
        $(popUpLogin).addClass('active');
    })
}


