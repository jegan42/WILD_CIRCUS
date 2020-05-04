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

function show_hide(value_id) 
{
    var test = document.getElementById(value_id).style.display;
	reset();
	if ((test == "block") || (value_id == "section0"))
	{
		document.getElementById("btn-cv").style.display = "block";
		window.top.window.scrollTo(0,0);
	}
	else if(value_id == "cv-pdf"){
		document.getElementById("btn-cv").style.display = "block";
		document.getElementById("cv-pdf").style.display = "block";
		window.top.window.scrollTo(0,0);
	}
	else{
		document.getElementById(value_id).style.display = "block";
		gotop();
	}
}
function show_hide_exp(value_id, title_id, btn_id) 
{
    var test = document.getElementById(value_id).style.display;
	reset_exp();
    if (test != "block"){

        document.getElementById(value_id).style.display = "block";
        document.getElementById(title_id).style.maxWidth = "30%";
        document.getElementById(btn_id).textContent = " Hide Info ";
    }
}
function show_hide_fort(value_id) 
{
    var test = document.getElementById(value_id).style.display;
	reset_fort();
	if ((test != "block"))
	{
		document.getElementById(value_id).style.display = "block";
	}
}
function reset() {
    reset_page();
    reset_exp();
    reset_fort();
}

function reset_page(){
    var display_id = ['btn-cv', 'cv-pdf', 'section1', 'section2', 'section3', 'section4', 'section5'];
	display_id.forEach((value_disp) => {
        document.getElementById(value_disp).style.display = "none";
	})
}
function reset_exp(){
    var display_id = ['ecole42', 'malis', 'cafe', 'tang', 'cyber', 'allsystem'];
	var display2_id = ['exp-title-ecole42', 'exp-title-malis', 'exp-title-cafe', 'exp-title-tang', 'exp-title-cyber', 'exp-title-allsystem'];
	var display3_id = ['m-info1', 'm-info2', 'm-info3', 'm-info4', 'm-info5', 'm-info6'];
	display_id.forEach((value_disp) => {
        document.getElementById(value_disp).style.display = "none";
	})
	display2_id.forEach((value_disp) => {
        document.getElementById(value_disp).style.maxWidth = "100%";
    })
	display3_id.forEach((value_disp) => {
        document.getElementById(value_disp).textContent = " More Info ";
    })
}
function reset_fort(){
    var display_id = ['fort1', 'fort2', 'fort3', 'fort4', 'fort5', 'fort6'];
	display_id.forEach((value_disp) => {
        document.getElementById(value_disp).style.display = "none";
	})
}
function gotop()
{
  
    $("html, body").animate({
        scrollTop : $("Home").offset().top
    }, "slow");
}
