<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <div class="div-grid">
      <Row container :gutter="12">

        <column :lg="8">
          <v-card elevation="2">
            <v-card-title>Termen</v-card-title>
            <v-card-text>7 June</v-card-text>
          </v-card>
        </column>

        <column :lg="4">
          <v-card elevation="2" aria-orientation="vertical">
            <v-card-title>Prioritate</v-card-title>
            <v-card-text>FAST AS FUCK</v-card-text>
          </v-card>
        </column>

      </Row>

      <Row container :gutter="12">

        <column :lg="4">
          <v-card elevation="2">
            <v-card-title>Responsabil</v-card-title>
          </v-card>
        </column>

        <column :lg="8">
          <v-card elevation="2">
            <select
            ></select>
          </v-card>
        </column>

      </Row>

      <Row container :gutter="12">

        <column :lg="12">
          <v-card>
            <v-card-text>Participanti</v-card-text>
          </v-card>
        </column>

      </Row>

      <Row container :gutter="12">
        <column :xs="12" :md="4" :lg="4">
          <v-card elevation="2">
            Participant 1
          </v-card>
        </column>
        <column :xs="12" :md="4" :lg="4">
          <v-card elevation="2">
            Participant 2
          </v-card>
        </column>
        <column :xs="12" :md="4" :lg="4">
          <v-card elevation="2">
            Participant 3
          </v-card>
        </column>
        <column :xs="12" :md="4" :lg="4">
          <v-card elevation="2">
            Participant 4
          </v-card>
        </column>
      </Row>

      <Row container :gutter="12">
        <column>
          <button>
            + Adauga Participant
          </button>
        </column>
      </Row>

      <Row container :gutter="12">

        <column :lg="4">
          <v-card>Beneficiar</v-card>
        </column>

        <column :lg="8">
          <v-card>
            <select>

            </select>
          </v-card>
        </column>

      </Row>

      <Row container :gutter="12">

        <column :lg="6">
          <v-card>
            <v-card-text>Vezi notele</v-card-text>
            <v-card-media src="/assets/note.png"></v-card-media>
          </v-card>
        </column>

        <column :lg="6">
          <v-card>
            <select>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
            </select>
          </v-card>
        </column>

      </Row>
    </div>

  </div>
</template>



<script>
import { Row, Column } from 'vue-grid-responsive';

export default {
  name: "ProjectPage",
  components: {Row, Column},
  people: ["ana", "are"],
  mounted() {
    this.$store.dispatch('loadUsers')
  },

}
</script>

<style scoped>
v-card {
  background-color: aqua;
  height: 50px;
  width: auto;
  padding: 5px;
  align-items: center;
  display: grid;
  /*justify-content: center;*/
}

div {
  align-items: center;
  /*justify-content: center;*/
  display: inline;
  padding: 15px;
}

.div-grid {
  width: 75%;
  /*align-items: center;*/
  justify-content: center;
  display: inline-grid;
  padding: 15px;
}
</style>