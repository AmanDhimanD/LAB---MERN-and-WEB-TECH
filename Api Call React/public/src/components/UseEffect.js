// Api call using Hooks
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
function UseEffect() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(err => {
            
            })
    }

    return (
        <div>
            <ul>
                {
                    posts.map(posts =><li key={posts.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default UseEffect
