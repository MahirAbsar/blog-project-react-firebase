import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import CreateBlog from './pages/CreateBlog'
import { auth } from './firebase-config'
import { signOut } from 'firebase/auth'
function App() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem('isAuth'))
  )
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      window.location.pathname = '/login'
    })
  }
  return (
    <div>
      <Router>
        <Wrapper>
          <Link to='/'>Home</Link>
          {!isAuth ? (
            <Link to='/login'>Login</Link>
          ) : (
            <>
              <Link to='/create'>Create Blog</Link>
              <button onClick={logout}>Log Out</button>
            </>
          )}
        </Wrapper>
        <Routes>
          <Route path='/' element={<Home isAuth={isAuth} />} />
          <Route path='/create' element={<CreateBlog isAuth={isAuth} />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  )
}

const Wrapper = styled.nav`
  background-color: black;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.2rem;
  a {
    color: white;
    text-decoration: none;
  }
`

export default App
