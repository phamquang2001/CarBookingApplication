import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import authApi from '../../app/axios/api/authApi';
import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';
import {
  removeRefreshToken,
  removeToken,
  removeUser,
  saveRefreshToken,
  saveToken,
  saveUser,
} from 'app/helpers/localStorage';
import { axiosClient } from 'app/axios/axiosClient';
interface dataLogin {
  payload: { username: string; password: string };
  onLoginSuccess: () => void;
  onLoginFailed: (e: any) => void;
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
        saveRefreshToken(action.payload.refreshToken);
        saveToken(action.payload.accessToken);
        saveUser(action.payload.user);
        state.authenticated = true;
      })
      .addCase(fetchAPILogin.rejected, (state, action: any) => {
        state.authenticated = false;
        removeToken();
        removeUser();
        removeRefreshToken();
      });
  },
});
export const fetchAPILogin = createAsyncThunk(
  'log-in/fetch',
  async (data: dataLogin, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(`${authApi}/api/v2/users/login`, data.payload);
      data.onLoginSuccess();
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      data.onLoginFailed(error.response.data.message);
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const getAccountStatus = (state: any) => state.auth.authenticated;
export default logInSlice.reducer;
