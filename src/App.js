import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import Login from './Login'
import {BrowserRouter as Router ,
  Routes  ,
Route ,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login } from './features/userSlice'
import {useEffect} from 'react'
function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen) ;
  const user = useSelector(selectUser) ;
  const dispatch = useDispatch() ;

  useEffect (() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // ! the user is logged in (persisting )
        dispatch(login ({
          displayName : user.displayName,
          email : user.email,
          photoUrl : user.photoURL
        }))
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Router >
      {!user ? (
        <Login />
      ) : (
        <div className="app">
        <Header />
            <div className='app__body'>
                  <Sidebar />

                  <Routes>
                    <Route path = "/mail" element={ <Mail/>}></Route>
                    <Route path ="/" element ={<EmailList />}></Route>

                  </Routes>
            </div>
      {sendMessageIsOpen && <SendMail />} 
    </div>
      ) }

    </Router>
  );
}

export default App;
