$(document).ready(() => {

    var timer = () => {
        //calculate date
        var now = new Date().getTime()
        var duedate = new Date('February 02, 2023 01:02:03').getTime()
        var diff = duedate - now
        var days = Math.floor(diff / (1000 * 60 * 60 * 24))
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000)

        // show text
        days < 10 ? $("#day").text('0' + days) : $("#day").text(days);
        hours < 10 ? $("#hour").text('0' + hours) : $("#hour").text(hours);
        minutes < 10 ? $("#min").text('0' + minutes) : $("#min").text(minutes);
        seconds < 10 ? $("#sec").text('0' + seconds) : $("#sec").text(seconds);
    }
    setInterval(timer, 1000)

    //animate timer
    var animate = () => {
        $('h1').slideDown(1100, () => {
            $("#timedy").show(1000, () => {
                $("#timehr").show(1000, () => {
                    $("#timemin").show(1000, () => {
                        $("#timesec").show(1000, () => {
                            $("#email").slideDown(1000, () => { $("#notify").show() })

                        })
                    })
                })
            })
        })

    }
    animate();



    //email verification
    $('#notify').on('click', () => {
        var email = $('#email').val()
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email == '') {
            $(".error").css({ 'color': '#E74C3C' })
                .text('Please Enter your Email Address')

            $("#email").css({
                'border-left': '2px solid red',
                'border-top': '2px solid red',
                'border-bottom': '2px solid red'
            })
        }
        else if (!emailReg.test(email)) {
            $(".error").css({ 'color': '#E74C3C' })
                .text('Your Email Address is not valid')
            $("#email").css({
                'border-left': '2px solid red',
                'border-top': '2px solid red',
                'border-bottom': '2px solid red'
            })

        }
        else {
            $('#email').hide();
            $('#notify').hide();
            $(".error").css({ 'color': '#117864' }).text('Email successfully added')
        }
    })
})


