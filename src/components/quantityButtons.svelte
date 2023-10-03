<script>
    import { playerData } from "../assets/data/playerData";
    let plrData
    playerData.subscribe(data => plrData=data)
    $: buyQuantity = plrData.buyQuantity

    const selectQuantity = (event) => {
        const quantity = parseInt(event.target.textContent)
        const newData = plrData
        newData.buyQuantity = quantity
        playerData.set(newData)
    }
</script>

<h1 class="font-bold text-xl text-center mb-5">Buy Quantity:</h1>
<div class="flex justify-center">
    <button class="border border-black w-20 mr-5 {buyQuantity == 1 ? "bg-gray-500" : "bg-white"} font-bold" on:click={selectQuantity}
    >
    1
    </button>
    <button class="border border-black w-20 mr-5 {buyQuantity == 5 ? "bg-gray-500" : "bg-white"} font-bold" on:click={selectQuantity}
    >
    5
    </button>
    <button class="border border-black w-20 {buyQuantity == 10 ? "bg-gray-500" : "bg-white"} font-bold" on:click={selectQuantity}
    >
    10
    </button>
</div>