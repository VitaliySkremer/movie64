import {Header} from "./components/Header/Header";
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {NavigateRoutes} from "./components/Router/NavigateRoutes";

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <main className='main'>
          <NavigateRoutes/>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
