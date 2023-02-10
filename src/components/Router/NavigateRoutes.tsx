import {Route, Routes} from "react-router-dom";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<div>home</div>}/>
      <Route path='/about' element={<div>about</div>}/>
      <Route path='*' element={<div>not found</div>}/>
    </Routes>
  )
}