import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"



function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path={"*"} element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;

//import { BrowserRouter,  } from "react-router-dom";

//function App() {
 // return (
 //     <BrowserRouter>
  //      <h1>Hello World</h1>
  //    </BrowserRouter>
//  );
//}

//export default App;