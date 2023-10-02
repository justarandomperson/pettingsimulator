import { persisted } from 'svelte-local-storage-store'

const playerData = persisted('playerData',{
    pets: 0,
    petPower: 1,
    pts: 0,
    upgradeLevels: [
        1,1,1,1,1,1
    ],
    settings: {
        images: ["https://i1.sndcdn.com/avatars-Why2guyttlTy7IKw-P2j7wA-t240x240.jpg","https://media.tenor.com/Pi1F-uhfyRAAAAAC/floppa-petthefloppa.gif"]
    }
});


export default playerData