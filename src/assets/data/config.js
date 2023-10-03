import { readable } from 'svelte/store';

const exponentialRate = 1.5

const config = readable({
    ExponentialRate: exponentialRate,
    formulaFunction: (level, basePrice) => {
        return Math.floor((level+1)**exponentialRate + basePrice)
    }
});


export default config