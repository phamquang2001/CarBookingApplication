import React, { useState } from 'react';
import './Booking.scss';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { axiosClient } from 'app/axios/axiosClient';
import { fetchApiBookCar } from 'app/API/api';
function Booking(props: any) {
  const { dataCar, setShow } = props;
  const history = useHistory();
  const [occupantTitle, setOccupantTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [reason, setReason] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [departureLocation, setDepartureLocation] = useState('');
  const [area, setArea] = useState('');
  const [destination, setDestination] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [enterPersonTitle, setEnterPersonTitle] = useState('');
  type BookingDetail = {
    date_start?: string;
    time_start: string;
    date_end?: string;
    time_end: string;
    location_start: string;
    location_end: string;
    numbers_passenger: number;
    position_title: string;
    fullname_booking: string;
    reason_booking: string;
    area?: 'Nội thành' | 'Ngoại Thành';
  };
  const data: BookingDetail = {
    date_start: departureDate && new Date(departureDate).toISOString(),
    time_start: departureTime,
    date_end: returnDate && new Date(returnDate).toISOString(),
    time_end: returnTime,
    location_start: departureLocation,
    location_end: destination,
    numbers_passenger: numberOfPeople,
    position_title: enterPersonTitle,
    fullname_booking: department,
    reason_booking: reason,
    area: 'Nội thành' || 'Ngoại Thành',
  };
  const isValidDate = () => {
    for (const key in data) {
      if (data[key as keyof BookingDetail] === '') {
        return false;
      }
    }
    return true;
  };
  const handleDateChange = (e: any) => {
    if (e >= departureDate) {
      setReturnDate(e);
    } else {
      toast.error('Ngày không hợp lệ');
      setReturnDate('');
    }
  };
  const handleCancel = () => {
    setShow('');
  };

  const handleBooking = async () => {
    if (isValidDate()) {
      try {
        const res = await fetchApiBookCar(data, dataCar.id_user);
        console.log(res);
        toast.info('Success !');
        setShow('PendingBooking');
      } catch (error: any) {
        if (error?.response?.data?.message > 1) {
          toast.error(error?.response?.data?.message[0]);
        } else {
          toast.error(error?.response?.data?.message);
        }
        console.log(error);
      }
    } else {
      toast.error('Data is invalid');
    }
  };
  console.log(data);
  return (
    <div className="booking">
      <div className="title">Infomation</div>
      <div className="car-name">{dataCar?.vehicle?.type}</div>

      <ul className="list-input-information">
        {/* fullname request */}
        <li className="item-input">
          <label htmlFor="occupantTitle">Full name of the person making the request</label>
          <input
            type="text"
            id="occupantTitle"
            placeholder="Enter full name"
            value={occupantTitle}
            onChange={(e) => setOccupantTitle(e.target.value)}
          />
        </li>
        {/* specialized */}
        <li className="item-input">
          <label htmlFor="department">Specialized departments/divisions</label>
          <input
            type="text"
            id="department"
            placeholder="Enter the name of the department/department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </li>
        {/* Reason for booking */}
        <li className="item-input">
          <label htmlFor="reason">Reason for booking the car</label>
          <input
            type="text"
            id="reason"
            placeholder="Enter the reason for needing to book a car"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </li>
        {/* Departure date */}
        <li className="item-input">
          <label htmlFor="departureDate">Estimated departure date</label>
          <input
            type="date"
            name="txtDate"
            placeholder="Choose a time to go"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            id="departureDate"
            min="2000-01-01"
          />
        </li>
        {/* Departure time */}
        <li className="item-input">
          <label htmlFor="departureTime">Estimated departure time</label>

          <input
            type="time"
            name="txtTime"
            placeholder="Choose a time to go"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            id="departureTime"
          />
        </li>
        {/* Return date */}
        <li className="item-input">
          <label htmlFor="returnDate">Estimated return date</label>
          <input
            type="date"
            name="txtDate"
            id="returnDate"
            placeholder="Select return time"
            value={returnDate}
            // onChange={(e) => setReturnDate(e.target.value)}
            onChange={(e) => handleDateChange(e.target.value)}
            min="2000-01-01"
          />
        </li>
        {/* Return time */}
        <li className="item-input">
          <label htmlFor="returnTime">Estimated return time</label>
          <input
            type="time"
            name="txtTime"
            id="returnTime"
            placeholder="Select return time"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
          />
        </li>
        {/* location from  */}
        <li className="item-input">
          <label htmlFor="departureLocation">Departure location</label>
          <input
            type="text"
            id="departureLocation"
            placeholder="Choose your pick up location"
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
          />
        </li>
        {/* Area */}
        <li className="item-input">
          <label htmlFor="area">Area</label>
          <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="">Select area</option>
            <option value="Nội Thành">Nội Thành</option>
            <option value="Ngoại Thành">Ngoại Thành</option>
          </select>
        </li>
        {/* location to */}
        <li className="item-input">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            placeholder="Choose the place you want to go"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </li>
        {/* number people */}
        <li className="item-input">
          <label htmlFor="numberOfPeople">Number of people going</label>
          <input
            type="text"
            id="numberOfPeople"
            placeholder="Enter the number of riders"
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value, 10))}
          />
        </li>
        {/* person's title */}
        <li className="item-input">
          <label htmlFor="enterPersonTitle">Enter the person's title</label>
          <input
            type="text"
            id="enterPersonTitle"
            placeholder="Enter full name"
            value={enterPersonTitle}
            onChange={(e) => setEnterPersonTitle(e.target.value)}
          />
        </li>
      </ul>

      <div className="action-book">
        <button onClick={() => handleCancel()} className="btn-cancel">
          Cancel
        </button>
        <button onClick={() => handleBooking()} className="btn-book">
          Book Now!
        </button>
      </div>
    </div>
  );
}

export default Booking;
