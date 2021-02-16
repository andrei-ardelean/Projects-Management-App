<template>
  <div
    id="projectsArea"
  >
    <div class="projectHeader">
      <div class="titleArea">
        Proiecte în lucru
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
  data() {},
  methods: {}
};
</script>
