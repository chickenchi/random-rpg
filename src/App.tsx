import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { RecoilRoot } from "recoil";
import Main from "./components/main/Main";
import End from "./components/end/End";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
