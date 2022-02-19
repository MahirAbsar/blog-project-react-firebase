import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import CreateBlog from './pages/CreateBlog'
function App() {
  return (
    <div>
      <Router>
        <Wrapper>
          <Link to='/'>Home</Link>
          <Link to='/create'>Create Blog</Link>
          <Link to='/login'>Login</Link>
        </Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/login' element={<Login />} />
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
