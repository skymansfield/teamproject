$(document).ready(function () {

    $('#signUpModal').hide();

    $('#myBtn').click(function () {
        $('#signUpModal').show();
    })

    $('.closeBtn').click(function () {
        $('#signUpModal').hide();
        // $('#donateModel').hide();
    })

    $('.closeDonate').click(function () {
        $('#donateModal').hide();
    })

    $('#item-extra').click(function () {
        $('#signUpModal').show();
    })

    $('#signUpBtn').click(function () {
        $('#signUpModal').show();
    })

    $("#donateModal").hide();

    $(".donate-btn").click(function () {
        $("#donateModal").show();
    })

    $(".donateBtn").click(function () {
        $("#donateModal").show();
    })


    let modal = document.getElementById("signUpModal");

    //close the modal when user clicks outside of it
    $(document).click(function (event) {
        if (event.target == modal) {
            $('#signUpModal').hide();
        }
    })


    let startDate = new Date("Dec 2, 2021 12:30:30").getTime();
    let timeOut = setInterval(function () {
        let now = new Date().getTime();
        let distance = startDate - now;

        let countDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        let countHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let countMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let countSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#countdown').html(countDays + "d " + countHours + "h "
            + countMinutes + "m " + countSeconds + "s ")

        if (distance < 0) {
            clearInterval(timeOut);
            $('#countdown').html('camp is in session!')
        }
    }, 1000);


})



let clock;

$('.item5').mouseenter(function () {
    console.log('something')
    clock = setInterval(myTimer, 20);
})

let thisNum = $('#campNum').text() + 450
let secNum = $('#partnerNum').text()
let thirdNum = $('#eventNum').text() + 100
// console.log(thisNum)

function myTimer(num) {
    $("#campNum").text(thisNum)
    $('#partnerNum').text(secNum)
    $('#eventNum').text(thirdNum)
    if (thisNum < 500) {
        thisNum++;
    }
    if (secNum < 50) {
        secNum++;
    }
    if (thirdNum < 150) {
        thirdNum++;
    }
}




