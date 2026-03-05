<template>
  <nav class="terminal-nav" aria-label="Main Navigation">
    <div class="prompt" aria-hidden="true">
      <span class="prompt-path">~</span>
      <span class="prompt-cmd"> ls</span>
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.terminal-nav {
  margin-bottom: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

li::before {
  content: "- ";
  color: var(--accent-color);
}

@media (max-width: 600px) {
  ul {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
