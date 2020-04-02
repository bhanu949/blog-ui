import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {findPost} from '../Selectors/findPostSelector'
import {findComments} from '../Selectors/findPostSelector'
import {findUser} from '../Selectors/findPostSelector'

function PostsShow(props){
    console.log(props.user)
    return(
        <div>
            {
                props.post ? (<div><h2>title - {props.post.title}</h2>
                    <h2>UserName - {props.user.name}</h2>
                    <h2>body - {props.post.body}</h2>
                    <hr />
                    <h3>comments</h3>
                
                        <ul>
                            {
                                props.comments.map(comm=>{
                                return (<li key={comm.id}>{comm.body}</li>)
                                })
                            }
                        </ul>
                        <Link to={`/users/${props.user.id }`}>back to {props.user.name}</Link>
                   

                    </div>) : <h3>loading....</h3>
            }
            
        </div>
    )
}

const mapStateToProps = (state,props) => {
    let id=props.match.params.id
    return{
        post : findPost(state,id),
        //state.userStore.posts.find(post=>post.id == id ),
        comments : findComments(state,id),
        //state.userStore.comments.filter(comment=>comment.postId == id),
        user : findUser(state,id)
        //state.userStore.posts && state.userStore.users.find(user=>user.id == state.userStore.posts.find(post=>post.id == id).userId)

    }
}

export default connect(mapStateToProps)(PostsShow)