<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import socials from "./socials.vue";

import { shorten } from "../shared/helpers";
import { useSettingsStore } from "../stores/settingsStore";

// access the `store` variable anywhere in the component ✨
const { f, ui } = storeToRefs(useSettingsStore());

onMounted(() => {});
</script>

<template>
  <div
    id="card2"
    class="m-2 p-8 border-solid border-2 border-black-500 h-56 rounded-md"
    :style="{ fontFamily: ui.font }"
  >
    <div class="grid grid-cols-2 h-full divide-x-2 divide-solid">
      <div class="px-2">
        <div class="text-3xl font-bold text-right">{{ f.name }}</div>
        <div class="text-xl text-right">{{ f.title }}</div>
      </div>
      <div class="px-2 text-xs text-left">
        <div class="grid grid-cols-10">
          <div class="font-extrabold">E</div>
          <div class="col-span-9">
            <a :href="`mailto:${f.email}`">{{ f.email }}</a>
          </div>
          <div class="font-extrabold">P</div>

          <div class="col-span-9">{{ f.phone }}</div>

          <div class="font-extrabold">W</div>
          <div class="col-span-9">
            <a :href="f.website" target="_blank">{{ shorten(f.website) }}</a>
          </div>
          <socials />
        </div>
        <div class="mt-3">
          <div>{{ f.company }}</div>
          <div>{{ f.csz }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
