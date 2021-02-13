<template>
  <v-app dark>
    <app-header></app-header>

    <v-main>
      <v-container>
        <nuxt></nuxt>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '~/components/core/app-header'
export default {
  name: "default.vue",
  components:{
    AppHeader
  }
}
</script>

<style scoped>

</style>
