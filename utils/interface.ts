export interface ItemProps {
  localTime: string;
  code: number;
  max_temp_c: number;
  min_temp_c: number;
  condition: string;
  isday: number;
}

export interface ForecastProps {
  forecastData:
    | {
        date: string;
        day: {
          condition: {
            text: string;
            code: number;
          };
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
          uv: number;
          is_day: number;
          avghumidity: number;
          avgtemp_c: number;
          avgtemp_f: number;
          avgvis_km: number;
          avgvis_miles: number;
        };
      }[]
    | undefined;
}

export interface AirQualProps {
  airQualityData:
    | {
        co: number;
        o3: number;
        no2: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        "us-epa-index": number;
        "gb-defra-index": number;
      }
    | undefined;
}

export interface currentData {
  current: {
    cloud: number;
    condition: {
      code: number;
      icon: String;
      text: String;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: String;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: String;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    country: String;
    lat: number;
    localtime: String;
    localtime_epoch: number;
    lon: number;
    name: String;
    region: String;
    tz_id: String;
  };
}

export interface MainTempProps {
  currentData:
    | {
        cloud: number;
        condition: {
          code: number;
          icon: String;
          text: String;
        };
        feelslike_c: number | undefined;
        feelslike_f: number;
        gust_kph: number;
        gust_mph: number;
        humidity: number;
        is_day: number;
        last_updated: String;
        last_updated_epoch: number;
        precip_in: number;
        precip_mm: number;
        pressure_in: number;
        pressure_mb: number;
        temp_c: number;
        temp_f: number;
        uv: number;
        vis_km: number;
        vis_miles: number;
        wind_degree: number;
        wind_dir: String;
        wind_kph: number;
        wind_mph: number;
      }
    | undefined;
  activeTemp: number;
  setActiveTemp: (temp: number) => void;
}

export interface DetailTempProps {
  current: {
    cloud: number;
    condition: {
      code: number;
      icon: String;
      text: String;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: String;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: String;
    wind_kph: number;
    wind_mph: number;
  };
}
