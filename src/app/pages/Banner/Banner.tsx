import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Splash from '../Splash/Splash';
import './Banner.scss';
import { Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
type Props = {};

const Banner = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000);
  }, []);
  const isAuthenticated = false;
  return (
    <div className="container">
      {isLoading && <Splash />}
      {/* {isAuthenticated && <HomePage />} */}
      {!isLoading && !isAuthenticated && (
        <Suspense fallback={<Splash />}>
          <div className="Banner">
            <img alt="" src="/image1.png"></img>
            <h1>Hi, nice to meet you!</h1>
            <span>Choose your location to start find restaurants around you.</span>
            <button className="btn-use-location">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0193 22.8079V9.77548H0L22.8079 0L13.0193 22.8079Z"
                    fill="#5470F2"
                  />
                </svg>
                Use current location
              </div>
            </button>
            <Link style={{ fontSize: '22px', margin: '20px' }} to="./login">
              Select it manually
            </Link>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Banner;
