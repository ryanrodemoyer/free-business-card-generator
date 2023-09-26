<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { shorten } from "../shared/helpers";
import { useSettingsStore } from "../stores/settingsStore";

// access the `store` variable anywhere in the component ✨
const { f, ui } = storeToRefs(useSettingsStore());

onMounted(() => {});
</script>

<template>
  <template v-if="f.socials.fb">
    <div class="md:text-right md:pr-1">
      <i class="fa-brands fa-facebook-f"></i>
    </div>
    <div class="col-span-9 md:text-left md:pl-1">
      <a :href="f.socials.fb" target="_blank">{{ shorten(f.socials.fb) }}</a>
    </div>
  </template>
  <template v-if="f.socials.gh">
    <div class="md:text-right md:pr-1">
      <i class="fa-brands fa-github"></i>
    </div>
    <div class="col-span-9 md:text-left md:pl-1">
      <a :href="f.socials.gh" target="_blank">{{ shorten(f.socials.gh) }}</a>
    </div>
  </template>
  <template v-if="f.socials.ig">
    <div class="md:text-right md:pr-1">
      <i class="fa-brands fa-instagram"></i>
    </div>
    <div class="col-span-9 md:text-left md:pl-1">
      <a :href="f.socials.ig" target="_blank">{{ shorten(f.socials.ig) }}</a>
    </div>
  </template>
  <template v-if="f.socials.li">
    <div class="md:text-right md:pr-1">
      <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div class="col-span-9 md:text-left md:pl-1">
      <a :href="f.socials.li" target="_blank">{{ shorten(f.socials.li) }}</a>
    </div>
  </template>
  <template v-if="f.socials.x">
    <div class="md:text-right md:pr-1">
      <i class="fa-brands fa-x-twitter"></i>
    </div>
    <div class="col-span-9 md:text-left md:pl-1">
      <a :href="f.socials.x" target="_blank">{{ shorten(f.socials.x) }}</a>
    </div>
  </template>
  <template v-if="f.socials.yt">
    <div class="md:text-right md:pr-1">
      <i class="fa-brands fa-youtube"></i>
    </div>
    <div class="col-span-9 md:text-left md:pl-1">
      <a :href="f.socials.yt" target="_blank">{{ shorten(f.socials.yt) }}</a>
    </div>
  </template>
</template>
