<template lang="pug">
  .div hi there
    table
      thead
        tr
          th id
          th slug 
          th status 
          th title 
          th creation date 
      tbody( v-for="post in posts" :key="post.id" class="row" @click="()=>rend(post.id)" )
        tr
          td {{ post.id }}
          td {{ post.slug }}
          td {{ post.status }}
          td {{ post.title }}
          td {{ post.date }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class WordPressTable extends Vue {
  @Prop() private msg!: string;

  postsURL="https://wordpress.org/news/wp-json/wp/v2/posts"
  postLimit = 10

  posts = []

  rend(postId: Number){
    console.log(postId)
  }

  created(){
    fetch(this.postsURL,{
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(data => this.posts = data );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.row
  cursor: pointer
</style>
