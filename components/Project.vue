<template lang="pug">
article
  h3 {{ project.title }}
</template>

<script lang="ts">
import { defineNuxtComponent } from 'nuxt3'
import { PropType } from 'vue';

export default defineNuxtComponent({
  props: {
    project: {
      type: Object as PropType<Project>
    }
  },

  setup(props) {

  },
})
</script>
