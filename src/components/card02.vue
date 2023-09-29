<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import socials from "./socials.vue";

import { shorten, print } from "../shared/helpers";
import { useSettingsStore } from "../stores/settingsStore";

const { f, ui } = storeToRefs(useSettingsStore());

function sendToPrint() {
  print(document.getElementById("card2"));
}

onMounted(() => {});
</script>

<template>
  <div class="bg-slate-300 p-3 rounded-md">
    <button @click="sendToPrint()">save high res image</button>
    <div
      id="card2"
      class="bg-red-200 rounded-md relative p-[12.5px] mx-auto text-sm"
      :style="{ fontFamily: ui.font, width: '361px', height: '211px' }"
    >
      <div class="absolute left-0 top-0 m-0 p-0 overflow-hidden">
        <!-- <img src="bg05.jpg" class="rounded-md opacity-50 border-0 h-211 w-361" /> -->
      </div>
      <div class="bg-white relative">
        <div class="grid grid-cols-2 divide-x-2 divide-solid">
          <div class="px-2">
            <div class="text-xl font-bold text-right">{{ f.name }}</div>
            <div class="text-lg text-right">{{ f.title }}</div>
          </div>
          <div class="px-2 text-xs text-left">
            <div class="grid grid-cols-10">
              <div class="font-extrabold">P</div>

              <div class="col-span-9">{{ f.phone }}</div>

              <div class="font-extrabold">W</div>
              <div class="col-span-9">
                <a :href="f.website" target="_blank">{{
                  shorten(f.website)
                }}</a>
              </div>
              <socials />
            </div>
          </div>
        </div>
        <div class="mt-1">
          <div>
            <a :href="`mailto:${f.email}`">{{ f.email }}</a>
          </div>
          <div>{{ f.company }}</div>
          <div>{{ f.csz }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
