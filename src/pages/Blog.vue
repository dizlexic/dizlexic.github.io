<template>
  <div>
    <Navigation />
    <div class="prompt">
      <span class="prompt-path">~/blog</span>
      <span class="prompt-cmd"> ls -1 *.md</span>
    </div>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.slug">
        <router-link :to="'/blog/' + post.slug">{{ post.slug }}.md</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'

const posts = ref([])

onMounted(() => {
  const modules = import.meta.glob('../../content/blog/*.md')
  posts.value = Object.keys(modules).map(path => {
    const slug = path.split('/').pop().replace('.md', '')
    return { slug }
  })
})
</script>

<style scoped>
.post-list {
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
}
.post-list li::before {
  content: "- ";
  color: var(--accent-color);
}
</style>
