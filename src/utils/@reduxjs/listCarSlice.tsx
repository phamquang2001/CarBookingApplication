import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import authApi from '../../app/axios/api/authApi';
import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';
import { axiosClient } from 'app/axios/axiosClient';
const initialState = {
  listcar: {
    car: {},
  },
};

const listCarSlice = createSlice({
  name: 'listCar' as RootStateKeyType,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListCar.fulfilled, (state, action: any) => {
      state.listcar = action.payload;
    });

  },
});
export const fetchListCar = createAsyncThunk('/fetch-listcar', async () => {
  const data = await axiosClient.get(`${authApi}/api/v2/users/listUser`);
  return data.data;
});
export const getListCar = (state: any) => state.listCar.listcar;
export default listCarSlice.reducer;
