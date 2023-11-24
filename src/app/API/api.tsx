import authApi from 'app/axios/api/authApi';
import { axiosClient } from 'app/axios/axiosClient';

export const fetchApiBookCar = async (data: any, id: any) => {
  const res = await axiosClient.post(
    `${authApi}/api/v2/booking-details/create?id_driver=${id}`,
    data,
  );
  return res;
};

export const getAPIUser = async (id: any) => {
  return await axiosClient.get(`${authApi}/api/v2/users?id=${id}`);
};
export const fetchApiWaitingBook = async () => {
  return await axiosClient.get(`${authApi}/api/v2/booking-details/listWaitAccess`);
};
export const updateInfoUser = async (data: { fullname: any }) => {
  return await axiosClient.patch(`${authApi}/api/v2/users/updateInfor`, data);
};
export const updateAvatar = async (formData: any) => {
  return await axiosClient.patch(`${authApi}/api/v2/users/uploadAvatar`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const deleteVehicleBook = async (id_booking: any, reasonP2: any) => {
  return await axiosClient.patch(
    `${authApi}/api/v2/booking-details/updateCancel?id_booking=${id_booking}`,
    { reasonP2: reasonP2 },
  );
};
export const getDetailBooking = async (id_booking: any) => {
  return await axiosClient.get(
    `${authApi}/api/v2/booking-details/detail/booking?id_booking=${id_booking}`,
  );
};

export const getListCancel = async () => {
  return await axiosClient.get(`${authApi}/api/v2/reason/list/CancelPb`);
};
