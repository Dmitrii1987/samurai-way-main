import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogues from './components/Dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import state, { RootStateType } from './Redux/store';
import Friends from './components/Navbar/Friends';

const App = (props: any) => {

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/messages/*"
                        element={<Dialogues store={props.store} />} />
                    <Route path="/profile"
                        element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        // updateNewPostText={props.updateNewPostText} 
                        />} />
                    {/* <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/friends" element={<Friends name={props.name} id={0} />} /> */}
                </Routes>
            </div>
        </div>
    );
}
export default App;
