import React, { useEffect, useState } from 'react';
import './CarHistory.scss';
import Waiting from './Waiting/Waiting';
import { fetchApiHistoryBook } from 'app/API/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListBook, getListHistory } from 'utils/@reduxjs/historyBookSlice';
import SuspenseFallback from 'app/components/Common/SuspenseFallback/SuspenseFallback';
import FormDetail from '../../Form/FormDetail/FormDetail';
import { getShowStatus } from 'utils/@reduxjs/detailBookSlice';
const CarHistory: React.FC = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(1);
  const showDetail = useSelector(getShowStatus);
  const data = useSelector(getListHistory);

  useEffect(() => {
    dispatch(fetchListBook());
  }, [data]);
  return (
    <div className="CarHistory">
      {showDetail ? <FormDetail /> : ''}
      <div className="container-history">
        <div className="title">History Book Car</div>
        <div className="status-booking-car">
          <button
            onClick={() => setSelect(1)}
            className={`btn-status  ${select === 1 && 'active'}`}
          >
            Waiting
          </button>
          <button
            onClick={() => setSelect(2)}
            className={`btn-status  ${select === 2 && 'active'}`}
          >
            Cancel
          </button>
          <button
            onClick={() => setSelect(3)}
            className={`btn-status  ${select === 3 && 'active'}`}
          >
            Waiting Cancel
          </button>
          <button
            onClick={() => setSelect(4)}
            className={`btn-status  ${select === 4 && 'active'}`}
          >
            Refuse
          </button>
        </div>
        <div style={{ width: '90%' }}>
          {data.length > 0 ? <Waiting select={select} /> : <SuspenseFallback />}
        </div>
      </div>
    </div>
  );
};

export default CarHistory;
