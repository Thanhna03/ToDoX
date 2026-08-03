import {Toaster} from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
   

  return (
    <>
      <Toaster richColors /> 

      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element ={ < Home /> }
          />

          <Route
            path="*" //cac duong dan khac 
            element ={ < NotFound /> }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
