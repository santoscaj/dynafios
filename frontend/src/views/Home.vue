<template>
  <div class="home">
    <WordPressTable/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WordPressTable from '@/components/WordPressTable.vue'; // @ is an alias to /src

@Component({
  components: {
    WordPressTable,
  },
})
export default class Home extends Vue {}
</script>
