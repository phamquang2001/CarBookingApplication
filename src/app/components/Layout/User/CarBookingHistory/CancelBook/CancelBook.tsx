import React, { useEffect, useState } from 'react';
import './CancelBook.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailBook, getShowStatus, setShowOn } from 'utils/@reduxjs/detailBookSlice';
import { getListCancel } from 'app/API/api';
import FormDetail from 'app/components/Layout/Form/FormDetail/FormDetail';
interface DataCancel {
  booking: any[]; // Hoặc bạn có thể thay 'any[]' bằng kiểu dữ liệu chính xác cho 'booking'
  // Các thuộc tính khác nếu có
}
function CancelBook(props: any) {
  const { select, data } = props;
  const dispatch = useDispatch();
  const showDetail = useSelector(getShowStatus);
  const [dataCancel, setDataCancel] = useState<DataCancel | null>(null);

  const handleShowDetail = (e: any) => {
    setDataCancel(e);
    // dispatch(fetchDetailBook(id_booking));
    dispatch(setShowOn());
  };
  const handleDelete = (e: any) => {};

  console.log(dataCancel);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="search-car">
        <button className="btn-search">
          <img src="/Search.png" alt="" />
        </button>
        <input placeholder="Search" type="text" />
      </div>

      <div className="scroll-list-car">
        {showDetail ? <FormDetail select={select} data={dataCancel?.booking} /> : ''}
        {data &&
          data?.map((e: any) => {
            return (
              <div>
                {select === 2 && (
                  <div onClick={() => handleShowDetail(e)} className="list-car-status">
                    <div className="img-car-history">
                      <img
                        src={
                          e?.booking?.driver?.vehicle?.image_vehicle ||
                          'https://cafeauto.vn/image-data/300-223/static1.cafeland.vn/cafeauto/imagedata/hinhanh/xetheohang/2016/10/tuan-02/chitietlamborghinihuracanlp5802chinhhangthu2vevietnam/chi-tiet-lamborghini-huracan-lp5802-chinh-hang-thu-2-ve-viet-nam-1476520832-300x223.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <div className="inf-car-status">
                      <span>{e?.booking?.driver?.vehicle?.type}</span>
                      <span>
                        {(e?.booking?.date_start &&
                          new Date(e?.booking?.date_start).toLocaleDateString('en-GB', {
                            timeZone: 'UTC',
                          })) ||
                          ''}
                      </span>
                      <span>
                        {e?.booking?.time_start} - {e?.booking?.time_end}
                      </span>
                    </div>
                    <div className="icon-delete">
                      {/* <svg
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
                      </svg> */}
                      <div  className="more-inf">
                        Detail{' '}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CancelBook;
