<template lang="pug">
h1 Projects 

main
  suspense
    template(#default)
      ul
        li(v-for="project in projects")
          project(:project="project")
    
    template(#fallback)
      ul
        li(v-for="num in 5")
          .skeleton.skeleton-youtube
</template>

<script setup lang="ts">
const { data: projects } = await useFetch<string, Project[]>('https://api-eu-central-1.graphcms.com/v2/ckvijjdt04rp401y08r77611s/master', {
  method: "POST",
  body: {
    query: "query{projects{title,body,featured,date,skills,thumbnail{id}}}"
  }
})
</script>