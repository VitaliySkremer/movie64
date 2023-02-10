import {Route, Routes} from "react-router-dom";
import {Top} from "../../Pages/Top";
import {About} from "../../Pages/About";
import {Popular} from "../../Pages/Popular";
import {SearchFilm} from "../../Pages/SearchFilm";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Top/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/search' element={<SearchFilm/>}/>
      <Route path='*' element={<div>not found</div>}/>
    </Routes>
  )
}