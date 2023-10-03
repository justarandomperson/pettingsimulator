import { readable } from 'svelte/store';

const exponentialRate = 2

const config = readable({
    ExponentialRate: exponentialRate,
    formulaFunction: (level, basePrice) => {
        return level**exponentialRate + basePrice
    }
});


export default config