<template>
  <div>
    <Navigation />
    <div class="prompt">
      <span class="prompt-path">~/projects</span>
      <span class="prompt-cmd"> ls -1 *.md</span>
    </div>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.slug">
        <router-link :to="'/projects/' + project.slug">{{ project.slug }}.md</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'

const projects = ref([])

onMounted(() => {
  const modules = import.meta.glob('../../content/projects/*.md')
  projects.value = Object.keys(modules).map(path => {
    const slug = path.split('/').pop().replace('.md', '')
    return { slug }
  })
})
</script>

<style scoped>
.project-list {
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
}
.project-list li::before {
  content: "- ";
  color: var(--accent-color);
}
</style>
