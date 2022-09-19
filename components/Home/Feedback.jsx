import React from 'react'
import Image from 'next/image'
import jio from '../../public/images/client-logo/Reliance_Jio_Logo.png'
import cisco from '../../public/images/client-logo/cisco.png'
import ey from '../../public/images/client-logo/ey.png'
import controlmap from '../../public/images/client-logo/controlmap.png'



export const Feedback = () => {
  return (
    <>
    <hr className="my-0"/>
    <div className="container mb-9">
        <h2 className="text-primary text-center mb-6 mt-9"> <span className="font-weight-semi-bold">Our Happy Customers</span></h2>
        <div   class="row client-logo mb-4"
      >
            <div  className="col-lg-3 col-sm-6">
                <Image  objectFit="contain" src={jio} alt="jio"/>
            </div>
            <div className="col-lg-3 col-sm-6">
                <Image  objectFit="contain" src={cisco} alt="cisco"/>
            </div>
            <div className="col-lg-3 col-sm-6">
                <Image  src={ey} alt="ey" layout="fill" objectFit="contain"/>
            </div>
            <div className="col-lg-3 col-sm-6">
                <Image  src={controlmap} alt="controlmap"  objectFit="contain"/>
            </div>
        </div>

        <div className="text-center">
            <a className="btn btn-sm btn-primary btn-wide transition-3d-hover" href="about.html#client">More Customers <span className="fas fa-angle-right ml-2"></span></a>
        </div>
    </div>
    </>
  )
}
