import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPen } from '@fortawesome/free-solid-svg-icons';

const blog = ({blogs}) => {
    

  return (
    
  
    <main id="content" role="main" >
    <div className="gradient-half-primary-v1">
        <div className="bg-img-hero-center"  style={{backgroundImage: "url(assets/svg/components/bg-elements-10.svg)"}} >
       
            {/* <!-- Content --> */}
            <div className="container position-relative space-1 space-top-md-3 space-bottom-md-2 z-index-2">
                <div className="w-lg-80 text-center mx-auto">
                    <h1 className="display-3 font-size-md-down-5 font-weight-semi-bold text-white">Blog</h1>
                </div>
                {/* <!-- SVG Shapes - Top Left --> */}
                <figure className="d-none d-sm-block position-absolute bottom-0 left-0" style={{width: "70px"}}>
                    <img src="assets/svg/flat-icons/media.svg" alt="Image Description"/>
                </figure>
                {/* <!-- End SVG Shapes - Top Left --> */}
                {/* <!-- SVG Shapes - Bottom Right --> */}
                <figure className="d-none d-sm-block position-absolute top-0 right-0" style={{width: "80px"}}>
                    <img src="assets/svg/flat-icons/jet.svg" alt="Image Description"/>
                </figure>
                {/* <!-- End SVG Shapes - Bottom Right --> */}
            </div>
            {/* <!-- End Content --> */}

        </div>
    </div>
    {blogs.map(blog=>{
        return(
            <div className="blog-all-wrap"  key={blog._id} >
            
        <div className="container">
       
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="single-blog mb-30">
                        <div className="blog-img">
                        <Link href={`/${blog._id}/blog`}>
                           <img style={{cursor:"pointer"}} src={blog.inputs.img} alt=""/>
                           </Link>
                           
                        </div>
                        <div className="blog-content-wrap">
                       
                            <span>Security</span>
                        
                            <div className="blog-content">
                            <Link href={`/${blog._id}/blog`}>
                                <h4 style={{cursor:"pointer"}} >{blog.inputs.title}</h4>
                                </Link>
                                <p>{blog.inputs.p1.slice(0,312)}</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>

    </div>
    
    )
        })}

    
     

</main>


  )
}

blog.getInitialProps = async () => {
    const res = await fetch('https://assessment-ny3b-f358af8nt-michealajit.vercel.app/api/blog');
    const { data } = await res.json();
 
  
    return { blogs: data }
  }

export default blog