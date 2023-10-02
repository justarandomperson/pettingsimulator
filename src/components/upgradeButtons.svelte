<script>
    import UpgradeButton from "./upgradeButton.svelte";
    export let buttons
    export let pets
    export let levels
    export let onUpgrade
</script>

<div class="w-full md:w-1/2">
   <h1 class="text-center font-bold text-2xl mt-5">UPGRADES:</h1>
    <div class="flex flex-col items-center mt-10">
        {#each buttons as button, i}
            <UpgradeButton name={button.name} description={button.description} price = {button.price} level = {levels[i]} {pets} {i} {onUpgrade}/>
        {/each}
    </div>
</div>
