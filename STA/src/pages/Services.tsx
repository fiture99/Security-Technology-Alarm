// import React from 'react';
import '../components/style.css';

const services = [
  {
    title: 'CCTV Installation',
    icon: 'fas fa-video',
    description: 'Professional installation of CCTV systems for enhanced security.'
  },
  {
    title: 'Exchange and Domain',
    icon: 'fas fa-exchange-alt',
    description: 'Expert management of exchange and domain services.'
  },
  {
    title: 'Biometric Systems',
    icon: 'fas fa-fingerprint',
    description: 'Cutting-edge biometric systems for secure access control.'
  },
  {
    title: 'Technical Support',
    icon: 'fas fa-tools',
    description: 'Reliable technical support for all your IT needs.'
  },
  {
    title: 'Web Hosting',
    icon: 'fas fa-globe',
    description: 'Robust and reliable web hosting services.'
  },
  {
    title: 'Server Installation',
    icon: 'fa fa-server',
    description: 'Professional server installation and configuration.'
  }
];

 export function Services() {
  return (
    <div id="services" className="section">
      <h1 style={{marginTop:'60px',}}>Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <i className={`${service.icon} fa-3x mb-3`} aria-hidden="true"></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="section-separator" />

    </div>
  );
};

export default Services;
