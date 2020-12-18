<template>
  <header class="header">
    <div class="flex-1 flex justify-between items-center">
      DTIC Planner
    </div>

    <div
      class="lg:flex lg:items-center lg:w-auto"
      id="menu"
    >
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
        >
          <li>
            <div class="headerItem">
              <a
                href="#"
                class="mr-2"
              >Proiect nou</a>
              <img
                class="float-right"
                src="@/assets/addBtnIcon.png"
                alt="addBtnIcon"
              >
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a
                href="#"
                class="mr-2"
              >Task nou</a>
              <img
                class="float-right"
                src="@/assets/addBtnIcon.png"
                alt="addBtnIcon"
              >
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a
                href="#"
                class="mr-2"
              >Contul tău</a>
              <img
                class="float-right"
                src="@/assets/accountIcon.png"
                alt="accountIcon"
              >
            </div>
          </li>
          <li>
            <div class="headerItem">
              <a
                href="#"
                class="mr-2"
              >Administrare</a>
              <img
                class="float-right"
                src="@/assets/settingsIcon.png"
                alt="settingsIcon"
              >
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
