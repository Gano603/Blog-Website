import Div3_thumb_text from "./Div3_thumb_text"

const Div6 = () => {
    return (
        <div className="my-24 mx-32 flex justify-between">
            <div className="w-[23rem]">
                <img className={`bg-indigo-950 rounded-md `}
                    src={`src/assets/images/Ch2-Design-Sprints-Final-1764x992.png`} />
                <Div3_thumb_text author={"TOMAS LAURINAVICIUS"} category={"TUTORIALS"} 
                headline={"Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"}
                description={"User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."}
                text_color={"text-black"} text_pad={"p-4"} head_text={"text-xl"}/>
            </div>
            <div className="rounded-md overflow-hidden w-[23rem]">
                <img className={`bg-indigo-950 rounded-md `}
                    src={`src/assets/images/designbetter_website_book_assets_illustrations_principlesofproductdesign_breaktheblackbox-1920x1081.png`} />
                <Div3_thumb_text author={"TOMAS LAURINAVICIUS"} category={"TUTORIALS"} 
                headline={"Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"}
                description={"User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."}
                text_color={"text-black"} text_pad={"p-4"} head_text={"text-xl"}/>
            </div>
        </div>
    )
}

export default Div6