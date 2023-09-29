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
  <button @click="sendToPrint()">save high res image</button>
  <div
    id="card1"
    class="bg-green-500 relative p-[12.5px] w-[361px] h-[211px] mx-auto text-sm rounded-md"
    :style="{
      fontFamily: ui.font,
    }"
  >
    <div class="absolute left-0 top-0 m-0 p-0 overflow-hidden">
      <!-- <img src="bg04.jpg" class="rounded-md opacity-50 border-0 h-211 w-361" /> -->
    </div>
    <div class="relative flex flex-col justify-center items-center">
      <div class="text-xl font-bold uppercase">{{ f.name }}</div>
      <div class="text-sm">{{ f.title }}</div>
      <div class="p-px h-1">&nbsp;</div>
      <div class="h-px bg-black mx-auto">&nbsp;</div>
      <div class="p-px h-1">&nbsp;</div>

      <div class="">
        <a :href="`mailto:${f.email}`">{{ f.email }}</a>
      </div>
      <div class="">{{ f.phone }}</div>

      <div class="mt-2">
        <div>{{ f.company }}</div>
        <div>{{ f.csz }}</div>
        <div>
          <a :href="f.website" target="_blank">{{ f.website }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
