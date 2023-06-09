"use client";

import { createSlice } from "@reduxjs/toolkit";
import { currentData } from "@utils/interface";

export interface GlobalProps {
  currentData: currentData,
}

const initialState: GlobalProps = {
  currentData: {
    current: {
      cloud: 0,
      condition: {
        code: 0,
        icon: '',
        text: '',
      },
      feelslike_c: 0,
      feelslike_f: 0,
      gust_kph: 0,
      gust_mph: 0,
      humidity: 0,
      is_day: 0,
      last_updated: '',
      last_updated_epoch: 0,
      precip_in: 0,
      precip_mm: 0,
      pressure_in: 0,
      pressure_mb: 0,
      temp_c: 0,
      temp_f: 0,
      uv: 0,
      vis_km: 0,
      vis_miles: 0,
      wind_degree: 0,
      wind_dir: '',
      wind_kph: 0,
      wind_mph: 0,
    },
    location: {
      country: '',
      lat: 0,
      localtime: '',
      localtime_epoch: 0,
      lon: 0,
      name: '',
      region: '',
      tz_id: '',
    }
  },
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCurrentWeatherData: (state, action) => {
      state.currentData = action.payload;
    },
  },
});

export const { setCurrentWeatherData } = globalSlice.actions;
export default globalSlice.reducer;
