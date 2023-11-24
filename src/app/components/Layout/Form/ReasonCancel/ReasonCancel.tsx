import React, { useState } from 'react';
import './ReasonCancel.scss';
import { deleteVehicleBook } from 'app/API/api';
import { fetchListBook } from 'utils/@reduxjs/historyBookSlice';
import { useDispatch } from 'react-redux';
import { setShowOff } from 'utils/@reduxjs/detailBookSlice';
function ReasonCancel(props: any) {
  const [reason, setReason] = useState('Tôi muốn huỷ');
  const dispatch = useDispatch();
  const { setShow, title, label, id_booking, dataUser } = props;
  const handleDelete = () => {
    deleteVehicleBook(id_booking, reason);
    setShow(false);
    dispatch(fetchListBook());
    dispatch(setShowOff());
  };
  return (
    <div className="form-reason">
      <div className="container-reason">
        <div className="title-reason">{title}</div>
        <div className="content">
          <span>Please enter the reason for canceling the booking</span>
          <label>
            {label}
            <input
              onChange={(e) => setReason(e.target.value)}
              autoFocus
              type="text"
              placeholder="Enter your reason"
            />
          </label>
        </div>
        <div className="controller">
          <button onClick={() => setShow(false)} className="btn-cancel">
            Cancel
          </button>
          <button onClick={() => handleDelete()} className="btn-accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReasonCancel;
