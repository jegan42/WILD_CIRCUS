<?php
	// session_start();
	// $_SESSION["id_session"] = "name_session";
	// setcookie("id_cookie", "name_cookie", time() + 60*60*24);
	// init contact var

	$contactData = array("fname" => "", "lname" => "", "email" => "", "phone" => "", "message" => "", "fnameError" => "", "lnameError" => "", "emailError" => "", "phoneError" => "", "messageError" => "", "messSend" => false);

	// $fname = $lname = $email = $phone = $message = "";
	// $fnameError = $lnameError = $emailError = $phoneError = $messageError = "";
	// $messSend = false;

	$emailTo = "aznchristophe@gmail.com";

	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
		$contactData["fname"] = verifInput($_POST["fname"]);
		$contactData["lname"] = verifInput($_POST["lname"]);
		$contactData["email"] = verifInput($_POST["email"]);
		$contactData["phone"] = verifInput($_POST["phone"]);
		$contactData["message"] = verifInput($_POST["message"]);
		$contactData["messSend"] = true;
		$emailMess = "";


		if(empty($contactData["fname"]))
		{
			$contactData["fnameError"] = "Required your First Name !";
			$contactData["messSend"] = false;
		}
		else
		{
			$emailMess .= "fname: ".$contactData["fname"]."\n";
		}
		if(empty($contactData["lname"]))
		{
			$contactData["lnameError"] = "Required your Last Name !";
			$contactData["messSend"] = false;
		}
		else
		{
			$emailMess .= "lname: {$contactData['lname']}\n";
		}
		if(!isEmail($contactData["email"]))
		{
			$contactData["emailError"] = "Invalid Email !";
			$contactData["messSend"] = false;
		}
		else
		{
			$emailMess .= "email: {$contactData['email']}\n";
		}
		if(!isPhone($contactData["phone"]))
		{
			$contactData["phoneError"] = "Only Number !";
			$contactData["messSend"] = false;
		}
		else
		{
			$emailMess .= "phone: {$contactData['phone']}\n";
		}
		if(empty($contactData["message"]))
		{
			$contactData["messageError"] = "Required your Message !";
			$contactData["messSend"] = false;
		}
		else
		{
			$emailMess .= "message: {$contactData['message']}\n";
		}
		if($contactData["messSend"])
		{
			$emailHeaders = "From: {$contactData['fname']} {$contactData['lname']} <{$contactData['email']}>\r\nReply-To: {$contactData['email']}";
			mail($emailTo, "Message from website", $contactData["messSend"], $emailHeaders);
			// $fname = $lname = $email = $phone = $message = "";

		}
		echo json_encode($contactData);

	}
	function verifInput($input){
		return htmlspecialchars(stripslashes(trim($input)));
	}
	function isEmail($input){
		return filter_var($input, FILTER_VALIDATE_EMAIL);
	}
	function isPhone($input){
		return preg_match("/^[0-9 ]*$/", $input);
	}
?>