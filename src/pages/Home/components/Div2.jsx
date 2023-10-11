import { useState } from "react"
import Div2_cards from "./Div2_cards"

const Div2 = () => {

    const list = [{
        img: "src/assets/images/designbetter_website_book_assets_illustrations_designleadershiphandbook_shapingdesignvision-1920x1080.png",
        desc: "UI design"
    }, { img: "src/assets/images/Cover-Design-Sprints-Final-1764x992.png", desc: "UX design" },
    { img: "src/assets/images/designbetter_website_book_assets_illustrations_principlesofproductdesign_fastfeedback-1920x1081.png", desc: "SEO" },
    { img: "src/assets/images/chap6_ent_sprint-1920x1080.png", desc: "Popular" },
    { img: "src/assets/images/designbetter_website_book_assets_illustrations_designthinking_empathize-1920x1081.png", desc: "Essentials" },
    {
        img: "src/assets/images/designbetter_website_book_assets_illustrations_designleadershiphandbook_shapingdesignvision-1920x1080.png",
        desc: "UI design"
    },
    {
        img: "src/assets/images/designbetter_website_book_assets_illustrations_designleadershiphandbook_shapingdesignvision-1920x1080.png",
        desc: "UI design"
    }]

    const [carouselPosition, setCarouselPosition] = useState(0);

    const showNextCards = () => {
        if(((list.length - 5) * -14) > ((carouselPosition-1)* 20))
        setCarouselPosition(((list.length-5) * -14)/20);
        else
        setCarouselPosition(carouselPosition - 1)
      };
    
      const showPreviousCards = () => {
        if(carouselPosition>=0)
        setCarouselPosition(0);
        else
        setCarouselPosition(carouselPosition + 1);

    };
    
    return (
        <div className="py-24">
            <div className="flex justify-between">
                <span className="text-2xl font-semibold">Reading Lists</span>
                <span className="text-second-color hover:underline cursor-pointer">View All</span>
            </div>
            <div className="flex">
                <div onClick={showPreviousCards} className="hover:cursor-pointer my-24 rounded-2xl border-[1px] p-2 w-max h-8 border-slate-500 flex items-center mx-1 translate-y-5">&lt;</div>
                <div className="flex justify-start w-full overflow-hidden py-8">
                    <div id='carousel' className="flex transition-transform duration-300 transform -translate-x-full" style={{ transform: `translateX(${carouselPosition * 20}%)` }}>
                        {list.map((iter, index) => (
                            <Div2_cards key={index} imageUrl={iter.img} desc={iter.desc} />
                        ))}
                    </div>
                </div>
                <div onClick={showNextCards} className="hover:cursor-pointer my-24 rounded-2xl border-[1px] p-2 w-max h-8 border-slate-500 flex items-center mx-1 translate-y-5">&gt;</div>

            </div>
        </div>
    )
}

export default Div2