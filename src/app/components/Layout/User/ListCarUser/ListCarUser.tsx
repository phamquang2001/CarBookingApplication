import React, { useEffect, useState } from 'react';
import './ListCarUser.scss';
import InfCar from './InfCar';
import { useSelector } from 'react-redux';
import { getDisplayStatus } from 'utils/@reduxjs/popUpSlice';
import DriverAvaiable from './DriverAvaiable/DriverAvailable';
import PendingBooking from './Booking/Pending/PendingBooking';
import RejectBooking from './Booking/Reject/RejectBooking';
import SuccessBooking from './Booking/Success/SuccessBooking';
import Booking from './Booking/Booking';
const ListCarUser: React.FC = () => {
  const [list, setList] = useState(['1', '2', '3', '4']);
  const [check, setCheck] = useState(false);
  const isDisplay = useSelector(getDisplayStatus);

  return (
    <div className="ListCarUser">
      <div className="select-car">
        {isDisplay === 'DriverAvailable' && <DriverAvaiable />}
        {isDisplay === 'Booking' && <Booking />}
        {isDisplay === 'PendingBooking' && <PendingBooking />}
        {isDisplay === 'RejectBooking' && <RejectBooking />}
        {isDisplay === 'SuccessBooking' && <SuccessBooking />}
      </div>
    </div>
  );
};

export default ListCarUser;
