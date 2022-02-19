import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase-config'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
function Home({ isAuth }) {
  const [postList, setPostList] = useState([])
  const postCollectionRef = collection(db, 'posts')
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getPosts()
  }, [deletePost])
  return (
    <div>
      {postList.map((post) => {
        return (
          <div className='single_post'>
            <h1>{post.title}</h1>
            <p>{post.post}</p>
            <h3>@{post.author.name}</h3>
            {isAuth && post.author.id == auth.currentUser.uid ? (
              <button onClick={() => deletePost(post.id)}>$#128465</button>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Home
