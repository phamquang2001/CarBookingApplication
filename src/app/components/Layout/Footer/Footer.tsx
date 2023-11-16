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
              <IonIcon icon={logoBitcoin} />
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
