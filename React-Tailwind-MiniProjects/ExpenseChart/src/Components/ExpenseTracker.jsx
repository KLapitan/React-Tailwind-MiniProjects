import { BarChart, Bar,Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const exampleData =[
  {"day": "mon","amount": 17.45},
  {"day": "tue","amount": 34.91},
  {"day": "wed","amount": 52.36},
  {"day": "thu","amount": 31.07},
  {"day": "fri","amount": 23.39 },
  {"day": "sat","amount": 43.28},
  {"day": "sun","amount": 25.48}
]

const ExpenseTracker = () => {

return(
<section className="w-full  h-auto  sm:items-center lg:items-center flex flex-col gap-5 p-2">

<section className="w-auto sm:w-sm md:w-md lg:w-md h-24   rounded-2xl  bg-Red500 p-2 flex flex-row justify-between items-center mt-5">
    <div className=" ml-2" >

    <p className="text-Red100 text-md ">My Balance</p>
    <p className="text-Red100 text-2xl font-bold">$921.48</p>

    
    </div>
    <div className="mr-4">

    <svg width="60" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
    
    </div>
</section>

    <div className="w-full sm:w-sm md:w-md lg:w-md  h-auto  bg-white   p-4 rounded-2xl">

    <header>
        <h2 className="text-xl text-Brown950 font-bold font-DmSans">Spending - Last 7 days</h2>
    </header>
    
        <section className="w-full sm:w-[340px] md:w-[410px] lg:w-[420px] h-[300px] place-items-center  p-2  ">
        <ResponsiveContainer width="100%" height="100%" >
        <BarChart data={exampleData}>
        <XAxis dataKey="day" axisLine={false} tickLine={false}/>
        <YAxis hide/>
        
              <Bar dataKey="amount">
        {exampleData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.day === "wed" ? "#76B5BC" : "#EC755D"} // 👈 only Wednesday is different
            radius={[3, 3, 3, 3]}
          />
        ))}
        </Bar>
        </BarChart>
        
        
        
        
        </ResponsiveContainer>
          
        
        </section>


        <div className="border w-full sm:w-[340px] md:w-full lg:w-full border-Brown400 ml-1" ></div>


      <section className="w-auto flex flex-row mt-2 justify-between items-center">
      <div className=" flex flex-col gap-1 p-1 mt-1 ">
      <p className="text-Brown400 text-md tracking-tight font-DmSans leading-3">Total this month</p>
      <p className="text-Brown950  font-DmSans font-bold text-3xl ">$478.33</p>
      </div>
      <div  className="flex flex-col gap-1  p-1 text-right mt-1">
      <p className="text-Brown950 leading-3 text-sm font-bold font-DmSans"> +2.4%</p>
      <p className="text-Brown400 font-DmSans text-sm"> from last month</p>
      </div>
      </section>

    
    </div>


</section>

)
}
export default ExpenseTracker;