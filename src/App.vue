<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useSettingsStore } from "./stores/settingsStore";

import settings from "./components/settings.vue";
import card01 from "./components/card01.vue";
import card02 from "./components/card02.vue";

const store = useSettingsStore();
const { f, ui } = storeToRefs(store);

let isCardVisible = ref(false);

function toggleCard() {
  isCardVisible.value = !isCardVisible.value;
}

function setFont(name) {
  store.setFont(name);
}

const fonts = [
  "eb garamond",
  "rockwell",
  "palatino",
  "helvetica",
  "optima",
  "noteworthy",
];

fonts.sort();

onMounted(() => {});
</script>

<template>
  <div class="px-3 pb-3 mx-auto text-center">
    <h1 class="text-5xl">Free Business Card Generator</h1>
    <div class="mb-3">https://www.freebusinesscardgenerator.com</div>
    <div class="">
      <button class="underline" @click="toggleCard()">
        {{ isCardVisible ? "hide card" : "show card" }}
      </button>
    </div>
    <!-- <div id="designs" v-if="!isCardVisible">
      <div class="flex">
        <div>
          <p class="font-bold">Design 01</p>
          <img src="./assets/card01.png" alt="design 01" />
        </div>

        <div>
          <p class="font-bold">Design 02</p>
          <img src="./assets/card02.png" alt="design 02" />
        </div>
      </div>
    </div> -->
    <div id="settings">
      <h1 class="text-3xl" v-if="!isCardVisible">Business Card Settings</h1>
    </div>
    <div id="config" v-if="!isCardVisible">
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
