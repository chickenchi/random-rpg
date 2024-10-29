import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { RecoilRoot } from "recoil";
import Main from "./components/main/Main";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
