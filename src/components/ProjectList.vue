<template>
  <div
    id="projectsArea"
  >
    <div class="projectHeader">
      <div class="titleArea">
        Proiecte în lucru
      </div>
      <div class="searchArea">
        <input
          type="text"
          v-model="searchField"
          placeholder="Caută un proiect"
          spellcheck="false"
          class="searchInput"
        >
        <span class="svgIcon">
          <svg
            @click="searchProjects()"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
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
  data() {
    return {
      searchField : ""
    }
  },
  methods: {
    searchProjects() {

    }
  }
};
</script>
