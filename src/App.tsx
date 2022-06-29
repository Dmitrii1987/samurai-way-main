import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogues from './components/Dialogues/Dialogues';

function App() {
  return (
    <div className='app-wrapper'>
    <Header/>
    <Navbar/>
    <Dialogues/>
    {/* <Profile/> */}
    </div>
  );
}

export default App;
