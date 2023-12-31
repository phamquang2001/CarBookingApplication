import React from 'react';
import './PendingBooking.scss';
import { useHistory } from 'react-router-dom';
function PendingBooking(props: any) {
  const { dataCar,setShow } = props;
  const history = useHistory();
  console.log(dataCar);
  return (
    <div className="pending-booking">
      <div className="container">
        <div className="title">Book Ride</div>
        <img alt="" src={dataCar?.vehicle?.image_vehicle}></img>
        <div className="info-driver">
          <h2>{dataCar?.vehicle?.type}</h2>
          <span>{dataCar?.vehicle?.license_plate}</span>
          <div className="rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M9.04894 0.927049C9.3483 0.0057385 10.6517 0.0057404 10.9511 0.927051L12.5819 5.9463C12.7158 6.35833 13.0997 6.63729 13.533 6.63729H18.8105C19.7792 6.63729 20.182 7.8769 19.3983 8.4463L15.1287 11.5484C14.7782 11.803 14.6315 12.2544 14.7654 12.6664L16.3963 17.6857C16.6956 18.607 15.6411 19.3731 14.8574 18.8037L10.5878 15.7016C10.2373 15.447 9.7627 15.447 9.41221 15.7016L5.14258 18.8037C4.35887 19.3731 3.30439 18.607 3.60374 17.6857L5.2346 12.6664C5.36847 12.2544 5.22181 11.803 4.87132 11.5484L0.60169 8.4463C-0.182023 7.8769 0.220754 6.63729 1.18948 6.63729H6.46703C6.90026 6.63729 7.28421 6.35833 7.41809 5.9463L9.04894 0.927049Z"
                fill="#FFBF00"
              />
            </svg>
            4.7
          </div>
        </div>
        <svg
          className="icon-status-booking"
          xmlns="http://www.w3.org/2000/svg"
          width="151"
          height="131"
          viewBox="0 0 151 131"
          fill="none"
        >
          <g clip-path="url(#clip0_708_901)">
            <path
              d="M134.094 65.5C138.635 65.5 142.504 67.0961 145.703 70.2882C148.901 73.4804 150.5 77.3426 150.5 81.875V109.946C150.5 110.629 150.28 111.189 149.841 111.628C149.401 112.066 148.84 112.286 148.156 112.286H141.125V116.964C141.125 120.863 139.758 124.177 137.023 126.906C134.289 129.635 130.969 131 127.062 131C123.156 131 119.836 129.635 117.102 126.906C114.367 124.177 113 120.863 113 116.964V112.286H38V116.964C38 120.863 36.6328 124.177 33.8984 126.906C31.1641 129.635 27.8438 131 23.9375 131C20.0312 131 16.7109 129.635 13.9766 126.906C11.2422 124.177 9.875 120.863 9.875 116.964V112.286H2.84375C2.16016 112.286 1.59863 112.066 1.15918 111.628C0.719727 111.189 0.5 110.629 0.5 109.946V81.875C0.5 77.3426 2.09912 73.4804 5.29736 70.2882C8.49561 67.0961 12.3652 65.5 16.9062 65.5H18.957L26.6475 34.87C27.7705 30.2889 30.3096 26.451 34.2646 23.3563C38.2197 20.2616 42.5898 18.7143 47.375 18.7143H56.75V2.33929C56.75 1.65699 56.9697 1.09654 57.4092 0.657924C57.8486 0.219308 58.4102 0 59.0938 0H91.9062C92.5898 0 93.1514 0.219308 93.5908 0.657924C94.0303 1.09654 94.25 1.65699 94.25 2.33929V18.7143H103.625C108.41 18.7143 112.78 20.2616 116.735 23.3563C120.69 26.451 123.229 30.2889 124.353 34.87L132.043 65.5H134.094ZM23.9375 100.589C27.1602 100.589 29.9189 99.444 32.2139 97.1535C34.5088 94.8629 35.6562 92.1094 35.6562 88.8929C35.6562 85.6763 34.5088 82.9228 32.2139 80.6322C29.9189 78.3417 27.1602 77.1964 23.9375 77.1964C20.7148 77.1964 17.9561 78.3417 15.6611 80.6322C13.3662 82.9228 12.2188 85.6763 12.2188 88.8929C12.2188 92.1094 13.3662 94.8629 15.6611 97.1535C17.9561 99.444 20.7148 100.589 23.9375 100.589ZM38.293 65.5H112.707L106.188 39.4023C106.091 39.0125 105.749 38.586 105.163 38.123C104.577 37.6601 104.064 37.4286 103.625 37.4286H47.375C46.9355 37.4286 46.4229 37.6601 45.8369 38.123C45.251 38.586 44.9092 39.0125 44.8115 39.4023L38.293 65.5ZM127.062 100.589C130.285 100.589 133.044 99.444 135.339 97.1535C137.634 94.8629 138.781 92.1094 138.781 88.8929C138.781 85.6763 137.634 82.9228 135.339 80.6322C133.044 78.3417 130.285 77.1964 127.062 77.1964C123.84 77.1964 121.081 78.3417 118.786 80.6322C116.491 82.9228 115.344 85.6763 115.344 88.8929C115.344 92.1094 116.491 94.8629 118.786 97.1535C121.081 99.444 123.84 100.589 127.062 100.589Z"
              fill="#5470F2"
            />
            <path
              d="M56.5 90.25L66.3962 100L93.5 74"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_708_901">
              <rect width="150" height="131" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
        <div className="status-booking">
          Your ride has been <span>booked</span> !
        </div>
        <div className="controller">
          <button
            onClick={() => {
              history.push('/homePage/home');
            }}
            className="go-home"
          >
            Go to Home
          </button>
          <button
            onClick={() => {
              setShow('')
              history.push('/homePage/car');
            }}
            className="continue"
          >
            Continue booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingBooking;
