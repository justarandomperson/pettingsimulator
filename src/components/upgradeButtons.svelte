<script>
    import { playerData } from "../assets/data/playerData";
    import QuantityButtons from "../components/quantityButtons.svelte";

    import UpgradeButton from "./upgradeButton.svelte";
    export let buttons, pets,onUpgrade

    let plrData
    playerData.subscribe(data => plrData=data)
    $: buyQuantity = plrData.buyQuantity
</script>

<div class="w-full md:w-1/2">
   <h1 class="text-center font-bold text-2xl my-5">UPGRADES:</h1>
   <QuantityButtons/>
    <div class="flex flex-col items-center mt-10">
        {#each buttons as button, i}
            <UpgradeButton name={button.name} description={button.description} {pets} {i} {onUpgrade}/>
        {/each}
    </div>
</div>
