import { createSlice } from './toolkit';
import { RootStateKeyType } from '../types/injector-typings';

const initialState = {
  isPopUpOn: false,
  isPopUpDriverOn: false,
};

const popUpSlice = createSlice({
  name: 'popUp' as RootStateKeyType,
  initialState,
  reducers: {
    setPopUpOn: (state) => {
      state.isPopUpOn = true;
      state.isPopUpDriverOn = false;
    },
    setPopUpOff: (state) => {
      state.isPopUpOn = false;
    },
    setPopUpDriverOn: (state) => {
      state.isPopUpDriverOn = true;
      state.isPopUpOn = false;
    },
    setPopUpDriverOff: (state) => {
      state.isPopUpDriverOn = false;
    },
  },
});
export const { setPopUpOn, setPopUpOff, setPopUpDriverOn, setPopUpDriverOff } = popUpSlice.actions;
export const getPopUpStatus = (state: any) => state.popUp.isPopUpOn;

export default popUpSlice.reducer;
