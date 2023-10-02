<script>
    export let pets
    export let pts
</script>

<div>
    <h1 class="text-center font-bold text-3xl p-5">{Math.round(pets*10)/10} Pets</h1>
    <h1 class="text-center font-bold text-xl p">{Math.round(pts*10)/10} Pets Per Second</h1>
</div>