<template lang="pug">
  div hi there
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

    .link-area(v-if="!!selectedLink")
      h1 link
      a( :href="selectedLink" )  {{selectedLink}}

    div(v-html="content")
      
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class WordPressTable extends Vue {
  @Prop() private msg!: string;

  postsURL="https://wordpress.org/news/wp-json/wp/v2/posts"
  postLimit = 10

  selectedLink = ''
  content = ''
  posts = []

  rend(postId: Number){
    let post = this.posts.find(x=>x.id==postId)
    let link = post.link
    let content = post.content.rendered
    if(!content || !link) return 
    this.content = content
    this.selectedLink = link
  }

  created(){
    let params =  {
         page: 1,
         per_page: this.postLimit,
         order: 'desc'
       }

    // @ts-ignore
    let query = Object.keys(params).map( (k: string ) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&')

    let URL = `${this.postsURL}?${query}`

    fetch(URL,{
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
<style  lang="sass">
.row
  cursor: pointer

.link-area
  display: flex
</style>
