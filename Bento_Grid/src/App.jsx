import FiveStars from './assets/images/illustration-five-stars.webp'
import CreatePost from './assets/images/illustration-create-post.webp'
import SchedulePost from './assets/images/illustration-schedule-posts.webp'
import AiChat from './assets/images/illustration-ai-content.webp'
import FollowerChart from './assets/images/illustration-grow-followers.webp'
import MultiplePlatform from './assets/images/illustration-multiple-platforms.webp'  
import Calendar from './assets/images/illustration-consistent-schedule.webp'
import Avatar from './assets/images/illustration-audience-growth.webp'

const App = () => {
return (
<div className="w-full h-screen  overflow-scroll lg:h-screen flex items-center justify-center">

    <div className=" grid grid-cols-1 auto-rows-[80px] lg:p-4 lg:grid-cols-4 lg:auto-rows-[140px] w-full lg:max-w-auto lg:h-lvh  h-screen  gap-5 p-5 ">




       {/* div 1  */}
     <div className="shadow-lg order-7 lg:order-1 lg:p-3 col-span-1 row-span-3 lg:col-span-1 lg:row-span-3  bg-Yellow-100 rounded-lg">

 <p className=' text-3xl p-4  ml-4 mt-5 lg:text-5xl tracking-tighter lg:mt-10 lg:p-4 font-medium font-Primary lg:text-wrap text-black'>Create and schedule content <span className='text-Purple-500 '><i>quicker.</i></span></p> 
      <img className="ml-4 mt-4 lg:place-self-center lg:w-[280px] h-[110px]" src={CreatePost} alt="create post" />


    </div> 
    
 {/* div -2  */}
   <div className=" shadow-lg order-1 lg:order-2 p-2 col-span-1 row-span-3   lg:col-span-2 lg:row-span-2  bg-Purple-500 rounded-lg">
     <h2 className="text-5xl text-wrap  text-center p-4 leading-11 lg:leading-15 lg:text-7xl  lg:text-wrap lg:text-center lg:p-6  font-Primary font-normal text-White ">Social Media <span className="text-Yellow-500">10x</span> <i>Faster</i> with AI</h2>
    
      <img src={FiveStars} alt="five stars" className="mx-auto w-50 h-7  lg:w-52 lg:h-10"/>
  <p className='text-xl text-White text-center lg:text-[19px] font-Primary'>Over 4,000 5-star reviews</p>

   
   </div>
  {/* div-3 */}
    
    <div className="shadow-lg order-4 lg:order-3 lg:p-6  row-span-5   lg:row-span-4 bg-BGPurple-100 rounded-lg">
     <p className='text-2xl  text-center lg:text-left p-4 font-medium mt-2 lg:font-medium lg:ml-6  lg:text-4xl lg:p-2 lg:text-wrap lg:tracking-tightest'>Schedule to social media.</p>
     
     <img src={SchedulePost} alt="Schedule post" className="w-75 mt-2 place-self-center lg:w-full lg:h-[350px] lg:ml-60  lg:[clip-path:inset(0_110px_0_0)] rounded-lg"/> 

<div className='  w-70 mt-4 ml-8 '>
 <p className='text-lg tracking-tight text-center lg:text-left   text-wrap font-Primary'> Optimize post timings to publish content at the perfect time for your audience.</p>
</div>
    </div> 
   
    
  
     {/* div-4 */}
    <div className="shadow-lg order-2 lg:order-4  col-span-1 row-span-2 lg:col-span-1 lg:row-span-2 bg-White rounded-lg  lg:shadow-lg p-4 flex flex-col gap-1">
<div className='w-full '>
<img src={MultiplePlatform} alt="multiPlatform" 
className=' lg:h-18 lg:w-full  lg:ml-10 lg:[clip-path:inset(0_68px_0_0)]   ' />

</div>
<div className='w-full'>
      <p className='text-2xl lg:text-5xl p-2 font-Primary tracking-tighter font-medium'>Manage multiple accounts and platforms.</p>      
</div>
    </div>

     {/*div 5  */}
     <div className="shadow-lg order-3 lg:order-5  col-span-1 row-span-3  lg:col-span-1 lg:row-span-2 bg-Yellow-500 rounded-lg lg:flex lg:flex-col  lg:items-center lg:gap-10 lg:p-4 lg:shadow-lg ">
      <div className=' w-full h-20 p-4 mb-7 lg:mb-10 lg:w-60 lg:ml-[-36px]'>
      
      <p className='ml-2 text-2xl  lg:text-4xl font-Primary font-medium lg:tracking-tighter '>Maintain a consistent posting schedule.</p>
      </div>

      <div className='w-63 mt-4 ml-4 h-[160px] lg:w-70 lg:h-10 lg:p-2 lg:ml-[-5px]'>
        <img src={Calendar} alt="consisten schdule"
        className='[clip-path:inset(0_0_20px_0)] lg:w-70 lg:h-40 lg:[clip-path:inset(0_0_61px_0)]'
        />
      </div> 
     </div>
    
     {/* div 6 */}
     <div className="shadow-lg order-8 flex flex-col gap-3 lg:order-6 px col-span-1 row-span-4 lg:col-span-1 lg:row-span-3 bg-Yellow-500 rounded-lg ">
     
          <p className='text-3xl  p-4 ml-3 mt-2 leading-7 lg:leading-12 lg:text-6xl lg:tracking-tighter  font-Primary lg:p-4 lg:text-wrap font-medium'>Write your content using AI.</p>

          <img src={AiChat} className='ml-6 w-60 h-60  lg:w-70 lg:h-47 lg:justify-self-center  lg:mt-10 '/>
     </div>
    
     {/* div7 */}
       <div className="shadow-lg order-6 lg:order-7 p-2 lg:p-3 col-span-1 row-span-3 lg:col-span-1 lg:row-span-2 bg-White rounded-lg  lg:shadow-lg lg:flex lg:flex-col lg:gap-6 ">
       <div className='flex flex-col gap-4  p-3 '>
       <p className='text-5xl lg:text-5xl font-Primary font-medium'>&gt;56% </p>
       <p className='text-xl lg:text-2xl font-Primary font-normal'> faster audience growth</p>
       </div>
       <div className='mt-5 ml-3 lg:w-60 lg:ml-2  '>
       <img src={Avatar} alt="audience growth"
        className='w-50 h-20 lg:w-70 lg:h-20'
       />
       </div>
       </div>
      
      {/* div 8 */}
      <div className="shadow-lg order-5 lg:order-8  col-span-1 row-span-4 flex flex-col items-center p-6 gap-5 lg:col-span-2 lg:row-span-2 lg:p-2 bg-Purple-500  rounded-lg lg:flex lg:flex-row  lg:justify-between lg:items-center mb-2">
      {/* chart of followers */}
      <div className='w-60 lg:w-80 lg:h-68 lg:m-2'>
        <img src={FollowerChart}  className=' object-full w-full  h-full '/>
      </div>

      {/* description  */}
      <div className=' w-50 mt-2 lg:w-85 lg:h-50 lg:m-2'>
      <p className='text-2xl  text-center  tracking-normal lg:text-5xl text-white font-Primary '>Grow followers with non-stop content.</p>
      </div>
       
      </div>

  
    
    </div>

</div>


)

}
export default App



