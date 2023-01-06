import logo from "./logo.svg";
import "./App.css";
// import PreLoader1 from "./components/PreLoader1";
// import PreLoader2 from "./components/PreLoader2";
import PreLoader3 from "./components/PreLoader3";
// import Home from "./pages/Home";
// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PreLoader1 /> */}
        {/* <PreLoader2 /> */}
        <PreLoader3 />
      </header>
    </div>
  );
  // return (
  //   // <BrowserRouter>
  //   // <div className="App">
  //     <BrowserRouter>
        
  //       <Routes>
  //         <Route exact path="/" component={PreLoader3}></Route>
  //         <Route path="/home" component={Home}></Route>
  //         </Routes>
        
  //     </BrowserRouter>
  //   // </div>
  //   // </BrowserRouter>
  // );
}

export default App;
