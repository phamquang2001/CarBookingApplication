/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import listCarSlice from 'utils/@reduxjs/listCarSlice';
import logInSlice from 'utils/@reduxjs/logInSlice';
import popUpSlice from 'utils/@reduxjs/popUpSlice';

import { InjectedReducersType } from 'utils/types/injector-typings';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const rootReducers = {
  auth: logInSlice,
  popUp: popUpSlice,
  listCar: listCarSlice,
};

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  } else {
    return combineReducers({
      ...injectedReducers,
    });
  }
}
