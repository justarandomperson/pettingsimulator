<script>
    export let name
    export let description
    export let price
    export let pets
    export let level
    export let onUpgrade
    export let i
</script>

<div class="flex w-4/5 border-4 border-black font-bold mb-5 md:w-1/2 bg-white" title="{description}">
    <h1 class="text-2xl border-r-4 border-black text-center py-[5%] w-20 break-words">{level}</h1>
    <div class="flex flex-col justify-between w-full">
        <h1 class="text-center text-3xl py-2">{name}</h1>
        <button class="border-2 border-black {price>pets ? ("bg-red-600") : ("bg-green-600")} h-full border-l-0" on:click={onUpgrade(i)}>Price: {price} Upgrade</button>
    </div>
</div>