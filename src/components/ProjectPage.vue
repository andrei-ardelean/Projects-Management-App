<template>
  <div 
    class="container"
  >
    <div
      class="section"
    >
      <div
        class="w-1/2 miniSection leftSection"
      >
        <div
          class="nameOfSection"
        >
          Nume proiect
        </div>
        <div>
          <input
            type="text"
            placeholder="Introdu numele proiectului"
            v-model="numeProiect"
            spellcheck="false"
            class="w-full inputField"
          >
        </div>
      </div>
      <div
        class="w-1/2 miniSection rightSection"
      >
        <div
          class="nameOfSection"
        >
          Termen
        </div>
        <div>
          <!-- <input
            type="text"
            placeholder="23/12/2020"
            v-model="termen"
            spellcheck="false"
            class="w-full inputField"
          > -->
          <DatepickerLite
            v-model="termen"
            class="text-black cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div
      class="section"
    >
      <div
        class="w-1/2 miniSection leftSection"
      >
        <div
          class="nameOfSection"
        >
          Responsabil
        </div>
        <div class="dropdown">
          <!-- <input
            type="text"
            placeholder="Introdu responsabilul proiectului"
            v-model="responsabil"
            spellcheck="false"
            class="w-full inputField"
          > -->
          <input
            v-model="responsabil"
            @keyup="setResponsabilFlagTrue()"
            class="dropdown-input text-black inputField w-full"
            type="text"
            spellcheck="false"
            placeholder="Introdu responsabilul proiectului"
          >
          <div
            v-show="responsabili && responsabilFlag"
            class="dropdown-list"
          >
            <div
              v-show="responsabilVisible(item)"
              v-for="item in responsabili"
              @click="setResponsabilFlagFalse(item)"
              :key="item"
              class="dropdown-item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 miniSection rightSection"
      >
        <div
          class="nameOfSection"
        >
          Beneficiar
        </div>
        <div>
          <input
            v-model="beneficiar"
            @keyup="setBeneficiarFlagTrue()"
            class="dropdown-input text-black inputField w-full"
            type="text"
            spellcheck="false"
            placeholder="Introdu beneficiarul proiectului"
          >
          <div
            v-show="beneficiari && beneficiarFlag"
            class="dropdown-list"
          >
            <div
              v-show="beneficiarVisible(item)"
              v-for="item in beneficiari"
              @click="setBeneficiarFlagFalse(item)"
              :key="item"
              class="dropdown-item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="section"
    >
      <div
        class="w-1/2 miniSection leftSection"
      >
        <div
          class="nameOfSection"
        >
          Status
        </div>
        <div>
          <div
            class="selectionArea"
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
            class="w-1/4 dropDownList"
            @mouseleave="onMouseLeaveStatus()"
            :class="{hidden:statusDropDown == false, absolute:statusDropDown == true}"
          >
            <div
              class="option"
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
        class="w-1/2 miniSection rightSection"
      >
        <div
          class="nameOfSection"
        >
          Prioritate
        </div>
        <div>
          <div
            class="selectionArea"
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
            class="w-1/4 dropDownList"
            @mouseleave="onMouseLeavePrioritate()"
            :class="{hidden:prioritateDropDown == false, absolute:prioritateDropDown == true}"
          >
            <div
              class="option"
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
    </div>

    <div
      class="section"
    >
      <div
        class="w-1/2 miniSection leftSection"
      >
        <div
          class="nameOfSection"
        >
          Participanți
        </div>
        <div class="participantiArea">
          <div
            v-for="(data, index) in participanti"
            :key="data"
            class="participant"
            @click="deleteParticipant(index)"
          >
            <div class="flex flex-row">
              {{ data }}
              <svg
                class="w-7 h-7 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 miniSection rightSection"
      >
        <div
          class="nameOfSection"
        >
          Adaugi participant?
        </div>
        <div class="flex flex-row">
          <input
            type="text"
            v-model="newParticipant"
            placeholder="Introdu numele participantului"
            spellcheck="false"
            class="w-full inputField"
          >
          <svg
            @click="addParticipant()"
            class="w-10 h-10 ml-1 cursor-pointer hover:bg-gray-900 rounded-xl"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
            />
          </svg>
        </div>
      </div>
    </div>

    <div
      class="flex flex-row justify-center items-center py-8"
    >
      <div
        class="w-1/2 miniSection leftSection"
      >
        <div
          class="lastSection"
        >
          <div>Vezi notele</div>
          <div>
            <svg
              class="w-7 h-7 ml-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 miniSection rightSection"
      >
        <div
          class="nameOfSection"
        >
          <button
            class="button"
          >
            Salvează modificările
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import beneficiaries from "@/data/beneficiaries.json";
import responsables from "@/data/responsables.json";
// import participants from "@/data/participants.json";
import status from "@/data/status.json";
import priority from "@/data/priority.json";
// import projects from "@/data/projects.json";

