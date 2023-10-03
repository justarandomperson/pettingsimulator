import { readable } from 'svelte/store';

const exponentialRate = 1.1

const config = readable({
    ExponentialRate: exponentialRate,
    formulaFunction: (level, basePrice) => {
       // return Math.floor((level+1)**exponentialRate + basePrice)
       return Math.floor(basePrice*((level+1)**exponentialRate))
    }
});


export default config