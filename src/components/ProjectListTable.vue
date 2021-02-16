<template>
  <div
    id="projectListTable"
    class="mt-4"
  >
    <div class="searchArea">
      <input
        type="text"
        v-model="searchField"
        placeholder="Caută un proiect..."
        spellcheck="false"
        class="searchInput"
      >
      <span class="svgIcon">
        <svg
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
    <table class="table">
      <thead>
        <tr>
          <th>
            <div class="flex justify-center">
              <a class="mr-2">PROIECT</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th>
            <div class="flex justify-center">
              <a class="mr-2">RESPONSABIL</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th>
            <div class="flex justify-center">
              <a class="mr-2">BENEFICIAR</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th>
            <div class="flex justify-center">
              <a class="mr-2">STATUS</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th>
            <div class="flex justify-center">
              <a class="mr-2">PRIORITATE</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th>
            <div class="flex justify-center">
              <a class="mr-2">TERMEN</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in projects"
          v-show="searchProject(data)"
          :key="data.id"
          @click="clickOnTableRow(data.id)"
        >
          <td>
            <div>{{ data.proiect }}</div>
            <div class="text-blue-700">
              {{ data.nrParticipanti }} participanți
            </div>
          </td>
          <td>{{ data.responsabil }}</td>
          <td>{{ data.beneficiar }}</td>
          <td>{{ data.status }}</td>
          <td>{{ data.prioritate }}</td>
          <td>{{ data.termen }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import projects from "@/data/projects.json";

export default {
  name: "ProjectListTable",
  data: function () {
    return {
      projects: [],
      searchField : '',
    };
  },
  mounted() {
    this.loadProjects();
    this.$store.dispatch('setProjects');
    this.projects = this.$store.getters.allProjects;
  },
  methods: {
    loadProjects() {
      setTimeout(() => {
        this.$store.dispatch('setProjects');
        this.projects = this.$store.getters.allProjects;
      }, 300);
    },
    clickOnTableRow: function(id) {
      this.$router.push({ path: "/project/" + id });
    },
    searchProject: function(item) {
      let projectName = item.proiect.toLowerCase()
      let input = this.searchField.toLowerCase()
      return projectName.includes(input)
    }
  }
};
</script>

<style>
.searchArea {
  width: 25%;
}
</style>