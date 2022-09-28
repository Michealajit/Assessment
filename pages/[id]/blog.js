import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const blogs = ({blog}) => {
   
  return (
    <>
  
    <main id="content" role="main">
    <div className="gradient-half-primary-v1">
        <div className="bg-img-hero-center" style={{backgroundImage: "url(assets/svg/components/bg-elements-10.svg)"}}>
            {/* <!-- Content --> */}
            <div className="container position-relative space-1 space-top-md-3 space-bottom-md-2 z-index-2">
                <div className="w-lg-80 text-center mx-auto">
                    <h1 className="display-3 font-size-md-down-5 font-weight-semi-bold text-white">{blog.title}</h1>
                </div>
                {/* <!-- SVG Shapes - Top Left --> */}
                <figure className="d-none d-sm-block position-absolute bottom-0 left-0" style={{width: "70px"}}>
                    <img src="https://accedere.io/assets/svg/flat-icons/media.svg" alt="Image Description"/>
                </figure>
                {/* <!-- End SVG Shapes - Top Left -->
                <!-- SVG Shapes - Bottom Right --> */}
                <figure className="d-none d-sm-block position-absolute top-0 right-0" style={{width: "80px"}}>
                    <img src="https://accedere.io/assets/svg/flat-icons/jet.svg" alt="Image Description"/>
                </figure>
                {/* <!-- End SVG Shapes - Bottom Right --> */}
            </div>
            {/* <!-- End Content --> */}

        </div>
    </div>
    <div className="blog-details-wrap">
        <div className="container">
            <div className="blog-details-top">
                <img src={blog.img} alt=""/>
                <div className="blog-details-content-wrap">
                    <div className="b-details-meta-wrap">
                        <div className="b-details-meta">
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i>{blog.currentdate}</li>
                                <li><i className="fa fa-user"></i>Ashwin C</li>

                            </ul>
                        </div>
                        <span>Security</span>
                    </div>
                    <h3>{blog.title}

                    </h3>
                    <p>{blog.p1}
                    </p>

                    <p>{blog.p2}</p>

                    <p><strong>{blog.s1}</strong><br/> {blog.p3}
                    </p>
                    <p>{blog.p4}
                    </p>





                    <ul>
                        <li>{blog.l1}</li>
                        <li>{blog.l2}</li>
                        <li>{blog.l3}</li>
                        <li>{blog.l4}</li>
                    </ul>
                    <p>{blog.p5}
                    </p>
                    <ul>
                        <li>{blog.l5}</li>
                        <li>{blog.l6}</li>
                        <li>{blog.l7}</li>
                        <li>{blog.l8}</li>

                        <li>{blog.l9}</li>
                        <li>{blog.l10}</li>
                        <li>{blog.l11}</li>
                    </ul>
                    <p><strong>{blog.s2}</strong><br/>{blog.p6}
                    </p>






                    <p><strong>{blog.s3}</strong><br/>{blog.p7}

                    </p>
                    <ul>
                        <li>{blog.l12}</li>
                        <li>{blog.l13}</li>
                        <li>{blog.l14}</li>
                        <li>{blog.l15}</li>
                    </ul>
                    <p>{blog.p8}
                    </p>

                    <p><strong>{blog.s4}</strong><br/> {blog.p9}

                    </p>
                    <p><strong>{blog.s5}</strong><br/>{blog.p10}


                    </p>
                    <p>The author of the blog is Ashwin Chaudhary an MBA &amp; CPA with certifications such as CIPT, CISSP, CCSK, CISA, CISM, CRISC, CGEIT, ISO27001LA, ITIL, PMP etc.
                    </p>
                </div>
            </div>
        </div>



    </div>

</main>

</>
  )
}

blogs.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://assessment-ny3b-f358af8nt-michealajit.vercel.app/api/blog/${id}`);
    const { data } = await res.json();
    const {inputs} =data

    return { blog: inputs }
}


export default blogs;