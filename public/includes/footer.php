  <!-- ========== FOOTER ========== -->
  <footer class=" space-top-1 space-top-md-2">
    <div class="container">
    <div class="border-bottom">
      <div class="row mb-7">
        <div class="col-md-4 col-lg-4 mb-7 mb-lg-0">
          <div class="d-inline-flex align-self-start flex-column h-100">
            <!-- Logo -->
            <a class="d-flex align-items-center mb-3" href="index">
              <img src="images/logo-accedere-white.png" alt="Accedere Inc" />
            </a>
            <!-- End Logo -->
          </div>
        </div>
        <div class="col-md-4 col-lg-4 mb-4 mb-md-0">
          <h4 class="h6 font-weight-semi-bold">United States</h4>
          <!-- Address -->
          <address>
            <ul class="list-group list-group-flush list-group-borderless mb-0">
				<li class="list-group-item">999, 18th St, <br>#3000, Denver, <br>Colorado 80202</li>
              	<?php /*?><li class="list-group-item">
                	<a href="mailto:info@accedere.io"><img class="mail-img" src="images/mail-id-white.png" width="159" height="18" alt="Accedere Inc" /></a>
              	</li><?php */?>
				<!--<li class="list-group-item">Get In Touch With Us <br>
					<a class="btn btn-large btn-icon" href="https://www.linkedin.com/in/ash-ashwin-krishnakumar-b2863796/" target="_blank"><span class="fab fa-linkedin btn-icon__inner"></span></a>
				</li>-->
            </ul>
          </address>
          <!-- End Address -->
        </div>
        <div class="col-md-4 col-lg-4">
          <h4 class="h6 font-weight-semi-bold">India</h4>
          <!-- Address -->
          <address>
            <ul class="list-group list-group-flush list-group-borderless mb-0">
				<li class="list-group-item"> Level 3, Neo Vikram New Link Road, <br>Andheri West Mumbai 400058, <br>India</li>
              	<?php /*?><li class="list-group-item">
                	<a href="mailto:info@accedere.io"><img class="mail-img" src="images/mail-id-white.png" width="159" height="18" alt="Accedere Inc" /></a>
              	</li><?php */?>
            </ul>
          </address>
          <!-- End Address -->
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center py-3">
      <!-- Copyright -->
      <p class="small text-white mb-0">&copy; 2020 | Designed By Accedere Inc</p>
      <!-- End Copyright -->
      <!-- Social Networks -->
      <ul class="list-inline mb-0 footer-social">
        <!--<li class="list-inline-item">
          <a class="btn btn-sm btn-icon" href="#">
            <span class="fab fa-facebook-f btn-icon__inner"></span>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn btn-sm btn-icon" href="#">
            <span class="fab fa-google btn-icon__inner"></span>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn btn-sm btn-icon" href="#">
            <span class="fab fa-twitter btn-icon__inner"></span>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn btn-sm btn-icon" href="#">
            <span class="fab fa-github btn-icon__inner"></span>
          </a>
        </li>-->		  
		  <li class="list-inline-item">
          <a target="_blank" class="btn btn-sm btn-icon" href="https://www.linkedin.com/company/accedere-inc/">
            <span class="fab fa-linkedin btn-icon__inner"></span>
          </a>
        </li>
      </ul>
      <!-- End Social Networks -->
    </div>
  </div>
  </footer>
  <!-- ========== END FOOTER ========== -->
<?php if($pagename != 'contact') {?>
<a class="callback " href="contact.php" <?php /*?>data-toggle="modal" data-target="#ctaform"<?php */?>>Contact us</a>
<?php /*?><div id="ctaform" class="cta-form zoomIn">
     <button type="button" class="close" data-dismiss="modal">&times;</button>
     <div class="formbox">
          <h3>Request a callback <span>today!</span></h3>
          <?php include 'includes/form/form5.php'; ?>
     </div>
</div><?php */?>
<?php } ?>
  <!-- Go to Top -->
  <a class="js-go-to u-go-to" href="#"
    data-position='{"bottom": 90, "right": 30 }'
    data-type="fixed"
    data-offset-top="400"
    data-compensation="#header"
    data-show-effect="slideInUp"
    data-hide-effect="slideOutDown">
    <span class="fas fa-arrow-up u-go-to__inner"></span>
  </a>
  <!-- End Go to Top -->
  <!-- JS Global Compulsory -->
  <script src="assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
  <script src="assets/vendor/popper.js/dist/umd/popper.min.js"></script>
  <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
  <!-- JS Implementing Plugins -->
  <script src="assets/vendor/hs-megamenu/src/hs.megamenu.js"></script>
  <script src="assets/vendor/svg-injector/dist/svg-injector.min.js"></script>
  <script src="assets/vendor/fancybox/jquery.fancybox.min.js"></script>
  <script src="assets/vendor/slick-carousel/slick/slick.js"></script>
  <script src="assets/vendor/jquery-validation/dist/jquery.validate.min.js"></script>
  <script src="assets/vendor/cubeportfolio/js/jquery.cubeportfolio.min.js"></script>
  <!-- JS Front -->
  <script src="assets/js/hs.core.js"></script>
  <script src="assets/js/components/hs.header.js"></script>
  <script src="assets/js/components/hs.unfold.js"></script>
  <script src="assets/js/components/hs.fancybox.js"></script>
  <script src="assets/js/components/hs.slick-carousel.js"></script>
  <script src="assets/js/components/hs.validation.js"></script>
  <script src="assets/js/components/hs.focus-state.js"></script>
  <script src="assets/js/components/hs.cubeportfolio.js"></script>
  <script src="assets/js/components/hs.svg-injector.js"></script>
  <script src="assets/js/components/hs.go-to.js"></script>
  <script src="assets/js/script.js"></script>
<?php if($pagename = 'contact') {?>
<?php } ?>
  <!-- JS Plugins Init. -->
  <script>
    $(window).on('load', function () {
      // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      });
      // initialization of svg injector module
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
    });
    $(document).on('ready', function () {
      // initialization of header
      $.HSCore.components.HSHeader.init($('#header'));
      // initialization of unfold component
      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
      // initialization of fancybox
      $.HSCore.components.HSFancyBox.init('.js-fancybox');
      // initialization of slick carousel
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
      // initialization of form validation
      $.HSCore.components.HSValidation.init('.js-validate');
      // initialization of forms
      $.HSCore.components.HSFocusState.init();
      // initialization of cubeportfolio
      $.HSCore.components.HSCubeportfolio.init('.cbp');
      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');
    });
  </script>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e6dffc5eec7650c33201abd/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<!--Start Cookie Script-->
<script type="text/javascript" charset="UTF-8" src="http://chs03.cookie-script.com/s/0ddc6bf06d824fba8921a6be3f8e16ea.js"></script>
<!--End Cookie Script-->
</body>
</html>