import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { db, auth } from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'
function CreateBlog({ isAuth }) {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const postCollectionRef = collection(db, 'posts')
    await addDoc(postCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate('/')
  }
  return (
    <div>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <h1>Create a Post</h1>
          <div className='input_group'>
            <label>Title</label>
            <input
              type='text'
              placeholder='place a title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='input_-group'>
            <label>Post Your Thoughts</label>
            <textarea
              placeholder='write something...'
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
          </div>
          <button type='submit'>Post</button>
        </form>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  background: lightblue;
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CreateBlog
