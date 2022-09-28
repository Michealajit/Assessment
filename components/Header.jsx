import Link from "next/link";

 const Header = () => {
  return (
    <div>
      <header id="header" className="u-header u-header-center-aligned-nav u-header--bg-transparent u-header--white-nav-links-md u-header--sub-menu-dark-bg-md u-header--abs-top" data-header-fix-moment="500" data-header-fix-effect="slide">
    <div className="u-header__section">
        <div id="logoAndNav" className="container">
            
            <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space">
                <div className="u-header-center-aligned-nav__col">
                    
                    <Link className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white" href="/" aria-label="Accedere"><img src="https://accedere.io/images/logo-accedere-white.png" alt="Accedere" /></Link>
                    
                   <button type="button" className="navbar-toggler btn u-hamburger u-hamburger--white" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar"> <span id="hamburgerTrigger" className="u-hamburger__box"> <span className="u-hamburger__inner"></span> </span> </button>
                   
                </div>
                
                <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                    <ul className="navbar-nav u-header__navbar-nav">
                        <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left"> <Link id="homeMegaMenu" className="nav-link u-header__nav-link" href="/" aria-haspopup="true" aria-expanded="false">Home</Link> </li>
                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut"> <Link id="pagesMegaMenu" className="nav-link u-header__nav-link" href="about.html" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">About us</Link> </li>
                        <li className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut"> <Link id="blogMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Services</Link>
                            <ul id="blogSubMenu" className="hs-sub-menu u-header__sub-menu" aria-labelledby="blogMegaMenu" style={{minWidth: 230 }}>
                                <li className="hs-has-sub-menu"> <Link id="navLinkBlogGrid" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">AICPA SOC 1, 2, 3 Reports</Link>
                                    <ul id="navSubmenuBlogGrid" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogGrid" style={{minWidth: 230 }}>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc-reporting-services.html">SOC Reporting Services</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc-1-type-2-compliance-audit.html">SOC 1 Type 2 Compliance Audit</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc-2-type-2-compliance-audit.html">SOC 2 Type 2 Compliance Audit</Link></li>

                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc2cloud.html">SOC Reports for Cloud Security</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc2privacy.html">SOC Reports for Privacy</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc4cyber.html">SOC Reports for Cyber Risk</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc-supply-chain.html">SOC for Supply Chain</Link></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <Link id="navLinkBlogClassic" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic">Cybersecurity</Link>
                                    <ul id="navSubmenuBlogClassic" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic" style={{minWidth: 230 }}>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="iot-scada.html">IoT Security</Link></li>
                                        <li className=""><Link id="navLinkBlogClassic1" className="nav-link u-header__sub-menu-nav-link" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic1" href="ics-nerc-cip.html">SCADA | ICS</Link>
                                            {/* <!--<ul id="navSubmenuBlogClassic1" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic1" style={{minWidth: 230 }}>
    <li><Link className="nav-link u-header__sub-menu-nav-link" href="ics-nerc-cip">Industrial Cybersecurity & NERC CIP</Link></li>
  </ul>--> */}
                                        </li>
                                        <li className=""><Link id="navLinkBlogClassic2" className="nav-link u-header__sub-menu-nav-link" href="soc.html" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic2">Security Operations</Link>
                                            {/* <!--<ul id="navSubmenuBlogClassic2" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogClassic2" style={{minWidth: 230 }}>
    <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc.html">SOC</Link></li>
  </ul>--> */}
                                        </li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="vapt.html">Vulnerability Assessment</Link></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <Link id="navLinkBlogList" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">Cloud Security</Link>
                                    <ul id="navSubmenuBlogList" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: 230 }}>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="cloud-security-assessment.html">Cloud Security Assessment</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc2cloud.html">SOC for Cloud Security</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc2privacy.html">SOC Reports for Privacy</Link></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <Link id="navLinkBlogCard8" className="nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" href="#" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard8">Privacy</Link>
                                    <ul id="navSubmenuBlogCard8" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: 230 }}>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="privacy-assessment-services.html">Privacy Assessment Services</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc2hipaa.html">HIPAA</Link></li>
                                        <li><Link className="nav-link u-header__sub-menu-nav-link" href="soc2privacy.html">SOC reports for Privacy</Link></li>
                                    </ul>
                                </li>
                                <li className="hs-has-sub-menu"> <Link id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" href="blockchain.html" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard">Blockchain Assessments</Link>
                                </li>
                                <li className="hs-has-sub-menu"> <Link id="navLinkBlogCard" className="nav-link u-header__sub-menu-nav-link" href="iso-certification-services.html" aria-haspopup="false" aria-expanded="false" aria-controls="navSubmenuBlogCard">ISO Certification Services</Link>
                                </li>
                            </ul>
                            
                        </li>
                        <li className="hs-has-sub-menu"> <Link id="navLinkBlogList7" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList">Resources</Link>
                            <ul id="navSubmenuBlogList7" className="hs-sub-menu u-header__sub-menu" aria-labelledby="navLinkBlogList" style={{minWidth: 230 }}>
                                <li><Link className="nav-link u-header__sub-menu-nav-link" href="white-papers-for-download.html">Download Whitepaper and other Resources</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right"> <Link id="demosMegaMenu" className="nav-link u-header__nav-link" href="training.html" aria-haspopup="false" aria-expanded="false">Training</Link> </li>

                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right"> <Link id="demosMegaMenu" className="nav-link u-header__nav-link" href="/blog" aria-haspopup="false" aria-expanded="false">Blog</Link> </li>

                        <li className="nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-max-width="600px" data-position="right"> <Link id="demosMegaMenu" className="nav-link u-header__nav-link " href="contact.html" aria-haspopup="false" aria-expanded="false">Contact</Link> </li>

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