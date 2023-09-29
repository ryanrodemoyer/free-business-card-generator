<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import socials from "./socials.vue";

import { shorten, print } from "../shared/helpers";

import { useSettingsStore } from "../stores/settingsStore";

const { f, ui, media } = storeToRefs(useSettingsStore());

function sendToPrint() {
  print(document.getElementById("card4"));
}

onMounted(() => {});
</script>

<template>
  <button @click="sendToPrint()">save high res image</button>
  <div
    id="card4"
    class="p-[12.5px] mx-auto text-xs border-solid border-2 border-black-500 rounded-md"
    :style="{
      fontFamily: ui.font,
      width: '211px',
      height: '361px',
    }"
  >
    <div class="h-scale mx-auto rounded-full text-center" v-if="media.profile">
      <img
        class="mx-auto"
        style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%"
        :src="media.profile"
      />
    </div>
    <div class="h-scale mx-auto rounded-full" v-else>
      <img
        class="mx-auto"
        style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%"
        src="/profileStock.jpg"
      />
    </div>
    <div class="text-sm font-bold uppercase">{{ f.name }}</div>
    <div class="">{{ f.title }}</div>
    <div class="md:w-3/4 h-px bg-black my-2 mx-auto">&nbsp;</div>
    <div class="">
      <a :href="`mailto:${f.email}`">{{ f.email }}</a>
    </div>
    <div class="text-sm">{{ f.phone }}</div>

    <div class="mt-3 text-sm">
      <div>{{ f.company }}</div>
      <div>{{ f.csz }}</div>
      <div>
        <a :href="f.website" target="_blank">{{ f.website }}</a>
      </div>
    </div>

    <div class="md:w-3/4 h-px bg-black my-2 mx-auto">&nbsp;</div>
    <div class="grid grid-cols-10 text-sm">
      <template v-if="f.socials.fb">
        <div class="text-right col-span-3">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div class="text-left pl-1 col-span-7">
          <a :href="f.socials.fb" target="_blank">{{
            shorten(f.socials.fb)
          }}</a>
        </div>
      </template>
      <template v-if="f.socials.gh">
        <div class="text-right col-span-3">
          <i class="fa-brands fa-github"></i>
        </div>
        <div class="text-left pl-1 col-span-7">
          <a :href="f.socials.gh" target="_blank">{{
            shorten(f.socials.gh)
          }}</a>
        </div>
      </template>
      <template v-if="f.socials.ig">
        <div class="text-right col-span-3">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="text-left pl-1 col-span-7">
          <a :href="f.socials.ig" target="_blank">{{
            shorten(f.socials.ig)
          }}</a>
        </div>
      </template>
      <template v-if="f.socials.li">
        <div class="text-right col-span-3">
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div class="text-left pl-1 col-span-7">
          <a :href="f.socials.li" target="_blank">{{
            shorten(f.socials.li)
          }}</a>
        </div>
      </template>
      <template v-if="f.socials.x">
        <div class="text-right col-span-3">
          <i class="fa-brands fa-x-twitter"></i>
        </div>
        <div class="text-left pl-1 col-span-7">
          <a :href="f.socials.x" target="_blank">{{ shorten(f.socials.x) }}</a>
        </div>
      </template>
      <template v-if="f.socials.yt">
        <div class="text-right col-span-3">
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div class="text-left pl-1 col-span-7">
          <a :href="f.socials.yt" target="_blank">{{
            shorten(f.socials.yt)
          }}</a>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
