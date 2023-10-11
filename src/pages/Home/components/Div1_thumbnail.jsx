
const Div1_thumbnail = ({author , category , headline , description , imageName , width = "w-full" , text_pad = "px-16"}) => {
  return (
    <div>
        <div className="overflow-hidden w-[40rem] h-[21rem] flex justify-center relative">
                <img className={`bg-indigo-950 ${width} rounded-lg`}
                    src={`src/assets/images/${imageName}`}/>
                    <div className={`absolute text-white py-10 ${text_pad}`}>
                        <p className="font-extralight">BY <span className="mx-2">{author}</span> IN <span className="mx-2">{category}</span></p>
                        <p className="text-2xl font-semibold my-3">{headline}</p>
                        <p className="text-sm font-extralight">{description}</p>
                    </div>
            </div>
    </div>
  )
}

export default Div1_thumbnail