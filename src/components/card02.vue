<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import saveCard from "./saveCard.vue";
import socials from "./socials.vue";

import { shorten } from "../shared/helpers";
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
      class="bg-red-200 relative p-[11px] w-[361px] h-[211px] mx-auto text-sm rounded-md"
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
