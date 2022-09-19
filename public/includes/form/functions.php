<?php
define("sender_email", "webtest@AccedereInc.biz");
include "class.phpmailer.php"; // include the 
//function to send emails.
function sendEmail($from,$subject,$title,$body,$to,$attachment=''){
	/*echo 'from'.$from;
	echo 'subject'.$subject;
	echo 'title'.$title;
	echo 'body'.$body;
	echo 'to'.$to;*/
	//$attachment = '';
	
	$mail = new PHPMailer(); // create a new object
	
	//print_r($mail);exit;
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true; // authentication enabled
	$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = "host.ecomonfotech.biz";
	$mail->Port = 587; // or 587
	$mail->IsHTML(true);
	$mail->Username = "webtest@AccedereInc.biz";
	$mail->Password = "Eszawq@321$%";
	//$mail->SetFrom($from);
	$mail->SetFrom('webtest@AccedereInc.biz');

	//$address = "eluminous.se49@gmail.com"; // my email which I hope to receive the data inputed on the field
	$mail->AddAddress($to, $title);
	$mail->Subject = $subject;
	$mail->Body = $body;
	/*if($attachment && is_file($attachment)){
			$mail->AddAttachment($attachment);
	}*/
	
	return $mail->Send();
	
}

?>