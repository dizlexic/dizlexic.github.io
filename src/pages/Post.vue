<template>
  <article v-if="post" role="article">
    <Navigation />
    <div class="prompt" aria-hidden="true">
      <span class="prompt-path">~/blog</span>
      <span class="prompt-cmd"> cat {{ slug }}.md</span>
    </div>
    <component :is="post" />
    <nav class="back-link" aria-label="Back to blog">
      <router-link to="/blog">cd ..</router-link>
    </nav>
  </article>
</template>

<script setup>
import { shallowRef, onMounted, defineProps } from 'vue'
import Navigation from '../components/Navigation.vue'

const props = defineProps(['slug'])
const post = shallowRef(null)

onMounted(async () => {
  try {
    // Note: We use the content directory established in Tasklist
    const modules = import.meta.glob('../../content/blog/*.md')
    const path = `../../content/blog/${props.slug}.md`
    if (modules[path]) {
      const mod = await modules[path]()
      post.value = mod.default
    }
  } catch (e) {
    console.error('Failed to load blog post', e)
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
