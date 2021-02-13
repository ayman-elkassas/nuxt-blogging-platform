<template>
  <div class="post-card">
    <div class="post-card-body">
      <h3>
        {{post.title}}
      </h3>
      <p>{{post.body}}</p>
    </div>
    <v-card-actions class="card-actions">
      <template v-if="isAdmin">
        <v-btn
          :to="`admin/post/${post.id}/edit`"
          text
          color="deep-purple accent-4"
        >Edit</v-btn>
        <app-model button-text="Delete">
          <template slot-scope="{close}">
            <v-card>
              <v-card-title class="headline">
                Are you sure?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  :loading="deletePostLoading"
                  @click="deletePost(post.id,close)"
                >
                  DELETE
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  :disabled="deletePostLoading"
                  @click="close"
                >
                  CLOSE
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </app-model>
      </template>
      <template v-else>
        <v-btn :to="`post/${post.id}`" text color="deep-purple accent-4">
          <span @click="updateSelectedPost(post)">
            Read More
          </span>
        </v-btn>
      </template>
    </v-card-actions>
  </div>
</template>

<script>
import AppModel from "~/components/shared/app-model";
export default {
  name: "post-card",
  components: {AppModel},
  props:{
    post:{
      type:Object,
      required:true,
    },
    isAdmin:{
      type:Boolean,
      required:false
    }
  },
  data(){
    return {
      deletePostLoading:false
    }
  },
  methods:{
    updateSelectedPost(post){
      this.$store.commit("updateSelectedPost",post)
    },
    deletePost(postId,callback){
      this.deletePostLoading=true;
      this.$store.dispatch('deletePost',postId).then(callback).finally(()=>{
        this.deletePostLoading=false;
      })
    }
  }
}
</script>

<style scoped>

.post-card-body{
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

</style>
