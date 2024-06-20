import React from 'react';
import Images from '../../Images/Images';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid">
        <div className='container '>
      <a className="navbar-brand" href="#">
        <img src={Images.rost} width="100%" className="d-inline-block align-top" alt="Logo" loading="lazy" />
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
