
const Div1_headlines = ({date , headline}) => {
  return (
    <div className="flex flex-col my-3 cursor-pointer">
        <span className="text-slate-400 truncate overflow-ellipsis w-full">{date}</span>
        <span className="hover:text-second-color font-semibold overflow-hidden whitespace-nowrap">{headline}</span>
        <hr className="w-4/5 align-middle"/>
    </div>
  )
}

export default Div1_headlines