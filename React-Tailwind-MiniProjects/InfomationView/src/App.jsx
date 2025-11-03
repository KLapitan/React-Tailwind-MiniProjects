import FAQAccordion from "./FAQAccordion"

const App = () => {
return (
<div className="w-full h-screen  border overflow-x-hidden bg-Purple100 ">
<div className="w-full h-[230px] lg:h-[270px] bg-cover bg-no-repeat bg-center 
bg-[url('/images/background-pattern-mobile.svg')] md:bg-[url('/images/background-pattern-desktop.svg')]
lg:bg-[url('/images/background-pattern-desktop.svg')]
  relative "> 
<FAQAccordion/>
</div>




</div>



)

}
export default  App