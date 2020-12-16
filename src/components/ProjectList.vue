<template>
  <div
    id="projectList"
    class="mt-20 font-serif md:font-serif"
  >
    <div class="projectHeader">
      <div class="ml-14">
        Proiecte în lucru
      </div>
      <div class="mr-10">
        <img
          class="float-left mr-1"
          src="@/assets/searchIcon.png"
          alt="searchIcon"
          width="25"
          height="25"
        >
        <input
          type="text"
          placeholder="Caută un proiect"
          class="searchInput"
        >
      </div>
    </div>
    <ProjectListTable />
  </div>
</template>

<script>
import ProjectListTable from "@/components/ProjectListTable";

export default {
  name: "ProjectList",
  components: {
    ProjectListTable,
  },
};
</script>

<style scoped lang="scss">
// .projectHeader {
//   @apply flex flex-row justify-between;
// }

// .searchInput {
//   @apply px-4 space-x-0ml-1 rounded-xl border border-transparent shadow;
//   @apply focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent;
// }
</style>
