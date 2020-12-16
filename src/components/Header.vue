<template>
  <header class="header">
    <div class="flex-1 flex justify-between items-center">DTIC Planner</div>

    <div class="lg:flex lg:items-center lg:w-auto" id="menu">
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
        >
          <li>
            <div class="headerItem">
              <a class="mr-2">Proiect nou</a>
              <img
                class="float-right"
                src="@/assets/addBtnIcon.png"
                alt="addBtnIcon"
                width="25"
                height="25"
              />
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a class="mr-2">Task nou</a>
              <img
                class="float-right"
                src="@/assets/addBtnIcon.png"
                alt="addBtnIcon"
                width="25"
                height="25"
              />
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a class="mr-2">Contul tău</a>
              <img
                class="float-right"
                src="@/assets/accountIcon.png"
                alt="accountIcon"
                width="25"
                height="25"
              />
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a class="mr-2">Administrare</a>
              <img
                class="float-right"
                src="@/assets/settingsIcon.png"
                alt="settingsIcon"
                width="25"
                height="25"
              />
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
};
</script>

<style scoped lang="scss">
// .header {
//   @apply px-6 py-2 ;
//   @apply bg-blue-400 flex flex-wrap items-center font-serif md:font-serif w-screen fixed top-0;
// }

// .headerItem {
//   @apply lg:p-4 py-3 px-0 block border-b-4 border-solid border-red-800 cursor-pointer rounded-2xl;
//   @apply hover:border-gray-800;
//   @apply hover:bg-gray-50;
// }
</style>
