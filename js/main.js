let navbarOuterWidth = $("#left-nav").outerWidth()


$(".text span").click(
    function () {
        $("#left-nav").animate({ left: 0 }, 500)
        $(".text").animate({ marginLeft: navbarOuterWidth }, 500)
    }
)
$(".closebtn").click(
    function () {
        console.log("close")
        $("#left-nav").animate({ left: -navbarOuterWidth }, 500)
        $(".text").animate({ marginLeft: 0 }, 500)
    }
)


$(".heading").click(
    function () {
        $(".inner").not($(this).next()).slideUp()
        $(this).next().slideToggle()
    }
)


let countDownDate = new Date("septemper 1, 2024 23:59:59").getTime()

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);


    $(".day").html(days)
    $(".hour").html(hours)
    $(".minute").html(minutes)
    $(".second").html(seconds)
})


var number = 100;
$("textarea").keyup(function () {

    var values = $(this).val().length;
    var  diff = number - values;
    if (diff <= 0) {
        $(".span-number").text("invalid character")

    } else {
        $(".span-number").text(diff)
    }
})