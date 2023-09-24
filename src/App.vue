<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useSettingsStore } from "./stores/settingsStore";

import settings from "./components/settings.vue";
import card01 from "./components/card01.vue";
import card02 from "./components/card02.vue";
import card03 from "./components/card03.vue";

const store = useSettingsStore();
const { f, ui, media } = storeToRefs(store);

let isCardVisible = ref(false);

function toggleCard() {
  isCardVisible.value = !isCardVisible.value;
}

function setFont(name: string) {
  store.setFont(name);
}

const fonts = [
  "eb garamond",
  "rockwell",
  "palatino",
  "helvetica",
  "optima",
  "noteworthy",
  "futura",
  "trajan",
  "baskerville",
];

fonts.sort();

onMounted(() => {});
</script>

<template>
  <div class="px-3 pb-3 mx-auto text-center">
    <h1 class="text-5xl">Free Business Card Generator</h1>
    <div class="mb-3">https://www.freebusinesscardgenerator.com</div>
    <p class="text-xs">
      All information stays on YOUR device. 100% privacy is maintained.
    </p>
    <div class="">
      <button
        class="underline w-full bg-slate-100 hover:bg-slate-200"
        @click="toggleCard()"
      >
        {{ isCardVisible ? "hide card" : "show card" }}
      </button>
    </div>

    <div id="settings" v-if="!isCardVisible">
      <settings />
    </div>
    <div id="fonts" class="grid grid-cols-3 text-center" v-if="isCardVisible">
      <div
        class=""
        v-for="font in fonts"
        :key="font"
        :style="{ fontFamily: font }"
        @click="setFont(font)"
      >
        {{ font }}{{ font === ui.font ? "*" : "" }}
      </div>
    </div>
    <div id="cards" class="w-full md:w-4/6 md:mx-auto">
      <card03 v-if="isCardVisible" class="mt-6" />
      <card01 v-if="isCardVisible" class="mt-6" />
      <card02 v-if="isCardVisible" class="mt-6" />
    </div>
  </div>
</template>

<style>
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: underline;
}
a:hover {
  color: #535bf2;
}

.ff-sansserif {
  font-family: sans-serif;
}

.ff-proximanova {
  font-family: "Proxima Nova";
}

.ff-noteworthy {
  font-family: "noteworthy";
}

.ff-garamond {
  font-family: "EB Garamond";
}
</style>
