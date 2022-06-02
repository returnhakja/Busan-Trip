import "./App.css";
import React from "react";
import DetailPage from "./components/DetailPage";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Main2 from "./components/Main2";

function App() {
    return (
        <div>
            <Main></Main>
            <Main2></Main2>
            {/* <DetailPage></DetailPage> */}
            <Footer></Footer>
        </div>
    );
}

export default App;
