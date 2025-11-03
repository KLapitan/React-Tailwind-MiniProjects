import { useEffect, useState } from "react"
import SearchBar from "./SearcBar"

    const weatherCodes =[
        {code:0 , description:'Sunny' , image:'/icon-sunny.webp'},
        {code:[1,2] , description:'Partly Cloud' , image:'/icon-partly-cloudy.webp'},
        {code:3 , description:'Overcast' , image:'/icon-overcast.webp'},
        {code:[45,48] , description:'Fog' , image:'/icon-fog.webp'},
        {code:[51,53,55] , description:'Drizzle:Light, moderate, and dense intensity', image:'/icon-drizzle.webp'},
        {code:[61,63,65,80], description:'Rain' , image:'/icon-rain.webp'},
        {code:[71, 73, 75] , description:'Snow' , image:'/icon-snow.webp'},
        {code:[95], description:'ThunderStorm' , image:'/icon-storm.webp'}
    ]


const nameDays =["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday","Saturday", ]



const WeatherContent1 = () => {

const [currentWeather, setCurrentWeather]=useState({
  country:null,
 date:null,
  weatherCode:null,
  temp:null,
  feelslike:null,
  humidity:null,
  wind:null,
  precipitation:null,
  daily:null,
  dailyWeatherCode:null,  
  dailyMaxTemp:null,
  dailyMinTemp:null,
  hourly:null,
  hourlyWeatherCode:null,
})

// choosing monday -sunday
const [currentDay,setCurrentDay] =useState("")
const [filterDayList, setFilterDayList]=useState([])
// helper function to get weather codes
const getWeatherCodes = (codes) => {
const match = weatherCodes.find(item => Array.isArray(item.code) ? item.code.includes(codes) : item.code === codes )

return match || { description: 'Unknown', image: '/icon-unknown.webp' };
}

// current weather code and it is single 
const currentWeatherCode = currentWeather ?  getWeatherCodes(currentWeather.weatherCode) : null

// daily dates check if in array in fetch time is in [array of time]
//  we need to check to avoid map error
const dailyForecastDay = Array.isArray(currentWeather.daily) ? currentWeather.daily : []

// typeof arrayof objects
// we turn into an arrayof array
const dailyWeatherCode = Array.isArray(currentWeather.daily) ? currentWeather.dailyWeatherCode : Object.values(currentWeather?.dailyWeatherCode || {})  

// we can map it into an array of weathercodes after turning the arrayof objects into an array 

const dailyForecastWCodes = dailyWeatherCode.map(code => getWeatherCodes(code))


// check if temp is in array or array of objects then turn into an array
const maxTemp = Array.isArray(currentWeather.dailyMaxTemp) ? currentWeather.dailyMaxTemp : Object.values(currentWeather?.dailyMaxTemp || {})

// check if temp is in array or array of objects then turn into an array
const minTemp = Array.isArray(currentWeather.dailyMinTemp) ? currentWeather.dailyMinTemp : Object.values(currentWeather?.dailyMinTemp || {})


const hourlyTimeDate = Array.isArray(currentWeather.hourly) ? currentWeather.hourly : Object.values(currentWeather?.hourly || {})

//  we filtered the time based on days [{day , time}] if day is equal to option cliked day for example monday 

// filter shows all monday with day and time stamp [monday  - 5:00AM/PM]
//  we put in a USEEFFECT so once the api runs first effectt runs then second render goes for hourly

// hourlyWeatherCodes
// data give us array of weathercodes
const hourlyWeatherCodes= Array.isArray(currentWeather.hourlyWeatherCode) ? currentWeather.hourlyWeatherCode : Object.values(currentWeather?.hourlyWeatherCode || {})

//  we need to send 1 by 1 array to our helperfunction to match the code 

const hourlyWCodes = hourlyWeatherCodes.map(codes => getWeatherCodes(codes))


// hourly currentWeather

const hourlycurrentTEMP = Array.isArray(currentWeather.hourlyMinTemp) ? currentWeather.hourlyMinTemp : Object.values(currentWeather?.hourlyMinTemp|| {})  

 
// api
useEffect(() => {
  const FetchWeatherData = async () => {


    // api for Farenhieght ,inch ,mph 
      const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=10.5&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&timezone=Europe%2FBerlin&timeformat=unixtime&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";
  
      try{
        
        const response = await fetch(WEATHER_API_URL);

        if(!response.ok) {
          throw new Error('Network was interupted')
        }
      
        const data = await response.json();

     
        if(data && 
        data.timezone !==undefined && 
        data.current.time !==undefined && 
        data.current.weather_code !==undefined && 
        data.current.temperature_2m !== undefined &&
        data.current.apparent_temperature !== undefined &&
        data.current.relative_humidity_2m !== undefined &&
         data.current.wind_speed_10m !== undefined  && data.current.precipitation !== undefined  &&
         data.daily.time !== undefined && data.daily.weather_code !== undefined && data.daily.temperature_2m_max !==undefined && data.daily.temperature_2m_min !==undefined  && data.hourly.time !==undefined && data.hourly.weather_code !==undefined && data.hourly.temperature_2m
        ){

            // todays current date ,country , weather
            const currentDateTimeunix = data.current.time;
            const currentDate = new Date(currentDateTimeunix * 1000);

            const formattedCurrentDate = currentDate.toLocaleDateString('en-US' ,{
            weekday:'long',
            year:'numeric',
            month:'short',
            day:'numeric',
            })

          // daily time,
          const currentDailyTimeUnix =data.daily.time;  // we get array of time

          const dailyTimeArray = currentDailyTimeUnix.map(time => {
            const date = new Date(time * 1000)

            return date.toLocaleDateString('en-US' , {
            weekday:'short'
            })

          })

          const formattedDailyTime =dailyTimeArray
          
          // hourly 

          const hourlyTimeTimeUnix = data.hourly.time;


          // turn the timeUnix from millesconds to seconds and use NewDate() to calcute it to real-world time 
          const hourlyTimeArray = hourlyTimeTimeUnix.map(time => {
            const date =new Date(time * 1000)
          
          // changing the data to weekdays like mon-sat // for matching later in option 
           const day = date.toLocaleDateString("en-US", { weekday: "long" });

          //  changing the time unix to 3pm -12pm

          // hour12 - make 1 pm 2mp 10 pm  single and dobule based on time 24hr
           const timeStamp = date.toLocaleTimeString([] ,  {hour: "numeric",
             hour12: true});
           
           return {day ,time:timeStamp};
            
          })

// time now became tuesday ,04:00pm like that

          const formattedHourlyTime = hourlyTimeArray;
                    // so the time now has array of object [tuesday 4:00pm] [tuesday 4:00pm] [Wenesday 4:00pm] 


          setCurrentWeather({
          country:data.timezone,
          date:formattedCurrentDate,
          weatherCode:data.current.weather_code,
          temp:data.current.temperature_2m,
          feelslike:data.current.apparent_temperature,
          humidity:data.current.relative_humidity_2m,
          wind:data.current.wind_speed_10m,
          precipitation: data.current.precipitation,
          daily:formattedDailyTime,
          dailyWeatherCode:data.daily.weather_code,
          dailyMaxTemp:data.daily.temperature_2m_max,
          dailyMinTemp:data.daily.temperature_2m_min,
          hourly:formattedHourlyTime,
          hourlyWeatherCode:data.hourly.weather_code,
          hourlyMinTemp:data.hourly.temperature_2m,
          })
        
        }
      
      
      }catch(error){
        console.error("error fetching your data" , error)
      }
  
  }
    setCurrentDay(todayName);


  FetchWeatherData();




},[])

// so after the fetch runs


// /hourlyTime effect runs here we set if todays date


//  we filtered the time based on days [{day , time}] if day is equal to option cliked day for example monday 

// filter shows all monday with day and time stamp [monday  - 5:00AM/PM]

//  it will run this and get the time array and mount it based on day
 const today = new Date();
  const todayName = nameDays[today.getDay()];

useEffect(() => {
  if (!currentDay || !hourlyTimeDate.length) return;
const filterHourlyList = hourlyTimeDate.filter(entry => entry.day === currentDay) 
setFilterDayList(filterHourlyList)


} , [currentDay , hourlyTimeDate])


console.log(typeof currentWeather.hourly)
console.log(currentWeather.hourly)

console.log(hourlyTimeDate)



return(
  <div className=" max-w-auto h-auto lg:h-auto">

        <SearchBar/>



{/* grid container */}
    <div className="grid  grid-cols-5 lg:grid-cols-8 auto-rows-[250px]  lg:auto-rows-[280px]  md:w-full lg:max-w-4xl p-2  max-h-auto  lg:place-self-center lg:place-content-center gap-4 ">
    

    {/* container 1 */}
      <div className="col-span-5 lg:col-span-6 col-start-1 lg:w-full row-span-1 rounded-lg bg-[url('/bg-today-small.svg')] md:bg-[url('/bg-today-large.svg')]  lg:bg-[url('/bg-today-large.svg')]  bg-cover  bg-no-repeat bg-center min-w-auto md:w-xl  h-auto lg:flex lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col lg:items-start items-center  justify-center  w-auto  lg:gap-1 gap-3 mt-10 lg:mt-0 lg:ml-4   ">
      <p className="text-white text-center text-4xl tracking-tight font-DMSans font-bold ">{currentWeather.country}</p>
      <p className="text-Neutral200 text-center text-lg font-DMSans font-medium ">{currentWeather.date}</p>

      </div>
      {currentWeatherCode && (
   
    <div className="flex flex-row w-72 ml-2  mt-2 h-20 items-center justify-between  ">
        <img 
        className="w-25 h-25"
        src={currentWeatherCode.image} 
         alt={currentWeatherCode.description}/>    
         <p className='text-5xl lg:text-6xl mr-3 font-DMSans font-bold tracking-tight text-Neutral0'>{currentWeather.temp} °F</p>
    </div>
      
   
)}

      </div>
{/* 
      hourly div */}
      <div className="col-span-5 md:col-span-4 lg:col-span-0  border-Neutral600  bg-Neutral800  col-start-1 lg:col-start-7   lg:row-start-1 md:w-xl lg:w-xs row-span-2   rounded-xl w-full p-2 ">

      <section className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center ">
        <h2 className='text-Neutral0 font-DMSans text-lg p-2'>Hourly forecast</h2>

            <select 
            value={currentDay}
            onChange={(e) => setCurrentDay(e.target.value)}
            className="border-Neutral600 w-30 text-center h-9  text-Neutral0 tracking-tight  bg-Neutral600 rounded-lg font-DMSans p-2 cursor-pointer"> 
              {nameDays.map(day => (
                <option className="bg-Neutral800  rounded-lg  hover:bg-Neutral600 " key={day}  value={day}>{day}</option>
              ))}
            </select>
      </div>
       <ul className=" h-[440px] lg:h-[500px] overflow-auto p-2">
     {filterDayList.map((timeDay,index) => (
      <li 
      className="border border-Neutral600 bg-Neutral700  w-full h-15 mb-2 rounded-lg p-3  font-DMSans flex flex-row  gap-5 justify-between items-center"
      key={index} > {hourlyWCodes[index] && (
      <>
        <img 
        className="w-10 h-10 "
        src={hourlyWCodes[index].image} alt={` ${hourlyWCodes[index].description}`} />
      
      </>
      
      )}
      
      <p className="text-Neutral0 font-DMSans text-md">{timeDay.time}</p>
      
      
        {hourlycurrentTEMP[index] && (
        
        <>
        <p className="text-Neutral0 font-DMSans text-md">{hourlycurrentTEMP[index]} °F</p>
        </>
        )}
      
      </li>
     ))}
       
       </ul>
      
      </section>
      </div>

      {/* temp humidty , wind today forecast */}
      {/* current weather */}
      <div className=" row-start-2 col-start-1  col-span-5 lg:col-span-6  lg:row-span-1  row-span-3 rounded-xl min-w-auto h-auto md:w-xl lg:w-full flex flex-col  ">

      <section className="flex flex-row gap-2 lg:gap-3 flex-wrap ">
      {/* feels like */}
      <div className="w-36 h-25 lg:w-36 lg:h-25 border-2 border-Neutral600  bg-Neutral700 rounded-lg p-1 ">
      <p className='text-Neutral200 text-left font-DMSans p-2'>Feels Like</p>
      <p className='text-Neutral200 text-left font-DMSans p-2 text-2xl'>{currentWeather.feelslike}°F</p>
      </div>
      {/* Humid */}
      <div className="w-36 h-25  lg:w-36 lg:h-25 border-2 border-Neutral600 bg-Neutral700 rounded-lg p-1 ">
      <p className='text-Neutral200 text-left font-DMSans p-2'>Humidity</p>
      <p className='text-Neutral200 text-left font-DMSans p-2 text-2xl'>{currentWeather.humidity} %</p>
      </div>
      {/* Wind */}
      <div className="w-36 h-25  lg:w-36 lg:h-25 border-2 border-Neutral600 bg-Neutral700 rounded-lg p-1">
        <p className='text-Neutral200 text-left font-DMSans p-2'>Wind</p>
        <p className='text-Neutral200 text-left font-DMSans p-2 text-2xl'>{currentWeather.wind} mph</p>
      </div>
      
      {/* preceipitaion */}
      <div className="w-36 h-25  lg:w-36 lg:h-25 border-2 border-Neutral600 bg-Neutral700 rounded-lg p-1">
        <p className='text-Neutral200 text-left font-DMSans p-2'>Precipitation</p>
         <p className='text-Neutral200 text-left font-DMSans p-2 text-2xl'>{currentWeather.precipitation} in</p>
      </div>
      </section>

      {/* daily forcast */}
      <section>
       <h2 className='text-Neutral0 font-DMSans text-lg p-2'>Daily forecast</h2>
       <div className="flex flex-row flex-wrap  h-auto gap-3 lg:gap-3"> 
       {/* daily weekday */}
        {dailyForecastDay.map((timeDate , index) => (
          <div className=' text-white  border-2 border-Neutral600 bg-Neutral700  w-22 h-40 lg:w-19 lg:h-31 rounded-lg text-center flex flex-col gap-3 lg:gap-1' key={index}>
          <p className='mt-2 font-medium font-DMSans'> {timeDate}</p>

        {/* daily weathercode */}
        {dailyForecastWCodes[index] && 
          <>

          <img 
          className='w-15 h-15  lg:w-10 lg:h-10 place-self-center'
          src={dailyForecastWCodes[index].image} alt={`${dailyForecastWCodes[index].description}`}/>
           </>
        
        }
<div className='flex flex-row justify-between p-2 '> 
   {maxTemp[index] && (
        <>
        <p className='font-DMSans text-sm lg:text-xs tracking-tight'>{maxTemp[index]}</p>
        </>
)}
        {minTemp[index] && (
        <>
        <p className='font-DMSans  text-sm lg:text-xs tracking-tight'>{minTemp[index]}</p>
        </>

        )}
 </div>

          </div> 
       ))} 
        </div>
      </section>



      
      
        </div>


    </div>

  
  
  
  </div>


)

}
export default WeatherContent1