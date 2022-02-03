<template lang="pug">
  div.main-div 
    h1 WordPress Top Posts
    div
      table.table
        thead
          tr
            th.table id
            th.table slug 
            th.table status 
            th.table title 
            th.table creation date 
        tbody( v-for="post in posts" :key="post.id" class="row" @click="()=>rend(post.id)" )
          tr
            td.table {{ post.id }}
            td.table {{ post.slug }}
            td.table {{ post.status }}
            td.table {{ post.title }}
            td.table {{ post.date.toLocaleString() }}

    .link-area(v-if="!!selectedLink")
      h1 link
      a( :href="selectedLink" )  {{selectedLink}}

    div(v-html="content")
      
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface Content{
  rendered: string
}

interface Post{
  id: number;
  slug: string;
  status: string;
  title: string;
  date: Date;
  link: string;
  content: Content  
}

@Component
export default class WordPressTable extends Vue {
  @Prop() private msg!: string;

  postsURL="https://wordpress.org/news/wp-json/wp/v2/posts"
  postLimit = 10

  selectedLink = ''
  content = ''
  posts : Post[] = []

  rend(postId: Number){
    // @ts-ignore
    let post : Post = this.posts.find((x : Post)=>x.id==postId)
    let {link, content} = post
    let render = content.rendered
    this.content = render
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
      .then(data => this.posts = data.map((post:Post)=>({...post, date: new Date(post.date)})) )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="sass">
.main-div
  display: flex
  flex-direction: columns
  justify-content: center
  align-items: center

.row
  cursor: pointer

.link-area
  display: flex

.table
  border: 1px solid red

</style>
