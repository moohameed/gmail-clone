import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import "./Login.css"
function Login() {
    const dispatch = useDispatch() ;

    const sigIn = () => {
        auth.signInWithPopup(provider)
        .then (({user}) => {
            dispatch(login({
                    displayName : user.displayName,
                    email : user.email,
                    photoUrl : user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }
    return (
        <div>
        <div className='login'>
          <div className="login__container">
                <img className='mohamed' src='data:image/png;base64,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' alt='' />
                
        </div>   
        <Button className='test' variant='contained'  onClick={sigIn}> log in </Button>   
        
        
        </div>
        <Button className='test1' variant='contained'  > Made by Mohamed Trabelsi @ </Button> 
        
        </div>
    )
}

export default Login
