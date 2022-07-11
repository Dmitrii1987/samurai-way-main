import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogues from './components/Dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import state from './Redux/state';




const App = () => {

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/messages/*"
                        element={<Dialogues state={state.dialoguesPage} />} />
                    <Route path="/profile"
                        element={<Profile state={state.profilePage} />} />
                    {/* <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/> */}
                </Routes>
            </div>
        </div>
    );
}
export default App;
