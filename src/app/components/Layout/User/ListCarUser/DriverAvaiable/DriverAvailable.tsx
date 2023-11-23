import React, { useState } from 'react';
import './DriverAvailable.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListCar, getListCar } from 'utils/@reduxjs/listCarSlice';
import Booking from '../Booking/Booking';
import PendingBooking from '../Booking/Pending/PendingBooking';
function DriverAvaiable(props: any) {
  const dispatch = useDispatch();
  const listCar = useSelector(getListCar);
  const [show, setShow] = useState('');
  const [dataCar, setDataCar] = useState({});

  const fetchData = async () => {
    await dispatch(fetchListCar());
  };
  const handleSelectCar = (car: any) => {
    setShow('Booking');
    setDataCar(car);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(listCar)
  return (
    <div className="drivers">
      <div className="title"> Avaiable Drivers</div>
      <ul className="list-driver">
        {listCar.length > 0 &&
          listCar.map((car: any) => {
            if (car?.vehicle?.status_vehicle === 'Sẵn sàng') {
              return (
                <li className="driver">
                  <div className="img-car">
                    <img
                      src={
                        car?.vehicle?.image_vehicle ||
                        'https://cafeauto.vn/image-data/300-223/static1.cafeland.vn/cafeauto/imagedata/hinhanh/xetheohang/2016/10/tuan-02/chitietlamborghinihuracanlp5802chinhhangthu2vevietnam/chi-tiet-lamborghini-huracan-lp5802-chinh-hang-thu-2-ve-viet-nam-1476520832-300x223.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="booking-car">
                    <div className="info-driver">
                      <h2>{car?.vehicle?.type}</h2>
                      <span>{car?.username}</span>
                      <span>{car?.vehicle.license_plate}</span>
                    </div>
                    <div className="book-now">
                      <button
                        onClick={() => {
                          handleSelectCar(car);
                        }}
                        className="btn-book"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </li>
              );
            }
          })}
      </ul>
      {show === 'Booking' && <Booking setShow={setShow} dataCar={dataCar} />}
      {show === 'PendingBooking' && <PendingBooking setShow={setShow} dataCar={dataCar} />}
    </div>
  );
}

export default DriverAvaiable;
