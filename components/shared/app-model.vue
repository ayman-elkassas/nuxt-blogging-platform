<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="buttonText"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ buttonText }}
        </v-btn>
        <slot v-else name="modelButton" :on="on" ></slot>
      </template>
      <slot :close="close"></slot>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "app-model",
  data(){
    return{
      dialog:false
    }
  },
  props:{
    modelVisibility:{
      type:Boolean,
      required:false
    },
    buttonText:{
      type:String,
      required:false
    }
  },
  methods:{
    close(){
      this.dialog=false
    }
  }
}
</script>

<style scoped>

</style>
