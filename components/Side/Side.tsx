'use client'

import {useState, useEffect} from 'react'
import instances from '@utils/axios'

// ** components
import Forecast from './components/Forecast/Forecast'
import History from './components/History/History'
import AirQuality from './components/AirQuality/AirQuality'

const Side = () => {
  // ** const
  const [forecastData, setForecastData] = useState()
  const [airQualityData, setAirQualityData] = useState()

  // ** get data
  useEffect(() => {
    const fetchData = async () => {
      const res = await instances.get('/forecast.json', {
        params : {
          q: 'Dong Hung Thuan',
          days: 3,
          hour: 10,
          lang: 'vi',
          alerts: 'yes',
          aqi: 'yes',
          key: process.env.API_KEY,
        }
      })
      console.log(res.data)
      setForecastData(res.data.forecast.forecastday)
      setAirQualityData(res.data.current.air_quality)
    }

    fetchData()
  }, [])
  

  return (
    <div className='mt-[50px] flex flex-wrap justify-around items-start gap-24'>
      <Forecast forecastData={forecastData}/>
      <History />
      <AirQuality airQualityData={airQualityData}/>
    </div>
  )
}

export default Side