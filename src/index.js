import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Main2 from "./components/Main2";
import Main from "./components/Main";
import Navbar from "./components/Navber";
import TripPage from "./components/Trippage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/detail">
                <Route path=":GUGUN_NM" element={<TripPage></TripPage>}></Route>
            </Route>
            <Route path="/detailNu">
                <Route path=":UC_SEQ" element={<DetailPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    //  <Route path="/" element={<Navbar />}>
    //             <Route index element={<Main />} >
    //             <Route path="/detail">
    //                 <Route
    //                     path=":UC_SEQ"
    //                     element={<DetailPage></DetailPage>}
    //                 ></Route>
    //             </Route>
    //         </Route>
    //         </Route >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
