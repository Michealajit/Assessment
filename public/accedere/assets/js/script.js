function myFunction() {
	
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var e = document.getElementById("filetype");
var strUser = e.options[e.selectedIndex].value; 
var contact = document.getElementById("contact").value;
var filename = e.options[e.selectedIndex].text;
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1=' + name + '&email1=' + email + '&filetype=' + strUser + '&contact1=' + contact+ '&filename=' + filename;
if (name == '' || email == '' || strUser == '' || contact == '') {
	alert("Please Fill All Fields");
} else {
	// AJAX code to submit form.
	$.ajax({
		type: "POST",
		url: "download.php",
		dataType:'json',
		data: dataString,
		cache: false,
		success: function(html) {
			//console.log(html);
			
				var link = document.createElement('a');
						link.href = html.file;				
						link.download = filename+'.pdf';		
						link.dispatchEvent(new MouseEvent('click'));
		}
	});
}
return false;
}