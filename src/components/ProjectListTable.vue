<template>
  <div id="projectListTable" class="mt-4">
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
              />
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
              />
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
              />
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
              />
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
              />
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
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in sorted" :key="data.id">
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
export default {
  name: "ProjectListTable",
  data: function() {
    return {
      jsonData: [],
      currentSort: "",
      currentSortDir: "asc"
    };
  },
  mounted() {
    this.loadJsonData();
  },
  methods: {
    loadJsonData() {
      setTimeout(() => {
        this.jsonData = [
          {
            id: 1,
            nrParticipanti: 6,
            proiect: "Acesta este un proiect",
            responsabil: "Adrian Hudrea",
            beneficiar: "Facultatea de Chimie",
            status: "Idee",
            prioritate: "Normală",
            termen: "-"
          },
          {
            id: 2,
            nrParticipanti: 10,
            proiect: "Acesta este un proiect mai important",
            responsabil: "Razvan Pavel",
            beneficiar: "Facultatea de Psihologie",
            status: "În prototipare",
            prioritate: "Ridicată",
            termen: "14.12.2020"
          },
          {
            id: 3,
            nrParticipanti: 7,
            proiect: "Acesta ar putea fi un proiect frumos",
            responsabil: "Kata Matea",
            beneficiar: "Departamentul de Administrare General",
            status: "În dezvoltare",
            prioritate: "Ridicată",
            termen: "22.12.2020"
          },
          {
            id: 4,
            nrParticipanti: 2,
            proiect: "Cel mai proiect",
            responsabil: "Daniel Stuparu",
            beneficiar: "Departamentul de Administrare General",
            status: "În dezvoltare",
            prioritate: "Scăzută",
            termen: "12.12.2020"
          },
          {
            id: 5,
            nrParticipanti: 3,
            proiect: "Acesta este un proiect",
            responsabil: "Daniel Stuparu",
            beneficiar: "Departamentul de Administrare General",
            status: "Blocat",
            prioritate: "Ridicată",
            termen: "12.01.2021"
          },
          {
            id: 6,
            nrParticipanti: 2,
            proiect: "Acesta este un proiect",
            responsabil: "Adrian Pavel",
            beneficiar: "Facultatea de Matematică",
            status: "Idee",
            prioritate: "Normală",
            termen: "23.12.2020"
          },
          {
            id: 7,
            nrParticipanti: 6,
            proiect: "Acesta este un proiect",
            responsabil: "Gabriel Ciplea",
            beneficiar: "Centrul de Comunicații",
            status: "În dezvoltare",
            prioritate: "Ridicată",
            termen: "01.02.2021"
          }
        ];
      }, 300);
    },
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
      console.log(this.currentSort);
    }
  },
  computed: {
    sorted: function() {
      return this.jsonData.slice().sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return modifier;
        return 0;
      });
    }
  }
};
</script>

<style scoped lang="scss">
/* #projectListTable{
  margin-right: 3%;
  margin-left: 3%;
}
.table{
  @apply max-w-full shadow-xl;
}
th{
  @apply bg-gray-100 px-8 py-4 text-center w-4 cursor-pointer;
}
td{
  @apply border px-8 py-4;
}
tr{
  @apply border;
  @apply hover:bg-gray-100;
} */
</style>
