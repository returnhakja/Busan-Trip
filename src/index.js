import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Main2 from "./components/Main2";
import Main from "./components/Main";
import ListPage from "./components/ListPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Detail" element={<DetailPage></DetailPage>} />
            <Route path=":GUGUN_NM" element={<ListPage></ListPage>} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
