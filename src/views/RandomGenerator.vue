<template>
  <a-card class="rounded-lg shadow-2xl" title="随机数生成器">
    <a-form
      :model="formState"
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 12 }"
    >
      <a-form-item label="算法">
        <a-select
          v-model:value="formState.arithmetic"
          @change="setParams('arithmetic', formState.arithmetic)"
        >
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
        <a-input
          v-model:value.number="formState.min"
          @change="setParams('min', formState.min.toString())"
        ></a-input>
      </a-form-item>
      <a-form-item label="最大值">
        <a-input
          v-model:value.number="formState.max"
          @change="setParams('max', formState.max.toString())"
        ></a-input>
      </a-form-item>
      <a-form-item label="重复">
        <a-input
          v-model:value.number="formState.repetition"
          @change="setParams('repetition', formState.repetition.toString())"
        >
        </a-input>
      </a-form-item>
      <a-form-item class="justify-center">
        <a-button
          class="rounded-md shadow-sm"
          type="primary"
          @click="onSubmit"
          size="large"
        >
          生成
        </a-button>
      </a-form-item>
    </a-form>
    <a-card class="rounded-lg shadow-inner shadow-sm text-xl">
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
        {
          label: "魔法",
          value: "magic",
        },
      ],
      formState: {
        arithmetic: "math",
        min: 0,
        max: 100,
        repetition: 1,
      },
      result: "0",
    };
  },
  created() {
    this.parseParams();
  },
  methods: {
    parseParams() {
      console.debug("Location: ", window.location);
      let searchParams = new URL(window.location.href).searchParams;
      this.formState = {
        arithmetic: searchParams.get("arithmetic") || "math",
        min: parseInt(searchParams.get("min") || "0"),
        max: parseInt(searchParams.get("max") || "100"),
        repetition: parseInt(searchParams.get("repetition") || "1"),
      };
    },
    setParams(key: string, value: string) {
      let url = new URL(window.location.href);
      console.debug("current url", url);
      url.searchParams.set(key, value.toString());
      let newURL = url.toString();
      console.debug("new url", newURL);
      window.history.pushState({}, "", newURL);
    },
    mathRandom(min: number, max: number) {
      let range = max - min;
      let rand = Math.random();
      return min + Math.floor(rand * range);
    },
    onSubmit() {
      let form = this.formState;
      console.debug("Form:", form);
      switch (form.arithmetic) {
        case "math":
          let result: string[] = [];
          for (let i = 0; i < form.repetition; i++) {
            result.push(this.mathRandom(form.min, form.max).toString());
          }
          this.result = result.join(",");
          break;
        default:
          break;
      }
    },
  },
});
</script>

<style></style>
