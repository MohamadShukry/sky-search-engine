import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search"
import { Provider } from "react-redux";
import  Store  from "./store/Store";


function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route index  element={<Home/>}/> 
        <Route path="/search" element={<Search/>}/> 
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
