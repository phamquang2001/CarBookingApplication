import React, { useEffect, useState } from 'react';
import './Footer.scss'; // Thay thế 'yourCSSFile.css' bằng tên tệp CSS của bạn
import { IonIcon } from '@ionic/react';
import { Epath } from 'app/routes/routesConfig';
import {
  homeOutline,
  carOutline,
  logoBitcoin,
  personCircleOutline,
  addCircleOutline,
} from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPopUpOn } from 'utils/@reduxjs/popUpSlice';

const Footer: React.FC = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="navigation">
      <ul>
        <li className="list ">
          <Link to={Epath.homePageFirst}>
            <span className="icon">
              <IonIcon icon={homeOutline} />
            </span>
          </Link>
        </li>

        <li className="list">
          <Link to={Epath.homePageSecond}>
            <span className="icon">
              <IonIcon icon={carOutline} />
            </span>
          </Link>
        </li>

        <li className="btn-plus">
          <Link to={Epath.homePageFirst} onClick={() => dispatch(setPopUpOn())}>
            <span className="icon">
              <IonIcon icon={addCircleOutline} />
            </span>
          </Link>
        </li>

        <li className="list">
          <Link to={Epath.homePageThird}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M19.6667 12.6666H17.6667V19.3333L23.3733 22.7199L24.3333 21.1066L19.6667 18.3333V12.6666ZM19 6C15.8174 6 12.7652 7.26428 10.5147 9.5147C8.26428 11.7651 7 14.8174 7 18H3L8.28 23.3733L13.6667 18H9.66667C9.66667 15.5246 10.65 13.1506 12.4003 11.4003C14.1507 9.64998 16.5246 8.66666 19 8.66666C21.4754 8.66666 23.8493 9.64998 25.5997 11.4003C27.35 13.1506 28.3333 15.5246 28.3333 18C28.3333 20.4753 27.35 22.8493 25.5997 24.5996C23.8493 26.3499 21.4754 27.3333 19 27.3333C16.4267 27.3333 14.0933 26.2799 12.4133 24.5866L10.52 26.4799C11.6286 27.6007 12.9496 28.4893 14.4056 29.0937C15.8616 29.6981 17.4235 30.0062 19 29.9999C22.1826 29.9999 25.2348 28.7356 27.4853 26.4852C29.7357 24.2348 31 21.1825 31 18C31 14.8174 29.7357 11.7651 27.4853 9.5147C25.2348 7.26428 22.1826 6 19 6Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
          </Link>
        </li>

        <li className="list">
          <Link to={Epath.homePageFour}>
            <span className="icon">
              <IonIcon icon={personCircleOutline} />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
