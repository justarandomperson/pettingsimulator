<script>
    import { playerData } from "../assets/data/playerData";
    import { checkifCanUpgrade } from "../assets/utils";
    
    export let name,description,pets,onUpgrade,i

    let plrData
    let price 
    $: buyQuantity = plrData.buyQuantity
    $: level = plrData.upgradeLevels[i]
    playerData.subscribe(data => {plrData=data; price = checkifCanUpgrade(i,buyQuantity).totalPrice})
</script>

<div class="flex w-4/6 border-4 border-black font-bold mb-5 md:w-1/2 bg-white" title="{description}">
    <h1 class="text-2xl border-r-4 border-black text-center py-[5%] w-2/6 break-words">{level}</h1>
    <div class="flex flex-col justify-between w-full">
        <h1 class="text-center text-2xl py-2">{name}</h1>
        <button class="border-2 border-black {price>pets ? ("bg-red-600") : ("bg-green-600")} h-full border-l-0" on:click={onUpgrade(i)}>Price: {price} Upgrade {buyQuantity}</button>
    </div>
</div>