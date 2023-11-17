import React, { useEffect, useState } from 'react';
import './HomePageUser.scss';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline, reloadOutline, arrowForwardCircleOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDisplayStatus,
  getPopUpStatus,
  setDisplay,
  setPopUpOff,
} from 'utils/@reduxjs/popUpSlice';
import Map from '../../Map/Map';
const HomePageUser: React.FC = () => {
  const dispatch = useDispatch();
  const checkPopUp = useSelector(getPopUpStatus);
  // const key = 'AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE';
  interface Coords {
    lat: number;
    lng: number;
  }
  const [coords, setCoords] = useState<Coords | null>(null);
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(({ coords: { longitude, latitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  });
  return (
    <div className="HomePageUser">
      <div className=" your-location">
        <div className="tittle">
          Your current location
          <button>
            <IonIcon icon={chevronDownOutline} />
          </button>
        </div>
        <span>Sttutgart - OST</span>
      </div>
      <div className="horizontal-line"></div>
      <div className="container">
        <div className="logo-map">
          <Map coords={coords} />
        </div>
        <div className="previous-location">
          <span>Previous locations :</span>
          <ul>
            <li className="item-previous-location">
              <button>
                <IonIcon icon={reloadOutline} />
                Home
              </button>
            </li>
            <li className="item-previous-location">
              <button>
                <IonIcon icon={reloadOutline} />
                Wasen
              </button>
            </li>
            <li className="item-previous-location">
              <button>
                <IonIcon icon={reloadOutline} />
                PlanckStraBe
              </button>
            </li>
            <li className="item-previous-location">
              <button>
                <IonIcon icon={reloadOutline} />
                Museum
              </button>
            </li>
          </ul>
        </div>
        <div className={`pop-up ${checkPopUp ? '' : 'hide-sidebar'}`}>
          <div className="horizontal-line"></div>
          <div className="title-pop-up">
            <button onClick={() => dispatch(setPopUpOff())} className="btn-close-pop-up">
              Close
            </button>
            <span>Going to</span>
          </div>
          <div className="content-going">
            <div className="location-going">
              <div>
                <label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="8.5"
                      fill="#5470F2"
                      stroke="#C6D0FF"
                      stroke-width="3"
                    />
                  </svg>
                </label>
                <input value="Stuttgart - OST"></input>
              </div>
              <div>
                <label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12C12.394 12 12.7841 11.9224 13.1481 11.7716C13.512 11.6209 13.8427 11.3999 14.1213 11.1213C14.3999 10.8427 14.6209 10.512 14.7716 10.1481C14.9224 9.78407 15 9.39397 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213ZM12 21.2395C11.8179 21.0266 11.5768 20.7397 11.2945 20.3919C10.6447 19.5913 9.77908 18.4706 8.91448 17.1891C8.04892 15.9062 7.19053 14.4713 6.55005 13.0417C5.90664 11.6055 5.5 10.2113 5.5 9C5.5 7.27609 6.18482 5.62279 7.40381 4.40381C8.62279 3.18482 10.2761 2.5 12 2.5C13.7239 2.5 15.3772 3.18482 16.5962 4.40381C17.8152 5.62279 18.5 7.27609 18.5 9C18.5 10.2113 18.0934 11.6055 17.4499 13.0417C16.8095 14.4713 15.9511 15.9062 15.0855 17.1891C14.2209 18.4706 13.3553 19.5913 12.7055 20.3919C12.4232 20.7397 12.1821 21.0266 12 21.2395Z"
                      stroke="black"
                      stroke-opacity="0.75"
                    />
                  </svg>
                </label>
                <div>
                  <input placeholder="Where are we going ?"></input>
                  <button
                    onClick={() => dispatch(setDisplay('DriverAvailable'))}
                    className="arrow-forward"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.61 1.3525C1.8675 0.981249 1.04375 1.6875 1.29813 2.47812L3.08438 8.03C3.1195 8.13914 3.18396 8.23652 3.27071 8.31148C3.35747 8.38644 3.46317 8.43609 3.57625 8.455L10.9944 9.69187C11.3425 9.75 11.3425 10.25 10.9944 10.3081L3.57688 11.5444C3.46368 11.5632 3.35785 11.6128 3.27098 11.6877C3.1841 11.7627 3.11955 11.8601 3.08438 11.9694L1.29813 17.5231C1.04375 18.3137 1.86688 19.02 2.61 18.6487L18.2313 10.8394C18.9225 10.4937 18.9225 9.50812 18.2313 9.16187L2.61 1.3525Z"
                        fill="#5470F2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="list-location">
              <ul>
                <li className="item-list-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.5C9.9233 22.5 7.89323 21.8842 6.16652 20.7304C4.4398 19.5767 3.09399 17.9368 2.29927 16.0182C1.50455 14.0996 1.29661 11.9884 1.70176 9.95155C2.1069 7.91475 3.10693 6.04383 4.57538 4.57538C6.04383 3.10693 7.91476 2.1069 9.95156 1.70176C11.9884 1.29661 14.0996 1.50455 16.0182 2.29927C17.9368 3.09399 19.5767 4.4398 20.7304 6.16651C21.8842 7.89323 22.5 9.9233 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 3C10.22 3 8.47992 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91132 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M15.4425 16.5L11.25 12.3075V5.25H12.75V11.685L16.5 15.4425L15.4425 16.5Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                  <div className="content-location">
                    <h2>Rd.Allen town</h2>
                    <p>1901 Thornridge Cir . Shiloh</p>
                  </div>
                  <span>2.7km</span>
                </li>
                <li className="item-list-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.5C9.9233 22.5 7.89323 21.8842 6.16652 20.7304C4.4398 19.5767 3.09399 17.9368 2.29927 16.0182C1.50455 14.0996 1.29661 11.9884 1.70176 9.95155C2.1069 7.91475 3.10693 6.04383 4.57538 4.57538C6.04383 3.10693 7.91476 2.1069 9.95156 1.70176C11.9884 1.29661 14.0996 1.50455 16.0182 2.29927C17.9368 3.09399 19.5767 4.4398 20.7304 6.16651C21.8842 7.89323 22.5 9.9233 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 3C10.22 3 8.47992 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91132 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M15.4425 16.5L11.25 12.3075V5.25H12.75V11.685L16.5 15.4425L15.4425 16.5Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                  <div className="content-location">
                    <h2>Rd.Allen town</h2>
                    <p>1901 Thornridge Cir . Shiloh</p>
                  </div>
                  <span>2.7km</span>
                </li>
                <li className="item-list-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.5C9.9233 22.5 7.89323 21.8842 6.16652 20.7304C4.4398 19.5767 3.09399 17.9368 2.29927 16.0182C1.50455 14.0996 1.29661 11.9884 1.70176 9.95155C2.1069 7.91475 3.10693 6.04383 4.57538 4.57538C6.04383 3.10693 7.91476 2.1069 9.95156 1.70176C11.9884 1.29661 14.0996 1.50455 16.0182 2.29927C17.9368 3.09399 19.5767 4.4398 20.7304 6.16651C21.8842 7.89323 22.5 9.9233 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 3C10.22 3 8.47992 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91132 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M15.4425 16.5L11.25 12.3075V5.25H12.75V11.685L16.5 15.4425L15.4425 16.5Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                  <div className="content-location">
                    <h2>Rd.Allen town</h2>
                    <p>1901 Thornridge Cir . Shiloh</p>
                  </div>
                  <span>2.7km</span>
                </li>
                <li className="item-list-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.5C9.9233 22.5 7.89323 21.8842 6.16652 20.7304C4.4398 19.5767 3.09399 17.9368 2.29927 16.0182C1.50455 14.0996 1.29661 11.9884 1.70176 9.95155C2.1069 7.91475 3.10693 6.04383 4.57538 4.57538C6.04383 3.10693 7.91476 2.1069 9.95156 1.70176C11.9884 1.29661 14.0996 1.50455 16.0182 2.29927C17.9368 3.09399 19.5767 4.4398 20.7304 6.16651C21.8842 7.89323 22.5 9.9233 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 3C10.22 3 8.47992 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91132 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M15.4425 16.5L11.25 12.3075V5.25H12.75V11.685L16.5 15.4425L15.4425 16.5Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                  <div className="content-location">
                    <h2>Rd.Allen town</h2>
                    <p>1901 Thornridge Cir . Shiloh</p>
                  </div>
                  <span>2.7km</span>
                </li>
                <li className="item-list-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22.5C9.9233 22.5 7.89323 21.8842 6.16652 20.7304C4.4398 19.5767 3.09399 17.9368 2.29927 16.0182C1.50455 14.0996 1.29661 11.9884 1.70176 9.95155C2.1069 7.91475 3.10693 6.04383 4.57538 4.57538C6.04383 3.10693 7.91476 2.1069 9.95156 1.70176C11.9884 1.29661 14.0996 1.50455 16.0182 2.29927C17.9368 3.09399 19.5767 4.4398 20.7304 6.16651C21.8842 7.89323 22.5 9.9233 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 3C10.22 3 8.47992 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91132 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.387 3 12 3Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M15.4425 16.5L11.25 12.3075V5.25H12.75V11.685L16.5 15.4425L15.4425 16.5Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                  <div className="content-location">
                    <h2>Rd.Allen town</h2>
                    <p>1901 Thornridge Cir . Shiloh</p>
                  </div>
                  <span>2.7km</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageUser;
