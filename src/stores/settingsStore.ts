import { defineStore } from "pinia";

interface ISocials {
  fb: string;
  gh: string;
  ig: string;
  li: string;
  x: string;
  yt: string;
}
interface IMedia {
  profile: string | null;
  logo: string | null;
}
interface ISettingsState {
  f: {
    name: string;
    title: string;
    company: string;
    csz: string;
    email: string;
    phone: string;
    website: string;
    socials: ISocials;
  };
  media: IMedia;
  ui: {
    font: string;
  };
}

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSettingsStore = defineStore("settings", {
  state: (): ISettingsState => ({
    f: {
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
        ig: "https://www.instagram.com/rrodey/",
        li: "https://www.linkedin.com/in/ryanrodemoyer/",
        x: "https://twitter.com/StackingSnacks",
        yt: "https://www.youtube.com/channel/UCh1Hn6C6XfdO-Wi1wQ75OPg",
      },
    },
    media: {
      profile: null,
      logo: null,
    },
    ui: {
      font: "eb garamond",
    },
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
    // styles: (state) =>
  },
  actions: {
    setFont(name: string) {
      this.ui.font = name;
    },
    setMediaProfile(e: any) {
      const file = e.target.files[0];
      this.media.profile = URL.createObjectURL(file);
    },
    setMediaLogo(e: any) {
      const file = e.target.files[0];
      this.media.logo = URL.createObjectURL(file);
    },
  },
});
