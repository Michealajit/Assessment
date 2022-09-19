import React from 'react'

export const Services = () => {
  return (
    <>
    <section id="services" className="space-1 space-md-1">
                <div className="container">
                    
                    <div className="w-md-80 w-lg-70 text-center mx-md-auto mb-6">
                        <h2 className="text-primary"> <span className="font-weight-semi-bold"> Our Cybersecurity Services</span></h2>
                    </div>
                   
                    <div className="row">
                        <div className="services-inner">
                            <div className="servicebox">
                                <img src="images/icon/EI.png" alt="Cloud & Container Security Audits" title="Cloud & Container Security Audits" />

        <h3>Cloud Security Audit</h3>

        <p><strong>Cloud Security Audit</strong> covering VAPT for the environment,
          Micro Services, and Benchmarking against Standards.</p>
                                <a className="readmore" href="cloud-security-assessment.html">Read More</a>
                            </div>
                            <div className="servicebox">
                                <img src="images/icon/FAI.png" alt="SOC 1, SOC 2 Compliance Software, SOC 2 Certification Cost, Soc 1 Type 1, ISO/IEC 27001" title="SOC 1, SOC 2 Compliance Software, SOC 2 Certification Cost, Soc 1 Type 1" />
                                <h3>SOC 2, ISO/IEC 27001 and Cloud STAR Audits</h3>

        <p>Accedere provide help with CSA STAR Level 1 & Audits or Assessments
          for Level 2 compliance with SOC 2 Type 2 or ISO/IEC 27001 based on the
          latest CCM 4 cloud controls.</p>
                                <a className="readmore" href="soc2cloud.html">Read More</a>
                            </div>
                            <div className="servicebox">
                                <img src="images/icon/EL.png" alt="Privacy Audit Service" title="Privacy Audit Services" />
                                <h3>Data Privacy Audits</h3>

        <p>With hefty Privacy fines, our privacy compliance audit services can
          help you understand your compliance with mandates such as GDPR, CCPA,
          HIPAA, and others. We also offer <strong>SOC 2</strong> for Privacy
          or ISO 27701 Privacy Audit Certification. </p>
                                <a className="readmore" href="privacy-assessment-services.html">Read More</a>
                            </div>
                            <div className="servicebox">
                                <img src="images/icon/HC.png" alt="Cybersecurity Assessment for Critical Infrastructure" title="Cybersecurity Assessment for Critical Infrastructure" />
                                <h3>ISO/IEC Audits for Data Security,Privacy & Critical Infrastructure</h3>
                                <p>
                                ISO/IEC 27000,27701,22301,20000 Audits Critical Infrastructure Security in ICS or OT.</p>
                                <a className="readmore" href="iso-certification-services.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-0"/>
            </>
  )
}
