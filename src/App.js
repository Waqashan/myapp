import React from "react";
import { Route, Routes } from "react-router-dom";

import LogIn from "./components/Login/loginPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignUp from "./components/Signup/signUp";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import ErrorPage from "./pages/Errorpage/errorPage";
import Cards from "./components/card/card";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/card" element={<Cards />} />
        </Route>
        <Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

   
    </>
  );
}

export default App;