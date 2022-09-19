<div id="formFiveContact">
    <div id="sucessMessage" style="display: none;">Thank you For Contact Us </div>
    <div class="clearfix"></div>    
    <div class="row">
        <div class="col-12 col-sm-6">
            <div class="form-group">
                <input type="text" id="formFiveName" maxlength="50" placeholder="NAME" value="" class="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'" />
                <span id="errorformFiveName" class="error_checkbox"></span>
            </div>
        </div>
        <div class="col-12 col-sm-6">
            <div class="form-group">
                <input type="email" name="Email" id="formFiveEmail" maxlength="50" placeholder="EMAIL ADDRESS" value="" class="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" />
                <span id="formFiveEmailError" class="error_checkbox"></span>
            </div>
        </div>
        <div class="col-12 col-sm-6">
            <div class="form-group">
                <input type="text" onkeydown="return checkPhoneKey(event.key)" name="Phone" id="formFivePhone" maxlength="10" placeholder="Phone Number" class="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" />
                <span id="formFivePhoneError" class="error_checkbox"></span>
            </div>
        </div>        
        <div class="col-12 col-sm-6">
            <div class="form-group">
                <input type="text" id="formFiveSub" maxlength="50" placeholder="contact you via... (email or phone)" value=""  class="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'contact you via... (email or phone)'" />
                <span id="errorformFiveSub" class="error_checkbox"></span>
            </div>
        </div>
        <div class="col-12 col-12">
            <div class="form-group">
                <textarea placeholder="Message"  name="Message" id="formFiveMessage" maxlength="1000" class="con-form form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" ></textarea>
                <span id="errorformFiveMessage" class="error_checkbox"></span>
            </div>
        </div>
    </div>
    <div class="captch-block">
        <div class="row">
            <div class="col-6 col-md-6">
                <div class="form-group">
                    <input type="text" value="" id="formFiveStrCaptcha" readonly class="captcha form-control" />
                    
                    
                </div>
            </div>
            <div class="col-6 col-md-6">
                <div class="form-group">
                    <input type="button" value="Refresh" onclick="getRandomString()" class="captach-text form-control" />
                </div>
            </div>
            <div class="col-12 col-md-12">
                <div class="form-group">
                    <input type="text" class="con-form form-control" id="formFiveStrCheckCaptcha" placeholder="Enter captcha" name="strCheckCaptcha"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter captcha'" />
                    <span class="error_captcha"></span>
                </div>
            </div>
			<div class="col-12 col-md-12">
				<p>Before submiting form <a href="privacy-cookie-policy.php" target="_blank">click here to read Accedere Inc Website Privacy Notice & Cookie Policy</a></p>
			</div>			
            <div class="col-12 col-md-12">
                <div class="btn-site5 foo5 form-group common-btn">
                    <input type="submit" id="formFiveSubmit" name="submit" value="Send" class="form-control " />
                </div>
            </div>
            <div class="col-12 col-12 form-group">
                <div class="form-check">
                    <label class="container">
                        <span>Tick box to allow us to keep your data of our files</span>
                        <input type="checkbox" id="checkBoxAgree">
                        <span class="checkmark"></span>
                        <span class="error_captcha" id="checkboxError"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    jQuery(document).ready(function() {
    getRandomString();
    $('#formFiveSubmit').click(function() {
    var phoneFiveResult = phoneLimitCheck();
    var emailFiveResult = formFiveEmailValidation();
    var captchaFiveResult = validation();
    var nameFiveResult = formFiveNameTrim();
    var messFiveResult = formFiveMessageTrim();
    var subFiveResult = formFivesubTrim();
    var checkbox = checkBoxValidation();
    // console.log(phoneFiveResult)
    // console.log(emailFiveResult)
    // console.log(captchaFiveResult)
    // console.log(nameFiveResult)
    // console.log(messFiveResult)
    // console.log(subFiveResult)
    // console.log(checkbox)
    if (emailFiveResult && checkbox && captchaFiveResult && nameFiveResult && messFiveResult && subFiveResult && phoneFiveResult) {
    var name = $('#formFiveName').val();
    var email = $('#formFiveEmail').val();
    var Phone = $('#formFivePhone').val();
    var Subject = $('#formFiveSub').val();
    var message = $('#formFiveMessage').val();
    $.ajax({
    url: "includes/form/contactFormAjax.php",
    type: "post", //request type,
    data: {
    authentication: "formFiveDetails",
    name: name,
    email: email,
    phone: Phone,
    subject: Subject,
    message: message
    },
    success: function(result) {
    $("#sucessMessage").show();
    setTimeout(function() {
    sucessFun();
    }, 3000);
    }
    });
    }
    });
    });
    function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
    }
    function phoneLimitCheck() {
    var numberMobile = document.getElementById("formFivePhone").value;
    length = numberMobile.length;
    if (numberMobile) {
    if (length < 10) {
    $("#formFivePhoneError").html("Wrong Phone");
    return false;
    } else {
    $("#formFivePhoneError").html("");
    return true;
    }
    } else {
    $("#formFivePhoneError").html("Please enter phone number");
    return false;
    }
    }
    function sucessFun() {
    $('#formFiveName').val("");
    $('#formFiveEmail').val("");
    $('#formFivePhone').val("");
    $('#formFiveMessage').val("");
    $('#formFiveSub').val("");
    $('#formFiveStrCheckCaptcha').val("");
    $("#sucessMessage").html("");
    }
    function formFiveNameTrim() {
    var nameFive = $('#formFiveName').val();
    if (nameFive) {
    var val = $.trim(nameFive);
    if (/^[A-Za-z ]+$/.test(val)) {
    $('#errorformFiveName').val(val);
    $("#errorformFiveName").html('');
    return true;
    } else {
    $("#errorformFiveName").html('Wrong Name');
    return false;
    }
    } else {
    $("#errorformFiveName").html('Please enter name');
    return false;
    }
    }
    function formFiveMessageTrim() {
    var nameFive = $('#formFiveMessage').val();
    if (nameFive) {

    $("#errorformFiveMessage").html('');
    return true;

    } else {
    $("#errorformFiveMessage").html('Please enter message');
    return false;
    }
    }
    function formFivesubTrim() {
    var nameFive = $('#formFiveSub').val();
    if (nameFive) {
    $("#errorformFiveSub").html('');
    return true;

    } else {
    $("#errorformFiveSub").html('Please enter email or phone number');
    return false;
    }
    }
    function getRandomString() {
    var string = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 4; i++) {
    string += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    $('#formFiveStrCaptcha').val(string);
    $('#formFiveStrCaptcha-cnt').val(string);
    }
    function formFiveEmailValidation() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = $('#formFiveEmail').val();
    if (email) {
    if (reg.test(email) == false) {
    $("#formFiveEmailError").html("Wrong Email");
    return false;
    } else {
    $("#formFiveEmailError").html("");
    return true;
    }
    } else {
    $("#formFiveEmailError").html("Please enter email");
    return false;
    }
    }
    function checkBoxValidation() {
    if (jQuery('input[type="checkbox"]').prop("checked"))
    {
    $("#checkboxError").html( '' );
    return true;
    }
    else
    {
    $("#checkboxError").html( 'Please tick on checkbox' );
    return false;
    }
    }
    function validation() {
    var captchaValue = $('#formFiveStrCaptcha').val();
    var usrEnteredValue = $('#formFiveStrCheckCaptcha').val();
    if (usrEnteredValue != "") {
    if (captchaValue != usrEnteredValue) {
    $(".error_captcha").html('Please enter correct captcha');
    return false;
    } else {
    $(".error_captcha").html('');
    return true;
    }
    } else {
    $(".error_captcha").html('Please enter captcha');
    return false;
    }
    }
</script>