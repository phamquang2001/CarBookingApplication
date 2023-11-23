import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHistory, setShowOff } from 'utils/@reduxjs/detailBookSlice';
import './FormDetail.scss';
import ReasonCancel from '../ReasonCancel/ReasonCancel';
function FormDetail(props: any) {
  const res = useSelector(getDetailHistory);
  const data = res[0];
  const [show, setShow] = useState(false);
  const [id_booking, setID_Booking] = useState('');
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(setShowOff());
  };
  const handleDelete = () => {
    setID_Booking(data.id_booking);
    setShow(true);
  };
  console.log(data);
  return (
    <div className="booking">
      {show ? (
        <ReasonCancel
          setShow={setShow}
          title={'Cancel car booking request'}
          label={'Reason for canceling request'}
          id_booking={id_booking}
        />
      ) : (
        ''
      )}
      <div className="title">Infomation</div>
      <div className="car-name">{data?.driver?.vehicle?.type}</div>
      <div className="status-booking">{data?.status_booking}</div>
      <ul className="list-input-information">
        {/* fullname request */}
        <li className="item-input">
          <label htmlFor="occupantTitle">Full name of the person making the request</label>
          <input
            disabled
            type="text"
            id="occupantTitle"
            placeholder="Enter full name"
            value={data?.fullname_booking}
          />
        </li>
        <li className="item-input">
          <label htmlFor="reason">Reason for booking the car</label>
          <input
            disabled
            type="text"
            id="reason"
            placeholder="Enter the reason for needing to book a car"
            value={data?.reason_booking}
          />
        </li>
        {/* Departure date */}
        <li className="item-input">
          <label htmlFor="departureDate">Estimated departure date</label>
          <input
            disabled
            type="date"
            name="txtDate"
            placeholder="Choose a time to go"
            value={data?.date_start?.substring(0, 10)}
            id="departureDate"
          />
        </li>
        {/* Departure time */}
        <li className="item-input">
          <label htmlFor="departureTime">Estimated departure time</label>

          <input
            disabled
            type="time"
            name="txtTime"
            placeholder="Choose a time to go"
            value={data?.time_start}
            id="departureTime"
          />
        </li>
        {/* Return date */}
        <li className="item-input">
          <label htmlFor="returnDate">Estimated return date</label>
          <input
            disabled
            type="date"
            name="txtDate"
            id="returnDate"
            placeholder="Select return time"
            value={data?.date_end?.substring(0, 10)}
            min="2000-01-01"
          />
        </li>
        {/* Return time */}
        <li className="item-input">
          <label htmlFor="returnTime">Estimated return time</label>
          <input
            type="time"
            disabled
            name="txtTime"
            id="returnTime"
            placeholder="Select return time"
            value={data?.time_end}
          />
        </li>
        {/* location from  */}
        <li className="item-input">
          <label htmlFor="departureLocation">Departure location</label>
          <input
            disabled
            type="text"
            id="departureLocation"
            placeholder="Choose your pick up location"
            value={data?.location_start}
          />
        </li>
        {/* Area */}
        <li className="item-input">
          <label htmlFor="area">Area</label>
          <input
            disabled
            type="text"
            id="departureLocation"
            placeholder="Choose your pick up location"
            value={data?.area}
          />
          {/* <select id="area" value={data?.area}></select> */}
        </li>
        {/* location to */}
        <li className="item-input">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            disabled
            id="destination"
            placeholder="Choose the place you want to go"
            value={data?.location_end}
          />
        </li>
        {/* number people */}
        <li className="item-input">
          <label htmlFor="numberOfPeople">Number of people going</label>
          <input
            disabled
            type="text"
            id="numberOfPeople"
            placeholder="Enter the number of riders"
            value={data?.numbers_passenger}
          />
        </li>
        {/* person's title */}
        <li className="item-input">
          <label htmlFor="enterPersonTitle">Enter the person's title</label>
          <input
            disabled
            type="text"
            id="enterPersonTitle"
            placeholder="Enter full name"
            value={data?.position_title}
          />
        </li>
      </ul>

      <div className="action-book">
        <button onClick={() => handleCancel()} className="btn-cancel">
          Close
        </button>
        <button onClick={() => handleDelete()} className="btn-book">
          Delete
        </button>
      </div>
    </div>
  );
}

export default FormDetail;
