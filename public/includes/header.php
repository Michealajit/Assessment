<!doctype html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php include 'const.php'; ?>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<title><?php echo $pageTitle;?></title>
<meta name="description" content="<?php echo $metaDesc ; ?>">
<meta name="keywords" content="<?php echo $metaKey ; ?>">
<meta name="author" content="">
<link rel="icon" href="images/favicon.ico">
<?php if($filename1 !='index' ) { $strCanonicalUrl='http://' .$_SERVER[ 'HTTP_HOST'].$_SERVER[ 'REQUEST_URI']; ?>
<link rel="canonical" href="<?php echo $strCanonicalUrl; ?>" />
<?php } ?>
<link href="http://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap" rel="stylesheet"> 
<link rel="stylesheet" href="assets/vendor/font-awesome/css/fontawesome-all.min.css">
<link rel="stylesheet" href="assets/vendor/animate.css/animate.min.css">
<link rel="stylesheet" href="assets/vendor/hs-megamenu/src/hs.megamenu.css">
<link rel="stylesheet" href="assets/vendor/fancybox/jquery.fancybox.css">
<link rel="stylesheet" href="assets/vendor/slick-carousel/slick/slick.css">
<link rel="stylesheet" href="assets/vendor/cubeportfolio/css/cubeportfolio.min.css">
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/style.css">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-150997635-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-150997635-1');
</script>
</head>
<body class="<?php if($pagename == 'home') { echo 'home'; } else { echo $pagename; } ?> <?php echo $pagename1; ?>">
  <header id="header" class="u-header u-header-center-aligned-nav u-header--bg-transparent u-header--white-nav-links-md u-header--sub-menu-dark-bg-md u-header--abs-top" data-header-fix-moment="500" data-header-fix-effect="slide">
    <div class="u-header__section">
      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="js-mega-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space">
          <div class="u-header-center-aligned-nav__col">
            <!-- Logo -->
            <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white" href="index.php" aria-label="Accedere Inc">
              <img src="images/logo-accedere.png" alt="Accedere Inc" />
            </a>
            <!-- End Logo -->
            <!-- Responsive Toggle Button -->
            <button type="button" class="navbar-toggler btn u-hamburger u-hamburger--white" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
              <span id="hamburgerTrigger" class="u-hamburger__box">
                <span class="u-hamburger__inner"></span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->
          </div>
          <!-- Navigation -->
          <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
            <ul class="navbar-nav u-header__navbar-nav">
              <li class="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left">
                <a id="homeMegaMenu" class="nav-link u-header__nav-link <?php if($pagename == 'home') { echo 'active'; } ?>" href="index.php" aria-haspopup="true" aria-expanded="false">Home</a>
              </li>
              <li class="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                <a id="pagesMegaMenu" class="nav-link u-header__nav-link <?php if($pagename == 'about') { echo 'active'; } ?>" href="about.php" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">About us</a>
              </li>
              <li class="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                <a id="blogMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Services</a>
                <ul id="blogSubMenu" class="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style="min-width: 230px;">
                  <li class="hs-has-sub-menu">
                    <a id="navLinkBlogGrid" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">AICPA SOC 1, 2, 3 Reports</a>
                    <ul id="navSubmenuBlogGrid" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogGrid" style="min-width: 230px;">
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="soc-reporting-services.php">SOC Reporting Services</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="soc2cloud.php">SOC Reports for Cloud Security</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="soc2privacy.php">SOC Reports for Privacy</a></li>
					<li><a class="nav-link u-header__sub-menu-nav-link" href="soc4cyber.php">SOC Reports for Cyber Risk</a></li>
                    </ul>
                  </li>
                  <li class="hs-has-sub-menu">
                    <a id="navLinkBlogClassic" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic">Cybersecurity</a>
                    <ul id="navSubmenuBlogClassic" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic" style="min-width: 230px;">						
						<li><a class="nav-link u-header__sub-menu-nav-link" href="iot-scada.php">IoT Security</a></li>
                      	<li class=""><a id="navLinkBlogClassic1" class="nav-link u-header__sub-menu-nav-link" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic1" href="ics-nerc-cip.php">SCADA | ICS</a>
							<!--<ul id="navSubmenuBlogClassic1" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic1" style="min-width: 230px;">
								<li><a class="nav-link u-header__sub-menu-nav-link" href="ics-nerc-cip">Industrial Cybersecurity & NERC CIP</a></li>
							</ul>-->
						</li>
						<li class=""><a id="navLinkBlogClassic2" class="nav-link u-header__sub-menu-nav-link" href="soc.php" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic2">Security Operations</a>
							<!--<ul id="navSubmenuBlogClassic2" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic2" style="min-width: 230px;">
								<li><a class="nav-link u-header__sub-menu-nav-link" href="soc.php">SOC</a></li>
							</ul>-->
						</li>
            <li><a class="nav-link u-header__sub-menu-nav-link" href="vapt.php">Vulnerability Assessment</a></li>
                    </ul>
                  </li>                  
                  <li class="hs-has-sub-menu">
                    <a id="navLinkBlogList" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">Cloud Security</a>
                    <ul id="navSubmenuBlogList" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style="min-width: 230px;">
						<li><a class="nav-link u-header__sub-menu-nav-link" href="cloud-security-assessment.php">Cloud Security Assessment</a></li> 
                      	<li><a class="nav-link u-header__sub-menu-nav-link" href="soc2cloud.php">SOC for Cloud Security</a></li>
						<li><a class="nav-link u-header__sub-menu-nav-link" href="soc2privacy.php">SOC Reports for Privacy</a></li>
                    </ul>
                  </li>                  
                  <li class="hs-has-sub-menu">
                    <a id="navLinkBlogCard" class="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard">Privacy</a>
					  <ul id="navSubmenuBlogCard" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style="min-width: 230px;">
					  <li><a class="nav-link u-header__sub-menu-nav-link" href="privacy-assessment-services.php">Privacy Assessment Services</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="soc2hipaa.php">HIPAA</a></li>
					 <li><a class="nav-link u-header__sub-menu-nav-link" href="soc2privacy.php">SOC reports for Privacy</a></li>
                    </ul>
                  </li>
				<li class="hs-has-sub-menu">
                    <a id="navLinkBlogCard" class="nav-link u-header__sub-menu-nav-link" href="blockchain.php" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard">Blockchain Assessments</a>
					  <!--<ul id="navSubmenuBlogCard" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style="min-width: 230px;">
					  <li><a class="nav-link u-header__sub-menu-nav-link" href="blockchain.php">Blockchain Audits</a></li>
                      <li><a class="nav-link u-header__sub-menu-nav-link" href="blockchain.php">Smart Contracts</a></li>
                    </ul>-->
                  </li>
                </ul>
                <!-- End Submenu -->
              </li>            
              <!--<li class="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="440px" data-position="right">
                <a id="shopMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false">Resources</a>
                <div class="hs-mega-menu u-header__sub-menu u-header__mega-menu-position-right-fix" aria-labelledby="shopMegaMenu">
                  <div class="u-header__mega-menu-wrapper">
                    <a href="white-papers-for-download.php"><span class="u-header__sub-menu-title">Download Whitepaper and other Resources</span></a>			  
                  </div>
                </div>
              </li>-->
			  <li class="hs-has-sub-menu">
                    <a id="navLinkBlogList7" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">Resources</a>
                    <ul id="navSubmenuBlogList7" class="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style="min-width: 230px;">
						<li><a class="nav-link u-header__sub-menu-nav-link" href="white-papers-for-download.php">Download Whitepaper and other Resources</a></li> 
                      	<li><a class="nav-link u-header__sub-menu-nav-link" href="videos-resources.php">Videos Resources</a></li>
                    </ul>
                  </li>
				
				
              <li class="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right">
                <a id="demosMegaMenu" class="nav-link u-header__nav-link" href="contact.php" aria-haspopup="false" aria-expanded="false">Contact</a>
              </li>
            </ul>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->