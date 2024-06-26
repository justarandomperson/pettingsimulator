import { readable } from 'svelte/store';

export const normalUpgradesData = readable([
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
        price: 50,
        upgrade: ["pts", 2]
    },
    {
        name: "intermediate petter",
        description: `hire an intermediate petter to pet for you! (+10 Pets Per Second)`,
        price: 150,
        upgrade: ["pts", 10]
    },
    {
        name: "expert petter",
        description: `hire an expert petter to pet for you! (+100 Pets Per Second)`,
        price: 2500,
        upgrade: ["pts", 100]
    },
    {
        name: "auto petter machine",
        description: `get an auto petter machine to pet for you! (+2500 Pets Per Second)`,
        price: 22500,
        upgrade: ["pts", 2500]
    }
]);

export const rebirthPrice = 1


