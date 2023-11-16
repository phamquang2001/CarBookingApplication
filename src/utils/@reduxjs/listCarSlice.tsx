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
    builder
      .addCase(fetchListCar.fulfilled, (state, action: any) => {})
      .addCase(fetchListCar.rejected, (state, action: any) => {});
  },
});
export const fetchListCar = createAsyncThunk('getListCar/fetch', async () => {
  const data = axiosClient.get(`${authApi}/getall`);
  return data;
});
export const getListCar = (state: any) => state.listCar.listcar;
export default listCarSlice.reducer;
