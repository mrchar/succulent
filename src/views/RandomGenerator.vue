<template>
  <a-card
    class="rounded-lg dark:bg-gray-600"
    :bordered="false"
    title="随机数生成器"
  >
    <a-form
      :model="formState"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 12 }"
    >
      <a-form-item label="算法">
        <a-select v-model:value="formState.arithmetic">
          <a-select-option
            v-for="item in arithmetics"
            :key="item.label"
            :value="item.value"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="最小值">
        <a-input v-model:value.number="formState.min"></a-input>
      </a-form-item>
      <a-form-item label="最大值">
        <a-input v-model:value.number="formState.max"></a-input>
      </a-form-item>
      <a-form-item class="justify-center">
        <a-button type="primary" @click="onSubmit">生成</a-button>
      </a-form-item>
    </a-form>
    <a-card class="rounded-lg bg-gray-100">
      {{ result }}
    </a-card>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RandomGenerator",
  data() {
    return {
      arithmetics: [
        {
          label: "数学",
          value: "math",
        },
      ],
      formState: {
        arithmetic: "math",
        min: 0,
        max: 100,
      },
      result: 0,
    };
  },
  methods: {
    onSubmit() {
      let form = this.formState;
      console.debug("Form:", form);
      switch (form.arithmetic) {
        case "math":
          let range = form.max - form.min;
          let rand = Math.random();
          this.result = form.min + Math.floor(rand * range);
          break;
        default:
          break;
      }
    },
  },
});
</script>

<style></style>
