<template>
  <ProjectPage />
  <ProjectListTable />
</template>

<script>
import ProjectPage from '@/components/ProjectPage';
import ProjectListTable from '@/components/ProjectListTable';

export default {
  name: "Project",
  components: {
    ProjectPage,
    ProjectListTable
  },
};
</script>
