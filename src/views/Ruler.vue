<template>
  <a-card class="rounded-lg shadow-2xl" title="直尺">
    <div class="mx-auto grid grid-cols-10" style="width: 10cm">
      <div
        class="border-l-2 border-t-2"
        :class="{ 'border-r-2': item === '10' }"
        v-for="item in ruler"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ruler",
  data() {
    return {
      range: "10cm",
      ruler: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    };
  },
});
</script>
