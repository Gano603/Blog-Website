
const Div3_thumb_text = ({text_pad = "px-16" , text_color = "text-white" , head_text = "text-2xl", author , category , headline , description , position}) => {
    return (
        <div className={`${position} ${text_color} py-10 ${text_pad}`}>
            <p className="font-extralight text-slate-400">BY <span className="mx-2 text-black">{author}</span> IN <span className="mx-2 text-black">{category}</span></p>
            <p className={`${head_text} font-semibold my-3`}>{headline}</p>
            <p className="text-sm text-slate-500 font-extralight">{description}</p>
        </div>
    )
}

export default Div3_thumb_text