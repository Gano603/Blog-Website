import Div3_thumb_text from './Div3_thumb_text'

const Div4 = () => {
    return (
        <div className='my-20'>
            <div className="flex my-10">
                <span className="text-2xl font-semibold">Random</span>
            </div>
            <div className='flex bg-white rounded-md overflow-hidden'>
                <div className=''>
                <Div3_thumb_text author={"TOMAS LAURINAVICIUS"} category={"TUTORIALS"} 
                headline={"Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"}
                description={"User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."}
                text_color={"text-black"}/>
                </div>
                <div>
                <img className={`bg-indigo-950`}
                    src={`src/assets/images/chap4_ent_sprint-1920x1080.png`}/>
                </div>
            </div>
        </div>
    )
}

export default Div4