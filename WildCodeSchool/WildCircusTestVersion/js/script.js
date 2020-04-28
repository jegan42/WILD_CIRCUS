 $(function(){

    $("#contact-form").submit(function(event){
        event.preventDefault();
        $(".comment").empty();
        var contactPostData = $("#contact-form").serialize();

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: contactPostData,
            dataType: "json",
            success: function(result){
                if(result.messSend)
                {
                    document.getElementById("contact-form").style.display = "none";
                    $("#contact-form")[0].reset();
                    $("#testa").append("<p class='ty'>Your message has send. Thank you for contact us.<br><a class='ret-home' href='index.php'>Return Home</a></p>");
                }
                else
                {
                    $("#fname + .comment").html(result.fnameError);
                    $("#lname + .comment").html(result.lnameError);
                    $("#email + .comment").html(result.emailError);
                    $("#phone + .comment").html(result.phoneError);
                    $("#message + .comment").html(result.messageError);
                }
            }
        });
    });
})