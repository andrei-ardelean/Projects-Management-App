<template>
  <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 font-serif  md:font-serif">
    <div class="flex-1 flex justify-between items-center">
      DTIC Planner
    </div>

    <div class="lg:flex lg:items-center lg:w-auto" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Proiect nou</a></li>
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Task nou</a></li>
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Contul tău</a></li>
          <li><img src="@/assets/accountIcon.png" alt="accountIcon" width="35" height="35"></li>
          <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Administrare</a></li>
          <li><img src="@/assets/settingsIcon.png" alt="settingsIcon" width="35" height="35"></li>
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

</style>