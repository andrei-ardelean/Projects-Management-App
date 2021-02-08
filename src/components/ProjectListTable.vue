<template>
  <div
    id="projectListTable"
    class="mt-4"
  >
    <table class="table">
      <thead>
        <tr>
          <th @click="sort('proiect')">
            <div>
              <a class="float-center">PROIECT</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th @click="sort('responsabil')">
            <div>
              <a class="float-center">RESPONSABIL</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th @click="sort('beneficiar')">
            <div>
              <a class="float-center">BENEFICIAR</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th @click="sort('status')">
            <div>
              <a class="float-center">STATUS</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th @click="sort('prioritate')">
            <div>
              <a class="float-center">PRIORITATE</a>
              <img
                class="float-left"
                src="@/assets/sortIcon.png"
                alt="sortIcon"
                width="20"
                height="20"
              >
            </div>
          </th>
          <th @click="sort('termen')">
            <div>
              <a class="float-center">TERMEN</a>
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
    }
  }
};
</script>
