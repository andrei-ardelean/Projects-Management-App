<template>
    <div 
      class="container"
    >
      <div
        class="row"
      >
        <div class="w-1/3">
          <span>Termen</span>
        </div>
        <div
          class="w-2/3"
        >
          <h1>
            Calendar
          </h1>
        </div>
      </div>

      <div
        class="row"
      >
        <div class="w-1/3">
          <span>Prioritate</span>
        </div>
        <div
          class="w-2/3"
        >
          <select class="w-2/3">
            <option>A</option>
            <option>A</option>
            <option>A</option>
            <option>A</option>
          </select>
        </div>
      </div>

      <div
        class="row"
      >
        <div class="w-1/3">
          <span>Responsabil</span>
        </div>
        <div
          class="w-2/3"
        >
          <select class="w-2/3">
            <option>R1</option>
            <option>R2</option>
            <option>R3</option>
            <option>R4</option>
          </select>
        </div>
      </div>

      <div
        class="row"
      >
        <div class="w-1/3">
          <span>Participanti</span>
        </div>
        <div
          class="w-2/3"
        >
        <span>Participant 1</span>
        <span>Participant 1</span>
        <span>Participant 1</span>
        <span>Participant 1</span>
        <span>Participant 1</span>
        <span>Participant 1</span>
        <span>Participant 1</span>
        <span>Participant 1</span>
        <button class="button">+ Adauga Participant</button>
        </div>
      </div>

      <div
        class="row"
      >
        <div class="w-1/3">
          <span>Beneficiar</span>
        </div>
        <div
          class="w-2/3"
        >
        <input type="text" placeholder="Beneficiar" class="w-2/3"/>
        </div>
      </div>

      <div
        class="row"
      >
        <div class="w-1/3">
          <span>Status</span>
        </div>
        <div
          class="w-2/3"
        >
          <select class="w-1/2">
            <option>status 1</option>
            <option>status 2</option>
            <option>status 3</option>
            <option>status 4</option>
          </select>
        </div>
      </div>

      <div
        class="row"
      >
        <div class="w-full">
          <span>Vezi notele</span>
          <button>
            <img src="@/assets/note.png" width="15" height="15">
          </button>
        </div>
      </div>
      <div
        class="row">
        <div
            class="w-full justify-center flex mb-4"
          >
            <button class="button">Modifica</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {}
}
</script>

<style scoped>
.container {
  margin-left: 12.5%;
  margin-right: 12.5%;
}
</style>