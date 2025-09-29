<script setup>
defineProps({
  /** Article items */
  items: {
    type: Array,
    required: true,
  },
  /** Whether is timeline or not */
  isTimeline: Boolean,
})
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!items.length">Nothing in here.</div>

    <article
      v-for="{ info, path } in items"
      :key="path"
      class="article"
      @click="$router.push(path)"
    >
      <header class="title">
        {{
          (isTimeline ? `${new Date(info.date).toLocaleDateString()}: ` : '') +
          info.title
        }}
      </header>

      <hr />

      <div class="article-info">
        <span v-if="info.author" class="author">Author: {{ info.author }}</span>

        <span v-if="info.date && !isTimeline" class="date"
          >Date: {{ new Date(info.date).toLocaleDateString() }}</span
        >

        <span v-if="info.category" class="category"
          >Category: {{ info.category.join(', ') }}</span
        >

        <span v-if="info.tag" class="tag">Tag: {{ info.tag.join(', ') }}</span>
      </div>

      <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
    </article>
  </div>
</template>

<style scoped>
.article-wrapper {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  padding-top: calc(var(--navbar-height) + 1rem) !important;
  text-align: center;
}

.article {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.4rem;
  color: var(--vp-c-text);
  text-align: start;
}

.article:hover {
  cursor: pointer;
}

.title {
  position: relative;
  display: inline-block;
  font-size: 1.28rem;
  line-height: 2rem;
}

/* ... rest of the styles converted from SCSS */
</style>
