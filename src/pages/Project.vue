<template>
  <article v-if="project" role="article">
    <Navigation />
    <div class="prompt" aria-hidden="true">
      <span class="prompt-path">~/projects</span>
      <span class="prompt-cmd"> cat {{ slug }}.md</span>
    </div>
    <component :is="project" />
    <nav class="back-link" aria-label="Back to projects">
      <router-link to="/projects">cd ..</router-link>
    </nav>
  </article>
</template>

<script setup>
import { shallowRef, onMounted, defineProps } from 'vue'
import Navigation from '../components/Navigation.vue'

const props = defineProps(['slug'])
const project = shallowRef(null)

onMounted(async () => {
  try {
    const modules = import.meta.glob('../../content/projects/*.md')
    const path = `../../content/projects/${props.slug}.md`
    if (modules[path]) {
      const mod = await modules[path]()
      project.value = mod.default
    }
  } catch (e) {
    console.error('Failed to load project', e)
  }
})
</script>

<style scoped>
.back-link {
  margin-top: 2rem;
  border-top: 1px dashed var(--text-color);
  padding-top: 1rem;
}
</style>
