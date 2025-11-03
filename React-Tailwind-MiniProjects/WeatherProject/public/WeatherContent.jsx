import { useEffect, useState } from 'react';
import searchIcon from './assets/images/icon-search.svg'

    const weatherCodes =[
        {code:0 , description:'Sunny' , image:'./assets/images/icon-sunny.webp'},
        {code:[1,2] , description:'Partly Cloud' , image:'./assets/images/icon-partly-cloud.webp'},
        {code:3 , description:'Overcast' , image:'./assets/images/icon-overcast.webp'},
        {code:[45,48] , description:'Fog' , image:'./assets/images/icon-fog.webp'},
        {code:[51,53,55] , description:'Drizzle:Light, moderate, and dense intensity', image:'./assets/images/icon-drizzle.webp'},
        {code:[61,63,65], description:'Rain' , image:'./assets/images/icon-rain.webp'},
        {code:[71, 73, 75] , description:'Snow' , image:'./assets/images/icon-snow.webp'},
        {code:[95], description:'ThunderStorm' , image:'./assets/images/icon-storm.webp'}
    ]


//  helper function to get the weather code image



 

const WeatherContent = () => {


// GERMANY latest weather data
const [weatherCountry ,setWeatherCountry]=useState(null)
const [currentWeatherDate,setCurrentWeatherDate]=useState(null)
const [currentWeatherData, setCurrentWeatherData]=useState(null)
const [currentWeatherCode, setCurrentWeatherCode] =useState(null)

// hourly weather data
const [hourlyData,setHourlyData] =useState([] || null)

// hourly weather code / icon 
// const [hourlyWeatherCode,setHourlyWeatherCode] = useState(weatherCodes)

// weeks weather data
const [weeklyData, setWeeklyData] = useState([] || null)




const getWeatherCodeImage = (code) => {
return weatherCodes.find(item => Array.isArray(item.code)? item.code.includes(code) : item.code === code)

}




useEffect(() => {

const fetchWeather = async () => {

const apiUrl ="https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=10.5&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=weather_code,precipitation,wind_speed_10m,temperature_2m,apparent_temperature,relative_humidity_2m&timezone=Europe%2FBerlin&past_days=7&timeformat=unixtime&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"

try{
  const response = await fetch(apiUrl);
  if(!response.ok){
    throw new Error('Network was interupted')
  }

  const data = await response.json();
     setWeatherCountry(data);


  if(data && data.timezone && data.hourly && data.current.time && data.current.weather_code){
    setWeatherCountry(data.timezone)
  setHourlyData(data.hourly.temperature_2m);
  setCurrentWeatherData(data.current.apparent_temperature)
  setCurrentWeatherCode(data.current.weather_code)


  //  "time": 1759152600,
      const currentTimeUnix = data.current.time
      const timezone = data.timezone

      const date = new Date(currentTimeUnix * 1000)

      // formatt date tuesday ,sept 9 2025
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday:'long',
        year:'numeric',
        month:'short',
        day:'numeric',
      })


    // change the current into a string and timestamp
  setCurrentWeatherDate(formattedDate);

    // todo create a list of array of weather code and picture from the images  
    }

}catch (error){
  console.error('Fetch error:', error)
}

}

fetchWeather();

},[])

const weatherInfoCode = getWeatherCodeImage(weatherCodes)

return(
<div className="w-full h-auto">
      <div className='w-xs mt-5 mb-5'>
        <h2 className='font-BricolageGrotesque text-Neutral0 text-wrap text-center text-6xl tracking-tighter p-4'> How's the sky looking today?</h2>
      
      </div>

    <div className="max-w-full  border-white flex flex-col p-2 gap-2">
      <input 
      className="text-Neutral0 h-12 bg-Neutral700 rounded-lg text-lg font-DMSans"
      type="text"  placeholder="Search for a place..."/>
      <button className="text-Neutral0 bg-Blue500 rounded-md h-12 text-lg font-DMSans">Search</button>
    
    </div>


  {/* inside of container  */}
    <div className="grid grid-cols-1 auto-rows-[290px] p-2">
        <div className="col-span-1 row-span-1  border border-white min-w-auto bg-fit  bg-no-repeat bg-center  bg-[url('/bg-today-small.svg')] md:bg-[url('/bg-today-large.svg')]  lg:bg-[url('/bg-today-large.svg')] rounded-2xl flex flex-col  items-center">
        <div className='flex flex-col  border w-auto gap-4'>
          <p className='text-white text-center text-4xl'>{weatherCountry}</p>
          <p className='text-Neutral200   text-center'>{currentWeatherDate}</p>
        </div>
        <div className='flex flex-col  border w-auto gap-4'>
            <img src={weatherInfoCode.image} alt={weatherCodes.description} />
          <p>{currentWeatherData}</p>
        
        </div>

        </div>
       
    </div>



</div>
)}
export default WeatherContent;