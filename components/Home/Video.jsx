import React from 'react'



const Video = () => {
  return (
    <div className="video">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-sm-12">
                <video width="620" height="350" controls>
                    <source src="assets/video/accedere_intro.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
            </div>
            <div className="col-lg-5 col-sm-12">

<h2 className="font-weight-semi-bold text-left">SOC 1, SOC 2, SOC 3 Attest
Reports And <br/>
ISO/IEC 27000 Audits </h2>
                <ul className="highlight text-left">
                    <li className="font-weight-semi-bold">CSA Cloud STAR Empanelled Auditors</li>
                    <li className="font-weight-semi-bold">C5 Cloud Controls with SOC 2 Report</li>
                    <li className="font-weight-semi-bold">Colorado Licensed CPA Firm</li>
                    <li className="font-weight-semi-bold">PCAOB Registered Auditors</li>

<li className="font-weight-semi-bold">ISO/IEC Accredited Certification Body</li>
                    <li className="font-weight-semi-bold">Among few to provide both SOC & ISO under one brand</li>
                </ul>
            </div>
        </div>

       
        {/* <script>
            document.getElementById('myVideo').play();
        </script> */}

    </div>
</div>
  )
}

export default Video