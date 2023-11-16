import React, { useState } from 'react';
import './Booking.scss';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setDisplay } from 'utils/@reduxjs/popUpSlice';
function Booking(props: any) {
  const [occupantTitle, setOccupantTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [reason, setReason] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [departureProvince, setDepartureProvince] = useState('An Giang');
  const [departureLocation, setDepartureLocation] = useState('');
  const [destinationProvince, setDestinationProvince] = useState('An Giang');
  const [destination, setDestination] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [enterPersonTitle, setEnterPersonTitle] = useState('');
  const data: any = {
    occupantTitle: occupantTitle,
    department: department,
    reason: reason,
    departureDate: departureDate,
    departureTime: departureTime,
    returnDate: returnDate,
    returnTime: returnTime,
    departureProvince: departureProvince,
    departureLocation: departureLocation,
    destinationProvince: destinationProvince,
    destination: destination,
    numberOfPeople: numberOfPeople,
    enterPersonTitle: enterPersonTitle,
  };
  const dispatch = useDispatch();
  const isValidDate = () => {
    for (const key in data) {
      if (data[key] === '') {
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
    dispatch(setDisplay('DriverAvailable'));
  };
  const handleBooking = () => {
    if (isValidDate()) {
      dispatch(setDisplay('PendingBooking'));
    } else {
      toast.error('Data is invalid');
    }
  };
  return (
    <div className="booking">
      <div className="title">Infomation</div>
      <div className="car-name">Toyota Corolla Cross</div>
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
        {/* Departure province */}
        <li className="item-input">
          <label htmlFor="departureProvince">Departure province</label>
          <select
            id="departureProvince"
            placeholder="Choose province"
            value={departureProvince}
            onChange={(e) => setDepartureProvince(e.target.value)}
            name="flatform"
          >
            <option value="An Giang">An Giang</option>
            <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
            <option value="Bắc Giang">Bắc Giang</option>
            <option value="Bắc Kạn">Bắc Kạn</option>
            <option value="Bạc Liêu">Bạc Liêu</option>
            <option value="Bắc Ninh">Bắc Ninh</option>
            <option value="Bến Tre">Bến Tre</option>
            <option value="Bình Định">Bình Định</option>
            <option value="Bình Dương">Bình Dương</option>
            <option value="Bình Phước">Bình Phước</option>
            <option value="Bình Thuận">Bình Thuận</option>
            <option value="Bình Thuận">Bình Thuận</option>
            <option value="Cà Mau">Cà Mau</option>
            <option value="Cao Bằng">Cao Bằng</option>
            <option value="Đắk Lắk">Đắk Lắk</option>
            <option value="Đắk Nông">Đắk Nông</option>
            <option value="Điện Biên">Điện Biên</option>
            <option value="Đồng Nai">Đồng Nai</option>
            <option value="Đồng Tháp">Đồng Tháp</option>
            <option value="Đồng Tháp">Đồng Tháp</option>
            <option value="Gia Lai">Gia Lai</option>
            <option value="Hà Giang">Hà Giang</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
            <option value="Hải Dương">Hải Dương</option>
            <option value="Hậu Giang">Hậu Giang</option>
            <option value="Hòa Bình">Hòa Bình</option>
            <option value="Hưng Yên">Hưng Yên</option>
            <option value="Khánh Hòa">Khánh Hòa</option>
            <option value="Kiên Giang">Kiên Giang</option>
            <option value="Kon Tum">Kon Tum</option>
            <option value="Lai Châu">Lai Châu</option>
            <option value="Lâm Đồng">Lâm Đồng</option>
            <option value="Lạng Sơn">Lạng Sơn</option>
            <option value="Lào Cai">Lào Cai</option>
            <option value="Long An">Long An</option>
            <option value="Nam Định">Nam Định</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Ninh Thuận">Ninh Thuận</option>
            <option value="Phú Thọ">Phú Thọ</option>
            <option value="Quảng Bình">Quảng Bình</option>
            <option value="Quảng Bình">Quảng Bình</option>
            <option value="Quảng Ngãi">Quảng Ngãi</option>
            <option value="Quảng Ninh">Quảng Ninh</option>
            <option value="Quảng Trị">Quảng Trị</option>
            <option value="Sóc Trăng">Sóc Trăng</option>
            <option value="Sơn La">Sơn La</option>
            <option value="Tây Ninh">Tây Ninh</option>
            <option value="Thái Bình">Thái Bình</option>
            <option value="Thái Nguyên">Thái Nguyên</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
            <option value="Tiền Giang">Tiền Giang</option>
            <option value="Trà Vinh">Trà Vinh</option>
            <option value="Tuyên Quang">Tuyên Quang</option>
            <option value="Vĩnh Long">Vĩnh Long</option>
            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
            <option value="Yên Bái">Yên Bái</option>
            <option value="Phú Yên">Phú Yên</option>
            <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
            <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
            <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            <option value="Tp.Hà Nội">Tp.Hà Nội</option>
            <option value="TP HCM">TP HCM</option>
          </select>
        </li>
        {/* Departure location */}
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
        {/* Destination province */}
        <li className="item-input">
          <label htmlFor="destinationProvince">Destination province</label>
          <select
            id="destinationProvince"
            placeholder="Select destination province"
            value={destinationProvince}
            onChange={(e) => setDestinationProvince(e.target.value)}
            name="flatform"
          >
            <option value="An Giang">An Giang</option>
            <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
            <option value="Bắc Giang">Bắc Giang</option>
            <option value="Bắc Kạn">Bắc Kạn</option>
            <option value="Bạc Liêu">Bạc Liêu</option>
            <option value="Bắc Ninh">Bắc Ninh</option>
            <option value="Bến Tre">Bến Tre</option>
            <option value="Bình Định">Bình Định</option>
            <option value="Bình Dương">Bình Dương</option>
            <option value="Bình Phước">Bình Phước</option>
            <option value="Bình Thuận">Bình Thuận</option>
            <option value="Bình Thuận">Bình Thuận</option>
            <option value="Cà Mau">Cà Mau</option>
            <option value="Cao Bằng">Cao Bằng</option>
            <option value="Đắk Lắk">Đắk Lắk</option>
            <option value="Đắk Nông">Đắk Nông</option>
            <option value="Điện Biên">Điện Biên</option>
            <option value="Đồng Nai">Đồng Nai</option>
            <option value="Đồng Tháp">Đồng Tháp</option>
            <option value="Đồng Tháp">Đồng Tháp</option>
            <option value="Gia Lai">Gia Lai</option>
            <option value="Hà Giang">Hà Giang</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
            <option value="Hải Dương">Hải Dương</option>
            <option value="Hậu Giang">Hậu Giang</option>
            <option value="Hòa Bình">Hòa Bình</option>
            <option value="Hưng Yên">Hưng Yên</option>
            <option value="Khánh Hòa">Khánh Hòa</option>
            <option value="Kiên Giang">Kiên Giang</option>
            <option value="Kon Tum">Kon Tum</option>
            <option value="Lai Châu">Lai Châu</option>
            <option value="Lâm Đồng">Lâm Đồng</option>
            <option value="Lạng Sơn">Lạng Sơn</option>
            <option value="Lào Cai">Lào Cai</option>
            <option value="Long An">Long An</option>
            <option value="Nam Định">Nam Định</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Ninh Thuận">Ninh Thuận</option>
            <option value="Phú Thọ">Phú Thọ</option>
            <option value="Quảng Bình">Quảng Bình</option>
            <option value="Quảng Bình">Quảng Bình</option>
            <option value="Quảng Ngãi">Quảng Ngãi</option>
            <option value="Quảng Ninh">Quảng Ninh</option>
            <option value="Quảng Trị">Quảng Trị</option>
            <option value="Sóc Trăng">Sóc Trăng</option>
            <option value="Sơn La">Sơn La</option>
            <option value="Tây Ninh">Tây Ninh</option>
            <option value="Thái Bình">Thái Bình</option>
            <option value="Thái Nguyên">Thái Nguyên</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
            <option value="Tiền Giang">Tiền Giang</option>
            <option value="Trà Vinh">Trà Vinh</option>
            <option value="Tuyên Quang">Tuyên Quang</option>
            <option value="Vĩnh Long">Vĩnh Long</option>
            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
            <option value="Yên Bái">Yên Bái</option>
            <option value="Phú Yên">Phú Yên</option>
            <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
            <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
            <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            <option value="Tp.Hà Nội">Tp.Hà Nội</option>
            <option value="TP HCM">TP HCM</option>
          </select>
        </li>
        {/* Destination */}
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
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
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
