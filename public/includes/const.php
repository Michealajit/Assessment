<?php 
$baseUrl = $_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
$filename = basename($_SERVER['PHP_SELF']);
$filename1 = basename($filename,".php");

$pagename = "";

$callUsNow ='';
$contactUs ='<a href="contact" class="btn">Contact Us</a>';

if($pageTitle == ''){ $pageTitle = "&nbsp;"; }
if($metaDesc == ''){ $metaDesc = "&nbsp;"; }
if($metaKey == ''){ $metaKey = "&nbsp;"; }

?>