import { ref } from 'vue';
const picked = ref(new Date());

import DatepickerLite from 'vue3-datepicker-lite';

export default {
  name: "ProjectPage",
  components: {
    DatepickerLite
  },
  mounted() {
    this.projectPicker();
  },
  data() {
    return {
      projects: [],
      projectId : 0,
      picked : picked,
      value : null,
      project : {},
      status : [],
      responsabili : [],
      responsabilFlag : false,
      beneficiarFlag : false,
      numeProiect : "",
      termen: "",
      responsabil : "",
      beneficiar : "",
      beneficiari : [],
      prioritate : [],
      participanti : [],
      newParticipant : "",
      prioritateDropDown : false,
      responsabilDropDown : false,
      statusDropDown : false,
      prioritateField : "",
      responsabilField : "",
      statusField : "",
    }
  },
  methods: {
    responsabilVisible (item) {
      let currentResp = item.toLowerCase()
      let currentInput = this.responsabil.toLowerCase()
      return currentResp.includes(currentInput)
    },
    beneficiarVisible (item) {
      let currentResp = item.toLowerCase()
      let currentInput = this.beneficiar.toLowerCase()
      return currentResp.includes(currentInput)
    },
    projectPicker(){
      this.$store.dispatch('setProjects');
      this.projects = this.$store.getters.allProjects;

      status.forEach(element => {
        this.status.push(element.status);
      });
      priority.forEach(element => {
        this.prioritate.push(element.prioritate);
      });
      responsables.forEach(element => {
        this.responsabili.push(element.responsabil);
      });
      beneficiaries.forEach(element => {
        console.log(element.beneficiar);
        this.beneficiari.push(element.beneficiar);
      });

      console.log("router param: " + this.$route.params.id);
      if(this.$route.params.id != undefined){
        this.projectId = this.$route.params.id;
        var projectNumber = parseInt(this.projectId);
        this.project = this.projects[projectNumber - 1];
        this.participanti = this.project.participanti;
        this.numeProiect = this.project.proiect;
        this.responsabil = this.project.responsabil;
        this.beneficiar = this.project.beneficiar;
        this.statusField = this.project.status;
        this.prioritateField = this.project.prioritate;
        this.termen = this.project.termen;
      }
    },
    deleteParticipant(index){
      this.participanti.splice(index, 1);
    },
    addParticipant(){
      if(this.newParticipant != ""){
        this.participanti.push(this.newParticipant);
        this.newParticipant = "";
      }
    },
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
    },
    setResponsabilFlagTrue() {
      if(!this.responsabilFlag)
        this.responsabilFlag = true;
    },
    setResponsabilFlagFalse(item) {
      this.responsabilFlag = false;
      this.responsabil = item;
    },
    setBeneficiarFlagTrue() {
      if(!this.beneficiarFlag)
        this.beneficiarFlag = true;
    },
    setBeneficiarFlagFalse(item) {
      this.beneficiarFlag = false;
      this.beneficiar = item;
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 10%;
  margin-right: 10%;
}

.dropdown {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.dropdown-input .dropdown-selected {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}

.dropdown-selected:hover {
  background: white;
  border-color: #e2e8f0;
}

.dropdown-input:focus {
  background: white;
  border-color: #e2e8f0;
}

.dropdown-input::placeholder {
  opacity: 0.7;
}

.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}

.dropdown-list {
  position: relative;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: white;
  color: black;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropdown-item {
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #edf2f7;
}

.dropdown-item-flag {
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0;
}

</style>