<script setup lang="ts">
import { ref, onMounted } from "vue";

const f = ref({
  name: "Ryan Rodemoyer",
  title: "Automation Expert",
  company: "Pittsburgh Business Automation",
  csz: "Pittsburgh, PA 15212",
  email: "ryan.rodemoyer@icloud.com",
  phone: "(555) 555-1212",
  website: "https://www.rodey.dev",
  socials: {
    fb: "",
    gh: "https://github.com/ryanrodemoyer",
    ig: "",
    li: "https://www.linkedin.com/in/ryanrodemoyer/",
    x: "https://twitter.com/StackingSnacks",
    yt: "",
  },
});

let isCardVisible = ref(false);

function toggleCard() {
  console.log("toggleCard");
  isCardVisible.value = !isCardVisible.value;
}

onMounted(() => {});

function shorten(val: string) {
  return val
    .replace("https://www.", "")
    .replace("http://www.", "")
    .replace("https://", "")
    .replace("www.", "");
}
</script>

<template>
  <div class="md:container px-3 pb-3 mx-auto text-center">
    <h1 class="text-5xl">Free Business Card Generator</h1>
    <div class="mb-3">https://www.freebusinesscardgenerator.com</div>
    <div class="">
      <button class="underline" @click="toggleCard()">
        {{ isCardVisible ? "hide card" : "show card" }}
      </button>
    </div>
    <div id="settings">
      <h1 class="text-3xl" v-if="!isCardVisible">Business Card Settings</h1>
    </div>
    <div id="config" v-if="!isCardVisible">
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
          <span class="text-gray-700">Website</span>
          <input
            type="text"
            class="mt-1 block w-full"
            placeholder="website"
            v-model="f.website"
          />
        </label>

        <h1 class="text-3xl mt-4">Socials</h1>
        <label class="block">
          <span class="text-gray-700">Facebook / Meta</span>
          <input
            type="text"
            class="mt-1 block w-full"
            placeholder="facebook / meta"
            v-model="f.socials.fb"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">Instagram</span>
          <input
            type="text"
            class="mt-1 block w-full"
            placeholder="instagram"
            v-model="f.socials.ig"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">Linked In</span>
          <input
            type="text"
            class="mt-1 block w-full"
            placeholder="linked in"
            v-model="f.socials.li"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">X / Twitter</span>
          <input
            type="text"
            class="mt-1 block w-full"
            placeholder="x"
            v-model="f.socials.x"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">YouTube</span>
          <input
            type="text"
            class="mt-1 block w-full"
            placeholder="youtube"
            v-model="f.socials.yt"
          />
        </label>
      </div>
      <!-- <div>
      {{ JSON.stringify(f, null, 2) }}
    </div> -->
    </div>
    <div id="cards" class="w-full md:w-3/4 md:mx-auto">
      <div
        id="card"
        class="m-2 p-10 border-solid border-2 border-black-500"
        style="font-family: &quot;EB Garamond&quot;"
        v-if="isCardVisible"
      >
        <div class="text-4xl font-bold uppercase">{{ f.name }}</div>
        <div class="text-xl">{{ f.title }}</div>
        <div class="md:w-3/4 h-px bg-black my-2 mx-auto">&nbsp;</div>
        <div class="text-sm">
          <a :href="`mailto:${f.email}`">{{ f.email }}</a>
        </div>
        <div class="text-sm">{{ f.phone }}</div>
        <!-- <div class="text-sm" v-for="(k, i) in Object.keys(f.socials)">
          <a :href="f.socials[k]" target="_blank">{{ f.socials[k] }}</a>
        </div> -->

        <div class="my-3 text-sm">
          <div>{{ f.company }}</div>
          <div>{{ f.csz }}</div>
          <div>
            <a :href="f.website" target="_blank">{{ f.website }}</a>
          </div>
        </div>
      </div>

      <div
        id="card2"
        class="m-2 p-8 border-solid border-2 border-black-500 h-56"
        style="font-family: &quot;EB Garamond&quot;"
        v-if="isCardVisible"
      >
        <div class="flex h-full divide-x-2 divide-solid">
          <div class="flex-1 items-center justify-center px-2">
            <div class="text-4xl font-bold text-right">{{ f.name }}</div>
            <div class="text-xl text-right">{{ f.title }}</div>
          </div>
          <div
            class="flex-1 items-center justify-center px-2 text-xs text-left"
          >
            <div class="grid grid-cols-10">
              <div class="font-extrabold">E</div>
              <div class="col-span-9">
                <a :href="`mailto:${f.email}`">{{ f.email }}</a>
              </div>
              <div class="font-extrabold">P</div>

              <div class="col-span-9">{{ f.phone }}</div>

              <div class="font-extrabold">W</div>
              <div class="col-span-9">
                <a :href="f.website" target="_blank">{{
                  shorten(f.website)
                }}</a>
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
    </div>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: underline;
}
a:hover {
  color: #535bf2;
}
</style>
