<template>
  <div :class="{ dark: dark }" class="w-screen h-screen">
    <div class="bg-white dark:bg-gray-900 w-full h-full py-20 lg:py-40">
      <div
        class="
          absolute
          top-5
          right-5
          md:top-10 md:right-20
          grid grid-cols-4
          gap-1
        "
      >
        <sun-icon class="text-yellow-400" />
        <a-switch class="col-span-2" v-model:checked="dark"> </a-switch>
        <moon-icon class="text-xs" />
      </div>
      <div class="relative max-w-xl mx-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SunIcon } from "@heroicons/vue/outline";
import { MoonIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "App",
  components: { SunIcon, MoonIcon },
  data() {
    return {
      dark: false,
    };
  },
  watch: {
    dark() {
      localStorage.setItem("darkMode", this.dark ? "true" : "false");
    },
  },
  created() {
    this.dark = localStorage.getItem("darkMode") === "true";
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
