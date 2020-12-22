<template>
  <nav>
    <router-link to="/home" @click="goHome()">
      <a
        href="#"
        class="brand"
      >
        <span
          class="title"
        >
          DTIC Planner
        </span>
      </a>
    </router-link>
    <button
      class="hamburgerBtn togglerNav menu"
      data-target="#navigation"      
    >
      <span>
        MENU
      </span>
    </button>
    <div
      class="hidden topNavOptions"
      id="navigation"
    >
      <div
        class="navOptions"
      >
        <router-link to="/project" @click="goProject()">
          <a
            href="#"
            class="navItem"
          >
          
            <span>Proiect nou</span>
          </a>
        </router-link>
        <a
          href="#"
          class="navItem"
        >
          <span>Task nou</span>
        </a>
        <a
          href="#"
          class="navItem"
        >
          <span>Contul tău</span>
        </a>
        <a
          href="#"
          class="navItem"
        >
          <span>Administrare</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'

export default {
  name: "Header",
  mounted() {
    $(document).ready(function () {
      $(".togglerNav").each(function (_, navToggler){
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
          $(target).animate({
            height: "toggle",
          });
        });
      });
    });
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goProject() {
      this.$router.push({ name: "Project" });
    },
  },
};
</script>
