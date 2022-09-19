import React from 'react'

 const Header = () => {
  return (
    <div>
      <header id="header" className="u-header u-header-center-aligned-nav u-header--bg-transparent u-header--white-nav-links-md u-header--sub-menu-dark-bg-md u-header--abs-top" data-header-fix-moment="500" data-header-fix-effect="slide">
    <div className="u-header__section">
        <div id="logoAndNav" className="container">
            
            <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space">
                <div className="u-header-center-aligned-nav__col">
                    
                    <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white" href="/" aria-label="Accedere"> <img src="https://accedere.io/images/logo-accedere-white.png" alt="Accedere" /> </a>
                    
                   <button type="button" className="navbar-toggler btn u-hamburger u-hamburger--white" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar"> <span id="hamburgerTrigger" className="u-hamburger__box"> <span className="u-hamburger__inner"></span> </span> </button>
                   
                </div>
                
                <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                    <ul className="navbar-nav u-header__navbar-nav">
                        <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left"> <a id="homeMegaMenu" className="nav-link u-header__nav-link" href="/" aria-haspopup="true" aria-expanded="false">Home</a> </li>
                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut"> <a id="pagesMegaMenu" className="nav-link u-header__nav-link" href="about.html" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">About us</a> </li>
                        <li className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut"> <a id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Services</a>
                            <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{minWidth: 230 }}>
                                <li className="hs-has-sub-menu"> <a id="navLinkBlogGrid" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">AICPA SOC 1, 2, 3 Reports</a>
                                    <ul id="navSubmenuBlogGrid" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogGrid" style={{minWidth: 230 }}>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc-reporting-services.html">SOC Reporting Services</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc-1-type-2-compliance-audit.html">SOC 1 Type 2 Compliance Audit</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc-2-type-2-compliance-audit.html">SOC 2 Type 2 Compliance Audit</a></li>

                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc2cloud.html">SOC Reports for Cloud Security</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc2privacy.html">SOC Reports for Privacy</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc4cyber.html">SOC Reports for Cyber Risk</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc-supply-chain.html">SOC for Supply Chain</a></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <a id="navLinkBlogClassic" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic">Cybersecurity</a>
                                    <ul id="navSubmenuBlogClassic" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic" style={{minWidth: 230 }}>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="iot-scada.html">IoT Security</a></li>
                                        <li className=""><a id="navLinkBlogClassic1" className="nav-link u-header__sub-menu-nav-link" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic1" href="ics-nerc-cip.html">SCADA | ICS</a>
                                            {/* <!--<ul id="navSubmenuBlogClassic1" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic1" style={{minWidth: 230 }}>
    <li><a className="nav-link u-header__sub-menu-nav-link" href="ics-nerc-cip">Industrial Cybersecurity & NERC CIP</a></li>
  </ul>--> */}
                                        </li>
                                        <li className=""><a id="navLinkBlogClassic2" className="nav-link u-header__sub-menu-nav-link" href="soc.html" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic2">Security Operations</a>
                                            {/* <!--<ul id="navSubmenuBlogClassic2" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic2" style={{minWidth: 230 }}>
    <li><a className="nav-link u-header__sub-menu-nav-link" href="soc.html">SOC</a></li>
  </ul>--> */}
                                        </li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="vapt.html">Vulnerability Assessment</a></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <a id="navLinkBlogList" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">Cloud Security</a>
                                    <ul id="navSubmenuBlogList" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: 230 }}>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="cloud-security-assessment.html">Cloud Security Assessment</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc2cloud.html">SOC for Cloud Security</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc2privacy.html">SOC Reports for Privacy</a></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <a id="navLinkBlogCard8" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard8">Privacy</a>
                                    <ul id="navSubmenuBlogCard8" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: 230 }}>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="privacy-assessment-services.html">Privacy Assessment Services</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc2hipaa.html">HIPAA</a></li>
                                        <li><a className="nav-link u-header__sub-menu-nav-link" href="soc2privacy.html">SOC reports for Privacy</a></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <a id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" href="blockchain.html" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard">Blockchain Assessments</a>
                                </li>
                                <li className="hs-has-sub-menu"> <a id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" href="iso-certification-services.html" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard">ISO Certification Services</a>
                                </li>
                            </ul>
                            
                        </li>
                        <li className="hs-has-sub-menu"> <a id="navLinkBlogList7" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">Resources</a>
                            <ul id="navSubmenuBlogList7" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: 230 }}>
                                <li><a className="nav-link u-header__sub-menu-nav-link" href="white-papers-for-download.html">Download Whitepaper and other Resources</a></li>
                            </ul>
                        </li>
                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right"> <a id="demosMegaMenu" className="nav-link u-header__nav-link" href="training.html" aria-haspopup="false" aria-expanded="false">Training</a> </li>

                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right"> <a id="demosMegaMenu" className="nav-link u-header__nav-link" href="/blog" aria-haspopup="false" aria-expanded="false">Blog</a> </li>

                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right"> <a id="demosMegaMenu" className="nav-link u-header__nav-link " href="contact.html" aria-haspopup="false" aria-expanded="false">Contact</a> </li>

                    </ul>
                </div>
                
            </nav>
           
        </div>
    </div>
</header>

    </div>
  )
}

export default Header;