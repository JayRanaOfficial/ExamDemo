import {createAsyncThunk} from '@reduxjs/toolkit';
import {request} from '../../api/axiosconfig';
import {DashBoard} from '../../api/apiconfig';

export const fetchCategory = createAsyncThunk('fetchcategories', async () => {
  const response = await fetch(DashBoard, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      CategoryId: 0,
      DeviceManufacturer: 'Google',
      DeviceModel: 'Android SDK built for x86',
      DeviceToken: ' ',
      PageIndex: 1,
    }),
  });
  const json = await response.json();
  console.log(json);
  return json?.Result?.Category;
});
