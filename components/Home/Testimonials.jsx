import React from 'react'
import image from '../../public/images/bg-testimonial-new.jpg'
import styled from 'styled-components';
import ricoh from '../../public/images/ricoh.png'
import Image from 'next/image';

const backgroundImage =styled.div`
 background: linear-gradient(
      rgba(255, 255, 255, 255),
      rgba(255, 255, 255, 255)
    ),
    url(image)
      ;
` 

export const Testimonials = () => {
  return (
   
            
                   
    <section id="testimonials" className="space-1 space-md-1 pd-b-0">
    <div className="clearfix">
       
        <div className="w-md-80 w-lg-70 text-center mx-md-auto mb-6">
            <h2 className="text-primary"> <span className="font-weight-semi-bold"> Our Client Testimonials</span></h2>
        </div>
        
        <div className="bg-img-hero" style={{backgroundImage: "url(images/bg-testimonial-new.jpg)"}}>
        {/* style={{backgroundImage: url(images/bg-testimonial.jpg)}} */}
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-6 col-xl-6 space-1">
                        <div className="card shadow-sm">
                            <div className="card-body p-7">
                                <div className="js-slick-carousel  " dataAutoplay="true" dataSpeed="5000" data-pagi-classes="text-right u-slick__pagination mt-2 mb-0">
                                    
                                    <div className="js-slide">
                                        
                                        <figure className="mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 8 8" style={{enableBackground:"new 0 0 8 8"}} xmlSpace="preserve">
            <path className="fill-primary" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
              C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
              c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
              C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
          </svg>
                                        </figure>  
                                        <blockquote className="h6 font-weight-normal text-lh-md mb-4">Accedere is conducting SOC-2 Audit for Ricoh Data Centres and Cloud Services since last 3 years. Audit done by your team were always completed in a timely & professional manner.<br/> Subsequent informal
                                            discussions with your good self & knowledge sharing sessions on Network- Security domain with the teams on regular intervals are appreciable. <br/>It’s great to have business association with Accedere 
                                            </blockquote>
                                       

                                        <div className="media">
                                            <div className="u-avatar u-lg-avatar mr-3">
                                            <Image className="img-fluid" src={ricoh} alt="Accedere"/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                   

                                   
                                    {/* <div className="js-slide">
                                       
                                        <figure className="mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 8 8" style={{enableBackground:"new 0 0 8 8"}} xmlSpace="preserve">
            <path className="fill-primary" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
              C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
              c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
              C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
          </svg>
                                        </figure>
                                      

                                      
                                        <blockquote className="h6 font-weight-normal text-lh-md mb-4">We at Jio Data Center Operations, Would like thank and extend our sincere appreciation for all your devoted contributions & commitment towards our SSAE18 SOC 1 & 2 certification process. <br/>As an industry
                                            veteran along with your deep knowledge of the domain, You have made the entire process so seamless especially considering the number of functions & controls involved. You have also helped us to create
                                            integrated controls. You have been so diligent, honest and systematic in approach throughout the process. <br/>We thank you once again and look forward for sustaining partnership. Wishing you all
                                            the best!!!</blockquote>
                                      

                                        <div className="media">
                                            <div className="u-avatar u-lg-avatar mr-3">
                                                <img className="img-fluid" src="images/reliance.png" alt="Image Description"/>
                                            </div>
                                          
                                        </div>
                                    </div>
                                   */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

                
           
  )
}
