import Div1 from "./components/Div1"
import Div2 from "./components/Div2"
import Div3 from "./components/Div3"
import Div4 from "./components/Div4"
import Div5 from "./components/Div5"
import Div6 from "./components/Div6"

const Home = () => {
  return (
    <div>
      <Div1 />
      <Div2 />
      <Div3 title={"Popular"} author={"TOMAS LAURINAVICIUS"} type={" DESIGN PROCESS"}/>
      <Div4 />
      <Div5 />
      <Div6 />
    </div>
  )
}

export default Home