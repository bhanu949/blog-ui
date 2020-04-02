import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function UsersShow(props){
    return(
        <div>
            {
                props.userPosts && props.user ? (<div><h2>users name - {props.user.name}</h2>
                    <h2>listing users posts - {props.userPosts.length}</h2>
                    <ul>
                        {
                            props.userPosts.map(post=>{
                                return (<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
                            })
                        }
                    </ul>
                    </div>) : <h3>Loading....</h3>
            }
            

        </div>
    )
}

const mapStateToProps = (state,props) => {
    return {
        userPosts : state.userStore.posts.filter(post=>post.userId == props.match.params.id),
        user : state.userStore.users.find(user=>user.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UsersShow)