<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import socials from "./socials.vue";

import { useSettingsStore } from "../stores/settingsStore";

const { f, ui, media } = storeToRefs(useSettingsStore());

onMounted(() => {});
</script>

<template>
  <div
    id="card"
    class="m-2 p-10 border-solid border-2 border-black-500 rounded-md"
    :style="{
      fontFamily: ui.font,
    }"
  >
    <div
      class="h-scale mx-auto rounded-full"
      :style="{
        width: `150px`,
        height: `150px`,
        background: `url(${media.profile}) no-repeat center /cover`,
      }"
      v-if="media.profile"
    ></div>
    <div
      class="h-scale mx-auto rounded-full"
      :style="{
        width: `150px`,
        height: `150px`,
        background: `url(profileStock.jpg) no-repeat center /cover`,
      }"
      v-else
    ></div>
    <div class="text-2xl font-bold uppercase">{{ f.name }}</div>
    <div class="text-xl">{{ f.title }}</div>
    <div class="md:w-3/4 h-px bg-black my-2 mx-auto">&nbsp;</div>
    <div class="text-sm">
      <a :href="`mailto:${f.email}`">{{ f.email }}</a>
    </div>
    <div class="text-sm">{{ f.phone }}</div>
    <!-- <div class="text-sm" v-for="(k, i) in Object.keys(f.socials)">
          <a :href="f.socials[k]" target="_blank">{{ f.socials[k] }}</a>
        </div> -->

    <div class="mt-3 text-sm">
      <div>{{ f.company }}</div>
      <div>{{ f.csz }}</div>
      <div>
        <a :href="f.website" target="_blank">{{ f.website }}</a>
      </div>
    </div>

    <div class="md:w-3/4 h-px bg-black my-2 mx-auto">&nbsp;</div>
    <div class="grid grid-cols-10 md:grid-cols-2">
      <socials />
    </div>
  </div>
</template>

<style scoped></style>
