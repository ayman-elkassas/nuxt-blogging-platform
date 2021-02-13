<template>
  <div id="post">
    <div class="container">
      <div class="timeline">
        <div class="timeline-row">
          <div class="timeline-content">
            <i class="icon-attachment"></i>
            <h5>{{$store.state.selectedPost.title}}</h5>
            <p style="color:#fff">{{$store.state.selectedPost.body}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "_id",
  head(){
    return {
      titleTemplate:"%s - Nuxt Blog",
      title:this.$store.state.selectedPost.title+'nuxt blog',
      meta:[
        {
          hid:"description",
          name:"description",
          content:this.$store.state.selectedPost.body
        }
      ]
    }
  },
  validate({params}) {
    return !isNaN(params.id);
  },
  fetch({$axios,store,params}){
    //todo:if click to preview post after load posts
    if(store.state.selectedPost && store.state.selectedPost.id===params.id) return true;
    //todo:if route to this component from outside list of posts
    return $axios.$get(`/posts/${params.id}`).then(res=>{
      store.commit("updateSelectPost",res);
    })
  },
  data(){
    return{
      invertedFlag:true,
    }
  }
}
</script>

<style scoped>

</style>
