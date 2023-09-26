<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useSettingsStore } from "../stores/settingsStore";

const store = useSettingsStore();
const { f, media } = storeToRefs(store);

function onMediaProfileChange(e: any) {
  store.setMediaProfile(e);
}

function onMediaLogoChange(e: any) {
  store.setMediaLogo(e);
}

function clearForm() {
  store.clearForm();

  const elem1 = <HTMLInputElement>document.getElementById("profileUpload");
  if (elem1) {
    elem1.value = "";
  }
  const elem2 = <HTMLInputElement>document.getElementById("logoUpload");
  if (elem2) {
    elem2.value = "";
  }
}

onMounted(() => {});
</script>

<template>
  <h1 class="text-3xl">Business Card Settings</h1>
  <button class="underline" @click="($event) => clearForm()">
    clear all fields
  </button>
  <p class="text-sm italic">
    Update these fields to make your personal business card.
  </p>

  <div class="text-left">
    <label class="block">
      <span class="text-gray-700">Full Name</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="full name"
        v-model="f.name"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Title</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="title"
        v-model="f.title"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Email</span>
      <input
        type="email"
        class="mt-1 block w-full"
        placeholder="email"
        v-model="f.email"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Phone Number</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="phone number"
        v-model="f.phone"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Company Name</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="company name"
        v-model="f.company"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Address</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="full address"
        v-model="f.csz"
      />
    </label>

    <label class="block">
      <a :href="f.website" target="_blank" v-if="f.website">website</a>
      <span class="text-gray-700" v-else> website</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="website"
        v-model="f.website"
      />
    </label>

    <h1 class="text-3xl mt-4">Socials</h1>
    <label class="block">
      <a :href="f.socials.fb" target="_blank" v-if="f.socials.fb"
        >Facebook / Meta</a
      >
      <span class="text-gray-700" v-else>Facebook / Meta</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="facebook / meta"
        v-model="f.socials.fb"
      />
    </label>

    <label class="block">
      <a :href="f.socials.fb" target="_blank" v-if="f.socials.gh">GitHub</a>
      <span class="text-gray-700" v-else>GitHub</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="github"
        v-model="f.socials.gh"
      />
    </label>

    <label class="block">
      <a :href="f.socials.ig" target="_blank" v-if="f.socials.ig">Instagram</a>
      <span class="text-gray-700" v-else>Instagram</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="instagram"
        v-model="f.socials.ig"
      />
    </label>

    <label class="block">
      <a :href="f.socials.li" target="_blank" v-if="f.socials.li">Linked In</a>
      <span class="text-gray-700" v-else>Linked In</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="linked in"
        v-model="f.socials.li"
      />
    </label>

    <label class="block">
      <a :href="f.socials.x" target="_blank" v-if="f.socials.x">X / Twitter</a>
      <span class="text-gray-700" v-else>X / Twitter</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="x"
        v-model="f.socials.x"
      />
    </label>

    <label class="block">
      <a :href="f.socials.x" target="_blank" v-if="f.socials.yt">YouTube</a>
      <span class="text-gray-700" v-else>YouTube</span>
      <input
        type="text"
        class="mt-1 block w-full"
        placeholder="youtube"
        v-model="f.socials.yt"
      />
    </label>

    <h1 class="text-3xl mt-4">Media</h1>

    <label class="block">
      <span class="text-gray-700">Profile</span>
      <div>
        <input type="file" id="profileUpload" @change="onMediaProfileChange" />

        <div id="profilePreview">
          <div
            id="profile"
            :style="{
              width: `150px`,
              height: `150px`,
              background: `url(${media.profile}) no-repeat center /cover`,
            }"
            v-if="media.profile"
          />
        </div>
      </div>
    </label>

    <label class="block">
      <span class="text-gray-700">Logo</span>
      <div>
        <input type="file" id="logoUpload" @change="onMediaLogoChange" />

        <div id="logoPreview">
          <div
            id="logo"
            :style="{
              width: `150px`,
              height: `150px`,
              background: `url(${media.logo}) no-repeat center /cover`,
            }"
            v-if="media.logo"
          />
        </div>
      </div>
    </label>
  </div>
</template>

<style scoped></style>
