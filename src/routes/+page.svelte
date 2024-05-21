<script>
  import { get } from "svelte/store";
  import { goto } from "$app/navigation";

  import Floppa from "../components/floppa.svelte";
  import PetsCounter from "../components/petsCounter.svelte";
  import UpgradeButtons from "../components/upgradeButtons.svelte";
  import { playerData } from "../assets/data/playerData.js";
  import {
    normalUpgradesData,
    rebirthPrice,
  } from "../assets/data/upgradesData.js";
  import { onUpgrade } from "../assets/utils";

  let plrData;
  const upgData = get(normalUpgradesData);
  playerData.subscribe((data) => {
    plrData = data;
  });

  if (plrData.rebirthing) {
    goto("/rebirth");
  }

  let floppaSrc = plrData.settings.images[0];
  let clicked;

  const onPet = () => {
    floppaSrc = plrData.settings.images[1];
    playerData.set({ ...plrData, pets: plrData.pets + plrData.petPower });
    clearTimeout(clicked);
    clicked = setTimeout(() => {
      floppaSrc = plrData.settings.images[0];
    }, 750);
  };

  setInterval(() => {
    playerData.set({ ...plrData, pets: plrData.pets + plrData.pts / 10 });
  }, 100);
</script>

<div class="flex flex-col md:flex-row md:justify-between">
  <div class="w-full h-1/2 max-h-[50%] md:w-1/3 md:h-2/3">
    <PetsCounter pets={plrData.pets} pts={plrData.pts} />
    <Floppa src={floppaSrc} onclick={onPet} />
  </div>
  <UpgradeButtons
    pets={plrData.pets}
    buttons={upgData}
    {rebirthPrice}
    {onUpgrade}
  />
</div>
<a
  class="absolute top-0 right-0 font-bold p-2 border-2 bg-white border-black h-10 hover:bg-gray-400 w-20 text-center"
  href="/settings"
>
  Settings
</a>
