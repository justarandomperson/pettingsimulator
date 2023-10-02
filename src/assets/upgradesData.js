import { readable } from 'svelte/store';

const upgradesData = readable([
    {
        name: "better petting skills",
        description: `get better at petting! (+1 pet power)`,
        price: 25,
        upgrade: ["petPower", 1],
    },
    {
        name: "beginner petter",
        description: `hire a beginner petter to pet for you! (+0.1 Pets Per Second)`,
        price: 10,
        upgrade: ["pts", 0.1]
    },
    {
        name: "amateur petter",
        description: `hire a amateur petter to pet for you! (+2 Pets Per Second)`,
        price: 100,
        upgrade: ["pts", 2]
    },
    {
        name: "intermediate petter",
        description: `hire an intermediate petter to pet for you! (+10 Pets Per Second)`,
        price: 500,
        upgrade: ["pts", 10]
    },
    {
        name: "expert petter",
        description: `hire an expert petter to pet for you! (+100 Pets Per Second)`,
        price: 5000,
        upgrade: ["pts", 100]
    },
    {
        name: "auto petter machine",
        description: `get a auto petter machine to pet for you! (+2500 Pets Per Second)`,
        price: 15000,
        upgrade: ["pts", 2500]
    }
]);


export default upgradesData