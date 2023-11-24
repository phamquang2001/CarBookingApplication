import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHistory, setShowOff } from 'utils/@reduxjs/detailBookSlice';
import './FormDetail.scss';
import ReasonCancel from '../ReasonCancel/ReasonCancel';

function FormDetail(props: any) {
  const { data } = props;
  // const res = useSelector(getDetailHistory);
  // const data = res[0];
  const dataForm = {
    type: data?.driver?.vehicle?.type,
    status_booking: data?.status_booking,
    fullname_booking: data?.fullname_booking,
    reason_booking: data?.reason_booking,
    date_start: new Date(data?.date_start).toISOString().split('T')[0],
    time_start: data?.time_start,
    date_end: new Date(data?.date_end).toISOString().split('T')[0],
    time_end: data?.time_end,
    location_start: data?.location_start,
    area: data?.area,
    location_end: data?.location_end,
    numbers_passenger: data?.numbers_passenger,
    position_title: data?.position_title,
  };
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
  console.log(dataForm.date_start.substring(0, 10));
  console.log(data);
  return (
    <div className="booking-detail">
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
      <div className="content-info-detail">
        <div className="car-name">{dataForm?.type}</div>

        <div className="status-booking">{dataForm?.status_booking}</div>
        <ul className="list-input-information">
          {/* fullname request */}
          <li className="item-input">
            <label htmlFor="occupantTitle">Full name of the person request</label>
            <input
              disabled
              type="text"
              id="occupantTitle"
              placeholder="Enter full name"
              value={dataForm?.fullname_booking}
            />
          </li>
          <li className="item-input">
            <label htmlFor="reason">Reason for booking the car</label>
            <input
              disabled
              type="text"
              id="reason"
              placeholder="Enter the reason for needing to book a car"
              value={dataForm?.reason_booking}
            />
          </li>
          {/* Departure date */}
          <li className="item-input">
            <label htmlFor="departureDate">Estimated departure date</label>
            <input
              disabled
              type="date"
              name="txtDate"
              id="departureDate"
              value={dataForm?.date_start}
              min="2000-01-01"
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
              value={dataForm?.time_start}
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
              value={dataForm?.date_end}
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
              value={dataForm?.time_end}
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
              value={dataForm?.location_start}
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
              value={dataForm?.area}
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
              value={dataForm?.location_end}
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
              value={dataForm?.numbers_passenger}
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
              value={dataForm?.position_title}
            />
          </li>
        </ul>
      </div>

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
