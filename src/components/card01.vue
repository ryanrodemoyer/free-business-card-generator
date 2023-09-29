<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { print } from "../shared/helpers";

import { useSettingsStore } from "../stores/settingsStore";

const { f, ui } = storeToRefs(useSettingsStore());

function sendToPrint() {
  print(document.getElementById("card1"));
}

onMounted(() => {});
</script>

<template>
  <div class="bg-slate-300 p-3 rounded-md">
    <button @click="sendToPrint()">save high res image</button>
    <div
      id="card1"
      class="bg-red-200 relative p-[12.5px] w-[361px] h-[211px] mx-auto text-sm rounded-md"
      :style="{
        fontFamily: ui.font,
      }"
    >
      <div class="absolute left-0 top-0 m-0 p-0 overflow-hidden">
        <!-- <img src="bg05.jpg" class="rounded-md opacity-50 border-0 h-211 w-361" /> -->
      </div>
      <div
        class="bg-white relative h-full flex flex-col justify-center items-center"
      >
        <span class="text-xl font-bold uppercase">{{ f.name }}</span>
        <span class="text-sm">{{ f.title }}</span>
        <span class="border-t w-3/4 border-black my-1.5"></span>

        <span class="">
          <a :href="`mailto:${f.email}`">{{ f.email }}</a>
        </span>
        <span class="">{{ f.phone }}</span>

        <span>{{ f.company }}</span>
        <span>{{ f.csz }}</span>
        <span>
          <a :href="f.website" target="_blank">{{ f.website }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
