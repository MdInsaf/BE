import React from 'react';
import Images from '../../Images/Images';
const Banner = () => {
  
  const bannerStyle = {
    backgroundImage: `url(${Images.Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    with:'100%',
  };
  

  return (

  <div className="row">
    <div className="col">
      <div style={bannerStyle}>
        <div className="container position-relative Tamra">
          <div className="Tamara">
            <div className="row">
              <div className="col ">
                <div className="address">
                  <h1 >The Tamara</h1>
                  <p>No.22, La Providence, St. Mary’s Road, Kodaikanal, Tamil Nadu – 624101.</p>
                  <p>+91 9865488568</p>
                  <p>www.thetamara.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
 
  );
};

export default Banner;
