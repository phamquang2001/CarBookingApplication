import React from 'react';
import './Logo.scss';
type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="Logo">
      <div className="logo1">
        <img alt="" className="imgLogo" src="./Frame1.png"></img>
      </div>
      <span>EINFARHT</span>
    </div>
  );
};

export default Logo;
