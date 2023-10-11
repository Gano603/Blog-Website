import Div1_thumbnail from "./Div1_thumbnail"
import DIv3_boxes from "./DIv3_boxes"

const Div3 = ({flex_rev , title , author , type}) => {
  return (
    <div>
        <div className="flex justify-between mb-7">
                <span className="text-2xl font-semibold">{title}</span>
                <span className="text-slate-400 hover:underline cursor-pointer">View All</span>
        </div>
        <div className={`mx-6 flex ${flex_rev}`}>
        <Div1_thumbnail 
            author={author} 
            category={type} 
            headline={"Web page layout 101: website anatomy every designer needs to learn"}
            description={"User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."}
            imageName={"chap6_ent_sprint-1920x1080 (2).png"}
            width={"w-10/12 h-[20rem]"} text_pad={"px-24"} />
        <div className="flex flex-wrap ">
            <DIv3_boxes type={"FREELANCING"} headline={"Affiliate Systems Suck, So We Rolled Our Own"}/>
            <DIv3_boxes type={"FREELANCING"} headline={"Affiliate Systems Suck, So We Rolled Our Own"}/>
            <DIv3_boxes type={"FREELANCING"} headline={"Affiliate Systems Suck, So We Rolled Our Own"}/>
            <DIv3_boxes type={"FREELANCING"} headline={"Affiliate Systems Suck, So We Rolled Our Own"}/>
        </div>
        </div>
    </div>
  )
}

export default Div3