<template lang="pug" > 
  div.main-div(@click="setDefaults" )
    h1 WordPress Top Posts
    .table-parent
      table.table
        thead
          tr
            th.table-row.table-header id
            th.table-row.table-header slug 
            th.table-row.table-header status 
            th.table-row.table-header title 
            th.table-row.table-header creation date 
        tbody( v-for="post in posts" :key="post.id" class="row" @click.stop="()=>rend(post.id)" )
          tr
            td.table-row( :class="{selectedTable:selectedId==post.id }" ) {{ post.id }}
            td.table-row( :class="{selectedTable:selectedId==post.id }" ) {{ post.slug }}
            td.table-row( :class="{selectedTable:selectedId==post.id }" ) {{ post.status }}
            td.table-row( :class="{selectedTable:selectedId==post.id }" ) {{ post.title }}
            td.table-row( :class="{selectedTable:selectedId==post.id }" ) {{ post.date.toLocaleString() }}

    h4 Page Content
    .wp-content( @click.stop )
      .link-area(v-if="!!selectedLink")
        a( :href="selectedLink" )  {{selectedLink}}
      p( v-else ) no content selected
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

  postsURL="https://wordpress.org/news/wp-json/wp/v2/posts"
  postLimit = 10

  selectedId=''
  selectedLink = ''
  content = ''
  posts : Post[] = []

  rend(postId: Number){
    // @ts-ignore
    let post : Post = this.posts.find((x : Post)=>x.id==postId)
    let {link, content} = post
    let render = content.rendered
    this.selectedId = post.id
    this.content = render
    this.selectedLink = link
  }

  setDefaults(){
    this.selectedId = ''
    this.content = ''
    this.selectedLink = ''
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
<style  lang="sass" >
.table
  border-collapse: collapse
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2)

.table-header
  background: var( --dynafios-page-color-1)
  color: var( --dynafios-page-color-2)

.table-parent
  display: flex
  justify-content: center
  align-items: center
.row
  cursor: pointer

.wp-content
  display: flex
  flex-direction: column
  border: 1px solid var( --dynafios-page-color-1)
  border-radius: 10px
  margin: 20px
  padding: 20px
  justify-content: center
  align-items: center
  text-align: center
  transition: all 0.3 ease

.link-area
  display: flex

.table-row
  padding: 6px
  border: 1px solid var( --dynafios-page-color-1)
  transition: all 0.1 ease

.selectedTable
  background: rgb(0,0,0,0.1) !important

</style>
