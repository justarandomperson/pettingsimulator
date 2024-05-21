import { persisted } from "svelte-local-storage-store";

export const defaultData = {
  pets: 0,
  petPower: 1,
  pts: 0,
  rebirths: 0,
  rebirthing: false,
  upgradeLevels: [0, 0, 0, 0, 0, 0],
  settings: {
    images: [
      "https://i1.sndcdn.com/avatars-Why2guyttlTy7IKw-P2j7wA-t240x240.jpg",
      "https//media.tenor.com/Pi1F-uhfyRAAAAAC/floppa-petthefloppa.gif",
    ],
  },
  buyQuantity: 1,
};

export const playerData = persisted("playerData", { ...defaultData });
