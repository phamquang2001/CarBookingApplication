import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import authApi from '../../app/axios/api/authApi';
import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';
import {
  removeRefreshToken,
  removeToken,
  saveRefreshToken,
  saveToken,
} from 'app/helpers/localStorage';
import { axiosClient } from 'app/axios/axiosClient';
interface dataLogin {
  payload: { username: string; password: string };
  onLoginSuccess: () => void;
  onLoginFailed: () => void;
}

const initialState = {
  account: {
    access_token: '',
    refresh_token: '',
  },
  authenticated: false,
};

const logInSlice = createSlice({
  name: 'auth' as RootStateKeyType,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPILogin.fulfilled, (state, action: any) => {
        // state.account.access_token = action.payload.access_token;
        // state.account.refresh_token = action.payload.refresh_token;
        saveRefreshToken(action.payload.refresh_token);
        saveToken(action.payload.access_token);
        state.authenticated = true;
      })
      .addCase(fetchAPILogin.rejected, (state, action: any) => {
        state.authenticated = false;
        removeToken();
        removeRefreshToken();
      });
  },
});
export const fetchAPILogin = createAsyncThunk(
  'log-in/fetch',
  async (data: dataLogin, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(`${authApi}/auth/signin`, data.payload);
      data.onLoginSuccess();
      return response.data;
    } catch (error: any) {
      data.onLoginFailed();
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const getAccountStatus = (state: any) => state.auth.authenticated;
export default logInSlice.reducer;
