export default{
  state:()=>({
    posts:[],
    selectedPost:{}
  }),
  mutations:{
    updatePosts(state,posts){
      state.posts=posts;
    },
    updateSelectPost(state,post){
      state.selectedPost=post;
    }
  },
  actions:{
    addPost({state,commit},payload){
      //todo:... for spread and inject data inside object
      return this.$axios.$post(`/posts`,payload).then((post)=>{
        commit('updatePosts',[...state.posts,post]);
      })
    },
    //todo:return axios because this is promise
    deletePost({state,commit},postId){
      return this.$axios.$delete(`/posts/${postId}`).then(()=>{
        commit('updatePosts',state.posts.filter(post=>post.id!==postId));
      })
    }
  }
}

