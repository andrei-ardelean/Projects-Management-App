<template>
  <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 font-serif  md:font-serif">
    <div class="flex-1 flex justify-between items-center">
      DTIC Planner
    </div>

    <div class="lg:flex lg:items-center lg:w-auto" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li>
            <div class="headerItem">
              <a class="mr-2">Proiect nou</a>
              <img class="float-right" src="@/assets/addBtnIcon.png" alt="addBtnIcon" width="25" height="25">
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a class="mr-2">Task nou</a>
              <img class="float-right" src="@/assets/addBtnIcon.png" alt="addBtnIcon" width="25" height="25">
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a class="mr-2">Contul tău</a>
              <img class="float-right" src="@/assets/accountIcon.png" alt="accountIcon" width="25" height="25">
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a class="mr-2">Administrare</a>
              <img class="float-right" src="@/assets/settingsIcon.png" alt="settingsIcon" width="25" height="25">
            </div>
          </li>
        </ul>
      </nav>
    </div>

  </header>
</template>

<script>

export default {
name: "Header",
}
</script>

<style scoped>
.headerItem{
  @apply lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-800 cursor-pointer;
}
</style>