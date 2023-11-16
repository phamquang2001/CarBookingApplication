import React from 'react';
import './Splash.scss';
import Logo from 'app/components/Layout/Logo/Logo';
type Props = {};

const Splash = (props: Props) => {
  return (
    <div className="splash">
      <Logo />
    </div>
  );
};

export default Splash;
