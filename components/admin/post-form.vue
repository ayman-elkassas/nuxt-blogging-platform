<template>
  <v-form v-model="valid" @submit.prevent="submit">
      <v-text-field
        v-model="form.title"
        :rules="rules.title"
        :counter="10"
        label="Post Title"
        required
      ></v-text-field>
      <v-textarea
        v-model="form.body"
        :rules="rules.body"
        required
        label="Post Body"
      ></v-textarea>
    <v-btn type="submit"
           :loading="addPostLoading"
           :disabled="!valid">Add</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "post-form",
  data: () => ({
    valid:false,
    addPostLoading:false,
    form:{
      title:"",
      body:""
    },
    rules:{
      title:[
        v=>!!v || 'Title is required',
        v => v.length >= 15 || 'Title must be at least 15 characters',
      ],
      body:[
        v=>!!v || 'Body is required',
        v => v.length >= 100 || 'Body must be at least 100 characters',
      ]
    }
  }),
  computed:{
    postId(){
      return this.$router.params.id
    }
  },
  methods:{
    submit(){
      this.addPostLoading=true;
      this.$store.dispatch('addPost',this.form).then(()=>{
        this.$router.push('/admin')
      }).finally(()=>{
        this.addPostLoading=false;
      })
    }
  }
}
</script>

<style scoped>

</style>
