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
    class="m-2 p-4 mx-auto text-sm border-solid border-2 border-black-500 rounded-md"
    :style="{ fontFamily: ui.font, width: '361px', height: '211px' }"
  >
    <div class="text-xl font-bold uppercase">{{ f.name }}</div>
    <div class="text-sm">{{ f.title }}</div>
    <div class="h-px bg-black my-1 mx-auto">&nbsp;</div>
    <div class="">
      <a :href="`mailto:${f.email}`">{{ f.email }}</a>
    </div>
    <div class="">{{ f.phone }}</div>

    <div class="mt-3">
      <div>{{ f.company }}</div>
      <div>{{ f.csz }}</div>
      <div>
        <a :href="f.website" target="_blank">{{ f.website }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
