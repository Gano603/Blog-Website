import Div1_headlines from "./Div1_headlines"
import Div1_thumbnail from "./Div1_thumbnail"

const Div1 = () => {
    return (
        <div className="my-10 px-20 flex">
            <Div1_thumbnail 
            author={"JOHN DOE"} 
            category={"TECHNOLOGY"} 
            headline={"How to accept rejection gacefully - and use it to grow"}
            description={"User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."}
            imageName={"designbetter_website_book_assets_illustrations_principlesofproductdesign_cover-1920x1081.png"}/>
            <div className="flex flex-col mx-8 w-72">
                <div className="flex justify-between items-center px-5">
                    <h1 className="font-bold py-2 text-xl">New</h1>
                    <h4 className="text-slate-400 text-sm hover:underline cursor-pointer">View all New</h4>
                </div>
                <hr />
                <Div1_headlines date={"SEP 14,2023"} headline={"Something Happened her idk what happened hre"} />
                <Div1_headlines date={"SEP 14,2023"} headline={"Something Happened"} />
                <Div1_headlines date={"SEP 14,2023"} headline={"Something Happened"} />
                <Div1_headlines date={"SEP 14,2023"} headline={"Something Happened"} />
            </div>
        </div>
    )
}

export default Div1