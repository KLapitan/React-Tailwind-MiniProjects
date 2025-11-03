import { useState } from "react";

const FAQAccordion = () => {
const [showContent1,setShowContent1]=useState(false)
const [showContent2,setShowContent2]=useState(false)
const [showContent3,setShowContent3]=useState(false)
const [showContent4,setShowContent4]  =useState(false)
const handleContent1 =() => {
setShowContent1(!showContent1)
}
const handleContent2 =() => {
setShowContent2(!showContent2)
}
const handleContent3 =() => {
setShowContent3(!showContent3)
}

const handleContent4 =() => {
setShowContent4(!showContent4)
}


return (

<div className=" absolute  top-20 left-4 sm:top-20 sm:left-24 p-3 w-[290px]  min-h-96  md:left-31 lg:top-35 lg:left-130  md:w-lg lg:w-xl   md:min-h-80  bg-white  rounded-lg">
{/* background image */}


{/* header  */}

  <div className=" w-full h-20 flex flex-row gap-2  items-center">
    <img
      className="ml-2 w-10 h-6"
     src="/images/icon-star.svg" alt="star icon" />
    <h2 className="font-Worksans font-bold text-Purple950 text-2xl lg:text-5xl">FAQs</h2>
  </div>
  
  {/* infos */}
  <div className="flex flex-col gap-2 lg:gap-0">
    {/* question 1 */}
      <section className="lg:p-4" >
      {/* question and button  */}
      <div className="flex flex-row justify-between items-center mt-2 lg:mt-0">

      {/* questions */}
      <div className=" w-[200px] md:w-full  lg:w-full">
        <h2 className="text-Purple950 font-bold text-sm text-wrap text-left mb-2  lg:text-lg hover:text-purple-400  cursor-pointer font-Worksans">What is Frontend Mentor and how will it help me?</h2>
      </div>
      {/* button*/}
      <div>
      {showContent1 ?
        <button className="cursor-pointer" onClick={handleContent1}><img src='/images/icon-minus.svg'/></button> :
        <button  className="cursor-pointer" onClick={handleContent1}><img src='/images/icon-plus.svg'/></button>
      }
      </div>
      </div>


        {/* details */}
        {showContent1 && (
      <div className="border mb-3 mt-2  w-full md:w-md md:h-25 lg:w-lg h-40  lg:h-25 text-wrap  ">
      <p className="text-Pbase lg:text-lg font-Worksans  lg:font-normal lg:leading-6  lg:text-wrap lg:tracking-tighter text-Purple600">Frontend Mentor offers realistic coding challenges to help devlopers improve their frontend coding skill with projects in HTML,CSS and Javascript. It's suitable for all levels and ideal for portfolio building</p>
      
      </div>
        )}

        {/* divider */}
      
      </section>
 <div className="border-1 border-Purple100 w-full lg:w-[520px] mt-2 lg:ml-3 lg:mt-0">
      {/* <hr className="border-1 border-purple600" /> */}
        </div>


      {/* question 2 */}
         <section className="lg:p-4 " >
      <div className="flex flex-row justify-between items-center lg:mt-0 ">
      <div className="  w-[200px] md:w-full  lg:w-full">
        <h2 className="text-Purple950 font-bold text-sm text-wrap text-left mt-2 mb-2 lg:mb-0 lg:text-lg hover:text-purple-400  cursor-pointer  font-Worksans">Is Frontend Mentor free?</h2>
      </div>
      {/* star minus-positive */}
      <div>
      {showContent2 ?
        <button className="cursor-pointer" onClick={handleContent2}><img src='/images/icon-minus.svg'/></button> :
        <button className="cursor-pointer" onClick={handleContent2 }><img src='/images/icon-plus.svg'/></button>
      }
      </div>
      </div>
        {/* details */}
        {showContent2 && (
      <div className=" mt-4 w-full lg:w-lg h-40 lg:h-25 md:h-25 lg:mt-2 text-wrap  ">
      <p className="text-Pbase font-Worksans text-lg  text-Purple600 font-normal lg:text-md lg:leading-6">
  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.</p>
      </div>
        )}
      </section>
    <div className="border-1 border-Purple100 w-full lg:w-[520px]  mt-2 lg:ml-3  lg:mt-0">
      {/* <hr className="border-1 border-purple600" /> */}
        </div>
  


      {/* question 3 */}
         <section className="lg:p-4 " >
      <div className="flex flex-row justify-between items-center">
      <div className="  w-[200px] md:w-full  lg:w-full">
        <h2 className="text-Purple950 font-bold text-sm text-wrap text-left mb-2 mt-2 lg:text-lg hover:text-purple-400  cursor-pointer  font-Worksans">
  Can I use Frontend Mentor projects in my portfolio?</h2>
      </div>
      {/* star minus-positive */}
      <div>
      {showContent3 ?
        <button className="cursor-pointer" onClick={handleContent3}><img src='/images/icon-minus.svg'/></button> :
        <button className="cursor-pointer" onClick={handleContent3}><img src='/images/icon-plus.svg'/></button>
      }
      </div>
      </div>
        {/* details */}
        {showContent3 && (
      <div className=" mt-4 w-full  md:h-20 lg:w-lg h-40 lg:h-20 lg:mt-2   text-wrap tracking-tight ">
      <p className="text-Pbase  text-Purple600 lg:text-md">
  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!
</p>
      
      </div>
        )}
      </section>
         <div className="border-1 border-Purple100 w-full lg:w-[520px]  mt-2 lg:ml-3  lg:mt-0">
      {/* <hr className="border-1 border-purple600" /> */}
        </div>



       {/* question 4 */}
         <section className="lg:p-4" >
      <div className="flex flex-row justify-between items-center">
      <div className="  w-[200px] md:w-full  lg:w-full ">
        <h2 className="text-Purple950 font-bold  font-Worksans text-sm text-wrap text-left mb-2 mt-2 lg:text-lg  lg:-tracking-tighter hover:text-purple-400  cursor-pointer ">
   How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
      </div>
      {/* star minus-positive */}
      <div>
      {showContent4 ?
        <button className="cursor-pointer" onClick={handleContent4}><img src='/images/icon-minus.svg'/></button> :
        <button className="cursor-pointer" onClick={handleContent4}><img src='/images/icon-plus.svg'/></button>
      }
      </div>
      </div>
        {/* details */}
        {showContent4 && (
      <div className=" mt-4 w-full h-40 md:h-20 lg:h-20  text-wrap tracking-tight ">
      <p className="text-Pbase  text-Purple600 ">
  The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.
</p>
      
      </div>
        )}
      </section>
   
  </div>


</div>

)

}

export default FAQAccordion;