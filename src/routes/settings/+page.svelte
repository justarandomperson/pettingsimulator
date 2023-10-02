<script>
    import { get } from 'svelte/store'
    import playerData from '../../assets/playerData'

    let plrData
    playerData.subscribe(data => plrData = data)
    
    const returnToDefault = () => {
        plrData.settings = {
            images: ["https://i1.sndcdn.com/avatars-Why2guyttlTy7IKw-P2j7wA-t240x240.jpg","https://media.tenor.com/Pi1F-uhfyRAAAAAC/floppa-petthefloppa.gif"]
        }
        playerData.set(plrData)
    }

    const eraseData = () => {
        if (window.prompt("are you SURE (type yes if sure)") != "yes") return 
        playerData.set({
        pets: 0,
        petPower: 1,
        pts: 0,
        upgradeLevels: [
            1,1,1,1,1,1
        ],
        settings: {
            images: ["https://i1.sndcdn.com/avatars-Why2guyttlTy7IKw-P2j7wA-t240x240.jpg","https://media.tenor.com/Pi1F-uhfyRAAAAAC/floppa-petthefloppa.gif"]
        }
        
    })}

    const newInput = (e, target, i) => {
        plrData.settings[target][i] = e.target.value
        playerData.set(plrData)
    }
</script>

<div>
    <a class="absolute top-0 font-bold p-2 border-2 bg-white border-black hover:bg-gray-400 w-20 text-center" href="/">Back </a>
    <div class="text-center font-bold text-xl my-5">Settings:</div>
    <div class="flex flex-col items-center">
        <div class="mb-5">
            <h1 class="font-bold">Normal Image/Gif:</h1>
            <input class="w-80" value="{plrData.settings.images[0]}" on:blur={(e) => newInput(e, "images",0)}/>
        </div>
        <div class="mb-5">
            <h1 class="font-bold">Petting Image/Gif:</h1>
            <input class="w-80" value="{plrData.settings.images[1]}" on:blur={(e) => newInput(e, "images",1)}/>
        </div>
        <button class="border-2 text-xl border-black w-40 text-white bg-red-600" on:click|preventDefault={eraseData}>ERASE DATA</button>
    </div>
    <button class="font-bold absolute ml-[50%] mb-5 translate-x-[-50%] bottom-0 border-2 text-xl border-black w-60 p-2 text-black bg-white hover:bg-gray-400" on:click={returnToDefault}>Return to default settings</button>
</div>