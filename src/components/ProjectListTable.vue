<template>
  <div
    id="projectListTable"
    class="mt-4"
  >
    <div class="searchArea">
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
      <input
        type="text"
        v-model="searchField"
        placeholder="Caută un proiect..."
        spellcheck="false"
        class="searchInput"
      >
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
          v-for="data in allProjects"
          v-show="searchProject(data.proiect)"
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
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "ProjectListTable",
  data: function () {
    return {
      searchField : '',
    };
  },
  computed: mapGetters(['allProjects']),
  created() {
    this.fetchProjects();
  },
  methods: {
    ...mapActions(['fetchProjects']),

    //redirect project page
    clickOnTableRow: function(id) {
      this.$router.push({ path: "/project/" + id });
    },

    //search project
    searchProject: function(item) {
      let projectName = item.toLowerCase()
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