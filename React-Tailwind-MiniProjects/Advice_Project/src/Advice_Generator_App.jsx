import { useState } from 'react'
import DiceIcon from './/assets/icon-dice.svg'
import Divider from './/assets/pattern-divider-desktop.svg'

const AdviceGenerator = () => {
const [advice,setAdvice]=useState('Click to generate Advice')
const [adviceID,setAdviceID]=useState(null)
const [error, setError] =useState(false)


const handleAdviceGenerate =async  () => {
await handleAdvice();
console.log(` ${advice}`);

}

const handleAdvice = async () => {

const AdviceUrl = "https://api.adviceslip.com/advice"

try {
   const response = await fetch(AdviceUrl);
    if(!response.ok){
      throw new Error("Network response was interrupted")
    }
    const data = await response.json()

      if(data.slip && data.slip.advice && data.slip.id){
      setError(false)
      setAdviceID(`${data.slip.id}`)
      setAdvice(`${data.slip.advice}`)
      }

} catch (error) {
  console.error("Erorr in fetching the advice:" , error)
  setError(true)
}

}

return(

<div className="max-w-lg min-w-md min-h-64 flex items-center gap-5 relative flex-col bg-N-Blue-900 p-6 rounded-xl">
  {/* container for advice id and advice quote */}
  <div className="  w-[400px] h-[200px] flex flex-col items-center justify-center gap-3 rounded-md">
    <p className="font-Monrope text-sm mt-5 font-bold text-PrimaryGreen300 tracking-widest">
      ADVICE #{adviceID}
    </p>
    <p className="font-Monrope text-[28px] font-bold text-center text-PrimaryBlue200">
      {advice}
    </p>
    {error && <p className="text-red-400">Try again</p>}
  </div>

  {/* divider */}
  <div className="w-[400px] h-[50px] flex items-center justify-center">
    <img src={Divider} alt="" className="w-full h-5 object-contain" />
  </div>

  {/* dice button */}
  <button
    className="bg-PrimaryGreen300 p-5 absolute top-[290px] rounded-full drop-shadow-lg 
     active:drop-shadow-PrimaryGreen300  transition-colors hover:cursor-pointer"
    onClick={handleAdviceGenerate}
  >
    <img src={DiceIcon} alt="Dice" className="w-5 h-5" />
  </button>
</div>

)
}

export default AdviceGenerator;


// todo 


// 1 initialize the cointainer for the advice 

//  get the advice via async

//  then create button


// finally the design