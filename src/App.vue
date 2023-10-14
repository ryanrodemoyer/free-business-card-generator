<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useSettingsStore } from "./stores/settingsStore";

import settings from "./components/settings.vue";
import card01 from "./components/card01.vue";
import card02 from "./components/card02.vue";
import card03 from "./components/card03.vue";
import card04 from "./components/card04.vue";
import card05 from "./components/card05.vue";

const store = useSettingsStore();
const { f, ui, media } = storeToRefs(store);

let isCardVisible = ref(true);

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
    <div class="w-full md:w-4/6 md:mx-auto">
      <button
        class="underline w-full bg-slate-100 hover:bg-slate-200 h-10"
        @click="toggleCard()"
      >
        {{ isCardVisible ? "update information" : "show card" }}
      </button>
      <hr class="m-2 h-px bg-black border-0" />
    </div>

    <div id="cards" class="w-full md:w-4/6 md:mx-auto" v-if="isCardVisible">
      <h2>Business Cards!</h2>
      <div class="text-xs w-2/3 mx-auto text-center italic mb-2">
        The pinkish border around the card is referred to as the bleed. The
        exported card will not have this color.
      </div>
      <div id="fonts" v-if="isCardVisible">
        <div><h2>Choose A Font</h2></div>
        <div class="grid grid-cols-3 text-center">
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
      </div>
      <card05 v-if="isCardVisible" class="mt-6" />
      <card04 v-if="isCardVisible" class="mt-6" />
      <card02 v-if="isCardVisible" class="mt-6" />
      <card01 v-if="isCardVisible" class="mt-6" />
    </div>
    <div id="settings" class="w-full md:w-4/6 md:mx-auto" v-else>
      <settings />
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
