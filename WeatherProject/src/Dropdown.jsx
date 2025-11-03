import Units from './assets/images/icon-units.svg'
import ArrowDown from './assets/images/icon-dropdown.svg'
import checkArrow from './assets/images/icon-checkmark.svg'

import { useState } from 'react'

const Dropdown = ({showContent, onDropdown}) => {
const [setActiveCelsius ,setShowActiveCelsius]=useState(false)
const [setActiveFarenheit ,setShowActiveFarenheit]=useState(false)
const [setActiveKmh,setShowActiveKmh]=useState(false)
const [setActiveMph,setShowActiveMph]=useState(false)
const [setActiveMM ,setShowActiveMM] =useState(false)
const [setActiveINCH ,setShowActiveINCH] =useState(false)

const [showMetrics ,setShowMetrics]=useState(false)

return (
<>
<div className="w-auto  relative">
<button className='text-md text-white bg-Neutral700 border-Neutral800 focus:border-Neutral200 w-23 h-9  border  font-DMSans font-medium flex flex-row items-center justify-center gap-1 rounded-sm cursor-pointer mr-55'
onClick={onDropdown}
>
<img 
className='h-4 w-4 '
src={Units} alt="Units logo"/>
Units <img src={ArrowDown} alt="Dropdown arrow"/> </button>
</div>

{/* // div that open  */}
{showContent && (
<>
<div className='bg-Neutral700 w-44 h-auto absolute left-32 top-14 rounded-2xl p-1 lg:left-335'>
<button className='w-[160px] h-8  text-left text-sm tracking-tighter text-white p-1 ml-1 font-DMSans font-normal hover:bg-Neutral700 focus:border focus:border-Neutral0  rounded-lg cursor-pointer ' onClick={() => setShowMetrics(!showMetrics)}>Switch to Imperial </button>




{showMetrics && (
<>

{/* temperature */}
<div className='flex flex-col gap-2'>
<p className='text-xs text-Neutral300 mt-1 ml-2 font-DMSans'>Temperature</p>
<button 
className={`w-auto h-6 text-center  inline-flex gap-16 text-sm ml-1 p-1 font-DMSans text-Neutral200 rounded-sm   ${setActiveCelsius ? "bg-Neutral600" : "bg-Neutral700"}`}
onClick={() => setShowActiveCelsius(!setActiveCelsius)} > Celsius (°C) { setActiveCelsius ? <img src={checkArrow} alt='checkarrow'/> : null }  </button>
<button 
className={`w-auto h-6 text-center inline-flex gap-11 text-sm ml-1 p-1 font-DMSans text-white rounded-sm  ${setActiveFarenheit ? "bg-Neutral600" :"bg-Neutral700"}`}
onClick={() => setShowActiveFarenheit(!setActiveFarenheit)} >  Fahrenheit (°F){ setActiveFarenheit ? <img src={checkArrow} alt='checkarrow'/> : null }  </button>

</div>

{/* border of items */}
<div className="w-auto border border-neutral-300/30 mt-1"></div>

{/* windspeed */}
<div className='flex flex-col gap-2'>

<p className='text-xs text-Neutral300 mt-1 ml-2 font-DMSans'>Wind Speed</p>

<button className={`w-auto h-6 text-center  inline-flex gap-26 text-sm ml-1 p-1 font-DMSans text-Neutral200 rounded-sm   ${setActiveKmh ? "bg-Neutral600" : "bg-Neutral700"}`}
onClick={() => setShowActiveKmh(!setActiveKmh)}
>
Km/h {setActiveKmh ? <img src={checkArrow} alt='checkarrow'/> : null }
</button>

<button className={`w-auto h-6 text-center  inline-flex gap-27 text-sm ml-1 p-1 font-DMSans text-Neutral200 rounded-sm   ${setActiveMph ? "bg-Neutral600" : "bg-Neutral700"}`}
onClick={() => setShowActiveMph(!setActiveMph)}
>
Mph {setActiveMph ? <img src={checkArrow} alt='checkarrow'/> : null } 
</button>

</div>

{/* border of items */}

<div className="w-auto border border-neutral-300/30 mt-1 mb-1"></div>
{/*  Precipitation*/}
<div className='flex flex-col gap-2'>
<p className='text-xs text-Neutral300 mt-1 ml-2 font-DMSans'> Precipitation</p>
<button className={`w-auto h-6 text-center  inline-flex gap-10 tracking-tighter text-sm ml-1 p-1 font-DMSans text-Neutral200 rounded-sm   ${setActiveMM ? "bg-Neutral600" : "bg-Neutral700"}`}
onClick={() => setShowActiveMM(!setActiveMM)}
>Millimeters (mm) {setActiveMM ? <img src={checkArrow} alt='checkarrow'/> : null }</button>
<button className={`w-auto h-6 text-center  inline-flex gap-19 tracking-tighter text-sm ml-1 p-1 font-DMSans text-Neutral200 rounded-sm   ${setActiveINCH ? "bg-Neutral600" : "bg-Neutral700"}`}
onClick={() => setShowActiveINCH(!setActiveINCH)}
> Inches (in) {setActiveINCH ? <img src={checkArrow} alt='checkarrow'/> : null } </button>
</div>
</>

)}
</div>

</>
)}
</>
)}
export default Dropdown;