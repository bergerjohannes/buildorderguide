import { BrowserRouter, Route, Routes } from "react-router-dom"
import BuildsOverview from "./Builds/BuildsOverview"
import BuildView from "./Builds/BuildView"


function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<BuildsOverview />} />
        <Route path='/build/:buildId' element={<BuildView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App