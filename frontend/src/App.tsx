import "./index.css"
import SearchBar from "./features/components/SearchBar"
import GuessBox from "./features/components/GuessBox"



function App() {


return(
  <div className="position-fixed min-h-screen bg-[#060816] flex flex-col items-center justify-center">
    <SearchBar />
    {1===1 ? <div>Hello</div> : <GuessBox />}
    <GuessBox />
  </div>
)

}

export default App