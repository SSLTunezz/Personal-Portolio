import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { Hacker } from "./Pages/Hacker"
import { Yellow } from "./Pages/Yellow"



function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path={"hacker"} element={<Hacker />} />
              <Route path={"Yellow"} element={<Yellow /> } />
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