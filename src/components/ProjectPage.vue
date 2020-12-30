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
        Calendar
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
        <input
          type="text"
          placeholder="Responsabil"
          v-model="responsabil"
          spellcheck="false"
          class="w-1/3 inputField"
        >
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
        <div
          class="w-1/3 selectionArea"
          @click="switchPrioritateDropDown()"
        >
          <span>{{ prioritateField }}</span>
          <svg
            class="w-7 h-7 inset-y-0 right-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div
          class="w-1/3 dropDownList"
          @mouseleave="onMouseLeavePrioritate()"
          :class="{hidden:prioritateDropDown == false, absolute:prioritateDropDown == true}"
        >
          <div
            class="w-1/2 option"
            v-for="data in prioritate"
            :key="data"
            @click="selectPrioritate(data)"
            :class="[prioritateField == data ? 'selectedOption' : '']"
          >
            {{ data }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="row"
    >
      <div class="w-1/3">
        <span>Participanți</span>
      </div>
      <div
        class="w-2/3"
      >
        <div
          class="w-2/3 participantiArea"
        >
          <div
            v-for="data in participanti"
            :key="data"
            class="participant"
          >
            {{ data }}
          </div>
          <div>
            <button
              class="button"
            >
              + Adaugă participant
            </button>
          </div>
        </div>
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
        <input
          type="text"
          placeholder="Beneficiar"
          v-model="beneficiar"
          spellcheck="false"
          class="w-1/3 inputField"
        >
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
        <div
          class="w-1/3 selectionArea"
          @click="switchStatusDropDown()"
        >
          <span>{{ statusField }}</span>
          <svg
            class="w-7 h-7 inset-y-0 right-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div
          class="w-1/3 dropDownList"
          @mouseleave="onMouseLeaveStatus()"
          :class="{hidden:statusDropDown == false, absolute:statusDropDown == true}"
        >
          <div
            class="w-1/2 option"
            v-for="data in status"
            :key="data"
            @click="selectStatus(data)"
            :class="[statusField == data ? 'selectedOption' : '']"
          >
            {{ data }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="row"
    >
      <div class="w-full">
        <span>Vezi notele</span>
        <button>
          <img
            src="@/assets/note.png"
            width="15" 
            height="15"
          >
        </button>
      </div>
    </div>

    <div
      class="row"
    >
      <div
        class="w-full justify-center flex mb-4"
      >
        <button
          class="button"
        >
          Modifică
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {},
  data() {
    return {
      beneficiar : "Facultatea de Psihologie",
      status : ["status 1", "status 2", "status 3", "status 4"],
      responsabil : "Răzvan Pavel",
      prioritate : ["scăzută", "medie", "ridicată"],
      participanti : ["Participant 1", "Participant 2", "Participant 3", "Participant 4", "Participant 5", "Participant 6", "Participant 7", "Participant 8", "Participant 9"],
      prioritateDropDown : false,
      responsabilDropDown : false,
      statusDropDown : false,
      prioritateField : "Selectează",
      responsabilField : "Selectează",
      statusField : "Selectează",
    }
  },
  methods: {
    selectPrioritate(value) {
      this.prioritateField = value;
      this.switchPrioritateDropDown();
    },
    switchPrioritateDropDown() {
      if(this.prioritateDropDown == false){
        this.prioritateDropDown = true;
      }
      else {
        this.prioritateDropDown = false;
      }
    },
    selectResponsabil(value) {
      this.responsabilField = value;
      this.switchResponsabilDropDown();
    },
    switchResponsabilDropDown() {
      if(this.responsabilDropDown == false)
        this.responsabilDropDown = true;
      else
        this.responsabilDropDown = false;
    },
    selectStatus(value) {
      this.statusField = value;
      this.switchStatusDropDown();
    },
    switchStatusDropDown() {
      if(this.statusDropDown == false)
        this.statusDropDown = true;
      else
        this.statusDropDown = false;
    },
    onMouseLeavePrioritate() {
      this.prioritateDropDown = false;
    },
    onMouseLeaveStatus() {
      this.statusDropDown = false;
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 12.5%;
  margin-right: 12.5%;
}
</style>