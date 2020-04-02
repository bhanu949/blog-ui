export const findPost=(state,id)=>{
    return state.userStore.posts.find(post=>post.id == id )
}

export const findComments=(state,id)=>{
    return state.userStore.comments.filter(comment=>comment.postId == id)
}

export const findUser=(state,id)=>{
    return state.userStore.posts && state.userStore.users.find(user=>user.id == state.userStore.posts.find(post=>post.id == id).userId)
}