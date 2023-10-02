<script>
    import { get } from 'svelte/store'

    import Floppa from '../components/floppa.svelte'
    import PetsCounter from '../components/petsCounter.svelte';
    import UpgradeButtons from '../components/upgradeButtons.svelte';
    import playerData from '../assets/playerData.js'
    import upgradesData from '../assets/upgradesData.js'

    let plrData
    const upgData = get(upgradesData) 
    playerData.subscribe(data => plrData = data)
    
    let floppaSrc = plrData.settings.images[0]
    let clicked

    const onPet = () => {
        floppaSrc = plrData.settings.images[1]
        playerData.set({...plrData, pets:plrData.pets+plrData.petPower})
        clearTimeout(clicked)
        clicked = setTimeout(() => {
            floppaSrc = plrData.settings.images[0]
        }, 750)
    }

    const onUpgrade = (i) => {
        const upgradeData = upgData[i]
        if (plrData.pets >= upgradeData.price) {
            const newData = plrData
            newData.pets-=upgradeData.price
            newData.upgradeLevels[i]++
            newData[upgradeData.upgrade[0]]+=upgradeData.upgrade[1]
            playerData.set(newData)
        }
    }

    setInterval(() => {
        playerData.set({...plrData, pets:plrData.pets+plrData.pts/10})
    }, 100)

    
</script>

<div class="flex flex-col md:flex-row md:justify-between">
    <div class="w-full h-1/2 max-h-[50%] md:w-1/3 md:h-2/3">
        <PetsCounter pets={plrData.pets} pts={plrData.pts}/>
        <Floppa src={floppaSrc} onclick={onPet}/>
    </div>
    <UpgradeButtons pets={plrData.pets} buttons={upgData} levels={plrData.upgradeLevels} {onUpgrade}/>
</div>
<a class="absolute top-0 right-0 font-bold p-2 border-2 bg-white border-black h-10 hover:bg-gray-400 w-20 text-center" href="/settings">Settings </a>
