import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <footer className=" space-top-1 space-top-md-2">
    <div className="container">
        <div className="border-bottom">
            <div className="row mb-7">
                <div className="col-md-4 col-lg-3 mb-7 mb-lg-0">
                    <div className="d-inline-flex align-self-start flex-column h-100">
                       
                        <Link className="d-flex align-items-center mb-3" href="/"><img width="200" src="https://accedere.io/images/logo-accedere-white.png" alt="Accedere"/></Link>
                        
                        <ul className="footer-social">

                            <li>
                                <Link href="https://www.linkedin.com/company/31540738/"><i className="fab wp-icon fa-linkedin fa-lg"></i>
                                </Link>
                            </li>



                            <li>
                                <Link href="https://www.youtube.com/channel/UC2VvHmtB5RneZ0_ai0PxGbQ"><i className="fab wp-icon fa-youtube fa-lg"></i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                    <h4 className="h6 font-weight-semi-bold">United States</h4>
                   
                    <address>
  <ul className="list-group list-group-flush list-group-borderless mb-0">
    <li className="list-group-item">999, 18th St, <br/>
      #3000, Denver, <br/>
      Colorado 80202</li>
  </ul>
  </address>
                    
                </div>
                <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                    <h4 className="h6 font-weight-semi-bold">UAE</h4>
                   
                    <address>
  <ul className="list-group list-group-flush list-group-borderless mb-0">
    <li className="list-group-item">70B, Building 280, <br/>
      KIZAD, Taweelah, <br/>
      Abu Dhabi</li>
  </ul>
  </address>
                  
                </div>
                <div className="col-md-4 col-lg-3">
                    <h4 className="h6 font-weight-semi-bold">India</h4>
                   
                    <address>
  <ul className="list-group list-group-flush list-group-borderless mb-0">
    <li className="list-group-item">Spaces Inspire Hub, Western Heights, <br/>
      J P Road 4 Bunglows, Andheri West, <br/>
      Mumbai 400053</li>
  </ul>
  </address>
                  
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center py-3">
          
            <p className="small text-white mb-0">?? 2020 | Designed By Accedere</p>
           
            
            <ul className="list-inline mb-0 footer-social">
                <li className="list-inline-item">
                    <p className="text-white mb-0"><Link className="small text-white" href="investor.html">Investor Services</Link></p>
                </li>
            </ul>
			
    <Link className="small text-white" href="/">Home</Link> | <Link className="small text-white"  href="/">SOC Compaliance 
    Software</Link> | <Link className="small text-white" href="/">ISO Certification</Link> 
    | <Link className="small text-white" href="/">Cloud Security Audit</Link> | <Link className="small text-white" href="/">Accedere.io</Link> 
    | <Link className="small text-white" href="/">SOC2 Type 2 Compliance</Link> | <Link className="small text-white" href="/">SOC 
    1 Type 2 Testing</Link> 
   
  </div>
    </div>

</footer>
   </>
  )
}

export default Footer