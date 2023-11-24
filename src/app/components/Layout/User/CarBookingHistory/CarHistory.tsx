import React, { useEffect, useState } from 'react';
import './CarHistory.scss';
import Waiting from './Waiting/Waiting';
import { fetchApiWaitingBook, getListCancel } from 'app/API/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListBook, getListHistory } from 'utils/@reduxjs/historyBookSlice';
import SuspenseFallback from 'app/components/Common/SuspenseFallback/SuspenseFallback';
import FormDetail from '../../Form/FormDetail/FormDetail';
import { getShowStatus } from 'utils/@reduxjs/detailBookSlice';
import CancelBook from './CancelBook/CancelBook';
const CarHistory: React.FC = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(1);
  const data = useSelector(getListHistory);
  const [dataCancel, setDataCancel] = useState<any[]>([]);

  const fetchDataCancel = async () => {
    const res: any = await getListCancel();
    setDataCancel(res.data);
  };
  useEffect(() => {
    fetchDataCancel();
  }, []);
  useEffect(() => {
    dispatch(fetchListBook());
  }, []);
  // console.log(dataCancel);
  return (
    <div className="CarHistory">
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
          {select === 1 &&
            (data.length > 0 ? (
              <Waiting select={select} data={data} />
            ) : (
              'Cant find the vehicle you are looking for...'
            ))}
          {dataCancel.length > 0 && select === 2 && (
            <CancelBook select={select} data={dataCancel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarHistory;
