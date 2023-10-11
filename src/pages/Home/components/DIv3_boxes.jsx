
const DIv3_boxes = ({type , headline}) => {
  return (
    <div className="flex flex-col w-[48%] bg-white shadow-lg px-4 py-6 m-1 rounded-md hover:scale-110 transition duration-500">
        <span className="text-slate-400 text-sm py-2">{type}</span>
        <span className="font-semibold text-sm">{headline}</span>
    </div>
  )
}

export default DIv3_boxes