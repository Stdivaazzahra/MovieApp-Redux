import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AllMovie from "./Pages/All_Movie/AllMovie";
// import Detail from "./Pages/Detail/Detail";
// import HomePage from "./Pages/HomePage/HomePage";
// import Navbar from "./Pages/Navbar/Navbar";
// import Search from "./Pages/Seacrh/Search";
// import Categories from "./Pages/Categories/Categories";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./App/Stores/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllMovie" element={<AllMovie />} />
          <Route path="/DetailPage/:id" element={<Detail />} replace />
          <Route path="/Search/:name" element={<Search />} replace />
          <Route path="/Categories/:genres" element={<Categories />} />
        </Routes>
      </BrowserRouter> */}
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
