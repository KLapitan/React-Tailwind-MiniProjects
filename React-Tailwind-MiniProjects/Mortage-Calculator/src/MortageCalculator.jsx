import { useState } from "react";
import TotalMortage from "./TotalMortage";
import EmptyResults from "./EmptyResults";
const MortageCalculator = () => {


const [value , setValue] =useState({
  amount:"",
  term:"",
  interest:"",
   mortgageType:"repayment",
monthly:"",
totalRepayment:""


})


const [showTotal ,setShowTotal]=useState(false)

// const [setError,setShowError]=useState(true)

const handleInput=(e) => {
const {name , value , type ,checked} = e.target;

setValue((prev) => ({
...prev,
 [name]: type === 'checkbox' ? checked : type === "number" ? Number(value) : value,

}))

}

const handleCalculateRepayments = (e) => {
e.preventDefault()

if(!value.amount || !value.term || !value.interest || !value.mortgageType){

// setError(true)
}
const  monthlyResults = calculateMortgage(
  Number(value.amount),
  Number(value.term),
  Number(value.interest),
  value.mortgageType

)

const totalMonths = Number(value.term) *12 ;
const totalPayment = (monthlyResults * totalMonths).toFixed(2)


  setValue((prev) => ({...prev , monthly:monthlyResults , totalRepayment:totalPayment}))

  setShowTotal(true)
    
  }


 const calculateMortgage  = (amount ,term , interest, type) => {

 if(!amount || !term || !interest) return 0;



 const monthlyInterest  = interest /100 / 12;
 const totalMonths = term * 12

if(type === "interestOnly") {
const totalInterest = amount * monthlyInterest


return totalInterest.toFixed(2)

}


// reapayment formula
 if(monthlyInterest === 0 ) return amount / totalMonths



  const monthlyPayment =
    (amount * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
    (Math.pow(1 + monthlyInterest, totalMonths) - 1);

    
console.log({ amount, term, interest, monthlyInterest, type });

return monthlyPayment.toFixed(2);



   }

const handleInputClear = () => {
setValue({
  amount:"",
  term:"",
  interest:"",
  mortgageType:"repayment",
 monthly:"",
 totalRepayment:"",



})
setShowTotal(false)
}


return (
<>
<section className="w-auto  h-auto  bg-NSlate100 lg:h-screen lg:place-items-center lg:place-content-center">

{/* holding of the two sections */}
<div className="h-auto flex flex-col lg:flex-row  bg-NWhite lg:w-3xl    lg:rounded-3xl ">
<section className="lg:p-3 lg:w-md  md:w-lg sm:w-sm border ">
      <header className="h-15 place-content-center mb-2 p-2  sm:flex  sm:flex-row md:flex  md:flex-row lg:flex  lg:w-sm lg:flex-row items-center justify-between">
          <h2 className="text-NSlate900 text-xl font-bold font-JaKartaPlus">Mortgage Calculator</h2>
          <button  onClick={handleInputClear} className="text-NSlate700 underline underline-offset-4 cursor pointer">Clear All</button>

      </header>

    <form onSubmit={handleCalculateRepayments} className="flex flex-col gap-2 p-2 border lg:w-sm">

    {/* amount */}
      <label className="text-PrimarySize text-NSlate700 font-JaKartaPlus font-medium  w-auto sm:w-sm relative group ">

          Mortgage Amount

  <span className="absolute left-0 z-0 top-8 bg-NSlate100 w-10  h-[47px] text-md text-center p-1 font-bold text-NSlate900 rounded-tl-lg rounded-bl-lg leading-9 font-JaKartaPlus group-focus-within:bg-Lime ">£</span>
        <input 
        className="w-full lg:w-xs  relative z-10 h-12 rounded-lg  border-NSlate900 border mt-2 placeholder:bg-NSlate100  pl-11 leading-0 pr-3 py-2  text-md focus:border-Lime outline-none"
        name="amount"
        type="number"  
        value={value.amount}
        onChange={handleInput}
         />

      </label>

      <div className="lg:flex lg:flex-row  w-auto sm:w-xs sm:flex sm:flex-row sm:gap-3 lg:w-xs">

      {/* term */}
       <label className="text-PrimarySize text-NSlate700 font-JaKartaPlus font-medium  w-auto  relative group">

          Mortgage Term
          <span className="absolute left-60 sm:left-30  lg:left-23 top-8 z-0  w-16 rounded-tr-lg rounded-br-lg  bg-NSlate100 text-center  leading-10   h-[47px] text-NSlate900 font-bold font-JaKartaPlus group-focus-within:bg-Lime ">years</span>
        <input
        className="w-full sm:w-[185px] lg:w-[155px] relative z-10 h-12 border border-NSlate900 rounded-lg  pr-16 pl-1 mt-2  focus:border-Lime outline-none"
        name="term"
        value={value.term}
        onChange={handleInput}
         type="number"   />

      </label>


      {/* interest */}
      <label className="text-PrimarySize text-NSlate700 font-JaKartaPlus font-medium  w-auto  relative group">
        Interest Rate
        <span className="absolute left-64 sm:left-34  lg:left-27  top-8 z-0  w-12 rounded-tr-lg rounded-br-lg  text-NSlate900 text-md   bg-NSlate100 h-[47px] text-center leading-11 group-focus-within:bg-Lime">%</span>
        <input 
          className="w-full lg:w-[155px]  sm:w-[185px] relative z-10 h-12 border border-NSlate900 rounded-lg  pr-16 pl-1 mt-2  focus:border-Lime outline-none"
        name="interest"
        value={value.interest}
        type="number" 
        onChange={handleInput}
        />
      
      </label>
      </div>

     <fieldset className="flex flex-col  lg:w-xs md:w-sm  ">

         <legend className="font-medium font-JaKartaPlus text-NSlate700 mb-2">Mortgage Type</legend>

         {/* repayment */}

          <label htmlFor="repayment"  className=" border-NSlate900 h-[47px] rounded-lg w-auto  sm:w-xs lg:w-xs px-4 flex items-center cursor-pointer transition-colors duration-200 has-checked:bg-Lime has-checked:border-Lime  mb-2"> 
        <input 
        className="accent-NSlate900 ring-NSlate900 ml-5 scale-150 cursor-pointer  checked:border-Lime  checked:accent-Lime checked:ring-Lime"
        name="mortgageType"
        value="repayment"
        checked={value.mortgageType === "repayment"}
        type="radio"  
        onChange={handleInput}
         />
          <span className="text-NSlate900 font-bold font-JaKartaPlus ml-3">Repayment</span>
          </label>

          {/* interest only */}
          <label htmlFor="interestOnly"  className=" border border-NSlate900 h-[47px] rounded-lg w-auto sm:w-xs  lg:w-xs px-4 flex items-center cursor-pointer transition-colors duration-200 has-checked:bg-Lime has-checked:border-Lime  " 
>
        <input 
   className="accent-NSlate900 ml-5 scale-150 cursor-pointer   checked:border-Lime  checked:accent-Lime checked:ring-Lime  transition-colors duration-200  "

         name="mortgageType"
         value="interestOnly"
         checked={value.mortgageType === "interestOnly"}
        type="radio" 
        onChange={handleInput}
          />
          <span className="text-NSlate900 font-bold font-JaKartaPlus ml-3 ">Interest Only</span>
          </label>

      </fieldset> 
    
        <button type="submit" className="flex flex-row bg-Lime w-auto sm:w-sm h-[47px] rounded-full items-center justify-center gap-2  text-PrimarySize  font-JaKartaPlus font-bold text-NSlate900 mt-2 lg:w-[280px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg>
        
        Calculate Repayments</button>


    </form>
</section>

  {showTotal ? (
   <TotalMortage value={value}/>
    
    ):( 
    <EmptyResults/>
     
    )}
</div>
</section>
 

</>




)

}

export default MortageCalculator;