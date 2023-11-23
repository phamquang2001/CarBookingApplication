import React, { useEffect, useState } from 'react';
import './Waiting.scss';
import ReasonCancel from 'app/components/Layout/Form/ReasonCancel/ReasonCancel';
import { useDispatch, useSelector } from 'react-redux';
import { getListHistory } from 'utils/@reduxjs/historyBookSlice';
import { fetchDetailBook, getShowStatus, setShowOn } from 'utils/@reduxjs/detailBookSlice';

interface MyComponentProps {
  data?: any;
  select?: any;
  onClick?: () => void;
}

const Waiting: React.FC<MyComponentProps> = ({ select }) => {
  const [show, setShow] = useState(false);
  const [id_booking, setID_Booking] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(getListHistory);
  const handleDelete = (e: any) => {
    console.log(e);
    setID_Booking(e.id_booking);
    setShow(true);
  };
  const handleShowDetail = (id_booking: any) => {
    dispatch(fetchDetailBook(id_booking));
    dispatch(setShowOn());
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
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
      <div className="search-car">
        <button className="btn-search">
          <img src="/Search.png" alt="" />
        </button>
        <input placeholder="Search" type="text" />
      </div>

      <div className="scroll-list-car">
        {data?.map((e: any) => {
          return (
            <div>
              {select === 1 && (
                <div className="list-car-status">
                  <div className="img-car">
                    <img
                      src={
                        e?.driver?.vehicle?.image_vehicle ||
                        'https://cafeauto.vn/image-data/300-223/static1.cafeland.vn/cafeauto/imagedata/hinhanh/xetheohang/2016/10/tuan-02/chitietlamborghinihuracanlp5802chinhhangthu2vevietnam/chi-tiet-lamborghini-huracan-lp5802-chinh-hang-thu-2-ve-viet-nam-1476520832-300x223.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="inf-car-status">
                    <span>{e?.driver?.fullname}</span>
                    <span>{e?.date_start.substring(0, 10)}</span>
                    <span>
                      {e?.time_start} - {e?.time_end}
                    </span>
                  </div>
                  <div className="icon-delete">
                    <svg
                      onClick={() => handleDelete(e)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M80 112h352"
                      />
                      <path
                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                    </svg>
                  </div>
                  <div onClick={() => handleShowDetail(e.id_booking)} className="more-inf">
                    Detail{' '}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Waiting;
