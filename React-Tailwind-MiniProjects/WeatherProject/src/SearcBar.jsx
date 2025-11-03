const SearchBar = () => {
return(
<div className=" w-auto h-[370px] lg:h-[200px] flex flex-col lg:items-center lg:gap-2">
<div className='min-w-auto lg:w-1xl  mt-5 mb-5 '>
        <h2 className='font-BricolageGrotesque text-Neutral0 text-wrap text-center text-6xl lg:text-5xl lg:text-nowrap   tracking-tighter lg:tracking-normal p-4'> How's the sky looking today?</h2>
      
      </div>

<div className=" flex flex-col lg:flex-row min-w-auto lg:w-lg lg:gap-2 lg:items-center ">
 <input 
      className="text-Neutral0 h-12 bg-Neutral700 rounded-lg text-lg font-DMSans min-w-auto lg:w-full"
      type="text"  placeholder="Search for a place..."/>

  <button className="min-w-auto lg:w-[100px] h-10 bg-Blue500 rounded-lg cursor-pointer"> Search</button>

</div>


</div>




)

}
export default SearchBar;