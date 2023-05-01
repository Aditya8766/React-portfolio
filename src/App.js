import { useEffect, useState } from 'react';
import profile from"./data/profile.json";
import { Routes, Route } from "react-router-dom";
import Layout from './components/routes/Skills';
import Home from './components/routes/Home';
import Blogs from './components/routes/Blogs';
import Header from './components/core-components/Header';
import React from 'react';
import Contacts from './components/routes/Contacts';
import Footer from './components/core-components/Footer';
function App() {
  const [profileData,setProfileData]=useState([]);
  const getProfile=()=>{
    return new Promise((resolve) => {
      resolve(profile);
    });
  }
  const processData=(Promise)=> {
    Promise.then((data) => {
      setProfileData(data)
      console.log("data:::",typeof data)
    }).catch(Error);
  }
  useEffect(()=>{
    processData(getProfile());
  },[]);

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="" element={ <Home profileData={profileData}/> } exact></Route>
          <Route path="/about" element={<Blogs/>}></Route>
          <Route path="/skills" element={<Layout/>}></Route>
          <Route path="/contact me" element={<Contacts/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;