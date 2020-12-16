<template>
  <div class="ppv">
      <Header/>
      <ProjectPage/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ProjectPage from "@/components/ProjectPage";
export default {
  name: "ProjectPageView",
  components: {ProjectPage, Header}
}
</script>

<style scoped>

</style>