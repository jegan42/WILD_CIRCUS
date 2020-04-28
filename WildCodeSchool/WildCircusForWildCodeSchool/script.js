function show_hide(value_id) 
{
  var test = document.getElementById(value_id).style.display;
	if (test == "block") 
	{
		document.getElementById(value_id).style.display = "none";
		document.getElementById("First-title").style.display = "block";
	}
	else if (value_id == "Performances"){
		document.getElementById("Performances").style.display = "block";
		document.getElementById("AboutUs").style.display = "none";
		document.getElementById("Prices").style.display = "none";
		document.getElementById("Contact").style.display = "none";
		document.getElementById("First-title").style.display = "none";
		
	}
	else if (value_id == "AboutUs"){
		
		document.getElementById("Performances").style.display = "none";
		document.getElementById("AboutUs").style.display = "block";
		document.getElementById("Prices").style.display = "none";
		document.getElementById("Contact").style.display = "none";
		document.getElementById("First-title").style.display = "none";
	}
	else if (value_id == "Prices"){
		
		document.getElementById("Performances").style.display = "none";
		document.getElementById("AboutUs").style.display = "none";
		document.getElementById("Prices").style.display = "block";
		document.getElementById("Contact").style.display = "none";
		document.getElementById("First-title").style.display = "none";
	}
	else if (value_id == "Contact"){
		
		document.getElementById("Performances").style.display = "none";
		document.getElementById("AboutUs").style.display = "none";
		document.getElementById("Prices").style.display = "none";
		document.getElementById("Contact").style.display = "block";
		document.getElementById("First-title").style.display = "none";
	}
	if (value_id == "First-title"){
		document.getElementById("Performances").style.display = "none";
		document.getElementById("AboutUs").style.display = "none";
		document.getElementById("Prices").style.display = "none";
		document.getElementById("Contact").style.display = "none";
		document.getElementById("First-title").style.display = "block";
		
	}
  // window.top.window.scrollTo(0,0)
//   var ancre = $(this).attr("href");
//     $("html, body").animate({
//         scrollTop : $(ancre).offset().top
//     }, "slow");
}
function gotop()
{
  
    $("html, body").animate({
        scrollTop : $("First-title").offset().top
    }, "slow");
}