<script setup lang="ts">
import { ref, onMounted } from "vue";

import { print } from "../shared/helpers";

const props = defineProps<{
  elem: HTMLElement;
}>();

function sendToPrint() {
  print(props.elem);
}
</script>

<template>
  <div>
    <button @click="sendToPrint()">save png</button>
  </div>
</template>
