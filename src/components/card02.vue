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
  <div
    id="card2"
    class="m-2 p-8 border-solid border-2 border-black-500 h-56"
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
          <template v-if="f.socials.fb">
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div class="col-span-9">
              <a :href="f.socials.fb" target="_blank">{{
                shorten(f.socials.fb)
              }}</a>
            </div>
          </template>
          <template v-if="f.socials.gh">
            <div><i class="fa-brands fa-github"></i></div>
            <div class="col-span-9">
              <a :href="f.socials.gh" target="_blank">{{
                shorten(f.socials.gh)
              }}</a>
            </div>
          </template>
          <template v-if="f.socials.ig">
            <div><i class="fa-brands fa-instagram"></i></div>
            <div class="col-span-9">
              <a :href="f.socials.ig" target="_blank">{{
                shorten(f.socials.ig)
              }}</a>
            </div>
          </template>
          <template v-if="f.socials.li">
            <div><i class="fa-brands fa-linkedin-in"></i></div>
            <div class="col-span-9">
              <a :href="f.socials.li" target="_blank">{{
                shorten(f.socials.li)
              }}</a>
            </div>
          </template>
          <template v-if="f.socials.x">
            <div><i class="fa-brands fa-x-twitter"></i></div>
            <div class="col-span-9">
              <a :href="f.socials.x" target="_blank">{{
                shorten(f.socials.x)
              }}</a>
            </div>
          </template>
          <template v-if="f.socials.yt">
            <div><i class="fa-brands fa-youtube"></i></div>
            <div class="col-span-9">
              <a :href="f.socials.yt" target="_blank">{{
                shorten(f.socials.yt)
              }}</a>
            </div>
          </template>
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
