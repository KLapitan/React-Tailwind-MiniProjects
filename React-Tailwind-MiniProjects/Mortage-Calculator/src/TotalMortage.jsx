const TotalMortage =({value}) => {

return (
 <section className="bg-NSlate700 h-90 flex flex-col  w-auto  gap-2 lg:gap-4  lg:w-xl lg:h-auto lg:rounded-bl-[50px] lg:rounded-br-3xl lg:rounded-tr-3xl p-3 lg:p-4 border ">
          <header className="mt-2  flex flex-col gap-2 m-2">
            <p className="text-white font-JaKartaPlus text-2xl font-bold ">  Your results</p>
            <p className="text-NSlate300 font-JaKartaPlus text-wrap tracking-tighter text-sm lg:text-md w-xs">  Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</p>
          </header>
          <section className="border-3 border-t-Lime w-auto lg:w-[300px] rounded-lg h-auto p-2 bg-NSlate900 mr-2 ml-2">
          <div className=" flex flex-col gap-3 mb-2">
          
           <p className="text-NSlate500">Your monthly repayments</p>
            <p className="text-Lime text-5xl font-bold font-JaKartaPlus"> £{value.monthly}</p>
            
          
          </div>
          <hr className="border border-NSlate500"/>
          <div className=" flex flex-col gap-3 mt-2">

            <p className="text-NSlate300">
            Total you'll repay over the term
            </p>
               <p className="text-NWhite text-2xl font-bold font-JaKartaPlus"> £{value.totalRepayment}</p>
          </div>
          </section>




    </section>

)
}

export default TotalMortage