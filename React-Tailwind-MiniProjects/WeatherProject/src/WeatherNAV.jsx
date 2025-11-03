  import { useState } from 'react'
import Logo from './assets/images/logo.svg'
 import Dropdown from './Dropdown'
 const WeatherNAV = () => {

 const [showContentUnits ,setShowContentUnits] =useState(false)
const handleUnitsContent = () => {
setShowContentUnits(!showContentUnits)
}
 return (
 <>
    <nav className='w-full  flex flex-row justify-between items-center p-4 '>
      <div className=' w-auto ml-79 '>
      <img 
      className='w-30 h-10'
      src={Logo} alt="Weather Logo" />
    </div>
  

     <Dropdown onDropdown={handleUnitsContent} showContent={showContentUnits}/>
    </nav>
 

 <div>
 
 
 
    
 
 </div>

 
 
 </>
 
 
 )
 
 }
 export default WeatherNAV