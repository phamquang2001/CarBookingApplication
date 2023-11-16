import React from 'react';
import './DriverAvailable.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setDisplay, setPopUpDriverOff } from 'utils/@reduxjs/popUpSlice';
import { axiosClient } from 'app/axios/axiosClient';
import { setDisplay } from 'utils/@reduxjs/popUpSlice';
import { fetchListCar, getListCar } from 'utils/@reduxjs/listCarSlice';
function DriverAvaiable(props: any) {
  const dispatch = useDispatch();
  const listCar = useSelector(getListCar);
  const fetchData = async () => {
    await dispatch(fetchListCar());
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="drivers">
      <div className="title">
        {' '}
        {/* <button onClick={() => dispatch(setPopUpDriverOff())} className="btn-close-pop-up">
          Close
        </button> */}
        Avaiable Drivers
      </div>
      <ul className="list-driver">
        <li className="driver">
          <img src="/imgDriver.jpg" alt="" />
          <div className="info-driver">
            <h2>Kevin Fryek</h2>
            <span>Mini Bus</span>
            <div className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                  fill="#FFBF00"
                />
              </svg>
              4.7
            </div>
            <span>30H - 99999</span>
          </div>
          <div className="book-now">
            <span>$12.45</span>
            <button
              onClick={() => {
                dispatch(setDisplay('Booking'));
              }}
              className="btn-book"
            >
              Book Now
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DriverAvaiable;
