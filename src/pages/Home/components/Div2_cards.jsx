
const Div2_cards = ({imageUrl , desc}) => {
  return (
    <div className="mx-3 cursor-pointer flex flex-col items-center">
        <img className="min-w-[180px] h-52 rounded-lg hover:scale-[1.1] transition duration-500" src={imageUrl} />
        <p className="active:text-second-color my-2 font-medium">{desc}</p>
    </div>
  )
}

export default Div2_cards