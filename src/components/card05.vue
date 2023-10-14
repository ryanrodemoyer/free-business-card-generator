<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import saveCard from "./saveCard.vue";

import { useSettingsStore } from "../stores/settingsStore";

const { f, ui } = storeToRefs(useSettingsStore());

const card = ref(null);

onMounted(() => {});
</script>

<template>
  <div class="bg-slate-300 p-3 rounded-md">
    <saveCard :elem="card" />
    <div
      ref="card"
      id="card2"
      class="bg-red-200 rounded-md p-[11px] mx-auto text-sm"
      :style="{ fontFamily: ui.font, width: '361px', height: '211px' }"
    >
      <div class="bg-white h-1/2 flex flex-col justify-center items-center">
        <span class="w-full text-2xl font-bold text-center">
          {{ f.company }}
        </span>
      </div>
      <div class="h-1/2 grid grid-cols-2 bg-black text-white text-xs pb-2">
        <div class="text-lg col-span-2">{{ f.name }}</div>
        <div class="text-left pl-2">{{ f.title }}</div>
        <div class="text-right pr-2">{{ f.phone }}</div>
        <div class="text-left pl-2 col-span-2">{{ f.email }}</div>
        <div class="text-left pl-2">{{ f.website }}</div>

        <div class="text-right pr-2">{{ f.csz }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
