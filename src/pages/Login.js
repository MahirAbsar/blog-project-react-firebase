import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Login({ setIsAuth }) {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div>
      <h1 className='login_text'>Sign In With Google</h1>
      <button className='btn' onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  )
}

export default Login
