<template lang="pug">
article
  h3 {{ project.title }}
  p {{ project.body }}
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { PropType } from 'vue';

export default defineNuxtComponent({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  },

  setup(props) {},
})
</script>
