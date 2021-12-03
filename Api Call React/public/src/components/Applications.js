import React, { Component } from 'react';
import axios from 'axios';
export class Applications extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],

        }
    }
    //LifeCycle 
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // "This is Response !!"
                console.log(response.data)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                // "This is Error !!"
                console.log(error)

            })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                List{
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>): null
                }
            </div>
        )
    }
}