// pc layout 
//  1 2 2 3
//  6 4 5 3
//  6 7 8 8
   

// mobile layout

// 2 
//  4 
// 5 
// 3
// 8
// 7
// 1
// 6


// const DivSection = [
//   {number:1 , style:"order-7 lg:order-1 p-2 col-span-1 row-span-3 lg:col-span-1 lg:row-span-3  bg-Yellow-100 rounded-lg"},
//   {number:2, style:"order-1 lg:order-2 p-2 col-span-1 row-span-2  lg:col-span-2 lg:row-span-2 border bg-Purple-500 rounded-lg"},
//   {number:3, style:"order-4 lg:order-3 p-2 col-span-1 row-span-2 lg:col-span-1 lg:row-span-5 bg-BGPurple-100 rounded-lg"},
//   {number:4, style:"order-2 lg:order-4 p-2 col-span-1 row-span-2 lg:col-span-1 lg:row-span-3 bg-White rounded-lg border"},
//   {number:5,style:"order-3 lg:order-5 p-2 col-span-1 row-span-2 lg:col-span-1 lg:row-span-3 bg-Yellow-500 rounded-lg"},
//   {number:6,style:"order-8 lg:order-6 p-2 col-span-1 row-span-2 lg:col-span-1 lg:row-span-4 bg-Yellow-500 rounded-lg"},
//   {number:7,style:"order-6 lg:order-7 p-2 col-span-1 row-span-2 lg:col-span-1 lg:row-span-2 bg-White rounded-lg border"},
//   {number:8,style:"order-5 lg:order-8 p-2 col-span-1 row-span-2 lg:col-span-2 lg:row-span-2  bg-Purple-500  rounded-lg"},
// ]