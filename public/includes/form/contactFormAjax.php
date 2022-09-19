<?php

include('functions.php');

 //echo'<pre>'.print_r($_POST,1).'</pre>';

	$authentication = $_POST['authentication'];
	//session_start();
	/*
	* Here it will check the Post data is empty or not
	*/
if ($_POST) {
	$authentication = $_POST['authentication'];
	/*
	* Here it will check the authentication data is empty or not
	*/
	if ($authentication) {
		/*
		* Here it will check the authentication type 
		* This if will work only for the form One 
		*/

		 if ($authentication == "formFiveDetails") {
			/*
			* Here it will check the authentication type
			* This if will work only for the form Five 
			* use all variable which you are using in the form
			* rest variable you can comment, other wise it will show you blank
			* use $'your variable name' and then '=' sign then $_POST['variable name ']; which you are passing through java script.
			*				
			*/
			$name 			= $_POST['name'];
			$email 			= $_POST['email'];
			$phone 			= $_POST['phone'];
			$subject 			= $_POST['subject'];
			$messageArr		= $_POST['message'];

			$to      = 'webtest@AccedereInc.biz'; // Use your email id for the Testing, then don't forget to the remove.
			
			$message .= '<span style="display:flex; margin-left:15px;"> Hi Admin </span>';	
			$message .= '<span style="display:flex; margin-left:15px;"> Below is the user detail </span>';
			$message .= '<span style="display:flex; margin-left:15px;"> Name : '.$name.'</span>';
			$message .= '<span style="display:flex; margin-left:15px;"> Phone : '.$phone.'</span>';
			$message .= '<span style="display:flex; margin-left:15px;"> Email : '.$email.'</span>';
			$message .= '<span style="display:flex; margin-left:15px;"> Contact Via : '.$subject.'</span>';
			$message .= '<span style="display:flex; margin-left:15px;"> Message : '.$messageArr.'</span>';
			
			$top = '<p style="text-align: center; margin: 0px; padding:10px;  background:#E53939; color: white; font-size: 18px; width: 500px;">New Enquiry</p>';
			$bottom = '<p style="text-align: center; margin: 0px; padding:10px;  background:#E53939 ;color: white; font-size: 18px; width: 500px;">Thank You</p>';
			$messageFormate = '<p style="text-align: left; margin: 0px; padding:10px; background:#ebebeb ;color:#000; font-size: 16px; width: 500px;">'.$message.'</p>';
			$messageSending = $top;
			$messageSending .= $messageFormate;
			$messageSending .= $bottom;

			$headers = "Content-Type: text/html; charset=ISO-8859-1\r\n";

			mail($to,"New Enquiry", $messageSending, $headers);
			
		}		
	}
}	
?>