<script>
    import {Rebirth} from '../assets/utils.js'

    export let pets, price

    
</script>


<div class="flex flex-col justify-between w-4/5 border-4 border-black font-bold mb-5 md:w-1/2 bg-purple-800">
    <button class="text-center text-3xl py-2 border-b-2 border-black" on:click={Rebirth}>REBIRTH</button>
    <progress class="w-full" value="{pets}" max="{price}"></progress>
</div>
