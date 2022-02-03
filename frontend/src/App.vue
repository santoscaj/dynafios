<template lang="pug" >
  #app
    .project-header
      h1 DYNAFIOS 
      p.secondary Dynafios Entry Developer Code Test
    #nav
      router-link.link( to="/") Feature 1
      router-link.link( to="/map") Feature 2
    router-view
</template>

<style lang="sass">
:root
  box-sizing: border-box
  --dynafios-page-color-1: #221f1f
  --dynafios-page-color-2: rgb(246, 138, 31)

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.project-header
  height: 100px
  padding: 20px

.secondary
  color: var(--dynafios-page-color-2)

#nav 
  background: var(--dynafios-page-color-1)
  height: 40px
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 20px

  a,::visited
    font-weight: bold
    color: white
    background: transparent
    text-decoration: none

    &.router-link-exact-active
      color: white

  .link
    padding: 0 5px
    color: white
    text-decoration: none
    background: transparent
    height: 100%
    width: 120px
    transition: all 0.3s ease
    display: flex
    justify-content: center
    align-items: center
  .link:hover
      background: rgb(255,255,255,0.1)


</style>
