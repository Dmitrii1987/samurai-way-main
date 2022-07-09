import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogues from './components/Dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props:any) => {

    

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/messages/*" 
                        element={<Dialogues dialogues={props.dialogues} messages={props.messages} />}/>
                        <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                        {/* <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/> */}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        );
}


export default App;
